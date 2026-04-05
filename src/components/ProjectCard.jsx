import FluidButton from './FluidButton';

export default function ProjectCard({
  slug,
  title,
  year,
  description,
  imageSrc,
  imageClassName = 'size-full object-cover',
}) {
  return (
    <article className="flex h-full min-h-0 flex-col gap-2.5 rounded-2xl bg-white px-4 pb-6 pt-4">
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-lg bg-[#858585]">
        {imageSrc ? (
          <img
            alt=""
            src={imageSrc}
            className={`pointer-events-none max-w-none ${imageClassName}`}
          />
        ) : null}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3.5">
        <div className="flex flex-col gap-2.5 px-2 text-base leading-normal">
          <div className="flex w-full items-center justify-between gap-4 whitespace-nowrap">
            <h2 className="font-[Nunito,sans-serif] font-bold text-black/75">
              {title}
            </h2>
            <time className="shrink-0 font-[Nunito,sans-serif] font-normal text-black/50">
              {year}
            </time>
          </div>
          <p className="font-[Nunito,sans-serif] text-base font-normal text-black/50">
            {description}
          </p>
        </div>
        <div className="px-2">
          <FluidButton to={`/work/${slug}`}>
            Learn More
          </FluidButton>
        </div>
      </div>
    </article>
  );
}
