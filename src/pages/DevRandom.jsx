const github = (repo) => `https://github.com/zincsoda/${repo}`

const projects = [
  {
    title: 'Hanzi components',
    description:
      'Break down Chinese characters into their GF0014 components, with a lookup across the 3,500-character common-use repertoire.',
    links: [
      { label: 'Visit Hanzi components', url: 'https://steve-walsh.com/gf14' },
      { label: 'GitHub Repository', url: github('gf14') }
    ]
  },
  {
    title: 'Sudoku → CSV',
    description:
      'A quick-capture board for typing a sudoku in reading order, then sharing or downloading it as CSV.',
    links: [
      { label: 'Visit Sudoku → CSV', url: 'https://steve-walsh.com/sudoku-setter/' },
      { label: 'GitHub Repository', url: github('sudoku-setter') }
    ]
  },
  {
    title: 'Bluetooth Device Counter',
    description:
      'A local scanner that counts nearby Bluetooth Low Energy advertisements and estimates relative proximity from signal strength.',
    links: [{ label: 'GitHub Repository', url: github('bluetooth_device_counter') }]
  },
  {
    title: 'OKRs',
    description: 'An internal tool for a technology team to manage objectives and key results.',
    links: [{ label: 'GitHub Repository', url: github('okrs') }]
  },
  {
    title: 'ShelfSight',
    description:
      'Estimate empty supermarket shelf space from photos, using a vision model on Cloudflare.',
    links: [{ label: 'GitHub Repository', url: github('shelf-analysis') }]
  },
  {
    title: 'Garden Shed Adventure',
    description:
      'A small top-down pixel game about exploring a garden and collecting tools from the shed. It started as a family WhatsApp joke.',
    links: [
      { label: 'Play Garden Shed Adventure', url: 'https://shed.swlabs.cc' },
      { label: 'GitHub Repository', url: github('garden-shed-adventure') }
    ]
  },
  {
    title: 'Calorie Ticker',
    description:
      'A calorie tracker that ticks burn from sleep and wake cycles, then nets it against activities and food.',
    links: [{ label: 'GitHub Repository', url: github('caltick') }]
  },
  {
    title: 'Random Bible Verse',
    description: 'A small installable page that shows one King James verse, centered on a dark screen.',
    links: [
      { label: 'Visit Random Bible Verse', url: 'https://hidden.swlabs.cc/' },
      { label: 'GitHub Repository', url: github('hidden') }
    ]
  },
  {
    title: 'GitHub issue automation',
    description:
      'A Telegram-driven pipeline that runs Cursor Agent on GitHub issues, opens a pull request, and can deploy or merge.',
    links: [{ label: 'GitHub Repository', url: github('gh-issues-automation') }]
  },
  {
    title: 'Signage Timeboard',
    description:
      'Multiple world clocks for use in signage displays, built to keep venue schedules and time-sensitive information visible.',
    links: [
      { label: 'Visit Signage Timeboard', url: 'https://steve-walsh.com/multi-clock-app/' },
      { label: 'GitHub Repository', url: github('multi-clock-app') }
    ]
  },
  {
    title: 'Home Bus Routes',
    description:
      'Live Hong Kong bus arrivals for stops near home — KMB routes and ETAs in a simple page.',
    links: [
      { label: 'Visit Home Bus Routes', url: 'https://steve-walsh.com/hbr/' },
      { label: 'GitHub Repository', url: github('hbr') }
    ]
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
    links: [{ label: 'GitHub Repository', url: github('scoreboard') }]
  },
  {
    title: 'Image Cropper',
    description: 'An OSX Cocoa utility for cropping images to a specific aspect ratio.',
    links: [{ label: 'GitHub Repository', url: github('ImageCropping') }]
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
      <article className="page-content">
        <h1>/dev/random</h1>
        <p>
          An unsorted collection of side projects, weekend hacks, talks, and notes to future me. More exhaustive list on <a href="https://github.com/zincsoda" target="_blank" rel="noopener noreferrer">My GitHub</a>.
        </p>

        <h2>Projects and hacks</h2>
        <p>
          The ten most recently updated public repositories are listed first.
        </p>
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

        <h2>Deep tech</h2>
        <h3>Project Hecatonchire</h3>
        <p>
          Working with the extraordinary <a href="https://blopeur.com" target="_blank" rel="noopener noreferrer">Benoit Hudzia</a>, I was heavily involved in this project during my time at SAP
          Research. <a href="https://steve-walsh.com/hecatonchire.github.com/index.html" target="_blank" rel="noopener noreferrer">Hecatonchire</a> (meaning "Hundred-Handed One" in Greek mythology) is a framework of tools
          (kernel and userspaces) designed to provide memory, I/O, and CPU resource aggregation for x86/Linux applications and Linux/KVM VMs using
          commodity hardware and RDMA-enabled interconnects.
        </p>

        <h2>Talks and workshops</h2>
        {talks.map((talk) => (
          <section key={talk.title}>
            <h3>{talk.title}</h3>
            <p>
              {talk.description} <a href={talk.link.url} target="_blank" rel="noopener noreferrer">{talk.link.label}</a>.
            </p>
          </section>
        ))}

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
