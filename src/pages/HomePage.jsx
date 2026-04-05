import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SiteFooter from '../components/SiteFooter';
import { PROJECTS } from '../data/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        id="works"
        className="mt-10 scroll-mt-8 px-4 pb-8 md:mt-12 md:px-[min(7.5vw,118px)]"
        aria-label="Selected works"
      >
        <div className="mx-auto grid max-w-[1164px] grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              year={project.year}
              description={project.summary}
              imageSrc={project.imageSrc}
              imageClassName={project.imageClassName}
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
