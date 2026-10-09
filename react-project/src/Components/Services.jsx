const subjects = [
  { label: 'Engineering', icon: '⚙', color: 'bg-blue-100 text-blue-600' },
  { label: 'Programming', icon: '</>', color: 'bg-emerald-100 text-emerald-600' },
  { label: 'Languages', icon: '文', color: 'bg-fuchsia-100 text-fuchsia-700' },
  { label: 'Science', icon: '♟', color: 'bg-lime-100 text-lime-700' },
  { label: 'History', icon: '▤', color: 'bg-orange-100 text-orange-600' },
  { label: 'Psychology', icon: '✣', color: 'bg-cyan-100 text-cyan-700' },
  { label: 'Web Design', icon: '▰', color: 'bg-yellow-100 text-yellow-700' },
  { label: 'See all', icon: '›', color: 'bg-slate-100 text-slate-500' },
]

function Services() {
  return (
    <section id="for-student" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
            Our tutor subjects
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Find Online Tutor in Any Subject
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map(({ label, icon, color }) => (
            <a
              key={label}
              href={label === 'See all' ? '#all-subjects' : `#${label.toLowerCase().replaceAll(' ', '-')}`}
              className="flex min-h-14 items-center gap-3 rounded-md border border-slate-200 bg-white px-3 transition-colors hover:border-blue-300 hover:bg-blue-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold ${color}`}>
                {icon}
              </span>
              <span className="text-sm font-medium text-slate-800">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services