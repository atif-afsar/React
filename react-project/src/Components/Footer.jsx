const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'For students', href: '#for-student' },
      { label: 'Our subjects', href: '#for-student' },
      { label: 'About us', href: '#about-us' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { label: 'Find a tutor', href: '#for-student' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Student testimonials', href: '#testimonials' },
      { label: 'Register', href: '#register' },
    ],
  },
  {
    title: 'Have questions?',
    links: [
      { label: 'Contact us', href: '#contact-us' },
      { label: 'Resources', href: '#resources' },
      { label: 'Sign in', href: '#sign-in' },
    ],
  },
]

function Footer() {
  return (
    <footer id="contact-us" className="border-t-4 border-blue-600 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_2fr] md:py-14">
        <div className="max-w-sm">
          <a href="#home" className="inline-flex items-center gap-2 text-white" aria-label="Tutor home">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-blue-400" fill="none">
              <rect x="3.5" y="3.5" width="17" height="14" rx="1.5" fill="currentColor" />
              <rect x="5.5" y="5.5" width="13" height="10" rx="0.5" fill="#DBEAFE" />
              <path d="M2 20h20M9 17.5l-1 2.5h8l-1-2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-xl font-semibold tracking-tight">Tutor</span>
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Find the right tutor, learn at your own pace, and make every lesson count. Personal
            online learning made simple.
          </p>
          <a
            href="#register"
            className="mt-5 inline-flex rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Get started
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-400 transition-colors hover:text-amber-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} Tutor. All rights reserved.</p>
          <p>Learn with confidence. Grow with the right tutor.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer