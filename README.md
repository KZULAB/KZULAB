# kzulab.com

Site vitrine de **KZULAB** : une page d'accueil (projets, à propos, contact) et les pages légales.
Astro (sortie 100 % statique) + TypeScript + Tailwind CSS, hébergé sur GitHub Pages.

> ⚠️ Ce dépôt est **public**. Ne jamais y commiter de secret, de document officiel ni de donnée personnelle non publique. Voir [CLAUDE.md](CLAUDE.md).

## Lancer en local

Prérequis : Node.js 22.12 ou plus récent.

```sh
npm install
npm run dev       # serveur de développement sur http://localhost:4321
npm run build     # vérification des types (astro check) puis génération dans dist/
npm run preview   # sert le contenu de dist/ pour vérifier le rendu final
```

## Ajouter ou modifier un projet

Tout se passe dans [src/data/projects.ts](src/data/projects.ts) :

1. Déposer l'icône du projet (PNG carré, idéalement 1024 × 1024) dans `src/assets/projects/`, puis l'importer en haut du fichier.
2. Ajouter un objet au tableau `projects` : `name`, `kind` (ex. « Jeu mobile »), `platforms`, `status` (`in-development`, `coming-soon` ou `available`), `pitch`, `icon`.
3. Ajouter `links` **seulement** quand les liens sont confirmés et en ligne (App Store, Google Play, site du projet).
4. Ajuster `upcomingSlots` (nombre de cartes « Projet en préparation », 0 pour aucune).

Les informations de la société (mentions légales, équipe, contact) sont dans [src/data/site.ts](src/data/site.ts). Les libellés d'interface sont dans [src/i18n/ui.ts](src/i18n/ui.ts).

## Structure

```
src/
  data/        projets et informations de la société
  i18n/        libellés d'interface (français ; prêt pour l'anglais)
  layouts/     gabarit commun : <head>, SEO, Open Graph, JSON-LD
  components/  en-tête, cartouche (pied de page), figures de projet
  pages/       accueil, mentions légales, confidentialité, 404
  styles/      jetons de couleur (clair / sombre) et styles globaux
public/        CNAME, robots.txt, icônes, image Open Graph
```

**Version anglaise (non implémentée)** : ajouter `'en'` à `i18n.locales` dans [astro.config.mjs](astro.config.mjs), compléter `ui.en` dans `src/i18n/ui.ts`, puis créer les pages sous `src/pages/en/`.

## Vie privée

Aucun cookie, aucun traceur, aucune mesure d'audience, aucune ressource tierce : les polices (Archivo, Martian Mono, licence SIL OFL 1.1) sont servies par le site. Le seul stockage est le choix du thème (clé `kz-theme` du `localStorage`), enregistré uniquement si le visiteur utilise le bouton. Toute évolution sur ce point doit être répercutée dans la politique de confidentialité.

## Déployer

Chaque push sur `main` déclenche [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (action officielle `withastro/action`), qui construit le site et le publie sur GitHub Pages. Aucun secret n'est nécessaire.

Réglages à faire une seule fois dans GitHub :

1. **Dépôt → Settings → Pages → Build and deployment → Source** : « GitHub Actions ».
2. **Dépôt → Settings → Pages → Custom domain** : `kzulab.com`, puis cocher **Enforce HTTPS** dès que le certificat est émis.

## Configurer le DNS (OVH)

Le domaine `kzulab.com` est géré chez OVH. **Ne jamais toucher** aux enregistrements liés aux e-mails (MX, SPF, DKIM, DMARC) ni aux autres sous-domaines (par exemple `animacatch`).

1. **Vérifier le domaine dans l'organisation GitHub** (protège contre le détournement de domaine) : organisation KZULAB → Settings → Pages → *Add a domain* → `kzulab.com`. GitHub fournit un enregistrement TXT `_github-pages-challenge-KZULAB` et sa valeur ; le créer chez OVH, puis cliquer sur *Verify*. Garder ce TXT ensuite.
2. **Apex `kzulab.com`** : remplacer les A/AAAA existants par ceux de GitHub Pages ([documentation](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)) :
   - A : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - AAAA : `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
3. **`www`** : CNAME vers `kzulab.github.io.` (GitHub redirige alors `www.kzulab.com` vers `kzulab.com`).
4. Ne jamais créer d'enregistrement générique (`*.kzulab.com`).
