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
// Feed distribuiti dalle 32 fonti in src/data/feeds-health-italy-eu.csv
// Priority 1 = critico (caricato sempre), 2 = standard, 3 = supplementare
export const FEEDS: Record<string, Feed[]> = {
  // ── Ministero della Salute italiano ─────────────────────────────────────────
  // CSV IDs: 1, 18 (Priority 1) + feed Google News
  'ministero-salute': [
    { name: 'Ministero della Salute',      url: rss('https://www.salute.gov.it/portale/rss.jsp') },
    { name: 'MinSalute News Specifiche',   url: rss('https://www.salute.gov.it/portale/rss/news.xml') },
    { name: 'Salute Gov - Comunicati',     url: rss('https://news.google.com/rss/search?q=ministero+salute+italia+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // ── ISS - Istituto Superiore di Sanità ──────────────────────────────────────
  // CSV IDs: 2 (ISS Epicentro), 3 (ISS Notizie), 17 (Coronavirus) — tutti Priority 1
  'iss-epicentro': [
    { name: 'ISS Epicentro',               url: rss('https://www.epicentro.iss.it/rss') },
    { name: 'ISS Notizie',                 url: rss('https://www.iss.it/rss-notizie.xml') },
    { name: 'Epicentro Coronavirus',       url: rss('https://www.epicentro.iss.it/coronavirus/rss') },
    { name: 'ISS Google News',             url: rss('https://news.google.com/rss/search?q=istituto+superiore+sanita+ISS+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // ── AIFA - Agenzia Italiana del Farmaco ─────────────────────────────────────
  // CSV IDs: 5 (AIFA Feed Priority 1), 12 (FDA Drug Approvals Priority 2), 8 (EMA News Priority 1)
  'aifa-tracker': [
    { name: 'AIFA Feed',                   url: rss('https://www.aifa.gov.it/feed-rss') },
    { name: 'AIFA Notizie',                url: rss('https://www.aifa.gov.it/rss-notizie.xml') },
    { name: 'EMA News',                    url: rss('https://www.ema.europa.eu/en/rss-feeds') },
    { name: 'FDA Drug Approvals',          url: rss('https://www.fda.gov/about-fda/newsroom/rss') },
    { name: 'AIFA Comunicati',             url: rss('https://news.google.com/rss/search?q=AIFA+farmaco+approvazione+OR+ritiro+when:14d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // ── AGENAS - Ospedali e Pronto Soccorso ─────────────────────────────────────
  // CSV IDs: 4 (AGENAS RSS Priority 1), 6 (PNRR PS Priority 1), 19 (AGENAS PNRR Priority 2)
  // + regionali: 20 (Lombardia Priority 2), 21 (Lazio Priority 2)
  'agenas-ospedali': [
    { name: 'AGENAS RSS',                  url: rss('https://www.agenas.gov.it/rss.xml') },
    { name: 'PZN Pronto Soccorso',         url: rss('https://www.pnrrsalute.gov.it/portale/rss/dati.xml') },
    { name: 'AGENAS PNRR Salute',          url: rss('https://www.pnrrsalute.gov.it/rss') },
    { name: 'Regione Lombardia Salute',    url: rss('https://www.regione.lombardia.it/wps/portal/istituzionale/HP/rss-salute') },
    { name: 'Lazio Open Data Salute',      url: rss('https://dati.lazio.it/rss/salute.xml') },
    { name: 'Pronto Soccorso IT',          url: rss('https://news.google.com/rss/search?q=pronto+soccorso+ospedali+italia+when:3d&hl=it-IT&gl=IT&ceid=IT:it') },
    { name: 'SSN Notizie',                 url: rss('https://news.google.com/rss/search?q="servizio+sanitario+nazionale"+OR+SSN+when:7d&hl=it-IT&gl=IT&ceid=IT:it') },
  ],

  // ── EMA - European Medicines Agency ─────────────────────────────────────────
  // CSV IDs: 8 (EMA News Priority 1), 22 (EMA Clinical Trials Priority 2)
  'ema-europa': [
    { name: 'EMA News',                    url: rss('https://www.ema.europa.eu/en/rss.xml') },
    { name: 'EMA Clinical Trials',         url: rss('https://clinicaltrials.eu/rss') },
    { name: 'EMA Approvazioni',            url: rss('https://news.google.com/rss/search?q=EMA+"European+Medicines+Agency"+approval+OR+drug+when:14d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // ── ECDC - European Centre for Disease Prevention and Control ────────────────
  // CSV IDs: 7 (ECDC RSS Priority 1), 23 (ECDC Weekly Threats Priority 1)
  // + outbreaks globali: 9 (WHO DON Priority 1), 10 (ProMED Priority 1)
  'ecdc-sorveglianza': [
    { name: 'ECDC RSS',                    url: rss('https://www.ecdc.europa.eu/en/rss.xml') },
    { name: 'ECDC Weekly Threats',         url: rss('https://www.ecdc.europa.eu/en/rss-threats') },
    { name: 'WHO Disease Outbreaks',       url: rss('https://www.who.int/rss-feeds/don.xml') },
    { name: 'ProMED Mail',                 url: rss('https://promedmail.org/feed/') },
    { name: 'ECDC Sorveglianza',           url: rss('https://news.google.com/rss/search?q=ECDC+disease+surveillance+europe+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // ── Notizie live salute Italia ───────────────────────────────────────────────
  // CSV IDs: 24 (Sanitainformazione Priority 3), 25 (Pianeta Salute Priority 3)
  // + 26 (Humanitas Priority 3) + media tradizionali
  'live-news': [
    { name: 'Salute Italia - Google News', url: rss('https://news.google.com/rss/search?q=salute+sanita+italia+when:2d&hl=it-IT&gl=IT&ceid=IT:it') },
    { name: 'ANSA Salute',                 url: rss('https://www.ansa.it/sito/notizie/salute_e_benessere/salute_e_benessere_rss.xml') },
    { name: 'Repubblica Salute',           url: rss('https://www.repubblica.it/rss/salute/rss2.0.xml') },
    { name: 'Corriere Salute',             url: rss('https://www.corriere.it/rss/salute.xml') },
    { name: 'Sanitainformazione',          url: rss('https://www.sanitainformazione.it/rss') },
    { name: 'Humanitas News',              url: rss('https://www.humanitas.it/news/rss') },
  ],

  // ── Europa - salute pubblica & indicatori ────────────────────────────────────
  // CSV IDs: 31 (EU Core Health Indicators Priority 2), 32 (GLOBSEC HRI Priority 2)
  // + 29 (EIN Health Europe Priority 3) + 13 (ISTAT Priority 2)
  europe: [
    { name: 'EU Core Health Indicators',   url: rss('https://health.ec.europa.eu/rss/echi') },
    { name: 'GLOBSEC HRI Updates',         url: rss('https://globsec.org/rss/health') },
    { name: 'ISTAT Salute',                url: rss('https://www.istat.it/rss/salute.xml') },
    { name: 'EIN Health Europe',           url: rss('https://health.einnews.com/rss/europe') },
    { name: 'EU Health Policy',            url: rss('https://news.google.com/rss/search?q=EU+health+policy+OR+"public+health"+europe+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'WHO Europe',                  url: rss('https://news.google.com/rss/search?q=WHO+Europe+health+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // ── Malattie rare ────────────────────────────────────────────────────────────
  // CSV IDs: 14 (EURORDIS Priority 2), 15 (Orphanet IT Priority 2), 16 (Telethon Priority 2)
  // Pannello opzionale — non attivo di default, disponibile nei settings
  'rare-diseases': [
    { name: 'EURORDIS Rare Diseases',      url: rss('https://www.eurordis.org/rss.xml') },
    { name: 'Orphanet Italia',             url: rss('https://www.orpha.net/it/rss/news') },
    { name: 'Telethon News',               url: rss('https://www.telethon.it/rss/news') },
    { name: 'CDC FluView',                 url: rss('https://www.cdc.gov/flu/weekly/FluViewRSS.xml') },
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
  'rare-diseases': { name: 'Malattie Rare', enabled: false, priority: 3 },
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
  hospitals: true,
  whoOutbreaks: true,
  vaccinationCoverage: false,
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
  hospitals: true,
  whoOutbreaks: true,
  vaccinationCoverage: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'health',
  description: 'Health Monitor Italia & Europa - ISS, AIFA, AGENAS, EMA, ECDC',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
