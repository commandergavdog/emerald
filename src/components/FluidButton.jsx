import { Link } from 'react-router-dom';

export default function FluidButton({ to, onClick, children, className = '' }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`fluid-btn inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-8 py-2 text-base shadow-[0_4px_4px_rgba(0,0,0,0.1)] ${className}`}
    >
      <span className="block h-[1em] overflow-hidden leading-[1em]">
        <span className="fluid-btn-slide flex flex-col items-center">
          <span className="purple-background-gradient block h-[1em] leading-[1em] font-[Nunito,sans-serif] font-semibold">
            {children}
          </span>
          <span className="purple-background-gradient block h-[1em] leading-[1em] font-[Nunito,sans-serif] font-semibold">
            {children}
          </span>
        </span>
      </span>
    </Link>
  );
}
