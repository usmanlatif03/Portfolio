import { services } from "./data/content.js";

export default function Services() {
  return (
    <div className="services-container" id="Services">
      <div className="services-wrapper">
        <div className="services-head color-white text-center" data-aos="fade-down">
          <h5>WHAT I DO</h5>
          <h2>Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card color-white"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-blurb">{service.blurb}</p>
              <ul className="service-included">
                {service.included.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a className="btn btn-outline service-cta" href="#Portfolio">
                View Work
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
