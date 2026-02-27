// Health Monitor Italia/Europa variant
import type { Feed } from '@/types';
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Re-export shared feed utilities
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// Helper to create RSS proxy URL
const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

// Health-specific FEEDS configuration
export const FEEDS: Record<string, Feed[]> = {
  // Ministero della Salute italiano
  'ministero-salute': [
    { name: 'Ministero della Salute', url: rss('https://www.salute.gov.it/portale/rss.jsp') },
    { name: 'Salute Gov - Comunicati', url: rss('https://news.google.com/rss/search?q=ministero+salute+italia+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // ISS - Istituto Superiore di Sanità
  'iss-epicentro': [
    { name: 'ISS Epicentro', url: rss('https://www.epicentro.iss.it/coronavirus/rss') },
    { name: 'ISS Notizie', url: rss('https://news.google.com/rss/search?q=istituto+superiore+sanita+ISS+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // AIFA - Agenzia Italiana del Farmaco
  'aifa-tracker': [
    { name: 'AIFA Notizie', url: rss('https://www.aifa.gov.it/rss-notizie.xml') },
    { name: 'AIFA Comunicati', url: rss('https://news.google.com/rss/search?q=AIFA+farmaco+approvazione+OR+ritiro+when:14d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // AGENAS - Ospedali e Pronto Soccorso
  'agenas-ospedali': [
    { name: 'AGENAS PNRR Salute', url: rss('https://www.pnrrsalute.gov.it/portale/rss/dati.xml') },
    { name: 'Pronto Soccorso IT', url: rss('https://news.google.com/rss/search?q=pronto+soccorso+ospedali+italia+when:3d&hl=it-IT&gl=IT&ceid=IT:it') },
    { name: 'SSN Notizie', url: rss('https://news.google.com/rss/search?q="servizio+sanitario+nazionale"+OR+SSN+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // EMA - European Medicines Agency
  'ema-europa': [
    { name: 'EMA News', url: rss('https://www.ema.europa.eu/en/rss.xml') },
    { name: 'EMA Approvazioni', url: rss('https://news.google.com/rss/search?q=EMA+"European+Medicines+Agency"+approval+OR+drug+when:14d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // ECDC - European Centre for Disease Prevention and Control
  'ecdc-sorveglianza': [
    { name: 'ECDC Threats', url: rss('https://www.ecdc.europa.eu/en/rss.xml') },
    { name: 'ECDC Sorveglianza', url: rss('https://news.google.com/rss/search?q=ECDC+disease+surveillance+europe+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Notizie generali salute Italia
  'live-news': [
    { name: 'Salute Italia - Google News', url: rss('https://news.google.com/rss/search?q=salute+sanita+italia+when:2d&hl=it-IT&gl=IT&ceid=IT:it') },
    { name: 'ANSA Salute', url: rss('https://www.ansa.it/sito/notizie/salute_e_benessere/salute_e_benessere_rss.xml') },
    { name: 'Repubblica Salute', url: rss('https://www.repubblica.it/rss/salute/rss2.0.xml') },
    { name: 'Corriere Salute', url: rss('https://www.corriere.it/rss/salute.xml') },
  ],

  // Europa - salute pubblica
  europe: [
    { name: 'EU Health Policy', url: rss('https://news.google.com/rss/search?q=EU+health+policy+OR+"public+health"+europe+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'WHO Europe', url: rss('https://news.google.com/rss/search?q=WHO+Europe+health+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for health variant
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Mappa Sanità Italia', enabled: true, priority: 1 },
  'live-news': { name: 'Notizie Salute', enabled: true, priority: 1 },
  'ministero-salute': { name: 'Ministero della Salute', enabled: true, priority: 1 },
  'iss-epicentro': { name: 'ISS Epicentro', enabled: true, priority: 1 },
  'aifa-tracker': { name: 'AIFA - Farmaci & Autorizzazioni', enabled: true, priority: 1 },
  'agenas-ospedali': { name: 'AGENAS - Pronto Soccorso', enabled: true, priority: 1 },
  'ema-europa': { name: 'EMA - Agenzia Europea Medicinali', enabled: true, priority: 2 },
  'ecdc-sorveglianza': { name: 'ECDC - Sorveglianza EU', enabled: true, priority: 2 },
  europe: { name: 'Europa', enabled: true, priority: 2 },
  monitors: { name: 'I Miei Monitor', enabled: true, priority: 2 },
};

// Health-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: false,
  waterways: false,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: true,
  ucdpEvents: false,
  displacement: true,
  climate: true,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
};

export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: false,
  waterways: false,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'health',
  description: 'Health Monitor Italia & Europa - ISS, AIFA, AGENAS, EMA, ECDC',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
