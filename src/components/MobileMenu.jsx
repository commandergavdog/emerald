import { useEffect } from 'react';
import { motion } from 'framer-motion';
import FluidButton from './FluidButton';

const springHover = { type: 'spring', duration: 0.4, bounce: 0.2 };

export default function MobileMenu({ open, onClose, returnFocusRef }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        queueMicrotask(() => returnFocusRef?.current?.focus());
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, returnFocusRef]);

  const handleNavClick = () => {
    onClose();
    queueMicrotask(() => returnFocusRef?.current?.focus());
  };

  return (
    <div
      id="mobile-navigation-dialog"
      inert={!open ? true : undefined}
      className={`fixed inset-0 z-[100] flex flex-col bg-gradient-to-b from-[#f0f2f5] to-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
        open ? 'translate-x-0' : 'pointer-events-none -translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      aria-hidden={!open}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        <div className="flex items-start justify-between px-4 pr-16 pt-8 md:px-[min(7.5vw,118px)] md:pr-[calc(min(7.5vw,118px)+2.75rem)] md:pt-16">
          <p
            id="mobile-menu-title"
            className="min-w-0 font-['ITC_Garamond_Std',Georgia,serif] text-5xl font-light leading-none text-black md:text-[64px]"
          >
            Frank Dominguez
          </p>
        </div>

        <nav
          className="flex flex-1 flex-col items-center justify-start pt-24 gap-16 px-4"
          aria-label="Primary"
        >
          <FluidButton to="/#works" onClick={handleNavClick}>
            Work
          </FluidButton>
          <FluidButton to="/about" onClick={handleNavClick}>
            About Me
          </FluidButton>
        </nav>

        <footer className="relative px-4 pb-16 pt-8 text-center">
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
              <img src="/icons/github.svg" alt="" className="size-full" width={32} height={26} />
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
              <img src="/icons/linkedin.svg" alt="" className="size-full" width={32} height={32} />
            </motion.a>
          </div>
        </footer>
      </div>
    </div>
  );
}
