import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Hello' },
  { to: '/public', label: 'Bio' },
  { href: 'https://idea-gen.cc/', label: 'Idea Gen' },
  { href: 'https://cadence.steve-walsh.com/', label: 'Cadence' },
  { to: '/dev/random', label: '/dev/random' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="site-title">Steve Walsh</div>
        <nav className="site-nav">
          <div className="trigger">
            {navItems.map(({ to, href, label }) => {
              if (href) {
                return (
                  <a
                    key={href}
                    href={href}
                    className="site-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                  </a>
                )
              }

              return (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `site-link${isActive ? ' selected' : ''}`}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
