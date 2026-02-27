// 32 RSS feeds per Health Monitor Italia/Europa
// Generato da feeds-health-italy-eu.csv
// Priority: 1=Nazionale/EU critico, 2=Regionale/Internazionale, 3=Supplementare

export interface HealthFeed {
  id: string;
  name: string;
  url: string;
  category: string;
  country: string;
  priority: 1 | 2 | 3;
}

export const ITALY_EUROPE_HEALTH_FEEDS: HealthFeed[] = [
  // Priority 1 — Fonti nazionali e EU critiche
  { id: 'ministero-salute-it',    name: 'Ministero Salute IT',       url: 'https://www.salute.gov.it/portale/rss.jsp',                                                       category: 'public-health', country: 'IT',         priority: 1 },
  { id: 'iss-epicentro',          name: 'ISS Epicentro',             url: 'https://www.epicentro.iss.it/rss',                                                                category: 'surveillance',  country: 'IT',         priority: 1 },
  { id: 'iss-notizie',            name: 'ISS Notizie',               url: 'https://www.iss.it/rss-notizie.xml',                                                              category: 'news',          country: 'IT',         priority: 1 },
  { id: 'agenas-rss',             name: 'AGENAS RSS',                url: 'https://www.agenas.gov.it/rss.xml',                                                               category: 'hospitals',     country: 'IT',         priority: 1 },
  { id: 'aifa-feed',              name: 'AIFA Feed',                 url: 'https://www.aifa.gov.it/feed-rss',                                                                category: 'pharma',        country: 'IT',         priority: 1 },
  { id: 'pnrr-pronto-soccorso',  name: 'PZN Pronto Soccorso',       url: 'https://www.pnrrsalute.gov.it/portale/rss/dati.xml',                                              category: 'ps',            country: 'IT',         priority: 1 },
  { id: 'ecdc-rss',               name: 'ECDC RSS',                  url: 'https://www.ecdc.europa.eu/en/rss.xml',                                                           category: 'surveillance',  country: 'EU',         priority: 1 },
  { id: 'ema-news',               name: 'EMA News',                  url: 'https://www.ema.europa.eu/en/rss-feeds',                                                          category: 'pharma',        country: 'EU',         priority: 1 },
  { id: 'who-disease-outbreaks',  name: 'WHO Disease Outbreaks',     url: 'https://www.who.int/rss-feeds/don.xml',                                                           category: 'outbreaks',     country: 'Global',     priority: 1 },
  { id: 'promed-mail',            name: 'ProMED Mail',               url: 'https://promedmail.org/feed/',                                                                    category: 'outbreaks',     country: 'Global',     priority: 1 },
  { id: 'epicentro-coronavirus',  name: 'Epicentro Coronavirus',     url: 'https://www.epicentro.iss.it/coronavirus/rss',                                                    category: 'covid',         country: 'IT',         priority: 1 },
  { id: 'minsalute-news',         name: 'MinSalute News Specifiche', url: 'https://www.salute.gov.it/portale/rss/news.xml',                                                  category: 'news',          country: 'IT',         priority: 1 },
  { id: 'ecdc-weekly-threats',    name: 'ECDC Weekly Threats',       url: 'https://www.ecdc.europa.eu/en/rss-threats',                                                       category: 'threats',       country: 'EU',         priority: 1 },

  // Priority 2 — Fonti regionali e internazionali
  { id: 'cdc-fluview',            name: 'CDC FluView',               url: 'https://www.cdc.gov/flu/weekly/FluViewRSS.xml',                                                   category: 'influenza',     country: 'US',         priority: 2 },
  { id: 'fda-drug-approvals',     name: 'FDA Drug Approvals',        url: 'https://www.fda.gov/about-fda/newsroom/rss',                                                      category: 'pharma',        country: 'US',         priority: 2 },
  { id: 'istat-salute',           name: 'ISTAT Salute',              url: 'https://www.istat.it/rss/salute.xml',                                                             category: 'stats',         country: 'IT',         priority: 2 },
  { id: 'eurordis-rare',          name: 'EURORDIS Rare Diseases',    url: 'https://www.eurordis.org/rss.xml',                                                                category: 'rare-diseases', country: 'EU',         priority: 2 },
  { id: 'orphanet-italia',        name: 'Orphanet Italia',           url: 'https://www.orpha.net/it/rss/news',                                                               category: 'rare-diseases', country: 'IT',         priority: 2 },
  { id: 'telethon-news',          name: 'Telethon News',             url: 'https://www.telethon.it/rss/news',                                                                category: 'research',      country: 'IT',         priority: 2 },
  { id: 'agenas-pnrr',            name: 'AGENAS Pnrr Salute',        url: 'https://www.pnrrsalute.gov.it/rss',                                                               category: 'funding',       country: 'IT',         priority: 2 },
  { id: 'regione-lombardia',      name: 'Regione Lombardia Salute',  url: 'https://www.regione.lombardia.it/wps/portal/istituzionale/HP/rss-salute',                         category: 'regional',      country: 'IT-Lombardia', priority: 2 },
  { id: 'lazio-open-data',        name: 'Lazio Open Data Salute',    url: 'https://dati.lazio.it/rss/salute.xml',                                                            category: 'regional',      country: 'IT-Lazio',   priority: 2 },
  { id: 'ema-clinical-trials',    name: 'EMA Clinical Trials',       url: 'https://clinicaltrials.eu/rss',                                                                   category: 'trials',        country: 'EU',         priority: 2 },
  { id: 'eu-core-health',         name: 'EU Core Health Indicators', url: 'https://health.ec.europa.eu/rss/echi',                                                            category: 'indicators',    country: 'EU',         priority: 2 },
  { id: 'globsec-hri',            name: 'GLOBSEC HRI Updates',       url: 'https://globsec.org/rss/health',                                                                  category: 'readiness',     country: 'EU',         priority: 2 },

  // Priority 3 — Fonti supplementari
  { id: 'sanitainformazione',     name: 'Sanitainformazione',        url: 'https://www.sanitainformazione.it/rss',                                                           category: 'news',          country: 'IT',         priority: 3 },
  { id: 'pianeta-salute',         name: 'Pianeta Salute',            url: 'https://pianetasalute.online/rss',                                                                category: 'news',          country: 'IT',         priority: 3 },
  { id: 'humanitas-news',         name: 'Humanitas News',            url: 'https://www.humanitas.it/news/rss',                                                               category: 'hospital',      country: 'IT',         priority: 3 },
  { id: 'borsaitaliana-health',   name: 'Borsaitaliana Health Index',url: 'https://www.borsaitaliana.it/rss/health',                                                        category: 'market',        country: 'IT',         priority: 3 },
  { id: 'investing-healthcare',   name: 'Investing Healthcare',      url: 'https://it.investing.com/rss/healthcare_sector.rss',                                              category: 'market',        country: 'IT',         priority: 3 },
  { id: 'ein-health-europe',      name: 'EIN Health Europe',         url: 'https://health.einnews.com/rss/europe',                                                           category: 'news',          country: 'EU',         priority: 3 },
  { id: 'health-informatics',     name: 'Health Informatics Feeds',  url: 'https://rss.feedspot.com/health_informatics_rss_feeds.xml',                                       category: 'tech',          country: 'Global',     priority: 3 },
];

// Helper: filtra per priorità
export const getFeedsByPriority = (maxPriority: 1 | 2 | 3): HealthFeed[] =>
  ITALY_EUROPE_HEALTH_FEEDS.filter(f => f.priority <= maxPriority);

// Helper: filtra per paese
export const getFeedsByCountry = (country: string): HealthFeed[] =>
  ITALY_EUROPE_HEALTH_FEEDS.filter(f => f.country === country || f.country.startsWith(country));

// Helper: filtra per categoria
export const getFeedsByCategory = (category: string): HealthFeed[] =>
  ITALY_EUROPE_HEALTH_FEEDS.filter(f => f.category === category);
