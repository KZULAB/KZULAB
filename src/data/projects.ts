import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';
import animacatchIcon from '../assets/projects/animacatch-icon.png';
import pincityIcon from '../assets/projects/pincity-icon.png';
import gloupIcon from '../assets/projects/gloup-icon.png';
import ciaoIcon from '../assets/projects/ciao-icon.png';

/**
 * Projets affichés dans « Nos projets », dans le JSON-LD (ItemList) et dans /llms.txt.
 * Pour ajouter un projet : ajouter un objet à `projects` (et son icône dans src/assets/projects/).
 * Les cartes « Projet en préparation » sont générées d'après `upcomingSlots`.
 */
export type ProjectStatus = 'in-development' | 'coming-soon' | 'available';

export interface Project {
  name: string;
  /** Genre affiché en en-tête de la figure, ex. « Jeu mobile ». */
  kind: Localized;
  platforms: string[];
  status: ProjectStatus;
  pitch: Localized;
  /** Catégorie schema.org (JSON-LD), ex. GameApplication, LifestyleApplication. */
  category: string;
  /**
   * Couleurs de la direction artistique du projet, affichées en petit (pastille et filet de la carte).
   * `ink` : couleur sombre de fond, `pop` : couleur vive. Purement décoratives, jamais pour du texte.
   */
  accent: { ink: string; pop: string };
  icon?: { src: ImageMetadata; alt: Localized };
  /** Site du projet : rend toute la carte cliquable. */
  url?: string;
  /** Liens uniquement s'ils sont confirmés et en ligne (ex. App Store, Google Play, site). */
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: 'Animacatch',
    kind: { fr: 'Jeu mobile', en: 'Mobile game' },
    platforms: ['Android', 'iOS'],
    status: 'available',
    category: 'GameApplication',
    accent: { ink: '#3C7248', pop: '#F7AE35' },
    url: 'https://animacatch.kzulab.com',
    pitch: {
      fr: "Photographiez un animal croisé dans la vraie vie : l'application le reconnaît et l'ajoute à votre carnet de collection. Gagnez de l'expérience, complétez votre carnet espèce par espèce et comparez-vous à vos amis.",
      en: 'Take a photo of an animal you come across in real life: the app identifies it and adds it to your collection book. Earn experience, complete your book species by species and see how you compare with your friends.',
    },
    icon: {
      src: animacatchIcon,
      alt: {
        fr: "Icône d'Animacatch : une patte brune sur un autocollant orange, fond vert sapin",
        en: 'Animacatch icon: a brown paw on an orange sticker, on a fir-green background',
      },
    },
  },
  {
    name: 'Pincity',
    kind: { fr: 'Appli mobile', en: 'Mobile app' },
    platforms: ['Android', 'iOS'],
    status: 'coming-soon',
    category: 'LifestyleApplication',
    accent: { ink: '#1A2233', pop: '#FFC21A' },
    url: 'https://pincity.kzulab.com',
    pitch: {
      fr: "Posez une épingle par jour, là où vous êtes. Vos jours se relient comme les arrêts d'une ligne de métro, et votre année devient une carte rien qu'à vous.",
      en: 'Drop one pin a day, right where you are. Your days join up like stops on a metro line, and your year becomes a map that is yours alone.',
    },
    icon: {
      src: pincityIcon,
      alt: {
        fr: 'Icône de Pincity : une ligne de métro jaune et ses arrêts blancs qui mène à une épingle, fond bleu nuit',
        en: 'Pincity icon: a yellow metro line with white stops leading to a map pin, on a navy background',
      },
    },
  },
  {
    name: 'Gloup',
    kind: { fr: 'Appli mobile', en: 'Mobile app' },
    platforms: ['Android', 'iOS'],
    status: 'coming-soon',
    category: 'HealthApplication',
    accent: { ink: '#3B1424', pop: '#FF8FB1' },
    url: 'https://gloup.kzulab.com',
    pitch: {
      fr: "Une respiration guidée pour apaiser l'anxiété. Confiez vos soucis à Gloup, une mascotte rose, et respirez avec lui : il les avale à chaque inspiration. Notez votre anxiété avant et après, et voyez la différence.",
      en: 'Guided breathing to ease anxiety. Hand your worries to Gloup, a pink mascot, and breathe along with him: he swallows them with every breath in. Rate your anxiety before and after, and see the difference.',
    },
    icon: {
      src: gloupIcon,
      alt: {
        fr: "Icône de Gloup : une mascotte ronde et rose, l'air étonné, sur fond framboise foncé",
        en: 'Gloup icon: a round pink mascot looking surprised, on a dark raspberry background',
      },
    },
  },
  {
    name: 'Ciao',
    kind: { fr: 'Appli mobile', en: 'Mobile app' },
    platforms: ['Android', 'iOS'],
    status: 'coming-soon',
    category: 'LifestyleApplication',
    accent: { ink: '#1B2A4A', pop: '#FF6A13' },
    url: 'https://ciao.kzulab.com',
    pitch: {
      fr: "Laissez partir un objet par jour : donnez-le, vendez-le, offrez-le ou recyclez-le, puis notez-le en quelques secondes. Votre série grandit et votre maison s'allège.",
      en: 'Let go of one thing a day: donate it, sell it, gift it or recycle it, then log it in seconds. Your streak grows and your home gets lighter.',
    },
    icon: {
      src: ciaoIcon,
      alt: {
        fr: 'Icône de Ciao : une pastille orange qui se décolle, fond bleu encre',
        en: 'Ciao icon: an orange sticker peeling off, on an ink-blue background',
      },
    },
  },
];

/** Nombre de cartes « Projet en préparation » à afficher après les vrais projets (0 pour aucune). */
export const upcomingSlots = 1;
