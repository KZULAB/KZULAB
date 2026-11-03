import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';
import animacatchIcon from '../assets/projects/animacatch-icon.png';

/**
 * Projets affichés dans « Nos projets ».
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
  icon?: { src: ImageMetadata; alt: Localized };
  /** Site du projet : rend toute la carte cliquable (uniquement s'il est en ligne). */
  url?: string;
  /** Liens uniquement s'ils sont confirmés et en ligne (ex. App Store, Google Play, site). */
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: 'Animacatch',
    kind: { fr: 'Jeu mobile', en: 'Mobile game' },
    platforms: ['iOS', 'Android'],
    status: 'coming-soon',
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
];

/** Nombre de cartes « Projet en préparation » à afficher après les vrais projets (0 pour aucune). */
export const upcomingSlots = 1;
