import logo from '../assets/logo.png'
import qscLogo from '../assets/qsc-logo.png'
import ispLogo from '../assets/isp-logo.png'
import shureLogo from '../assets/shure-logo.png'
import './Section.css'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="section__inner">
        <h2>Contact</h2>
        <p className="contact-intro">
          Ready to plan for your event? reach out and let's talk details.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(810) 772 6455</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>caravanaudiollc@gmail.com</p>
          </div>
        </div>
        <div className="partner-logos">
          <img className="partner-logo" src={qscLogo} alt="QSC" />
          <img className="partner-logo partner-logo--badge" src={ispLogo} alt="ISP Technologies" />
          <img className="partner-logo partner-logo--chip" src={shureLogo} alt="Shure" />
        </div>
        <img className="contact-logo" src={logo} alt="Caravan Audio LLC logo" />
      </div>
    </section>
  )
}
