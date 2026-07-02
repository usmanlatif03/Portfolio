import { testimonials } from "./data/content.js";

export default function Testimonials() {
  return (
    <div className="testimonials-container" id="Testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-head color-white text-center" data-aos="fade-down">
          <h5>KIND WORDS</h5>
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              className="testimonial-card color-white text-start"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
