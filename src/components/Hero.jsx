export default function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-6 text-center md:pt-8">
      <h1 className="font-['ITC_Garamond_Std',Georgia,serif] text-5xl font-light leading-none text-black md:text-[64px]">
        Frank Dominguez
      </h1>
      <p className="mt-4 max-w-[20rem] font-[Nunito,sans-serif] text-base leading-normal text-black/50">
        Frank Dominguez is a{' '}
        <strong className="font-bold text-black/75">web developer</strong> and{' '}
        <strong className="font-bold text-black/75">designer</strong> living in Kansas City
      </p>
      <div className="mt-6 inline-flex rounded-full bg-white px-6 py-1.5 md:mt-8">
        <span className="purple-background-gradient font-[Nunito,sans-serif] text-base font-semibold">
          Selected Works
        </span>
      </div>
    </section>
  );
}
