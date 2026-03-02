/**
 * WHO Disease Outbreaks layer
 * Focolai e allerte malattie infettive dal WHO Disease Outbreak News (DON)
 * Feed RSS pubblico, nessuna API key richiesta
 */
import { createCircuitBreaker } from '@/utils';
import type { WhoOutbreak } from '@/types';

// Coordinate capitali per geocodifica country → lat/lon
const COUNTRY_COORDS: Record<string, [number, number]> = {
  AF: [33.9391, 67.7100], AL: [41.1533, 20.1683], DZ: [28.0339, 1.6596],
  AO: [-11.2027, 17.8739], AR: [-38.4161, -63.6167], AM: [40.0691, 45.0382],
  AU: [-25.2744, 133.7751], AT: [47.5162, 14.5501], AZ: [40.1431, 47.5769],
  BD: [23.6850, 90.3563], BE: [50.5039, 4.4699], BJ: [9.3077, 2.3158],
  BO: [-16.2902, -63.5887], BF: [12.3640, -1.5275], BI: [-3.3731, 29.9189],
  CM: [3.8480, 11.5021], CA: [56.1304, -106.3468], CF: [6.6111, 20.9394],
  TD: [15.4542, 18.7322], CL: [-35.6751, -71.5430], CN: [35.8617, 104.1954],
  CO: [4.5709, -74.2973], CD: [-4.0383, 21.7587], CG: [-0.2280, 15.8277],
  CI: [7.5400, -5.5471], HR: [45.1000, 15.2000], CU: [21.5218, -77.7812],
  CZ: [49.8175, 15.4730], DK: [56.2639, 9.5018], DO: [18.7357, -70.1627],
  EC: [-1.8312, -78.1834], EG: [26.8206, 30.8025], SV: [13.7942, -88.8965],
  ET: [9.1450, 40.4897], FI: [61.9241, 25.7482], FR: [46.2276, 2.2137],
  GA: [-0.8037, 11.6094], GM: [13.4432, -15.3101], GE: [42.3154, 43.3569],
  GH: [7.9465, -1.0232], GR: [39.0742, 21.8243], GT: [15.7835, -90.2308],
  GN: [9.9456, -11.3247], GW: [11.8037, -15.1804], GY: [4.8604, -58.9302],
  HT: [18.9712, -72.2852], HN: [15.2000, -86.2419], HU: [47.1625, 19.5033],
  IN: [20.5937, 78.9629], ID: [-0.7893, 113.9213], IQ: [33.2232, 43.6793],
  IE: [53.1424, -7.6921], IL: [31.0461, 34.8516], IT: [41.8719, 12.5674],
  JM: [18.1096, -77.2975], JP: [36.2048, 138.2529], JO: [30.5852, 36.2384],
  KZ: [48.0196, 66.9237], KE: [-0.0236, 37.9062], KW: [29.3117, 47.4818],
  KG: [41.2044, 74.7661], LA: [19.8563, 102.4955], LB: [33.8547, 35.8623],
  LR: [6.4281, -9.4295], LY: [26.3351, 17.2283], MG: [-18.7669, 46.8691],
  MW: [-13.2543, 34.3015], MY: [4.2105, 101.9758], ML: [17.5707, -3.9962],
  MR: [21.0079, -10.9408], MX: [23.6345, -102.5528], MD: [47.4116, 28.3699],
  MN: [46.8625, 103.8467], MA: [31.7917, -7.0926], MZ: [-18.6657, 35.5296],
  MM: [21.9162, 95.9560], NA: [-22.9576, 18.4904], NP: [28.3949, 84.1240],
  NL: [52.1326, 5.2913], NZ: [-40.9006, 174.8860], NI: [12.8654, -85.2072],
  NE: [17.6078, 8.0817], NG: [9.0820, 8.6753], NO: [60.4720, 8.4689],
  PK: [30.3753, 69.3451], PA: [8.5380, -80.7821], PG: [-6.3149, 143.9555],
  PY: [-23.4425, -58.4438], PE: [-9.1900, -75.0152], PH: [12.8797, 121.7740],
  PL: [51.9194, 19.1451], PT: [39.3999, -8.2245], PR: [18.2208, -66.5901],
  QA: [25.3548, 51.1839], RO: [45.9432, 24.9668], RU: [61.5240, 105.3188],
  RW: [-1.9403, 29.8739], SA: [23.8859, 45.0792], SN: [14.4974, -14.4524],
  RS: [44.0165, 21.0059], SL: [8.4606, -11.7799], SO: [5.1521, 46.1996],
  ZA: [-30.5595, 22.9375], SS: [6.8770, 31.3070], ES: [40.4637, -3.7492],
  SD: [12.8628, 30.2176], SR: [3.9193, -56.0278], SE: [60.1282, 18.6435],
  SY: [34.8021, 38.9968], TW: [23.5937, 121.0254], TJ: [38.8610, 71.2761],
  TZ: [-6.3690, 34.8888], TH: [15.8700, 100.9925], TG: [8.6195, 0.8248],
  TN: [33.8869, 9.5375], TR: [38.9637, 35.2433], TM: [38.9697, 59.5563],
  UG: [1.3733, 32.2903], UA: [48.3794, 31.1656], AE: [23.4241, 53.8478],
  GB: [55.3781, -3.4360], US: [37.0902, -95.7129], UY: [-32.5228, -55.7658],
  UZ: [41.3775, 64.5853], VE: [6.4238, -66.5897], VN: [14.0583, 108.2772],
  YE: [15.5527, 48.5164], ZM: [-13.1339, 27.8493], ZW: [-19.0154, 29.1549],
  // Extra EU (not already listed above)
  BG: [42.7339, 25.4858], CY: [35.1264, 33.4299],
  EE: [58.5953, 25.0136], LV: [56.8796, 24.6032], LT: [55.1694, 23.8813],
  LU: [49.8153, 6.1296], MT: [35.9375, 14.3754], SK: [48.6690, 19.6990],
  SI: [46.1512, 14.9955], CH: [46.8182, 8.2275],
};

// WHO Disease Outbreak News — feed specifico per focolai (non generico)
const WHO_RSS = '/api/rss-proxy?url=https%3A%2F%2Fwww.who.int%2Ffeeds%2Fentity%2Fcsr%2Fdon%2Fen%2Frss.xml';

const breaker = createCircuitBreaker<WhoOutbreak[]>({
  name: 'WHO DON Outbreaks',  // suffisso DON = nuova cache (feed DON specifico)
  cacheTtlMs: 60 * 60 * 1000, // 1h
  persistCache: true,
});

// Mappa codice ISO2 → nome paese in inglese per match testo
// (deve stare prima di extractCountryCode per evitare TDZ)
const COUNTRY_NAMES: Record<string, string> = {
  AF: 'Afghanistan', AL: 'Albania', DZ: 'Algeria', AO: 'Angola',
  AR: 'Argentina', BD: 'Bangladesh', BE: 'Belgium', BJ: 'Benin',
  BO: 'Bolivia', BF: 'Burkina Faso', BI: 'Burundi', CM: 'Cameroon',
  CA: 'Canada', CF: 'Central African Republic', TD: 'Chad', CL: 'Chile',
  CN: 'China', CO: 'Colombia', CD: 'Democratic Republic of the Congo',
  CG: 'Congo', CI: "Côte d'Ivoire", CU: 'Cuba', DO: 'Dominican Republic',
  EC: 'Ecuador', EG: 'Egypt', SV: 'El Salvador', ET: 'Ethiopia',
  FR: 'France', GA: 'Gabon', GM: 'Gambia', GH: 'Ghana', GR: 'Greece',
  GT: 'Guatemala', GN: 'Guinea', GW: 'Guinea-Bissau', HT: 'Haiti',
  HN: 'Honduras', IN: 'India', ID: 'Indonesia', IQ: 'Iraq', IL: 'Israel',
  IT: 'Italy', JP: 'Japan', JO: 'Jordan', KZ: 'Kazakhstan', KE: 'Kenya',
  KW: 'Kuwait', KG: 'Kyrgyzstan', LA: 'Laos', LB: 'Lebanon', LR: 'Liberia',
  LY: 'Libya', MG: 'Madagascar', MW: 'Malawi', MY: 'Malaysia', ML: 'Mali',
  MR: 'Mauritania', MX: 'Mexico', MD: 'Moldova', MN: 'Mongolia',
  MA: 'Morocco', MZ: 'Mozambique', MM: 'Myanmar', NA: 'Namibia',
  NP: 'Nepal', NL: 'Netherlands', NI: 'Nicaragua', NE: 'Niger',
  NG: 'Nigeria', PK: 'Pakistan', PA: 'Panama', PG: 'Papua New Guinea',
  PY: 'Paraguay', PE: 'Peru', PH: 'Philippines', PL: 'Poland',
  PT: 'Portugal', QA: 'Qatar', RO: 'Romania', RU: 'Russia', RW: 'Rwanda',
  SA: 'Saudi Arabia', SN: 'Senegal', SL: 'Sierra Leone', SO: 'Somalia',
  ZA: 'South Africa', SS: 'South Sudan', ES: 'Spain', SD: 'Sudan',
  SR: 'Suriname', SE: 'Sweden', SY: 'Syria', TJ: 'Tajikistan',
  TZ: 'Tanzania', TH: 'Thailand', TG: 'Togo', TN: 'Tunisia',
  TR: 'Turkey', TM: 'Turkmenistan', UG: 'Uganda', UA: 'Ukraine',
  AE: 'United Arab Emirates', GB: 'United Kingdom', US: 'United States',
  UY: 'Uruguay', UZ: 'Uzbekistan', VE: 'Venezuela', VN: 'Vietnam',
  YE: 'Yemen', ZM: 'Zambia', ZW: 'Zimbabwe',
};

function extractCountryCode(text: string): string {
  // DON titles are like "Disease Name – Country Name" — try dash separator first
  const afterDash = text.split(/[–—-]/).slice(1).join(' ');
  if (afterDash) {
    for (const [code, name] of Object.entries(COUNTRY_NAMES)) {
      if (afterDash.toLowerCase().includes(name.toLowerCase())) return code;
    }
  }
  // Fallback: search full text
  for (const [code, name] of Object.entries(COUNTRY_NAMES)) {
    if (text.toLowerCase().includes(name.toLowerCase())) return code;
  }
  return '';
}

function extractDiseaseName(title: string): string {
  // DON titles: "Ebola virus disease – Democratic Republic of the Congo"
  const parts = title.split(/[–—]/);
  return (parts[0] ?? title).trim().slice(0, 60);
}

function parseWhoRss(xml: string): WhoOutbreak[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items = Array.from(doc.querySelectorAll('item'));
  const outbreaks: WhoOutbreak[] = [];

  for (const item of items) {
    const title = item.querySelector('title')?.textContent ?? '';
    const description = item.querySelector('description')?.textContent ?? '';
    const link = item.querySelector('link')?.textContent ?? '';
    const pubDate = item.querySelector('pubDate')?.textContent ?? '';

    // DON feed è già tutto outbreak, non serve filtrare per keyword
    const countryCode = extractCountryCode(`${title} ${description}`);
    const coords = COUNTRY_COORDS[countryCode];
    if (!coords) {
      console.debug('[WHO Outbreaks] No country match for:', title);
      continue;
    }

    // Stima status dall'age
    const date = pubDate ? new Date(pubDate) : new Date();
    const ageDays = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);
    const status: WhoOutbreak['status'] = ageDays < 30 ? 'active' : ageDays < 90 ? 'monitoring' : 'contained';

    outbreaks.push({
      id: `who-${link.slice(-40)}`,
      disease: extractDiseaseName(title),
      country: COUNTRY_NAMES[countryCode] ?? countryCode,
      countryCode,
      lat: coords[0],
      lon: coords[1],
      date,
      status,
      sourceUrl: link,
      headline: title.slice(0, 120),
    });
  }

  return outbreaks;
}

export async function fetchWhoOutbreaks(): Promise<WhoOutbreak[]> {
  return breaker.execute(async () => {
    const response = await fetch(WHO_RSS);
    if (!response.ok) throw new Error(`WHO RSS HTTP ${response.status}`);
    const text = await response.text();
    const outbreaks = parseWhoRss(text);
    console.log(`[WHO Outbreaks] Parsed ${outbreaks.length} outbreak items`);
    return outbreaks;
  }, []);
}

export function getWhoOutbreaksStatus(): string {
  return breaker.getStatus();
}
