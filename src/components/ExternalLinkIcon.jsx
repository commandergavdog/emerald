export default function ExternalLinkIcon({ className = '' }) {
  return (
    <span className={`relative inline-block size-[18px] shrink-0 ${className}`} aria-hidden="true">
      <img
        src="/icons/external-link-1.svg"
        alt=""
        className="pointer-events-none absolute inset-0 block size-full max-w-none"
      />
      <img
        src="/icons/external-link-2.svg"
        alt=""
        className="pointer-events-none absolute inset-0 block size-full max-w-none"
      />
    </span>
  );
}
