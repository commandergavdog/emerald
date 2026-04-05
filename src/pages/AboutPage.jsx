import SiteFooter from '../components/SiteFooter';
import {
  ABOUT_GALLERY_DESKTOP_FLOW,
  ABOUT_GALLERY_LEFT,
  ABOUT_GALLERY_RIGHT,
} from '../data/aboutGallery';

function GalleryTile({ item, heightClass }) {
  return (
    <figure className="mb-3 break-inside-avoid lg:mb-4">
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-neutral-300 ${heightClass}`}
      >
        <img src={item.src} alt="" className={item.imgClass} />
      </div>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <main id="about" className="pb-10 lg:pb-16">
        <div className="px-4 pt-4 md:px-[min(7.5vw,118px)] lg:pt-6">
          <div className="flex flex-col lg:items-center">
            <div className="relative mx-auto lg:mx-0">
              <img
                src="/images/about/avatar-mobile.webp"
                alt=""
                className="size-[122px] rounded-full object-cover lg:hidden"
                width={122}
                height={122}
              />
              <img
                src="/images/about/avatar-desktop.webp"
                alt=""
                className="hidden size-[200px] rounded-full object-cover lg:block"
                width={200}
                height={200}
              />
            </div>

            <h1 className="mt-6 w-full self-start font-['ITC_Garamond_Std',Georgia,serif] text-[48px] font-light leading-none text-black lg:mt-10 lg:self-center lg:text-center lg:text-[64px]">
              Hi! I&apos;m Frank
            </h1>

            <div className="mt-4 self-start lg:self-center">
              <div className="inline-flex rounded-full bg-white px-6 py-1.5 shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
                <span className="purple-background-gradient font-[Nunito,sans-serif] text-sm font-semibold lg:text-base">
                  About Me
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[400px] px-4 lg:hidden">
          <div className="rounded-lg bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
            <div className="font-[Nunito,sans-serif] text-sm leading-normal text-black/50">
              <p className="mb-0 font-bold text-black/75">
                I&apos;m a designer and developer creating engaging web experiences.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                Based in Kansas City, I build websites that not only look great, but feel great to
                use.{' '}
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                Over the past few years, I&apos;ve built dozens of scalable, custom websites and
                immersive brand experiences — all in close collaboration with clients.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                With a foundation in web development, I approach design with a focus on clean
                aesthetics and seamless performance.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                These days, I&apos;m leaning into digital design: studying interaction patterns,
                accessibility, and design systems to create more intuitive experiences.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                When I&apos;m not designing, I&apos;m probably rock climbing, in a ceramics studio,
                or planning my next adventure. I&apos;m always up for creative collaboration —
                especially if it&apos;s thoughtful, impact-driven, or just plain weird.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="font-bold text-black/75">Let&apos;s build something awesome.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 hidden max-w-[564px] px-4 text-center lg:block">
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
              grounded in principles of accessibility and responsiveness—because the internet should
              work for everyone.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              When he&apos;s not designing, he&apos;s probably rock climbing, covered in clay at a
              ceramics studio, or planning his next adventure. Frank is always up for creative
              collaboration—especially if it&apos;s{' '}
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

        <div className="mt-8 flex gap-3 px-4 lg:hidden">
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {ABOUT_GALLERY_LEFT.map((item) => (
              <GalleryTile key={item.id} item={item} heightClass={item.mobileH} />
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {ABOUT_GALLERY_RIGHT.map((item) => (
              <GalleryTile key={item.id} item={item} heightClass={item.mobileH} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 hidden max-w-[1200px] columns-4 gap-x-4 px-4 lg:block lg:px-[min(7.5vw,102px)]">
          {ABOUT_GALLERY_DESKTOP_FLOW.map((item) => (
            <GalleryTile key={`d-${item.id}`} item={item} heightClass={item.desktopH} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
