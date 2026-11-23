/**
 * Libellés d'interface et routes localisées (français par défaut, anglais sous /en).
 * Pour ajouter une page traduite : l'ajouter à `routes`, puis créer src/pages/<fr>.astro et src/pages/en/<en>.astro.
 * Les pages légales n'existent qu'en français (texte de référence) : la version anglaise y renvoie.
 */
export const languages = { fr: 'Français', en: 'English' } as const;
export const defaultLang = 'fr';
export type Lang = keyof typeof languages;

/** Pages disponibles dans les deux langues (sert au sélecteur de langue et aux balises hreflang). */
export const routes = {
  home: { fr: '/', en: '/en' },
  team: { fr: '/equipe', en: '/en/team' },
} as const;
export type RouteKey = keyof typeof routes;

/** Ancres des sections de l'accueil. */
const sections = {
  projects: { fr: 'projets', en: 'projects' },
  about: { fr: 'a-propos', en: 'about' },
  contact: { fr: 'contact', en: 'contact' },
} as const;
export type SectionKey = keyof typeof sections;

export function sectionId(lang: Lang, key: SectionKey): string {
  return sections[key][lang];
}
export function sectionHref(lang: Lang, key: SectionKey): string {
  return `${routes.home[lang]}#${sections[key][lang]}`;
}
export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

const fr = {
  'skip': 'Aller au contenu',
  'nav.label': 'Navigation principale',
  'nav.projects': 'Projets',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',
  'nav.home': 'KZULAB, accueil',
  'theme.toggle': 'Basculer entre thème clair et thème sombre',
  'lang.switch': 'English version',
  'lang.short': 'EN',
  'og.alt': "KZULAB, laboratoire d'idées",
  'hero.dim': "Laboratoire d'idées et lanceur de projets",
  'hero.lede': "KZULAB est un laboratoire d'idées. Nous développons des projets informatiques.",
  'hero.cta': 'Voir nos projets',
  'projects.title': 'Nos projets',
  'projects.sheet': 'Planche 1 : Projets',
  'projects.fig': 'Fig.',
  'link.newTab': '(nouvel onglet)',
  'projects.state': 'État',
  'projects.upcoming': 'À venir',
  'projects.upcoming.title': 'Prochain projet',
  'projects.upcoming.state': 'en atelier',
  'status.in-development': 'En développement',
  'status.coming-soon': 'Bientôt disponible',
  'status.available': 'Disponible',
  'about.title': 'À propos',
  'about.sheet': 'Planche 2 : Société',
  'about.p1': "KZULAB est un laboratoire d'idées : nous imaginons et développons des projets informatiques.",
  'about.p2':
    "La société a été fondée en 2026 par trois cofondateurs. Son premier projet, Animacatch, est un jeu mobile disponible sur Android, et bientôt sur iOS. Trois applications mobiles suivent : Pincity, Gloup et Ciao.",
  'about.teamLink': "Découvrir l'équipe",
  'team.caption': 'Les trois cofondateurs',
  'team.name': 'Nom',
  'team.role': 'Fonction',
  'team.title': 'Équipe',
  'team.sheet': 'Planche 4 : Direction',
  'team.intro':
    'KZULAB a été fondée en 2026 par trois cofondateurs, qui en assurent ensemble la direction.',
  'team.cofounder': 'Cofondateur',
  'team.photoPending': 'Photo à venir',
  'team.linkedin': 'LinkedIn',
  'team.linkedinOf': 'Profil LinkedIn de',
  'company.title': 'La société',
  'company.legalName': 'Raison sociale',
  'company.form': 'Forme juridique',
  'company.siren': 'SIREN',
  'company.rcs': 'Immatriculation',
  'company.founded': 'Création',
  'company.flagship': 'Projet phare',
  'company.contact': 'Contact',
  'company.legalLink': 'Toutes les informations légales figurent dans les',
  'company.legalLinkText': 'mentions légales',
  'contact.title': 'Contact',
  'contact.sheet': 'Planche 3 : Contact',
  'contact.text':
    "Une idée à nous soumettre, une proposition de partenariat ou une question sur l'un de nos projets ? Écrivez-nous par e-mail, nous vous répondrons dans les meilleurs délais.",
  'footer.label': 'Informations sur la société',
  'footer.name': 'Dénomination sociale',
  'footer.form': 'Forme',
  'footer.formValue': 'SAS au capital de 1 000 €',
  'footer.rcs': 'Immatriculation',
  'footer.contact': 'Contact',
  'footer.year': 'Année',
  'footer.docs': 'Documents',
  'footer.cookies': 'Cookies',
  'footer.cookies.value': 'Aucun',
  'legal.notice': 'Mentions légales',
  'legal.privacy': 'Confidentialité',
  'legal.docs': 'Documents légaux',
  'org.description':
    "KZULAB est une société française (SAS) fondée en 2026 par trois cofondateurs. Elle imagine et développe des applications mobiles.",
} as const;

type UiKey = keyof typeof fr;

const en: Record<UiKey, string> = {
  'skip': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.home': 'KZULAB, home',
  'theme.toggle': 'Switch between light and dark theme',
  'lang.switch': 'Version française',
  'lang.short': 'FR',
  'og.alt': 'KZULAB, idea lab',
  'hero.dim': 'Idea lab and project launcher',
  'hero.lede': 'KZULAB is an idea lab. We build software projects.',
  'hero.cta': 'See our projects',
  'projects.title': 'Our projects',
  'projects.sheet': 'Sheet 1: Projects',
  'projects.fig': 'Fig.',
  'link.newTab': '(opens in a new tab)',
  'projects.state': 'Status',
  'projects.upcoming': 'Upcoming',
  'projects.upcoming.title': 'Next project',
  'projects.upcoming.state': 'in the workshop',
  'status.in-development': 'In development',
  'status.coming-soon': 'Coming soon',
  'status.available': 'Available',
  'about.title': 'About',
  'about.sheet': 'Sheet 2: Company',
  'about.p1': 'KZULAB is an idea lab: we imagine and build software projects.',
  'about.p2':
    'The company was founded in 2026 by three co-founders. Its first project, Animacatch, is a mobile game available on Android and coming soon to iOS. Three mobile apps are next: Pincity, Gloup and Ciao.',
  'about.teamLink': 'Meet the team',
  'team.caption': 'The three co-founders',
  'team.name': 'Name',
  'team.role': 'Role',
  'team.title': 'Team',
  'team.sheet': 'Sheet 4: Leadership',
  'team.intro': 'KZULAB was founded in 2026 by three co-founders, who lead the company together.',
  'team.cofounder': 'Co-founder',
  'team.photoPending': 'Photo coming soon',
  'team.linkedin': 'LinkedIn',
  'team.linkedinOf': 'LinkedIn profile of',
  'company.title': 'The company',
  'company.legalName': 'Legal name',
  'company.form': 'Legal form',
  'company.siren': 'SIREN (French company number)',
  'company.rcs': 'Registration',
  'company.founded': 'Founded',
  'company.flagship': 'Flagship project',
  'company.contact': 'Contact',
  'company.legalLink': 'All legal information is available in the',
  'company.legalLinkText': 'legal notice (in French)',
  'contact.title': 'Contact',
  'contact.sheet': 'Sheet 3: Contact',
  'contact.text':
    'Have an idea to share, a partnership proposal or a question about one of our projects? Email us and we will get back to you as soon as possible.',
  'footer.label': 'Company information',
  'footer.name': 'Company name',
  'footer.form': 'Legal form',
  'footer.formValue': 'SAS (simplified joint-stock company), share capital €1,000',
  'footer.rcs': 'Registration',
  'footer.contact': 'Contact',
  'footer.year': 'Year',
  'footer.docs': 'Documents',
  'footer.cookies': 'Cookies',
  'footer.cookies.value': 'None',
  'legal.notice': 'Legal notice (in French)',
  'legal.privacy': 'Privacy policy (in French)',
  'legal.docs': 'Legal documents',
  'org.description':
    'KZULAB is a French company (SAS) founded in 2026 by three co-founders. It imagines and builds mobile apps.',
};

export const ui = { fr, en } as const;

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Texte disponible dans les deux langues. */
export type Localized = Record<Lang, string>;
