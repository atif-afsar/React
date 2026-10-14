const tutorPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=640&q=85',
    alt: 'Tutor smiling at the camera',
    className: 'rounded-tl-[5rem] rounded-br-3xl',
  },
  {
    src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=640&q=85',
    alt: 'Online tutor ready to teach',
    className: 'rounded-xl',
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=85',
    alt: 'Student studying with a tablet',
    className: 'rounded-xl',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=85',
    alt: 'Tutor smiling in a checked shirt',
    className: 'rounded-tr-[5rem] rounded-bl-3xl',
  },
]

const tutorStats = [
  { value: '870', label: 'Expert tutors' },
  { value: '20,000+', label: 'Hours tutored' },
  { value: '298', label: 'Subjects and courses' },
  { value: '72,920', label: 'Active students' },
]

function Hero() {
  return (
    <>
      <section id="home" className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[430px] lg:grid-cols-2 lg:gap-10 lg:py-16">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-orange-600">
              100% satisfaction guarantee
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Find Your
              <br />
              Perfect Human
              <span aria-hidden="true" className="relative ml-2 inline-block text-blue-500">
                <svg viewBox="0 0 42 38" className="absolute -right-8 -top-5 h-8 w-9">
                  <path
                    d="M8 27c-1-7-3-10-5-11m13 9c0-9 2-14 5-18m1 20c4-6 8-9 13-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-amber-300" />
              </span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              We help you find the perfect tutor for 1-on-1 lessons.
              <br className="hidden sm:block" /> It is completely free and private.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-blue-700"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
                    <path d="M7 4.5v11l9-5.5-9-5.5Z" fill="currentColor" />
                  </svg>
                </span>
                See how it works
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg py-3 sm:py-6 lg:ml-auto">
            <div aria-hidden="true" className="absolute -right-1 top-0 h-28 w-28 rounded-full bg-amber-200 sm:-right-3 sm:h-36 sm:w-36" />
            <div aria-hidden="true" className="absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-cyan-100 sm:-left-7 sm:h-24 sm:w-24" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {tutorPhotos.map(({ src, alt, className }, index) => (
                <div
                  key={alt}
                  className={`relative h-36 overflow-hidden shadow-sm sm:h-44 ${
                    index === 1 ? 'translate-y-2' : ''
                  } ${index === 2 ? '-translate-y-1' : ''} ${className}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 72 56"
              className="absolute -bottom-5 -left-7 h-12 w-16 text-blue-500 sm:-left-10"
              fill="none"
            >
              <path
                d="M3 37c8 0 8-18 16-18s3 25 11 25 8-24 16-24 6 18 11 18 7-8 12-8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 44 44"
              className="absolute -right-8 top-10 h-10 w-10 text-blue-500"
              fill="none"
            >
              <path
                d="M7 33 20 6l17 28-30-1Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section aria-label="Tutor platform statistics" className="bg-blue-600 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-6 sm:px-8 sm:py-7 md:grid-cols-4 md:gap-0">
          {tutorStats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`px-3 sm:px-6 ${
                index > 0 ? 'md:border-l md:border-blue-400/50' : ''
              }`}
            >
              <p className="text-xl font-bold tracking-tight sm:text-2xl">{value}</p>
              <p className="mt-1 text-sm text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero