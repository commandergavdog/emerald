import { useMemo, useSyncExternalStore } from 'react';
import Seo from '../components/Seo';
import SiteFooter from '../components/SiteFooter';
import { ABOUT_GALLERY } from '../data/aboutGallery';

const LG = '(min-width: 1024px)';
function useIsLg() {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(LG);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    },
    () => window.matchMedia(LG).matches,
    () => false,
  );
}

function distributeMasonry(items, columns, getHeight) {
  const cols = Array.from({ length: columns }, () => []);
  const heights = Array(columns).fill(0);
  items.forEach((item) => {
    const shortest = heights.indexOf(Math.min(...heights));
    cols[shortest].push(item);
    heights[shortest] += getHeight(item);
  });
  return cols;
}

function GalleryTile({ item, height }) {
  return (
    <figure>
      <div
        className="relative w-full overflow-hidden rounded-lg bg-neutral-300"
        style={{ height }}
      >
        <img src={item.src} alt={item.alt} className={item.imgClass} />
      </div>
    </figure>
  );
}

function MasonryGallery() {
  const isLg = useIsLg();
  const columns = isLg ? 4 : 2;
  const gap = isLg ? 16 : 12;

  const columnArrays = useMemo(
    () =>
      distributeMasonry(ABOUT_GALLERY, columns, (item) =>
        isLg ? item.height.lg : item.height.base,
      ),
    [columns, isLg],
  );

  return (
    <div
      className="mx-auto mt-8 max-w-[1200px] px-4 lg:mt-10 lg:px-[min(7.5vw,102px)]"
      style={{ display: 'flex', gap, alignItems: 'flex-start' }}
    >
      {columnArrays.map((col, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap }}>
          {col.map((item) => (
            <GalleryTile
              key={item.id}
              item={item}
              height={isLg ? item.height.lg : item.height.base}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Frank Dominguez | Web Developer & Designer"
        description="Learn more about Frank Dominguez, a Kansas City-based web developer and designer focused on thoughtful, accessible digital experiences."
        path="/about"
      />
      <main id="about" className="pb-10 lg:pb-16">
        <div className="px-4 pt-4 md:px-[min(7.5vw,118px)] lg:pt-6">
          <div className="flex flex-col lg:items-center">
            <div className="relative mx-auto lg:mx-0">
              <img
                src="/images/about/avatar-mobile.webp"
                alt="Portrait of Frank Dominguez."
                className="size-[122px] rounded-full object-cover lg:hidden"
                width={122}
                height={122}
              />
              <img
                src="/images/about/avatar-desktop.webp"
                alt="Portrait of Frank Dominguez."
                className="hidden size-[200px] rounded-full object-cover lg:block"
                width={200}
                height={200}
              />
            </div>

            <h1 className="mt-6 w-full text-center font-['ITC_Garamond_Std',Georgia,serif] text-[48px] font-light leading-none text-black lg:mt-10 lg:text-[64px]">
              Hi! I&apos;m Frank
            </h1>

            <div className="mt-4 self-center">
              <div className="inline-flex rounded-full bg-white px-6 py-1.5 shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
                <span className="purple-background-gradient font-[Nunito,sans-serif] text-sm font-semibold lg:text-base">
                  About Me
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[564px] px-4 text-center">
          <div className="font-[Nunito,sans-serif] text-sm leading-normal text-black/50">
            <p className="mb-0">
              Frank is a designer and developer based in Kansas City, where the coffee&apos;s
              strong, the storms are stronger, and the Wi-Fi is… usually fine.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              With over five years of experience, he&apos;s crafted websites and digital
              experiences for local businesses, national nonprofits, and multi-million-dollar
              brands. His approach to design blends clean visuals with intuitive performance, always
              grounded in principles of accessibility and responsiveness, because the internet should
              work for everyone.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              When he&apos;s not designing, he&apos;s probably rock climbing, covered in clay at a
              ceramics studio, or planning his next adventure. Frank is always up for creative
              collaboration, especially if it&apos;s{' '}
              <strong className="font-bold text-black/75">thoughtful</strong>,{' '}
              <strong className="font-bold text-black/75">impact-driven</strong>, or{' '}
              <span className="purple-background-gradient inline-block font-bold">
                just plain weird
              </span>
              .
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Let&apos;s make something great.</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center px-4 lg:mt-16">
          <div className="inline-flex rounded-full bg-white px-6 py-1.5 shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
            <span className="purple-background-gradient font-[Nunito,sans-serif] text-sm font-semibold lg:text-base">
              Beyond the Keyboard
            </span>
          </div>
        </div>

        <MasonryGallery />
      </main>
      <SiteFooter />
    </>
  );
}
