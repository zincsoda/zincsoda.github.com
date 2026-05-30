import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const apps = [
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
]

const navItems = [
  { to: '/', label: 'Hello' },
  { to: '/public', label: 'Bio' },
  { type: 'apps' },
  { to: '/dev/random', label: '/dev/random' },
]

function AppsMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div className={`nav-dropdown${open ? ' is-open' : ''}`} ref={menuRef}>
      <button
        type="button"
        className="site-link nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        Apps
      </button>
      <div className="nav-dropdown-menu" role="menu">
        {apps.map(({ href, label, description }) => (
          <a
            key={href}
            href={href}
            className="nav-dropdown-item"
            role="menuitem"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className="nav-dropdown-item-label">{label}</span>
            <span className="nav-dropdown-item-desc">{description}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="site-title">Steve Walsh</div>
        <nav className="site-nav">
          <div className="trigger">
            {navItems.map((item) => {
              if (item.type === 'apps') {
                return <AppsMenu key="apps" />
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `site-link${isActive ? ' selected' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
