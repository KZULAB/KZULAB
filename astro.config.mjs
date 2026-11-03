// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kzulab.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Français à la racine, anglais sous /en (libellés et routes : src/i18n/ui.ts).
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
