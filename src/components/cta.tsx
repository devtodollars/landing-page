export default function Cta() {
  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Launch Your MVP?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Whether you want hands-on guidance or prefer to build it yourself,
            we have the tools and expertise to help you succeed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/amirali-tabrizi/30min"
              className="rounded-md bg-primary px-5 py-3 text-md font-semibold text-black shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:no-underline hover:text-black"
            >
              Book a Free Consultation
            </a>
            <a
              href="https://github.com/devtodollars/mvp-boilerplate"
              className="rounded-md bg-white/10 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:no-underline hover:text-white"
            >
              Get the Boilerplate
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#ffca28" />
                <stop offset={1} stopColor="#ffca28" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
