import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Adds a soft shadow once the page scrolls, so the sticky bar
  // separates from the content passing under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${
      isActive ? 'font-semibold text-clay' : 'text-muted hover:text-ink'
    }`

  return (
    <header
      className={`sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_1px_12px_rgba(28,27,26,0.08)]' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink sm:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul className="border-t border-line px-6 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.to} className="py-2">
              <NavLink to={link.to} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
