const PLACEHOLDER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend porttitor metus, auctor pretium tortor interdum eu. Cras purus urna, hendrerit vitae sollicitudin ac, condimentum nec erat.';

export const PROJECTS = [
  {
    slug: 'help-gavin',
    title: 'HelpGavin.com',
    caseTitle: 'Help Gavin',
    year: '2023',
    summary:
      "HelpGavin.com is a fundraising website built to raise money for a dog's medical expenses. The website aims to provide visitors with a seamless experience to learn about Gavin's story, view pictures, and make donations.",
    description:
      "HelpGavin.com is a fundraising website built to raise money for a dog's medical expenses. The website aims to provide visitors with a seamless experience to learn about Gavin's story, view pictures, and make donations.",
    imageSrc: '/images/portfolio/help-gavin.webp',
    imageClassName: 'absolute inset-0 size-full object-cover rounded-lg',
    technologies: ['HTML', 'CSS', 'jQuery', 'Google Analytics'],
    externalUrl: 'https://helpgavin.com',
  },
  {
    slug: 'no-bones',
    title: 'No Bones About It',
    caseTitle: 'No Bones About It',
    year: '2023',
    summary: PLACEHOLDER,
    description: PLACEHOLDER,
    imageSrc: '/images/portfolio/no-bones.webp',
    imageClassName: 'absolute inset-0 size-full object-cover rounded-lg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    externalUrl: null,
  },
  {
    slug: 'thank-you',
    title: 'Title',
    caseTitle: 'Thank You',
    year: '2023',
    summary: PLACEHOLDER,
    description: PLACEHOLDER,
    imageSrc: '/images/portfolio/thank-you.webp',
    imageClassName:
      'absolute left-0 top-[-3.83%] h-[136.22%] w-full max-w-none object-cover rounded-lg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    externalUrl: null,
  },
  {
    slug: 'melody',
    title: 'Title',
    caseTitle: 'Melody',
    year: '2023',
    summary: PLACEHOLDER,
    description: PLACEHOLDER,
    imageSrc: '/images/portfolio/melody.webp',
    imageClassName:
      'absolute left-0 top-[-4.29%] h-[172.86%] w-full max-w-none object-cover rounded-lg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    externalUrl: null,
  },
  {
    slug: 'project-five',
    title: 'Title',
    caseTitle: 'Title',
    year: '2023',
    summary: PLACEHOLDER,
    description: PLACEHOLDER,
    imageSrc: null,
    imageClassName: 'absolute inset-0 size-full object-cover rounded-lg',
    technologies: ['HTML', 'CSS'],
    externalUrl: null,
  },
  {
    slug: 'project-six',
    title: 'Title',
    caseTitle: 'Title',
    year: '2023',
    summary: PLACEHOLDER,
    description: PLACEHOLDER,
    imageSrc: null,
    imageClassName: 'absolute inset-0 size-full object-cover rounded-lg',
    technologies: ['HTML', 'CSS'],
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
