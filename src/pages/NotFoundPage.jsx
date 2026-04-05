import { useLocation } from 'react-router-dom';
import FluidButton from '../components/FluidButton';
import Seo from '../components/Seo';
import SiteFooter from '../components/SiteFooter';

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <>
      <Seo
        title="404 | Frank Dominguez"
        description="Page not found."
        path={location.pathname}
        robots="noindex, follow"
      />
      <main className="pb-10 lg:pb-16">
        <section className="flex flex-col items-center px-4 pt-6 text-center md:pt-8">
          <h1 className="font-['ITC_Garamond_Std',Georgia,serif] text-5xl font-light leading-none text-black md:text-[64px]">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-[20rem] font-[Nunito,sans-serif] text-base leading-normal text-black/50">
            We checked everywhere.
          </p>
          <div className="mt-6 md:mt-8">
            <FluidButton to="/">Return Home</FluidButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
