import { Link, Navigate, useParams } from 'react-router-dom';
import ExternalLinkIcon from '../components/ExternalLinkIcon';
import SiteFooter from '../components/SiteFooter';
import { getProjectBySlug } from '../data/projects';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <Navigate to="/" replace />;
  }

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
      <section className="px-4 pb-2 pt-2 text-center md:pb-4 md:pt-4">
        <h1 className="font-['ITC_Garamond_Std',Georgia,serif] text-5xl font-light leading-none text-black md:text-[64px]">
          <Link to="/" className="hover:underline">
            Frank Dominguez
          </Link>
        </h1>
      </section>

      <div className="px-4 pb-12 pt-6 md:px-[min(7.5vw,102px)] md:pb-16 md:pt-8">
        <article className="mx-auto max-w-[1200px] rounded-2xl bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.05)] md:p-10 lg:p-14">
          <div className="flex items-start justify-between gap-4">
            <p className="font-[Nunito,sans-serif] text-base font-bold text-black/75">Project</p>
            <Link
              to="/"
              className="shrink-0 p-0.5"
              aria-label="Close project and return home"
            >
              <img src="/icons/card-close.svg" alt="" className="size-7" width={28} height={28} />
            </Link>
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
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
