# CLAUDE.md — site vitrine KZULAB

## ⚠️ Règle n°1 — dépôt PUBLIC, aucune information sensible
Ce dépôt est public sur GitHub : tout ce qui est commité est visible par tous, **historique compris** (supprimer un fichier ensuite ne l'efface pas).
- Ne jamais commiter : secrets (clés, tokens, mots de passe, `.env*`, identifiants OVH/GitHub/Google…), documents officiels (Kbis, statuts, pièces d'identité, RIB, factures), données personnelles non publiques (dates/lieux de naissance, domiciles, téléphones ou emails personnels), notes internes (`brief/`, `CLAUDE.local.md`).
- Le site n'affiche que les mentions légales obligatoires déjà publiques. Adresse du siège et téléphone : **uniquement** sur `/mentions-legales` (et l'adresse dans le JSON-LD `Organization`), nulle part ailleurs.
- Avant **chaque** commit : relire `git diff --cached` et vérifier qu'aucun de ces éléments n'y figure. En cas de doute, ne pas commiter et demander.
- Aucun secret n'est nécessaire (déploiement via le `GITHUB_TOKEN` des Actions). Si un jour il en faut un : *Secrets* GitHub, jamais dans le code.

## Conventions
- Astro (sortie statique) + TypeScript + Tailwind CSS, déployé sur GitHub Pages par GitHub Actions à chaque push sur `main`.
- Zéro cookie, zéro traceur, zéro analytics, polices auto-hébergées, contact par `mailto:` uniquement.
- Projets : un seul fichier de données (`src/data/projects.ts`).
- Textes et messages de commit en français. Structure prête pour l'anglais, non implémentée.
- Accessibilité WCAG AA, mobile d'abord, mode sombre, `prefers-reduced-motion` respecté.

## Textes légaux
Toute création ou modification des mentions légales, de la politique de confidentialité ou de la page cookies est relue par un **sous-agent juriste** dédié (droit français, LCEN, RGPD) avant d'être présentée. Ne jamais inventer une information légale.

## DNS
Ne jamais modifier (ni proposer de supprimer) les enregistrements DNS liés aux e-mails (MX, SPF…) ni ceux des autres sous-domaines. Seuls les A/AAAA de l'apex et le CNAME `www` concernent ce site. Les changements DNS sont faits à la main par le propriétaire du domaine, jamais par Claude. Détails internes : `CLAUDE.local.md` (non commité).
