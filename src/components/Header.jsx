import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Hello' },
  { to: '/bio', label: 'Bio' },
  { to: '/projects', label: 'Projects' },
  { to: '/dev/random', label: '/dev/random' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <NavLink className="site-title" to="/">Steve Walsh</NavLink>
        <nav className="site-nav" aria-label="Primary navigation">
          <div className="trigger">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `site-link${isActive ? ' selected' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
