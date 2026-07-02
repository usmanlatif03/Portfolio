import { useState } from "react";
import { faqs } from "./data/content.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <div className="faq-container background-black" id="FAQ">
      <div className="faq-wrapper">
        <div className="faq-head color-white text-center" data-aos="fade-down">
          <h5>QUESTIONS</h5>
          <h2>FAQ</h2>
        </div>
        <div className="faq-list" data-aos="fade-up">
          {faqs.map((item, index) => (
            <div
              className={openIndex === index ? "faq-item open" : "faq-item"}
              key={index}
            >
              <button className="faq-question color-white" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="faq-answer color-white">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
