import { forwardRef } from 'react';

const BAR =
  'block h-0.5 w-full max-w-[44px] rounded-full bg-current origin-center transition duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0';

const MenuMorphButton = forwardRef(function MenuMorphButton({ menuOpen, onToggle }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      className="absolute right-4 top-8 z-[101] flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md p-1 text-[#9D9D9D] transition-colors duration-200 ease-out hover:text-[#6F6F6F] focus-visible:text-[#6F6F6F] focus-visible:outline-none md:right-[max(1rem,calc((100vw-1400px)/2+min(7.5vw,118px)))] md:top-16"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation-dialog"
      aria-haspopup="dialog"
    >
      <span className="relative h-[22px] w-11" aria-hidden="true">
        {/* Top line — fades out when open */}
        <span
          className={`${BAR} absolute top-0 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Middle — two stacked lines that rotate to form X */}
        <span
          className={`${BAR} absolute top-1/2 -translate-y-1/2 ${menuOpen ? 'rotate-45' : 'rotate-0'}`}
        />
        <span
          className={`${BAR} absolute top-1/2 -translate-y-1/2 ${menuOpen ? '-rotate-45' : 'rotate-0'}`}
        />
        {/* Bottom line — fades out when open */}
        <span
          className={`${BAR} absolute bottom-0 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
      </span>
    </button>
  );
});

export default MenuMorphButton;
