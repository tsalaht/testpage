import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'الخدمات' },
  { to: '/portfolio', label: 'أعمالنا' },
  { to: '/blog', label: 'المدونة' },
  { to: '/contact', label: 'اتصل بنا' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <header className={`nav${open ? ' nav--open' : ''}`}>
      <div className="nav__inner">
        <div className="nav__brand">
          <div className="nav__logo">مزود</div>
        </div>

        <nav className="nav__links nav__links--desktop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="nav__cta btn btn--ghost">ابدأ مشروعك</button>

        <button
          type="button"
          className="nav__menuButton"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={handleToggle}
        >
          <span className="nav__menuLine nav__menuLine--top" />
          <span className="nav__menuLine nav__menuLine--middle" />
          <span className="nav__menuLine nav__menuLine--bottom" />
        </button>
      </div>

      <nav className="nav__linksMobile">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav__link nav__link--mobile${
                isActive ? ' nav__link--active' : ''
              }`
            }
            end={link.to === '/'}
            onClick={handleLinkClick}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

