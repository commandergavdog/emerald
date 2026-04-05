import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ExternalLinkIcon from '../components/ExternalLinkIcon';
import SiteFooter from '../components/SiteFooter';
import { getProjectBySlug, getProjectSiblings } from '../data/projects';

const HORIZONTAL_OFFSET = 96;
const MotionArticle = motion.article;
const MotionDiv = motion.div;

const cardVariants = {
  enter: (direction) => {
    if (direction === 1) {
      return { opacity: 0, x: HORIZONTAL_OFFSET, y: 0, scale: 0.985 };
    }

    if (direction === -1) {
      return { opacity: 0, x: -HORIZONTAL_OFFSET, y: 0, scale: 0.985 };
    }

    return { opacity: 0, x: 0, y: 40, scale: 0.985 };
  },
  center: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: (direction) => {
    if (direction === 1) {
      return { opacity: 0, x: -HORIZONTAL_OFFSET, y: 0, scale: 0.985 };
    }

    if (direction === -1) {
      return { opacity: 0, x: HORIZONTAL_OFFSET, y: 0, scale: 0.985 };
    }

    return { opacity: 0, x: 0, y: 40, scale: 0.985 };
  },
};

const cardTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
};

function getStaggerVariants(shouldReduceMotion, delayChildren = 0, staggerChildren = 0) {
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
        delayChildren,
        staggerChildren,
      },
    },
  };
}

function getRevealVariants(shouldReduceMotion, offset = 24, scale = 1) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      },
    };
  }

  return {
    hidden: { opacity: 0, x: 0, y: offset, scale },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
}

function ChevronLeft({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const project = slug ? getProjectBySlug(slug) : null;
  const [closing, setClosing] = useState(false);
  const navigationDirection = location.state?.caseStudyDirection ?? 0;
  const cardDirection = closing ? 0 : navigationDirection;
  const contentVariants = getStaggerVariants(shouldReduceMotion, 0.14, 0.12);
  const splitVariants = getStaggerVariants(shouldReduceMotion, 0.05, 0.1);
  const textVariants = getStaggerVariants(shouldReduceMotion, 0.02, 0.08);
  const sectionVariants = getRevealVariants(shouldReduceMotion, 18, 0.985);
  const imageVariants = getRevealVariants(shouldReduceMotion, 26, 0.97);

  const navigateToProject = useCallback(
    (to, direction) => {
      navigate(to, { state: { caseStudyDirection: direction } });
    },
    [navigate],
  );

  useEffect(() => {
    setClosing(false);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getProjectSiblings(slug);
  const {
    caseTitle,
    year,
    description,
    imageSrc,
    imageClassName,
    technologies,
    externalUrl,
  } = project;

  return (
    <>
      <section className="px-4 pb-2 pt-6 text-center md:pb-4 md:pt-8">
        <h1 className="font-['ITC_Garamond_Std',Georgia,serif] text-5xl font-light leading-none text-black md:text-[64px]">
          <Link to="/" className="">
            Frank Dominguez
          </Link>
        </h1>
      </section>

      <div className="overflow-hidden px-4 pb-12 pt-6 md:px-[min(7.5vw,102px)] md:pb-16 md:pt-8">
        <div className="grid">
          <AnimatePresence custom={cardDirection}>
          <MotionArticle
            key={slug}
            className="col-start-1 row-start-1 mx-auto w-full max-w-[1200px] rounded-2xl bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.05)] md:p-10 lg:p-14"
            custom={cardDirection}
            variants={cardVariants}
            initial="enter"
            animate={closing ? 'exit' : 'center'}
            exit="exit"
            transition={cardTransition}
            onAnimationComplete={() => {
              if (closing) {
                navigate('/');
              }
            }}
          >
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <MotionDiv
                variants={sectionVariants}
                className="flex items-center justify-between gap-4"
              >
                <p className="font-[Nunito,sans-serif] text-base font-bold text-black/75">Project</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {prev ? (
                      <button
                        type="button"
                        onClick={() => navigateToProject(`/work/${prev.slug}`, -1)}
                        className="flex size-8 cursor-pointer items-center justify-center rounded-md text-black/50 transition-colors hover:text-black/75"
                        aria-label={`Previous project: ${prev.caseTitle}`}
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                    ) : (
                      <span className="flex size-8 items-center justify-center text-black/20" aria-hidden="true">
                        <ChevronLeft className="size-5" />
                      </span>
                    )}
                    {next ? (
                      <button
                        type="button"
                        onClick={() => navigateToProject(`/work/${next.slug}`, 1)}
                        className="flex size-8 cursor-pointer items-center justify-center rounded-md text-black/50 transition-colors hover:text-black/75"
                        aria-label={`Next project: ${next.caseTitle}`}
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    ) : (
                      <span className="flex size-8 items-center justify-center text-black/20" aria-hidden="true">
                        <ChevronRight className="size-5" />
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setClosing(true)}
                    className="flex size-8 cursor-pointer items-center justify-center rounded-md text-black/50 transition-colors hover:text-black/75"
                    aria-label="Close project and return home"
                  >
                    <CloseIcon className="size-5" />
                  </button>
                </div>
              </MotionDiv>

              <MotionDiv
                variants={splitVariants}
                className="mt-8 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-start lg:gap-12"
              >
                <MotionDiv variants={textVariants} className="min-w-0 flex-1">
                  <MotionDiv variants={sectionVariants} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <h2 className="font-[Nunito,sans-serif] text-[22px] font-bold leading-normal text-black/75">
                        {caseTitle}
                      </h2>
                      {externalUrl ? (
                        <a
                          href={externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-[#6046C8] hover:opacity-80"
                          aria-label={`Open ${caseTitle} (opens in a new tab)`}
                        >
                          <ExternalLinkIcon />
                        </a>
                      ) : null}
                    </div>
                    <p className="font-[Nunito,sans-serif] text-[22px] font-normal text-black/50">{year}</p>
                  </MotionDiv>

                  <MotionDiv variants={sectionVariants}>
                    <p className="mt-4 font-[Nunito,sans-serif] text-base font-normal leading-normal text-black/50">
                      {description}
                    </p>
                  </MotionDiv>

                  <MotionDiv variants={sectionVariants} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 lg:mt-10">
                    <p className="font-[Nunito,sans-serif] text-lg font-bold text-black/75">With</p>
                    <ul className="list-none font-[Nunito,sans-serif] text-lg font-normal text-black/50">
                      {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </MotionDiv>
                </MotionDiv>

                <MotionDiv
                  variants={imageVariants}
                  className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-lg bg-[#858585] sm:h-[280px] lg:w-[min(100%,534px)] lg:max-w-[534px]"
                >
                  {imageSrc ? (
                    <img
                      alt=""
                      src={imageSrc}
                      className={`pointer-events-none max-w-none ${imageClassName}`}
                    />
                  ) : null}
                </MotionDiv>
              </MotionDiv>
            </MotionDiv>
          </MotionArticle>
          </AnimatePresence>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
