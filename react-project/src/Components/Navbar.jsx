const navigationLinks = [
  { label: 'Home', href: '#home', current: true },
  { label: 'For student', href: '#for-student' },
  { label: 'Resources', href: '#resources' },
  { label: 'About us', href: '#about-us' },
  { label: 'Contact us', href: '#contact-us' },
]

function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-1.5" aria-label="Tutor home">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-blue-600"
        fill="none"
      >
        <rect x="3.5" y="3.5" width="17" height="14" rx="1.5" fill="currentColor" />
        <rect x="5.5" y="5.5" width="13" height="10" rx="0.5" fill="#DBEAFE" />
        <path d="M2 20h20M9 17.5l-1 2.5h8l-1-2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-base font-semibold tracking-tight text-slate-900">Tutor</span>
    </a>
  )
}

function Navbar() {
  return (
    <header className="w-full bg-white font-sans text-slate-900">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Brand />

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navigationLinks.map(({ label, href, current }) => (
            <a
              key={label}
              href={href}
              aria-current={current ? 'page' : undefined}
              className={`text-sm transition-colors hover:text-blue-600 ${
                current ? 'font-medium text-blue-600' : 'text-slate-600'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#sign-in"
            className="hidden text-sm font-medium text-slate-800 transition-colors hover:text-blue-600 sm:inline"
          >
            Sign in
          </a>
          <a
            href="#register"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Register
          </a>

          <details className="relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-11 z-10 flex min-w-44 flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
            >
              {navigationLinks.map(({ label, href, current }) => (
                <a
                  key={label}
                  href={href}
                  aria-current={current ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm hover:bg-slate-50 ${
                    current ? 'font-medium text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a href="#sign-in" className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 sm:hidden">
                Sign in
              </a>
            </nav>
          </details>
        </div>
      </div>

      <div className="bg-amber-300 px-4 py-2 text-center text-xs leading-5 text-slate-900">
        Are you a university or school student for an online tutoring partnership?{' '}
        <a href="#contact-us" className="font-semibold text-blue-700 hover:underline">
          Talk to us
        </a>
      </div>
    </header>
  )
}

export default Navbar