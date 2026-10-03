// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kzulab.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Français seul pour l'instant. Pour ajouter l'anglais : ajouter 'en' à `locales`,
  // compléter src/i18n/ui.ts et créer les pages sous src/pages/en/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
