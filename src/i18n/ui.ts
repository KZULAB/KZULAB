/**
 * Libellés d'interface. Pour ajouter l'anglais : ajouter une clé `en` avec les mêmes entrées,
 * déclarer 'en' dans astro.config.mjs (i18n.locales) et créer les pages sous src/pages/en/.
 */
export const languages = { fr: 'Français' } as const;
export const defaultLang = 'fr';
export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    'skip': 'Aller au contenu',
    'nav.label': 'Navigation principale',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.home': 'KZULAB, accueil',
    'theme.toggle': 'Basculer entre thème clair et thème sombre',
    'hero.dim': "Laboratoire d'idées · Projets informatiques",
    'hero.lede': "KZULAB est un laboratoire d'idées. Nous développons des projets informatiques.",
    'hero.cta': 'Voir nos projets',
    'projects.title': 'Nos projets',
    'projects.sheet': 'Planche 1 — Projets',
    'projects.fig': 'Fig.',
    'projects.state': 'État',
    'projects.upcoming': 'À venir',
    'projects.upcoming.title': 'Projet en préparation',
    'projects.upcoming.state': "à l'étude",
    'status.in-development': 'En développement',
    'status.coming-soon': 'Bientôt disponible',
    'status.available': 'Disponible',
    'about.title': 'À propos',
    'about.sheet': 'Planche 2 — Société',
    'team.caption': 'Équipe — cofondateurs',
    'team.name': 'Nom',
    'team.role': 'Fonction',
    'contact.title': 'Contact',
    'contact.sub': 'Une question, un projet ?',
    'footer.label': 'Informations sur la société',
    'footer.name': 'Dénomination sociale',
    'footer.form': 'Forme',
    'footer.rcs': 'Immatriculation',
    'footer.contact': 'Contact',
    'footer.year': 'Année',
    'footer.docs': 'Documents',
    'footer.cookies': 'Cookies',
    'footer.cookies.value': 'Aucun',
    'legal.notice': 'Mentions légales',
    'legal.privacy': 'Confidentialité',
  },
} as const;

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
