export const PROJECTS = [
  {
    slug: 'richon-planning',
    title: 'Richon Planning',
    caseTitle: 'Richon Planning',
    year: '2026',
    summary:
      'A refined financial planning website designed to make complex services feel approachable, trustworthy, and easy to navigate for individuals and families preparing for the future.',
    description:
      'Designed in Figma and built in WordPress with Elementor, Richon Planning presents retirement, investment, tax, health care, and legacy planning in a calm, structured way. The layout balances credibility with warmth through clear service breakdowns, reassuring messaging, and intentional calls to action that guide visitors toward starting a plan.',
    imageSrc: '/images/portfolio/richon-planning.png',
    imageAlt: 'Homepage preview of the Richon Planning website.',
    imageClassName: 'absolute inset-0 size-full object-cover object-top rounded-lg',
    technologies: ['Figma', 'WordPress', 'Elementor'],
    externalUrl: null,
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getProjectSiblings(slug) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : null,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
  };
}
