// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://kzulab.com';
/** Paires [fr, en] des pages traduites, à garder alignées sur `routes` (src/i18n/ui.ts). */
const translated = [
  ['/', '/en'],
  ['/equipe', '/en/team'],
];

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  // Français à la racine, anglais sous /en (libellés et routes : src/i18n/ui.ts).
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // CSP en balise <meta> (GitHub Pages ne permet pas d'en-têtes HTTP) : Astro ajoute les empreintes des scripts et styles.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
    },
  },
  integrations: [
    sitemap({
      // Balises hreflang dans le plan du site : pages traduites (mêmes paires que `routes` dans src/i18n/ui.ts).
      serialize(item) {
        const pair = translated.find((p) => p.some((u) => new URL(u, SITE).href === item.url));
        if (pair) {
          item.links = [
            { lang: 'fr-FR', url: new URL(pair[0], SITE).href },
            { lang: 'en-US', url: new URL(pair[1], SITE).href },
          ];
        }
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
