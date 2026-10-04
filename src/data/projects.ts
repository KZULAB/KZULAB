import type { ImageMetadata } from 'astro';
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
  kind: string;
  platforms: string[];
  status: ProjectStatus;
  pitch: string;
  icon?: { src: ImageMetadata; alt: string };
  /** Site du projet : rend toute la carte cliquable (uniquement s'il est en ligne). */
  url?: string;
  /** Liens uniquement s'ils sont confirmés et en ligne (ex. App Store, Google Play, site). */
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: 'Animacatch',
    kind: 'Jeu mobile',
    platforms: ['iOS', 'Android'],
    status: 'coming-soon',
    url: 'https://animacatch.kzulab.com',
    pitch:
      "Photographiez un animal croisé dans la vraie vie : l'application le reconnaît et l'ajoute à votre carnet de collection. Gagnez de l'expérience, complétez votre carnet espèce par espèce et comparez-vous à vos amis.",
    icon: {
      src: animacatchIcon,
      alt: "Icône d'Animacatch : une patte brune sur un autocollant orange, fond vert sapin",
    },
  },
];

/** Nombre de cartes « Projet en préparation » à afficher après les vrais projets (0 pour aucune). */
export const upcomingSlots = 1;
