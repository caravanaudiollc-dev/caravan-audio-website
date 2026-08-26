import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>&copy; {year} Caravan Audio LLC. All rights reserved.</p>
    </footer>
  )
}
