import { forwardRef } from 'react';

const BAR =
  'block h-0.5 w-full max-w-[44px] rounded-full bg-[#9D9D9D] origin-center transition duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0';

const MenuMorphButton = forwardRef(function MenuMorphButton({ menuOpen, onToggle }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md p-1 ${
        menuOpen
          ? 'fixed right-4 top-8 z-[101] md:top-16 md:right-[max(1rem,calc((100vw-1400px)/2+min(7.5vw,118px)))]'
          : 'relative z-10'
      }`}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation-dialog"
      aria-haspopup="dialog"
    >
      <span className="flex h-[22px] w-11 flex-col justify-between" aria-hidden="true">
        <span
          className={`${BAR} ${menuOpen ? 'translate-y-[10px] rotate-45' : 'translate-y-0 rotate-0'}`}
        />
        <span
          className={`${BAR} ${menuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'}`}
        />
        <span
          className={`${BAR} ${menuOpen ? '-translate-y-[10px] -rotate-45' : 'translate-y-0 rotate-0'}`}
        />
      </span>
    </button>
  );
});

export default MenuMorphButton;
