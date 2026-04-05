import { motion } from 'framer-motion';

const springHover = { type: 'spring', duration: 0.4, bounce: 0.2 };

export default function SiteFooter() {
  return (
    <footer className="relative mt-20 px-4 pb-16 pt-12 text-center md:mt-32 md:pb-20 md:pt-16">
      <div className="footer-glow-layer" aria-hidden="true" />
      <p className="relative font-['ITC_Garamond_Std',Georgia,serif] text-2xl font-light text-black/75 md:text-[32px]">
        <motion.a
          href="mailto:frankd1997@gmail.com"
          className="inline-block"
          whileHover={{ y: -8 }}
          transition={springHover}
        >
          frankd1997@gmail.com
        </motion.a>
      </p>
      <div className="relative mt-6 flex items-center justify-center gap-8">
        <motion.a
          href="https://github.com/commandergavdog"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-7 w-8 md:h-[26px]"
          aria-label="GitHub"
          whileHover={{ y: -8 }}
          transition={springHover}
        >
          <img src="/icons/github.svg" alt="" className="size-full" width={40} height={40} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/frank-dominguez3/"
          target="_blank"
          rel="noopener noreferrer"
          className="block size-8"
          aria-label="LinkedIn"
          whileHover={{ y: -8 }}
          transition={springHover}
        >
          <img src="/icons/linkedin.svg" alt="" className="size-full" width={40} height={40} />
        </motion.a>
      </div>
    </footer>
  );
}
