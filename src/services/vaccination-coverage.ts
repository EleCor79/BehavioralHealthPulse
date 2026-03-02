/**
 * Vaccination Coverage layer
 * Copertura vaccinale per paese EU da ECDC
 * Dati JSON pubblici, nessuna API key richiesta
 */
import { createCircuitBreaker } from '@/utils';
import type { VaccinationCoverage } from '@/types';

// ECDC vaccination data endpoint (public JSON)
const ECDC_URL = 'https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/json/data.json';

// Coordinate centroidi paesi EU/EEA
const EU_COUNTRY_COORDS: Record<string, { lat: number; lon: number; name: string }> = {
  AT: { lat: 47.5162, lon: 14.5501, name: 'Austria' },
  BE: { lat: 50.5039, lon: 4.4699, name: 'Belgio' },
  BG: { lat: 42.7339, lon: 25.4858, name: 'Bulgaria' },
  CY: { lat: 35.1264, lon: 33.4299, name: 'Cipro' },
  CZ: { lat: 49.8175, lon: 15.4730, name: 'Repubblica Ceca' },
  DE: { lat: 51.1657, lon: 10.4515, name: 'Germania' },
  DK: { lat: 56.2639, lon: 9.5018, name: 'Danimarca' },
  EE: { lat: 58.5953, lon: 25.0136, name: 'Estonia' },
  EL: { lat: 39.0742, lon: 21.8243, name: 'Grecia' }, // ECDC usa EL per Grecia
  ES: { lat: 40.4637, lon: -3.7492, name: 'Spagna' },
  FI: { lat: 61.9241, lon: 25.7482, name: 'Finlandia' },
  FR: { lat: 46.2276, lon: 2.2137, name: 'Francia' },
  HR: { lat: 45.1000, lon: 15.2000, name: 'Croazia' },
  HU: { lat: 47.1625, lon: 19.5033, name: 'Ungheria' },
  IE: { lat: 53.1424, lon: -7.6921, name: 'Irlanda' },
  IS: { lat: 64.9631, lon: -19.0208, name: 'Islanda' },
  IT: { lat: 41.8719, lon: 12.5674, name: 'Italia' },
  LI: { lat: 47.1660, lon: 9.5554, name: 'Liechtenstein' },
  LT: { lat: 55.1694, lon: 23.8813, name: 'Lituania' },
  LU: { lat: 49.8153, lon: 6.1296, name: 'Lussemburgo' },
  LV: { lat: 56.8796, lon: 24.6032, name: 'Lettonia' },
  MT: { lat: 35.9375, lon: 14.3754, name: 'Malta' },
  NL: { lat: 52.1326, lon: 5.2913, name: 'Paesi Bassi' },
  NO: { lat: 60.4720, lon: 8.4689, name: 'Norvegia' },
  PL: { lat: 51.9194, lon: 19.1451, name: 'Polonia' },
  PT: { lat: 39.3999, lon: -8.2245, name: 'Portogallo' },
  RO: { lat: 45.9432, lon: 24.9668, name: 'Romania' },
  SE: { lat: 60.1282, lon: 18.6435, name: 'Svezia' },
  SI: { lat: 46.1512, lon: 14.9955, name: 'Slovenia' },
  SK: { lat: 48.6690, lon: 19.6990, name: 'Slovacchia' },
};

interface EcdcRecord {
  ReportingCountry: string;
  Vaccine: string;
  Population: string;
  NumberDosesReceived: string;
  NumberDosesExported: string;
  FirstDoseReceived: string;
  FirstDoseRefused: string;
  SecondDose: string;
  DoseAdditional1: string;
  DoseAdditional2: string;
  UnknownDose: string;
  TargetGroup: string;
  YearWeekISO: string;
  Denominator: string;
  FirstDoseReceivedPercent: string;
  SecondDoseReceivedPercent: string;
  DoseAdditional1Percent: string;
  DoseAdditional2Percent: string;
  Region: string;
}

interface EcdcResponse {
  records?: EcdcRecord[];
}

const breaker = createCircuitBreaker<VaccinationCoverage[]>({
  name: 'ECDC Vaccination',
  cacheTtlMs: 7 * 24 * 60 * 60 * 1000, // 7 giorni — dati settimanali
  persistCache: true,
});

function aggregateByCountry(records: EcdcRecord[]): VaccinationCoverage[] {
  // Prendi solo TOTAL target group, seconda dose o dose addizionale più recente
  const byCountry = new Map<string, { coverage: number; vaccine: string; week: string }>();

  for (const rec of records) {
    if (rec.TargetGroup !== 'ALL' && rec.TargetGroup !== 'Age18+') continue;
    if (rec.Region !== 'ALL') continue;

    const code = rec.ReportingCountry;
    const coverage = parseFloat(rec.SecondDoseReceivedPercent) || parseFloat(rec.FirstDoseReceivedPercent) || 0;
    const week = rec.YearWeekISO;

    const existing = byCountry.get(code);
    if (!existing || week > existing.week) {
      byCountry.set(code, { coverage, vaccine: rec.Vaccine, week });
    }
  }

  const result: VaccinationCoverage[] = [];
  for (const [code, data] of byCountry) {
    const geo = EU_COUNTRY_COORDS[code];
    if (!geo) continue;
    result.push({
      countryCode: code,
      country: geo.name,
      lat: geo.lat,
      lon: geo.lon,
      coverage: Math.min(100, data.coverage),
      vaccine: data.vaccine,
      year: parseInt(data.week.slice(0, 4), 10) || new Date().getFullYear(),
    });
  }

  return result;
}

export async function fetchVaccinationCoverage(): Promise<VaccinationCoverage[]> {
  return breaker.execute(async () => {
    const response = await fetch(ECDC_URL, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`ECDC HTTP ${response.status}`);

    const data: EcdcResponse = await response.json();
    const records = data.records ?? [];
    const coverage = aggregateByCountry(records);
    console.log(`[Vaccination] Aggregated ${coverage.length} country records from ECDC`);
    return coverage;
  }, []);
}

export function getVaccinationStatus(): string {
  return breaker.getStatus();
}
