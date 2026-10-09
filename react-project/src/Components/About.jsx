const benefits = [
  {
    title: 'One-on-one Teaching',
    description: 'All of our special education experts have a degree in special education.',
    icon: 'users',
    color: 'bg-blue-600',
  },
  {
    title: '24/7 Tutor Availability',
    description: 'Our tutors are always available to respond as quickly as possible for you.',
    icon: 'clock',
    color: 'bg-lime-500',
  },
  {
    title: 'Interactive Whiteboard',
    description: 'Our digital whiteboard is equipped with audio and video chat features.',
    icon: 'board',
    color: 'bg-orange-500',
  },
  {
    title: 'Affordable Prices',
    description: 'Choose an expert tutor based on your budget and per hour.',
    icon: 'chat',
    color: 'bg-pink-500',
  },
]

function BenefitIcon({ name }) {
  const paths = {
    users: (
      <>
        <circle cx="8" cy="8" r="2.2" />
        <circle cx="16" cy="8" r="2.2" />
        <path d="M3.5 17c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M11.5 14c.7-.7 1.7-1 3-1 2.5 0 4.2 1.5 4.5 4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    board: (
      <>
        <rect x="4" y="5" width="16" height="12" rx="1.5" />
        <path d="M8 20h8m-4-3v3M8 9h8m-8 3h5" />
      </>
    ),
    chat: (
      <>
        <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M7 10h10m-10 3h7" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function ScheduleIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div aria-hidden="true" className="absolute -left-5 top-8 h-7 w-7 rounded-full bg-cyan-200" />
      <div className="relative h-64 overflow-hidden rounded-xl bg-cyan-300 sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=85"
          alt="Student working at a desk with her laptop"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent" />
      </div>
      <div className="absolute -bottom-7 -right-4 flex h-32 w-32 rotate-6 flex-col items-center justify-center rounded-full border-4 border-white bg-amber-400 text-center shadow-lg sm:h-36 sm:w-36">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-950">
          My schedule
        </span>
        <span className="mt-2 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700">
          Mon &middot; Wed &middot; Fri
        </span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-1 h-5 w-5 text-blue-700" fill="none">
          <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <svg aria-hidden="true" viewBox="0 0 72 48" className="absolute -left-8 -top-4 h-12 w-16 text-blue-500" fill="none">
        <path d="M3 32c8 0 8-18 16-18s3 25 11 25 8-24 16-24 6 18 11 18 7-8 12-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function TutorCallIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-5 pr-5">
      <div className="relative h-56 w-[78%] overflow-hidden rounded-xl bg-cyan-200 sm:h-64">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=85"
          alt="Tutor holding books and smiling"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 right-0 h-48 w-[68%] overflow-hidden rounded-xl border-4 border-white bg-amber-300 shadow-md sm:h-56">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"
          alt="Student talking with a tutor online"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-slate-950/20 py-2">
          {['Mic', 'Video', 'End call'].map((label, index) => (
            <span
              key={label}
              aria-label={label}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs text-white ${
                index === 2 ? 'bg-rose-500' : 'bg-slate-700/70'
              }`}
            >
              {index === 0 ? '●' : index === 1 ? '▰' : '×'}
            </span>
          ))}
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 72 48" className="absolute right-0 top-2 h-12 w-16 text-blue-500" fill="none">
        <path d="M3 32c8 0 8-18 16-18s3 25 11 25 8-24 16-24 6 18 11 18 7-8 12-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function About() {
  return (
    <section id="about-us" className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-600">Why choose us</p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl">
            Benefits of online tutoring
            <br className="hidden sm:block" /> services with us
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon, color }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className={`mb-3 flex h-9 w-9 items-center justify-center rounded-md text-white ${color}`}>
                <BenefitIcon name={icon} />
              </span>
              <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <ScheduleIllustration />
          <div className="max-w-lg">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
              Customize with your schedule
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-slate-950">
              Personalized Professional
              <br className="hidden sm:block" /> Online Tutor on Your Schedule
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Our scheduling system allows you to select based on your free time. Learn at your own
              pace with a tutor who understands your goals. Choose a time that works for you and
              make every lesson count.
            </p>
            <a
              href="#register"
              className="mt-5 inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-lg lg:order-1">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
              Customize with your schedule
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-slate-950">
              Talented and Qualified
              <br className="hidden sm:block" /> Tutors to Serve You for Help
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Our scheduling system lets you choose a tutor based on your free time. Learn from
              experienced educators who make every lesson personal, supportive, and easy to fit
              into your day.
            </p>
            <a
              href="#register"
              className="mt-5 inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              Get started
            </a>
          </div>
          <div className="lg:order-2">
            <TutorCallIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About