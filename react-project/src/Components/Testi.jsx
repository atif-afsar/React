const students = [
  {
    name: 'Sofia Patel',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Albert Monica',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    selected: true,
  },
  {
    name: 'Daniel Brooks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
]

function Testi() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div aria-hidden="true" className="absolute -right-10 top-8 -z-10 h-24 w-24 rounded-full bg-cyan-200 sm:h-32 sm:w-32" />
      <div aria-hidden="true" className="absolute -bottom-12 -left-10 -z-10 h-28 w-28 rounded-full bg-amber-300 sm:h-36 sm:w-36" />

      <svg aria-hidden="true" viewBox="0 0 90 70" className="absolute left-5 top-12 h-16 w-20 text-blue-500 sm:left-8 sm:top-20" fill="none">
        <path d="m12 34 10-25 20 30-30-5Z" stroke="#FACC15" strokeWidth="3" strokeLinejoin="round" />
        <path d="M4 59c8 0 8-17 16-17s3 22 11 22 8-20 16-20 6 15 11 15 7-7 12-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 90 70" className="absolute bottom-10 right-5 h-16 w-20 text-blue-500 sm:bottom-16 sm:right-8" fill="none">
        <rect x="18" y="6" width="25" height="22" rx="3" transform="rotate(-12 18 6)" stroke="#FACC15" strokeWidth="3" />
        <path d="M4 54c8 0 8-16 16-16s3 22 11 22 8-20 16-20 6 15 11 15 7-7 12-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-orange-600">Our testimonials</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          What Our Students Say About Us
        </h2>

        <div className="mt-7 flex items-center justify-center gap-4" aria-label="Featured student">
          {students.map(({ name, image, selected }) => (
            <img
              key={name}
              src={image}
              alt={name}
              className={`h-11 w-11 rounded-full object-cover ${
                selected
                  ? 'h-14 w-14 border-[3px] border-blue-600 p-0.5'
                  : 'border-2 border-white shadow-sm'
              }`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-3">
          <h3 className="text-sm font-semibold text-slate-900">Albert Monica</h3>
          <p className="mt-0.5 text-xs text-slate-500">Student at College</p>
          <p className="mt-1 text-xs tracking-widest text-amber-500" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
        </div>

        <blockquote className="relative mx-auto mt-4 max-w-lg px-8 text-sm leading-6 text-slate-600">
          <span aria-hidden="true" className="absolute -left-1 -top-5 text-6xl font-serif leading-none text-slate-100">
            “
          </span>
          <p>
            As a student of this online education website, I can confidently say that it has been
            an incredible experience. The platform is user-friendly and the courses are
            well-structured, making it easy for me to learn at my own pace.
          </p>
          <span aria-hidden="true" className="absolute -bottom-9 -right-1 text-6xl font-serif leading-none text-slate-100">
            ”
          </span>
        </blockquote>
      </div>
    </section>
  )
}

export default Testi