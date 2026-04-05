import { forwardRef } from 'react';
import MenuMorphButton from './MenuMorphButton';

const SiteHeader = forwardRef(function SiteHeader({ onMenuToggle, menuOpen = false }, ref) {
  return (
    <header className="grid grid-cols-3 items-center px-4 pt-8 md:px-[min(7.5vw,118px)] md:pt-16">
      <div aria-hidden="true" />
      <div className="flex justify-center">
        <img src="/icons/code.svg" alt="" className="h-10 w-auto md:h-12" width={80} height={49} />
      </div>
      <div className="flex min-h-11 justify-end">
        <MenuMorphButton ref={ref} menuOpen={menuOpen} onToggle={onMenuToggle} />
      </div>
    </header>
  );
});

export default SiteHeader;
