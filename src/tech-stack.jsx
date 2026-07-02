import { skills, tools } from "./data/content.js";

export default function TechStack() {
  return (
    <div className="tech-stack background-black" id="Skills">
      <div className="tech-stack-wrapper">
        <div className="tech-stack-content color-white text-center" data-aos="fade-down">
          <h5>SKILLS</h5>
          <h2>Technologies</h2>
        </div>

        <div className="tech-skill-wrapper color-white">
          <p className="fw-7 text-center">The tools and technologies I work with</p>
          <div
            className="tech-skill-container flex align-center justify-center gap-2"
            data-aos="fade-up"
          >
            {tools.map((tool, index) => (
              <div className={`tech-skill skill-${index + 1}`} key={index}>
                <img src={tool.src} alt={tool.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="skills-groups flex space-between color-white" data-aos="fade-up">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skills-group text-start" key={group}>
              <h3 className="skills-group-title">{group}</h3>
              <ul className="skills-group-list">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
