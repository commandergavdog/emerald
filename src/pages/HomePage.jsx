import { motion, useReducedMotion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import SiteFooter from '../components/SiteFooter';
import { PROJECTS } from '../data/projects';

const MotionDiv = motion.div;

function getGridVariants(shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {
      hidden: {},
      visible: {},
    };
  }

  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };
}

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const gridVariants = getGridVariants(shouldReduceMotion);

  return (
    <>
      <Seo
        title="Frank Dominguez | Web Developer & Designer"
        description="Portfolio of Frank Dominguez, a web developer and designer creating thoughtful, accessible, and visually refined digital experiences."
        path="/"
      />
      <Hero />
      <section
        id="works"
        className="mt-10 scroll-mt-8 px-4 pb-8 md:mt-12 md:px-[min(7.5vw,118px)]"
        aria-label="Selected works"
      >
        <MotionDiv
          className="mx-auto grid max-w-[1164px] grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={gridVariants}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              year={project.year}
              description={project.summary}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              imageClassName={project.imageClassName}
            />
          ))}
        </MotionDiv>
      </section>
      <SiteFooter />
    </>
  );
}
