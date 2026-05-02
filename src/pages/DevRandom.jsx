const projects = [
  {
    title: 'Home Bus Routes',
    description:
      'Live Hong Kong bus arrivals for stops near home — KMB routes and ETAs in a simple page.',
    links: [{ label: 'Visit Home Bus Routes', url: 'https://steve-walsh.com/home-bus-routes/' }]
  },
  {
    title: 'Multi clock app',
    description:
      'A React web app with several world clocks at once, for when you are juggling a few time zones.',
    links: [{ label: 'Visit Multi clock app', url: 'https://steve-walsh.com/multi-clock-app/' }]
  },
  {
    title: 'Hanzi Journey',
    description: 'A progressive web app for learning Chinese characters.',
    links: [{ label: 'Visit Hanzi Journey', url: 'https://steve-walsh.com/hanzi-journey' }]
  },
  {
    title: 'Font Board',
    description:
      'Built with my son in React Native in a single afternoon, then shipped to both app stores the same day. Usage is low, but the memories are high.',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/gd/app/font-board/id1517838592' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.fontboard' }
    ]
  },
  {
    title: 'Scoreboard',
    description:
      'A simple Django web app for maintaining an office league for ping pong, pool, chess, and table soccer.',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/zincsoda/scoreboard' }]
  },
  {
    title: 'Image Cropper',
    description: 'An OSX Cocoa utility for cropping images to a specific aspect ratio.',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/zincsoda/ImageCropping' }]
  }
]

const talks = [
  {
    title: 'Python game development for beginners',
    description:
      "A workshop for kids aged 6-10 (April 2017), building a clone of Flappy Bird using Python.",
    link: { label: 'Workshop videos', url: '/flappy.html' }
  },
  {
    title: 'Designing REST APIs for mobile apps',
    description:
      'A talk (July 2015) on building REST APIs for mobile app development for the Women Who Code meetup group in Belfast.',
    link: { label: 'Video and summary', url: '/wwcode.html' }
  }
]

const notes = [
  { label: 'Old snippets on Tumblr', url: 'https://zincsoda.tumblr.com' },
  { label: 'Up and Running with Docker', url: 'https://gist.github.com/zincsoda/d853a333b8dec79c193a67f437c71ba3' },
  { label: 'Django Rest API', url: 'https://gist.github.com/zincsoda/fa23970e0ca174ada985' },
  { label: 'Bootstrap playground', url: '/bootstrap_play.html' },
  { label: 'jQuery playground', url: '/play.html' },
  { label: 'Binary clock', url: '/clock.html' }
]

export default function DevRandom() {
  return (
    <div className="page">
      <header className="page-header" />
      <article className="page-content">
        <h2>/dev/random</h2>
        <p>
          An unsorted collection of side projects, weekend hacks, talks, and notes to future me. More exhaustive list on <a href="https://github.com/zincsoda" target="_blank" rel="noopener noreferrer">My GitHub</a>.
        </p>

        <br />
        <section>
          <h2>Idea Gen</h2>
          <p>
            Versioned HTML design files for teams — collaborate on UI specs without losing history.
          </p>
          <ul>
            <li>
              <a href="https://idea-gen.cc/" target="_blank" rel="noopener noreferrer">Visit Idea Gen</a>
            </li>
          </ul>
        </section>

        <br />
        <h2>Projects and hacks</h2>
        {projects.map((project) => (
          <section key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <br />
        <h2>Deep tech</h2>
        <h3>Project Hecatonchire</h3>
        <p>
          Working with the extraordinary <a href="https://blopeur.com" target="_blank" rel="noopener noreferrer">Benoit Hudzia</a>, I was heavily involved in this project during my time at SAP
          Research. <a href="https://steve-walsh.com/hecatonchire.github.com/index.html" target="_blank" rel="noopener noreferrer">Hecatonchire</a> (meaning "Hundred-Handed One" in Greek mythology) is a framework of tools
          (kernel and userspaces) designed to provide memory, I/O, and CPU resource aggregation for x86/Linux applications and Linux/KVM VMs using
          commodity hardware and RDMA-enabled interconnects.
        </p>

        <br />
        <h2>Talks and workshops</h2>
        {talks.map((talk) => (
          <section key={talk.title}>
            <h3>{talk.title}</h3>
            <p>
              {talk.description} <a href={talk.link.url} target="_blank" rel="noopener noreferrer">{talk.link.label}</a>.
            </p>
          </section>
        ))}

        <br />
        <h2>Scratchpad and notes</h2>
        <p>
          I used to post snippets to Tumblr as a way to bookmark notes to myself. A few remnants and playgrounds are still floating around:
        </p>
        <ul>
          {notes.map((note) => (
            <li key={note.url}>
              <a href={note.url} target="_blank" rel="noopener noreferrer">{note.label}</a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
