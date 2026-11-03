import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';
import wassimAjiliPhoto from '../assets/team/wassim-ajili.jpg';
import baptisteZammitPhoto from '../assets/team/baptiste-zammit.jpg';
import jeremieZeitounPhoto from '../assets/team/jeremie-zeitoun.jpg';

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
  /** Profils publics officiels de la société (JSON-LD `sameAs`). Ajouter ici LinkedIn, fiches des stores… */
  sameAs: ['https://github.com/KZULAB'],
} as const;

export const host = {
  name: 'GitHub, Inc. (service GitHub Pages)',
  address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  phone: '+1 (877) 448-4820',
  url: 'https://github.com',
} as const;

/**
 * Équipe dirigeante : accueil (tableau « À propos »), pages /equipe et /en/team, JSON-LD `founder`.
 *
 * Pour compléter un dirigeant (chaque « TODO » ci-dessous) :
 * - photo : déposer un JPG/PNG d'au moins 960 × 1200 px (portrait 4:5, visage centré en haut) dans
 *   src/assets/team/, l'importer en haut de ce fichier, puis renseigner `photo` (src + alt FR/EN).
 *   Astro génère automatiquement les versions AVIF/WebP redimensionnées au build.
 * - bio : 2 à 3 lignes à la première personne (affichées comme une citation), en français ET en anglais.
 * - linkedin : URL publique complète du profil (https://www.linkedin.com/in/…).
 * Tant qu'un champ vaut null, il n'est pas affiché en production ; en local (npm run dev) un repère
 * « TODO » apparaît sur la page Équipe et `npm run build` affiche un avertissement.
 */

export interface TeamMember {
  /** Identifiant stable (ancre de la page Équipe, @id du JSON-LD). */
  slug: string;
  name: string;
  role: Localized;
  /** Bio de 2 à 3 lignes, à la première personne (citation). null = à compléter. */
  bio: Localized | null;
  /** URL du profil LinkedIn. null = à compléter. */
  linkedin: string | null;
  /** Portrait. null = à compléter (un cadre avec les initiales s'affiche à la place). */
  photo: { src: ImageMetadata; alt: Localized } | null;
}

export const team: TeamMember[] = [
  {
    slug: 'wassim-ajili',
    name: 'Wassim Ajili',
    role: { fr: 'Président', en: 'President' },
    bio: {
      fr: "L'informatique me passionne depuis toujours. J'ai sans arrêt une nouvelle idée en tête, et ce que je préfère, c'est la voir prendre vie. Ingénieur formé à l'EPITA et chef de projet, j'aime faire le lien entre les envies, le code et les gens qui les rendent possibles.",
      en: "I've always been passionate about computers. I constantly have a new idea in mind, and what I love most is seeing it come to life. As an EPITA-trained engineer and project manager, I enjoy bringing together the ideas, the code and the people who make them happen.",
    },
    linkedin: 'https://www.linkedin.com/in/wassimajili/',
    photo: {
      src: wassimAjiliPhoto,
      alt: {
        fr: 'Portrait de Wassim Ajili, Président de KZULAB, souriant et levant le pouce',
        en: 'Portrait of Wassim Ajili, President of KZULAB, smiling and giving a thumbs-up',
      },
    },
  },
  {
    slug: 'baptiste-zammit',
    name: 'Baptiste Zammit',
    role: { fr: 'Directeur général', en: 'Managing Director' },
    bio: {
      fr: "Ce qui me motive, c'est de créer des choses qui semblaient impossibles hier. Ingénieur formé à l'EPITA et passionné d'intelligence artificielle, j'apprends aux machines à voir le monde, et j'adore rendre réalisables nos idées les plus folles.",
      en: 'What drives me is building things that seemed impossible yesterday. As an EPITA-trained engineer with a passion for artificial intelligence, I teach machines to see the world, and I love making our wildest ideas feasible.',
    },
    linkedin: 'https://www.linkedin.com/in/baptiste-z-596769171/',
    photo: {
      src: baptisteZammitPhoto,
      alt: {
        fr: 'Portrait de Baptiste Zammit, directeur général de KZULAB, souriant et regardant sur le côté',
        en: 'Portrait of Baptiste Zammit, Managing Director of KZULAB, smiling and looking to the side',
      },
    },
  },
  {
    slug: 'jeremie-zeitoun',
    name: 'Jérémie Zeitoun',
    role: { fr: 'Directeur général', en: 'Managing Director' },
    bio: {
      fr: "Ingénieur diplômé de l'EPITA, je suis développeur dans l'âme : j'aime partir d'une page blanche et construire jusqu'au dernier détail. Du web à la 3D en passant par la réalité virtuelle, rien ne me plaît plus que de transformer une idée lancée en l'air en un projet bien réel.",
      en: "An EPITA engineering graduate, I'm a developer at heart: I love starting from a blank page and building right down to the last detail. From the web to 3D and virtual reality, nothing makes me happier than turning an off-the-cuff idea into a real project.",
    },
    linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-zeitoun-aab484172/',
    photo: {
      src: jeremieZeitounPhoto,
      alt: {
        fr: 'Portrait de Jérémie Zeitoun, directeur général de KZULAB, souriant dans une rue au Japon',
        en: 'Portrait of Jérémie Zeitoun, Managing Director of KZULAB, smiling in a street in Japan',
      },
    },
  },
];

/** Champs encore à compléter, pour l'avertissement de build. */
export function teamTodos(): string[] {
  return team.flatMap((m) => [
    ...(m.photo ? [] : [`${m.name} : photo`]),
    ...(m.bio ? [] : [`${m.name} : bio FR/EN`]),
    ...(m.linkedin ? [] : [`${m.name} : URL LinkedIn`]),
  ]);
}
