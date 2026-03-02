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
