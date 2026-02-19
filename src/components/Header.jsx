import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Hello' },
  { to: '/public', label: 'Bio' },
  { to: '/projects', label: 'Fun' },
  { to: '/notes', label: 'Notes to self' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="site-title">Steve Walsh</div>
        <nav className="site-nav">
          <div className="trigger">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `site-link${isActive ? ' selected' : ''}`}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
