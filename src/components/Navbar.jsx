import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/committee', label: 'Committee' },
  { to: '/glimpses', label: 'Glimpses' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.brand}>
            <img
              src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-k-k-birla-goa-campus-white-1-1.png"
              alt="BITS Pilani K K Birla Goa Campus"
              className={styles.logo}
            />
          </Link>

          <div className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`${styles.link} ${pathname === l.to ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/registration" className={`${styles.link} ${styles.cta}`}>
              Register Now
            </Link>
          </div>

          <button
            className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  )
}
