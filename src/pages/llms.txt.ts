// /llms.txt : résumé factuel du site pour les moteurs et assistants (format https://llmstxt.org).
// Généré depuis les mêmes données que les pages (src/data), pour ne jamais diverger.
// Règle (CLAUDE.md) : ni adresse du siège ni téléphone ici.
import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { company, team } from '../data/site';
import { ui } from '../i18n/ui';

const status = (s: keyof typeof labels) => labels[s];
const labels = {
  available: 'disponible',
  'coming-soon': 'bientôt disponible',
  'in-development': 'en développement',
} as const;

export const GET: APIRoute = () => {
  const lines = [
    `# ${company.name}`,
    '',
    `> ${ui.fr['org.description']}`,
    '',
    '## Qui sommes-nous',
    '',
    `- Raison sociale : ${company.name} ${company.legalFormShort}, au capital de ${company.capital}`,
    `- Immatriculation : ${company.rcs} (SIREN ${company.siren})`,
    `- Création : ${company.foundingDate.slice(0, 4)}`,
    `- Dirigeants : ${team.map((m) => `${m.name} (${m.role.fr})`).join(', ')}`,
    `- Contact : ${company.email}`,
    `- Site : ${company.url}/ (français), ${company.url}/en (anglais)`,
    '',
    '## Projets',
    '',
    ...projects.map(
      (p) =>
        `- [${p.name}](${p.url ?? company.url}) : ${p.kind.fr.toLowerCase()} pour ${p.platforms.join(' et ')}, ${status(p.status)}. ${p.pitch.fr}`,
    ),
    '',
    '## Pages',
    '',
    `- [Accueil](${company.url}/) : projets, à propos, contact`,
    `- [Équipe](${company.url}/equipe) : les trois cofondateurs`,
    `- [English version](${company.url}/en)`,
    `- [Mentions légales](${company.url}/mentions-legales)`,
    `- [Politique de confidentialité](${company.url}/confidentialite)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
