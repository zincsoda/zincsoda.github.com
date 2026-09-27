const sections = [
  {
    id: 'chinese-learning',
    title: 'Chinese Learning',
    projects: [
      {
        href: 'https://journey.swlabs.cc/',
        label: 'Hanzi Journey',
        description: (
          <>
            A progressive web app for learning Chinese characters. It's a work in progress —{' '}
            <a href="mailto:steven.walsh39@gmail.com">email me</a> for account details.
          </>
        ),
      },
      {
        href: 'https://steve-walsh.com/gf14',
        label: 'GF0014 Character Breakdown',
        description: 'Break down Chinese characters into their GF0014 components.',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    projects: [
      {
        href: 'https://cadence.swlabs.cc/',
        label: 'Cadence',
        description: 'Plan your month, week, and day in one intentional flow.',
      },
      {
        href: 'https://idea-gen.cc/',
        label: 'Idea Gen',
        description: 'Host and share every HTML design revision.',
      },
      {
        href: 'https://barlog.swlabs.cc/',
        label: 'BarLog',
        description: 'Track progressive overload.',
      },
      {
        href: 'https://authentake.com/',
        label: 'Authentake',
        description: 'Structured personality interviews to meet people, one real person at a time.',
      },
    ],
  },
]

export default function Projects() {
  return (
    <div className="page">
      <article className="page-content">
        <h1>Projects</h1>
        <p>Side projects I'm actively building.</p>
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            <ul className="project-list">
              {section.projects.map((project) => (
                <li key={project.href}>
                  <div className="project-card">
                    <a
                      className="project-card-label"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.label}
                    </a>
                    <div className="project-card-desc">{project.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </div>
  )
}
