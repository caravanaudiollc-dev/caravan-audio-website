import logo from '../assets/logo.png'
import './Header.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <img className="brand__logo" src={logo} alt="Caravan Audio LLC logo" />
          <span className="brand__name">Caravan Audio LLC</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
