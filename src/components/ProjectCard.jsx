import { motion, useReducedMotion } from 'framer-motion';
import FluidButton from './FluidButton';

const MotionArticle = motion.article;

function getCardVariants(shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, scale: 1 },
      visible: { opacity: 1, y: 0, scale: 1 },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: 14,
      scale: 0.992,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };
}

export default function ProjectCard({
  slug,
  title,
  year,
  description,
  imageSrc,
  imageClassName = 'size-full object-cover',
}) {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = getCardVariants(shouldReduceMotion);

  return (
    <MotionArticle
      className="flex h-full min-h-0 flex-col gap-2.5 rounded-2xl bg-white px-4 pb-6 pt-4"
      variants={cardVariants}
    >
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
        <div className="px-2 mt-auto">
          <FluidButton to={`/work/${slug}`}>
            Learn More
          </FluidButton>
        </div>
      </div>
    </MotionArticle>
  );
}
