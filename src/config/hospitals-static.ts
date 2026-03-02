/**
 * Ospedali italiani — dati statici di seed
 * Principali strutture ospedaliere IT: ospedali universitari, policlinici, DEA I e II livello
 * Questi dati garantiscono la visibilità del layer anche se Overpass è lento
 * Fonte: Ministero della Salute / AGENAS / OpenStreetMap
 */
import type { Hospital } from '@/types';

export const STATIC_HOSPITALS_IT: Hospital[] = [
  // === NORD OVEST ===
  { id: 's-ospedale-niguarda', name: 'Ospedale Niguarda', lat: 45.5133, lon: 9.1886, country: 'IT', city: 'Milano', beds: 1200, emergency: true, type: 'hospital' },
  { id: 's-policlinico-mi', name: 'Policlinico di Milano', lat: 45.4617, lon: 9.1965, country: 'IT', city: 'Milano', beds: 900, emergency: true, type: 'university' },
  { id: 's-irccs-ieo', name: 'IEO – Istituto Europeo di Oncologia', lat: 45.4510, lon: 9.1762, country: 'IT', city: 'Milano', beds: 300, emergency: false, type: 'hospital' },
  { id: 's-humanitas-rozzano', name: 'Humanitas Research Hospital', lat: 45.3781, lon: 9.2664, country: 'IT', city: 'Rozzano', beds: 730, emergency: true, type: 'university' },
  { id: 's-ospedale-san-raffaele', name: 'Ospedale San Raffaele', lat: 45.5053, lon: 9.2669, country: 'IT', city: 'Milano', beds: 1350, emergency: true, type: 'university' },
  { id: 's-cto-torino', name: 'CTO – Centro Traumatologico Ortopedico', lat: 45.0564, lon: 7.6600, country: 'IT', city: 'Torino', beds: 450, emergency: true, type: 'hospital' },
  { id: 's-molinette-torino', name: 'Ospedale Molinette AOU Città della Salute', lat: 45.0529, lon: 7.6639, country: 'IT', city: 'Torino', beds: 1300, emergency: true, type: 'university' },
  { id: 's-san-martino-ge', name: 'IRCCS Ospedale Policlinico San Martino', lat: 44.4047, lon: 8.9625, country: 'IT', city: 'Genova', beds: 1200, emergency: true, type: 'university' },
  { id: 's-civile-brescia', name: 'Ospedale Civile di Brescia – ASST Spedali Civili', lat: 45.5355, lon: 10.2060, country: 'IT', city: 'Brescia', beds: 1100, emergency: true, type: 'hospital' },
  { id: 's-circolo-varese', name: 'Ospedale di Circolo di Varese', lat: 45.8270, lon: 8.8145, country: 'IT', city: 'Varese', beds: 700, emergency: true, type: 'hospital' },
  { id: 's-san-gerardo-monza', name: 'ASST Monza – Ospedale San Gerardo', lat: 45.5861, lon: 9.2756, country: 'IT', city: 'Monza', beds: 900, emergency: true, type: 'university' },
  { id: 's-policlinico-pavia', name: 'Policlinico San Matteo IRCCS Pavia', lat: 45.1847, lon: 9.1592, country: 'IT', city: 'Pavia', beds: 1000, emergency: true, type: 'university' },
  { id: 's-borgomanero', name: 'Ospedale SS. Trinità Borgomanero', lat: 45.6989, lon: 8.4640, country: 'IT', city: 'Borgomanero', beds: 280, emergency: true, type: 'hospital' },

  // === NORD EST ===
  { id: 's-policlinico-verona', name: 'Azienda Ospedaliera Universitaria Verona', lat: 45.4350, lon: 10.9888, country: 'IT', city: 'Verona', beds: 1400, emergency: true, type: 'university' },
  { id: 's-civile-venezia', name: 'Ospedale Civile SS. Giovanni e Paolo', lat: 45.4400, lon: 12.3466, country: 'IT', city: 'Venezia', beds: 700, emergency: true, type: 'hospital' },
  { id: 's-borgo-trento-vr', name: 'Ospedale Borgo Trento', lat: 45.4516, lon: 10.9783, country: 'IT', city: 'Verona', beds: 800, emergency: true, type: 'hospital' },
  { id: 's-policlinico-pd', name: 'Azienda Ospedaliera di Padova', lat: 45.3974, lon: 11.8836, country: 'IT', city: 'Padova', beds: 1100, emergency: true, type: 'university' },
  { id: 's-cattinara-trieste', name: 'Ospedale Cattinara ASUGI Trieste', lat: 45.6498, lon: 13.8013, country: 'IT', city: 'Trieste', beds: 900, emergency: true, type: 'university' },
  { id: 's-udine-aosu', name: 'Azienda Ospedaliero-Universitaria di Udine', lat: 46.0655, lon: 13.2392, country: 'IT', city: 'Udine', beds: 700, emergency: true, type: 'university' },
  { id: 's-policlinico-bo', name: 'Policlinico Sant\'Orsola-Malpighi Bologna', lat: 44.4988, lon: 11.3591, country: 'IT', city: 'Bologna', beds: 1500, emergency: true, type: 'university' },
  { id: 's-maggiore-bo', name: 'Ospedale Maggiore Bologna', lat: 44.4985, lon: 11.3262, country: 'IT', city: 'Bologna', beds: 700, emergency: true, type: 'hospital' },
  { id: 's-arcispedale-re', name: 'Arcispedale Santa Maria Nuova Reggio Emilia', lat: 44.7086, lon: 10.6358, country: 'IT', city: 'Reggio Emilia', beds: 800, emergency: true, type: 'hospital' },
  { id: 's-policlinico-mo', name: 'AOU Policlinico di Modena', lat: 44.6481, lon: 10.9314, country: 'IT', city: 'Modena', beds: 900, emergency: true, type: 'university' },
  { id: 's-policlinico-fe', name: 'Arcispedale Sant\'Anna Ferrara', lat: 44.8350, lon: 11.6194, country: 'IT', city: 'Ferrara', beds: 750, emergency: true, type: 'university' },

  // === CENTRO ===
  { id: 's-policlinico-umberto', name: 'Policlinico Umberto I Roma', lat: 41.9025, lon: 12.5136, country: 'IT', city: 'Roma', beds: 1500, emergency: true, type: 'university' },
  { id: 's-gemelli-roma', name: 'Fondazione Policlinico Gemelli IRCCS', lat: 41.9318, lon: 12.4315, country: 'IT', city: 'Roma', beds: 1500, emergency: true, type: 'university' },
  { id: 's-san-camillo-roma', name: 'Ospedale San Camillo-Forlanini', lat: 41.8775, lon: 12.4591, country: 'IT', city: 'Roma', beds: 1200, emergency: true, type: 'hospital' },
  { id: 's-bambin-gesu', name: 'Ospedale Pediatrico Bambino Gesù IRCCS', lat: 41.9004, lon: 12.4652, country: 'IT', city: 'Roma', beds: 600, emergency: true, type: 'hospital' },
  { id: 's-tor-vergata-roma', name: 'PTV – Policlinico Tor Vergata', lat: 41.8434, lon: 12.6100, country: 'IT', city: 'Roma', beds: 700, emergency: true, type: 'university' },
  { id: 's-sant-andrea-roma', name: 'AOU Sant\'Andrea', lat: 41.9293, lon: 12.5118, country: 'IT', city: 'Roma', beds: 600, emergency: true, type: 'university' },
  { id: 's-aou-siena', name: 'AOU Senese – Policlinico Le Scotte', lat: 43.3129, lon: 11.3461, country: 'IT', city: 'Siena', beds: 850, emergency: true, type: 'university' },
  { id: 's-careggi-fi', name: 'AOU Careggi Firenze', lat: 43.8064, lon: 11.2636, country: 'IT', city: 'Firenze', beds: 1400, emergency: true, type: 'university' },
  { id: 's-meyer-fi', name: 'IRCCS Ospedale Pediatrico Meyer', lat: 43.8019, lon: 11.2511, country: 'IT', city: 'Firenze', beds: 300, emergency: true, type: 'hospital' },
  { id: 's-pisana-pi', name: 'AOU Pisana – Ospedale Santa Chiara', lat: 43.7175, lon: 10.4033, country: 'IT', city: 'Pisa', beds: 900, emergency: true, type: 'university' },
  { id: 's-aou-perugia', name: 'AOU di Perugia', lat: 43.1061, lon: 12.3860, country: 'IT', city: 'Perugia', beds: 800, emergency: true, type: 'university' },
  { id: 's-ospedali-riuniti-an', name: 'Ospedali Riuniti di Ancona', lat: 43.5977, lon: 13.5081, country: 'IT', city: 'Ancona', beds: 900, emergency: true, type: 'university' },

  // === SUD ===
  { id: 's-policlinico-na', name: 'AOU Policlinico Federico II Napoli', lat: 40.8353, lon: 14.2302, country: 'IT', city: 'Napoli', beds: 1200, emergency: true, type: 'university' },
  { id: 's-cardarelli-na', name: 'Ospedale Cardarelli Napoli', lat: 40.8657, lon: 14.2292, country: 'IT', city: 'Napoli', beds: 1000, emergency: true, type: 'hospital' },
  { id: 's-santobono-na', name: 'Santobono Pausilipon – Ospedale Pediatrico', lat: 40.8433, lon: 14.2150, country: 'IT', city: 'Napoli', beds: 350, emergency: true, type: 'hospital' },
  { id: 's-policlinico-ba', name: 'AOU Policlinico di Bari', lat: 41.1177, lon: 16.8736, country: 'IT', city: 'Bari', beds: 1100, emergency: true, type: 'university' },
  { id: 's-civile-bari', name: 'Ospedale Civile San Paolo Bari', lat: 41.0920, lon: 16.8650, country: 'IT', city: 'Bari', beds: 700, emergency: true, type: 'hospital' },
  { id: 's-foggia-ospedali', name: 'Ospedali Riuniti di Foggia', lat: 41.4547, lon: 15.5491, country: 'IT', city: 'Foggia', beds: 900, emergency: true, type: 'university' },
  { id: 's-aou-catanzaro', name: 'AOU Mater Domini Catanzaro', lat: 38.9113, lon: 16.5929, country: 'IT', city: 'Catanzaro', beds: 650, emergency: true, type: 'university' },
  { id: 's-grande-ospedale-cosenza', name: 'AO di Cosenza', lat: 39.2988, lon: 16.2500, country: 'IT', city: 'Cosenza', beds: 600, emergency: true, type: 'hospital' },
  { id: 's-aou-palermo', name: 'AOU Policlinico Paolo Giaccone Palermo', lat: 38.1157, lon: 13.3614, country: 'IT', city: 'Palermo', beds: 900, emergency: true, type: 'university' },
  { id: 's-civico-palermo', name: 'Ospedale Civico ARNAS Palermo', lat: 38.1215, lon: 13.3609, country: 'IT', city: 'Palermo', beds: 800, emergency: true, type: 'hospital' },
  { id: 's-garibaldi-catania', name: 'Ospedale Garibaldi-Centro Catania', lat: 37.5079, lon: 15.0877, country: 'IT', city: 'Catania', beds: 600, emergency: true, type: 'hospital' },
  { id: 's-policlinico-catania', name: 'AOU Policlinico Vittorio Emanuele Catania', lat: 37.5243, lon: 15.0901, country: 'IT', city: 'Catania', beds: 800, emergency: true, type: 'university' },
  { id: 's-brotzu-cagliari', name: 'G. Brotzu Ospedale Regionale Cagliari', lat: 39.2187, lon: 9.1102, country: 'IT', city: 'Cagliari', beds: 900, emergency: true, type: 'hospital' },
  { id: 's-aou-sassari', name: 'AOU Sassari', lat: 40.7284, lon: 8.5596, country: 'IT', city: 'Sassari', beds: 700, emergency: true, type: 'university' },

  // === CENTRI RICERCA / IRCCS ===
  { id: 's-irccs-negri', name: 'IRCCS Istituto Mario Negri', lat: 45.5204, lon: 9.1849, country: 'IT', city: 'Milano', beds: 0, emergency: false, type: 'university' },
  { id: 's-irccs-neuromed', name: 'IRCCS Neuromed Pozzilli', lat: 41.5217, lon: 14.0431, country: 'IT', city: 'Pozzilli', beds: 200, emergency: false, type: 'university' },
  { id: 's-irccs-rizzoli', name: 'IRCCS Istituto Ortopedico Rizzoli', lat: 44.5109, lon: 11.3659, country: 'IT', city: 'Bologna', beds: 300, emergency: false, type: 'university' },
  { id: 's-ifo-regina-elena', name: 'IFO – Istituto Regina Elena Roma', lat: 41.8790, lon: 12.5188, country: 'IT', city: 'Roma', beds: 400, emergency: false, type: 'university' },
];

/**
 * Ospedali europei di eccellenza — seed statico
 * Dati: ID, nome, città, paese, coordinate, HRI (Health Readiness Index), posti letto, specialità
 * Fonte: GLOBSEC HRI / GHS Index / siti ufficiali ospedali
 */
export const STATIC_HOSPITALS_EU: Hospital[] = [
  // === SVIZZERA ===
  { id: 'chuv_lausanne',        name: 'CHUV Lausanne',                              city: 'Lausanne',    country: 'CH', lat: 46.5231, lon:  6.6323, hri: 82, beds: 1500, emergency: true,  type: 'university', specialty: 'General & Research' },
  { id: 'chu_geneve',           name: 'HUG Geneva',                                 city: 'Geneva',      country: 'CH', lat: 46.1944, lon:  6.1432, hri: 80, beds: 1800, emergency: true,  type: 'university', specialty: 'General & Transplant' },
  { id: 'insel_bern',           name: 'Inselspital Bern',                           city: 'Bern',        country: 'CH', lat: 46.9479, lon:  7.4346, hri: 85, beds:  900, emergency: true,  type: 'university', specialty: 'General & Neurology' },
  { id: 'zurich_university_hosp', name: 'Universitätsspital Zürich',               city: 'Zurich',      country: 'CH', lat: 47.3762, lon:  8.5490, hri: 88, beds:  950, emergency: true,  type: 'university', specialty: 'General & Cardiology' },
  { id: 'basel_university_hosp',  name: 'Universitätsspital Basel',                city: 'Basel',       country: 'CH', lat: 47.5599, lon:  7.5906, hri: 84, beds:  700, emergency: true,  type: 'university', specialty: 'Oncology & Research' },

  // === GERMANIA ===
  { id: 'charite_berlin',       name: 'Charité – Universitätsmedizin Berlin',       city: 'Berlin',      country: 'DE', lat: 52.5232, lon: 13.3789, hri: 88, beds: 3000, emergency: true,  type: 'university', specialty: 'General & Research' },
  { id: 'ukb_bonn',             name: 'Universitätsklinikum Bonn',                  city: 'Bonn',        country: 'DE', lat: 50.7174, lon:  7.0845, hri: 81, beds: 1300, emergency: true,  type: 'university', specialty: 'General' },
  { id: 'uk_frankfurt',         name: 'Universitätsklinikum Frankfurt',             city: 'Frankfurt',   country: 'DE', lat: 50.5619, lon:  8.6672, hri: 83, beds: 1400, emergency: true,  type: 'university', specialty: 'Cardiology' },
  { id: 'uk_munich',            name: 'LMU Klinikum der Universität München',       city: 'Munich',      country: 'DE', lat: 48.1355, lon: 11.5820, hri: 86, beds: 2000, emergency: true,  type: 'university', specialty: 'Oncology' },
  { id: 'munster_university_hosp', name: 'Universitätsklinikum Münster',            city: 'Münster',     country: 'DE', lat: 51.9630, lon:  7.6130, hri: 82, beds: 1500, emergency: true,  type: 'university', specialty: 'General' },
  { id: 'hamburg_uke',          name: 'Universitätsklinikum Hamburg-Eppendorf',     city: 'Hamburg',     country: 'DE', lat: 53.5900, lon:  9.9730, hri: 86, beds: 1500, emergency: true,  type: 'university', specialty: 'General & Research' },

  // === REGNO UNITO ===
  { id: 'barts_london',         name: 'St Bartholomew\'s Hospital',                 city: 'London',      country: 'GB', lat: 51.5176, lon: -0.0981, hri: 85, beds:  800, emergency: true,  type: 'hospital',   specialty: 'Cardiology & Cancer' },
  { id: 'uclh_london',          name: 'University College Hospital London',         city: 'London',      country: 'GB', lat: 51.5247, lon: -0.1371, hri: 84, beds:  900, emergency: true,  type: 'university', specialty: 'General & Teaching' },
  { id: 'gosh_london',          name: 'Great Ormond Street Hospital',               city: 'London',      country: 'GB', lat: 51.5214, lon: -0.1205, hri: 89, beds:  600, emergency: true,  type: 'hospital',   specialty: 'Paediatrics' },
  { id: 'royal_marsden',        name: 'The Royal Marsden Hospital',                 city: 'London',      country: 'GB', lat: 51.4870, lon: -0.1710, hri: 90, beds:  500, emergency: false, type: 'hospital',   specialty: 'Oncology' },

  // === FRANCIA ===
  { id: 'aph_paris',            name: 'AP-HP Pitié-Salpêtrière',                    city: 'Paris',       country: 'FR', lat: 48.8385, lon:  2.3612, hri: 87, beds: 1600, emergency: true,  type: 'university', specialty: 'Neurology & Cardiology' },
  { id: 'cochin_paris',         name: 'Hôpital Cochin',                             city: 'Paris',       country: 'FR', lat: 48.8418, lon:  2.3350, hri: 82, beds: 1000, emergency: true,  type: 'hospital',   specialty: 'General & Endocrinology' },
  { id: 'necker_paris',         name: 'Hôpital Necker-Enfants Malades',             city: 'Paris',       country: 'FR', lat: 48.8486, lon:  2.3201, hri: 88, beds:  800, emergency: true,  type: 'hospital',   specialty: 'Paediatrics' },

  // === ITALIA (ospedali di eccellenza non ancora nel seed IT) ===
  { id: 'gemelli_rome',         name: 'Policlinico Universitario A. Gemelli',       city: 'Rome',        country: 'IT', lat: 41.9310, lon: 12.4397, hri: 84, beds: 1550, emergency: true,  type: 'university', specialty: 'General & Oncology' },
  { id: 'san_raffaele_milan',   name: 'Ospedale San Raffaele',                      city: 'Milano',      country: 'IT', lat: 45.5030, lon:  9.2533, hri: 86, beds: 1300, emergency: true,  type: 'university', specialty: 'Neurology & Research' },
  { id: 'niguarda_milan',       name: 'ASST Grande Ospedale Metropolitano Niguarda',city: 'Milano',      country: 'IT', lat: 45.5120, lon:  9.2023, hri: 83, beds: 1200, emergency: true,  type: 'hospital',   specialty: 'Trauma & General' },
  { id: 'tor_vergata_rome',     name: 'Policlinico Tor Vergata',                    city: 'Rome',        country: 'IT', lat: 41.8530, lon: 12.6200, hri: 78, beds:  700, emergency: true,  type: 'university', specialty: 'General' },

  // === SPAGNA ===
  { id: 'clinic_barcelona',     name: 'Hospital Clínic de Barcelona',               city: 'Barcelona',   country: 'ES', lat: 41.3896, lon:  2.1575, hri: 88, beds:  900, emergency: true,  type: 'university', specialty: 'General & Research' },
  { id: 'vall_hebron',          name: 'Hospital Universitari Vall d\'Hebron',        city: 'Barcelona',   country: 'ES', lat: 41.4240, lon:  2.1620, hri: 85, beds: 1100, emergency: true,  type: 'university', specialty: 'General & Trauma' },
  { id: 'la_paz_madrid',        name: 'Hospital Universitario La Paz',              city: 'Madrid',      country: 'ES', lat: 40.4776, lon: -3.6904, hri: 84, beds: 1300, emergency: true,  type: 'university', specialty: 'General & Paediatrics' },

  // === AUSTRIA ===
  { id: 'akh_vienna',           name: 'AKH Wien – Vienna General Hospital',         city: 'Vienna',      country: 'AT', lat: 48.2210, lon: 16.3464, hri: 87, beds: 1700, emergency: true,  type: 'university', specialty: 'General & Research' },

  // === BELGIO ===
  { id: 'uz_leuven',            name: 'UZ Leuven',                                  city: 'Leuven',      country: 'BE', lat: 50.8780, lon:  4.7005, hri: 88, beds: 1900, emergency: true,  type: 'university', specialty: 'General & Research' },
  { id: 'brussels_st_luc',      name: 'Cliniques universitaires Saint-Luc',         city: 'Brussels',    country: 'BE', lat: 50.8530, lon:  4.4520, hri: 83, beds:  950, emergency: true,  type: 'university', specialty: 'General' },

  // === PAESI BASSI ===
  { id: 'erasmus_rotterdam',    name: 'Erasmus MC',                                 city: 'Rotterdam',   country: 'NL', lat: 51.9105, lon:  4.4883, hri: 87, beds: 1200, emergency: true,  type: 'university', specialty: 'General & Oncology' },
  { id: 'umc_amsterdam',        name: 'Amsterdam UMC',                              city: 'Amsterdam',   country: 'NL', lat: 52.3568, lon:  4.9559, hri: 84, beds: 1500, emergency: true,  type: 'university', specialty: 'General' },

  // === SVEZIA ===
  { id: 'karolinska_stockholm', name: 'Karolinska Universitetssjukhuset',           city: 'Stockholm',   country: 'SE', lat: 59.3498, lon: 18.0240, hri: 89, beds: 1600, emergency: true,  type: 'university', specialty: 'Research & Oncology' },
  { id: 'sahlgrenska_goteborg', name: 'Sahlgrenska University Hospital',            city: 'Gothenburg',  country: 'SE', lat: 57.6810, lon: 11.9580, hri: 82, beds: 1700, emergency: true,  type: 'university', specialty: 'General' },

  // === DANIMARCA ===
  { id: 'rigshospitalet_cph',   name: 'Rigshospitalet Copenhagen',                  city: 'Copenhagen',  country: 'DK', lat: 55.6969, lon: 12.5615, hri: 88, beds: 1300, emergency: true,  type: 'university', specialty: 'Transplant & Trauma' },
  { id: 'odense_university',    name: 'Odense University Hospital',                 city: 'Odense',      country: 'DK', lat: 55.3959, lon: 10.3883, hri: 80, beds: 1000, emergency: true,  type: 'university', specialty: 'General' },

  // === POLONIA ===
  { id: 'olsztyn_uni',          name: 'Uniwersytecki Szpital Kliniczny',             city: 'Olsztyn',     country: 'PL', lat: 53.7784, lon: 20.4801, hri: 76, beds:  700, emergency: true,  type: 'university', specialty: 'General' },
  { id: 'wroclaw_uni',          name: 'Uniwersytecki Szpital Kliniczny',             city: 'Wrocław',     country: 'PL', lat: 51.1157, lon: 17.0594, hri: 78, beds:  800, emergency: true,  type: 'university', specialty: 'General' },

  // === REPUBBLICA CECA ===
  { id: 'motol_prague',         name: 'University Hospital Motol',                  city: 'Prague',      country: 'CZ', lat: 50.0748, lon: 14.3458, hri: 82, beds: 2200, emergency: true,  type: 'university', specialty: 'Paediatrics & General' },
  { id: 'vfn_prague',           name: 'General University Hospital Prague',         city: 'Prague',      country: 'CZ', lat: 50.0755, lon: 14.4265, hri: 80, beds: 1300, emergency: true,  type: 'university', specialty: 'General' },

  // === UNGHERIA ===
  { id: 'semmelweis_budapest',  name: 'Semmelweis University Hospital',             city: 'Budapest',    country: 'HU', lat: 47.4890, lon: 19.0620, hri: 79, beds: 1000, emergency: true,  type: 'university', specialty: 'General' },

  // === FINLANDIA ===
  { id: 'helsinki_uni_hosp',    name: 'HUS Helsinki University Hospital',           city: 'Helsinki',    country: 'FI', lat: 60.1870, lon: 24.9220, hri: 86, beds: 1600, emergency: true,  type: 'university', specialty: 'General' },
  { id: 'tampere_uni_hosp',     name: 'Tampere University Hospital',                city: 'Tampere',     country: 'FI', lat: 61.4930, lon: 23.7740, hri: 80, beds:  700, emergency: true,  type: 'university', specialty: 'General' },

  // === NORVEGIA ===
  { id: 'oslo_uni_hospital',    name: 'Oslo University Hospital',                   city: 'Oslo',        country: 'NO', lat: 59.9275, lon: 10.7240, hri: 85, beds: 1900, emergency: true,  type: 'university', specialty: 'General & Trauma' },
  { id: 'bergen_hospital',      name: 'Haukeland University Hospital',              city: 'Bergen',      country: 'NO', lat: 60.3720, lon:  5.3510, hri: 82, beds: 1000, emergency: true,  type: 'university', specialty: 'General' },

  // === PORTOGALLO ===
  { id: 'lisbon_santa_maria',   name: 'Hospital de Santa Maria',                    city: 'Lisbon',      country: 'PT', lat: 38.7527, lon: -9.1604, hri: 79, beds: 1100, emergency: true,  type: 'university', specialty: 'General' },
  { id: 'porto_sao_joao',       name: 'Centro Hospitalar São João',                 city: 'Porto',       country: 'PT', lat: 41.1803, lon: -8.6040, hri: 80, beds: 1000, emergency: true,  type: 'university', specialty: 'General' },

  // === GRECIA ===
  { id: 'athens_evangelismos',  name: 'Evangelismos General Hospital',              city: 'Athens',      country: 'GR', lat: 37.9795, lon: 23.7485, hri: 77, beds:  950, emergency: true,  type: 'hospital',   specialty: 'General' },
  { id: 'thessaloniki_axiou',   name: 'AXEPA University Hospital',                  city: 'Thessaloniki',country: 'GR', lat: 40.6130, lon: 22.9597, hri: 75, beds:  800, emergency: true,  type: 'university', specialty: 'General' },

  // === IRLANDA ===
  { id: 'dublin_st_james',      name: 'St James\'s Hospital',                       city: 'Dublin',      country: 'IE', lat: 53.3379, lon: -6.2931, hri: 82, beds: 1000, emergency: true,  type: 'hospital',   specialty: 'General & Oncology' },
  { id: 'beaumont_dublin',      name: 'Beaumont Hospital',                          city: 'Dublin',      country: 'IE', lat: 53.3890, lon: -6.2200, hri: 80, beds:  800, emergency: true,  type: 'hospital',   specialty: 'Neurosurgery' },

  // === ROMANIA ===
  { id: 'romania_fundeni',      name: 'Fundeni Clinical Institute',                 city: 'Bucharest',   country: 'RO', lat: 44.4540, lon: 26.1540, hri: 78, beds: 1000, emergency: false, type: 'hospital',   specialty: 'Oncology & Transplant' },

  // === BULGARIA ===
  { id: 'sofia_pirogov',        name: 'N.I. Pirogov Emergency Hospital',            city: 'Sofia',       country: 'BG', lat: 42.6880, lon: 23.3050, hri: 75, beds:  800, emergency: true,  type: 'hospital',   specialty: 'Emergency & Trauma' },
];
