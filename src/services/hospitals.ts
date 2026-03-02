/**
 * Hospitals layer — dati OpenStreetMap via Overpass API
 * Strutture sanitarie Italia ed Europa: ospedali, pronto soccorso, cliniche
 * Fallback: dati statici STATIC_HOSPITALS_IT garantiscono visibilità immediata
 */
import { createCircuitBreaker } from '@/utils';
import type { Hospital } from '@/types';
import { STATIC_HOSPITALS_IT, STATIC_HOSPITALS_EU } from '@/config/hospitals-static';

// Merge statico completo: IT + EU — usato come seed e come fallback
const STATIC_ALL = [...STATIC_HOSPITALS_IT, ...STATIC_HOSPITALS_EU];

// In dev usa il proxy locale (/api/overpass), in prod chiama Overpass direttamente
const OVERPASS_API = import.meta.env.DEV
  ? '/api/overpass/interpreter'
  : 'https://overpass-api.de/api/interpreter';

// Bounding box Italia + regioni limitrofe: SW(36, 6) → NE(47, 19)
// Più piccolo dell'EU per ridurre timeout e dimensione risposta
const ITALY_BBOX = '36,6,47,19';

const OVERPASS_QUERY = `
[out:json][timeout:30];
(
  node["amenity"="hospital"](${ITALY_BBOX});
  node["amenity"="clinic"]["emergency"="yes"](${ITALY_BBOX});
  node["amenity"="health_centre"]["emergency"="yes"](${ITALY_BBOX});
  way["amenity"="hospital"](${ITALY_BBOX});
  relation["amenity"="hospital"](${ITALY_BBOX});
);
out center 500;
`.trim();

interface OverpassElement {
  id: number;
  type: 'node' | 'way' | 'relation';
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: {
    name?: string;
    'name:en'?: string;
    'name:it'?: string;
    amenity?: string;
    emergency?: string;
    beds?: string;
    healthcare?: string;
    'addr:city'?: string;
    'addr:country'?: string;
    'is_in:country_code'?: string;
  };
}

interface OverpassResponse {
  elements: OverpassElement[];
}

const breaker = createCircuitBreaker<Hospital[]>({
  name: 'OSM Hospitals IT',  // suffisso IT = nuova cache (bbox ridotto a Italia)
  cacheTtlMs: 24 * 60 * 60 * 1000, // 24h — dati statici
  persistCache: true,
});

function parseElement(el: OverpassElement): Hospital | null {
  const lat = el.lat ?? el.center?.lat;
  const lon = el.lon ?? el.center?.lon;
  if (!lat || !lon) return null;

  const tags = el.tags ?? {};
  const name = tags['name:it'] ?? tags['name:en'] ?? tags.name ?? 'Ospedale';
  const beds = tags.beds ? parseInt(tags.beds, 10) : undefined;
  const emergency = tags.emergency === 'yes';
  const amenity = tags.amenity ?? 'hospital';
  const type: Hospital['type'] =
    amenity === 'hospital' ? 'hospital'
    : amenity === 'clinic' ? 'clinic'
    : amenity === 'health_centre' ? 'health_centre'
    : 'hospital';

  return {
    id: `osm-${el.type}-${el.id}`,
    name,
    lat,
    lon,
    country: tags['addr:country'] ?? tags['is_in:country_code'] ?? '',
    city: tags['addr:city'],
    beds: Number.isFinite(beds) ? beds : undefined,
    emergency,
    type,
  };
}

/**
 * Merges OSM results with static seed data (deduplicates by proximity).
 * OSM data always wins if within 500m of a static entry.
 */
function mergeWithStatic(osmHospitals: Hospital[]): Hospital[] {
  if (osmHospitals.length === 0) {
    console.log('[Hospitals] Overpass returned 0, using full static seed (IT + EU)');
    return STATIC_ALL;
  }

  // Build set of static entries not already covered by OSM (proximity 0.005° ≈ 500m)
  // OSM copre solo bbox Italia — gli ospedali EU dello static vengono sempre preservati
  const staticOnly = STATIC_ALL.filter(s =>
    !osmHospitals.some(o =>
      Math.abs(o.lat - s.lat) < 0.005 && Math.abs(o.lon - s.lon) < 0.005
    )
  );

  console.log(`[Hospitals] OSM: ${osmHospitals.length}, static supplement (IT+EU): ${staticOnly.length}`);
  return [...osmHospitals, ...staticOnly];
}

export async function fetchHospitals(): Promise<Hospital[]> {
  // Restituisce subito i dati statici come risultato immediato
  // mentre Overpass carica in background via il circuit breaker
  const result = await breaker.execute(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45_000); // 45s timeout

    try {
      const response = await fetch(OVERPASS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(OVERPASS_QUERY)}`,
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`Overpass HTTP ${response.status}`);

      const data: OverpassResponse = await response.json();

      const hospitals = data.elements
        .map(parseElement)
        .filter((h): h is Hospital => h !== null);

      console.log(`[Hospitals] Parsed ${hospitals.length} structures from OSM`);
      return mergeWithStatic(hospitals);
    } finally {
      clearTimeout(timeoutId);
    }
  }, STATIC_ALL); // <-- fallback = IT + EU static, non []

  return result;
}

export function getHospitalsStatus(): string {
  return breaker.getStatus();
}
