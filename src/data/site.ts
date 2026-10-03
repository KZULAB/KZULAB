/**
 * Informations sur la société, affichées sur le site.
 * Règle : uniquement des informations légales obligatoires et déjà publiques (voir CLAUDE.md).
 * L'adresse et le téléphone ne s'affichent QUE sur /mentions-legales (et l'adresse dans le JSON-LD).
 */
export const company = {
  name: 'KZULAB',
  legalForm: 'Société par actions simplifiée (SAS)',
  legalFormShort: 'SAS',
  capital: '1 000,00 €',
  capitalShort: '1 000 €',
  address: {
    street: '33 Chemin des Groux',
    postalCode: '95220',
    city: 'Herblay-sur-Seine',
    country: 'France',
    countryCode: 'FR',
  },
  // Ordre imposé par l'art. R. 123-237 du Code de commerce : numéro, « RCS », ville du greffe.
  rcs: '130 885 346 RCS Pontoise',
  siren: '130 885 346',
  siret: '130 885 346 00010',
  /** Numéro de TVA intracommunautaire : aucun à ce jour. Renseigner ici quand il sera attribué. */
  vatNumber: null as string | null,
  foundingDate: '2026-10-01',
  president: 'Wassim Ajili',
  publicationDirector: 'Wassim Ajili, Président',
  email: 'contact@kzulab.com',
  phone: { display: '06 52 54 84 37', international: '+33 6 52 54 84 37', href: 'tel:+33652548437' },
  url: 'https://kzulab.com',
} as const;

export const host = {
  name: 'GitHub, Inc. (service GitHub Pages)',
  address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  phone: '+1 (877) 448-4820',
  url: 'https://github.com',
} as const;

export const team = [
  { name: 'Wassim Ajili', role: 'Président' },
  { name: 'Baptiste Zammit', role: 'Directeur général' },
  { name: 'Jérémie Zeitoun', role: 'Directeur général' },
] as const;
