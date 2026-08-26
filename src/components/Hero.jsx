import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Caravan Audio LLC</p>
        <h1>Sound Solutions Delivered.</h1>
        <p className="hero__subtitle">
          Weddings, concerts, festivals, system installs, FOH engineering. Let caravan be the solution to any of your audio needs.

        </p>
        <a href="#contact" className="hero__cta">
          Get in touch
        </a>
      </div>
    </section>
  )
}
