import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import ExternalLinkIcon from '../components/ExternalLinkIcon';
import SiteFooter from '../components/SiteFooter';
import { getProjectBySlug, getProjectSiblings } from '../data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardTransition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] };

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
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : null;
  const [exiting, setExiting] = useState(false);
  const [exitTarget, setExitTarget] = useState(null);

  const animateOut = useCallback((to) => {
    setExitTarget(to);
    setExiting(true);
  }, []);

  const onExitComplete = useCallback(() => {
    if (exitTarget) navigate(exitTarget);
  }, [exitTarget, navigate]);

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

      <div className="px-4 pb-12 pt-6 md:px-[min(7.5vw,102px)] md:pb-16 md:pt-8">
        <motion.article
          key={slug}
          className="mx-auto max-w-[1200px] rounded-2xl bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.05)] md:p-10 lg:p-14"
          variants={cardVariants}
          initial="hidden"
          animate={exiting ? 'hidden' : 'visible'}
          transition={cardTransition}
          onAnimationComplete={() => { if (exiting) onExitComplete(); }}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-[Nunito,sans-serif] text-base font-bold text-black/75">Project</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {prev ? (
                  <button
                    type="button"
                    onClick={() => animateOut(`/work/${prev.slug}`)}
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
                    onClick={() => animateOut(`/work/${next.slug}`)}
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
                onClick={() => animateOut('/')}
                className="flex size-8 cursor-pointer items-center justify-center rounded-md text-black/50 transition-colors hover:text-black/75"
                aria-label="Close project and return home"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
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
              </div>

              <p className="mt-4 font-[Nunito,sans-serif] text-base font-normal leading-normal text-black/50">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 lg:mt-10">
                <p className="font-[Nunito,sans-serif] text-lg font-bold text-black/75">With</p>
                <ul className="list-none font-[Nunito,sans-serif] text-lg font-normal text-black/50">
                  {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-lg bg-[#858585] sm:h-[280px] lg:w-[min(100%,534px)] lg:max-w-[534px]">
              {imageSrc ? (
                <img
                  alt=""
                  src={imageSrc}
                  className={`pointer-events-none max-w-none ${imageClassName}`}
                />
              ) : null}
            </div>
          </div>
        </motion.article>
      </div>

      <SiteFooter />
    </>
  );
}
