import './Section.css'
import './Services.css'

const SERVICES = [
  {
    title: 'Event Solution',
    description:
      'Speakers, Subwoofers, microphones, and on site engineer to ensure your vision becomes reality',
  },
  {
    title: 'Front of House Engineering',
    description:
      'Hire Caravan Audio to run front of house at your venue and ensure quality sound and smooth operation working with artists and venue coordinators alike',
  },
   {
    title: 'System Installation',
    description:
      'Does your restaurant, bar, or venue need a new sound system for in house events? Caravan Audio provides purchasing, installation, and even services for an on site tech for your new sound system. Contact Caravan for system packages today!',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <h2>Services</h2>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
