export default function TechStack() {
  return (
    <div className="tech-stack background-black">
      <div className="tech-stack-wrapper">
        <div
          className="tech-stack-content color-white text-center"
          data-aos="fade-down"
        >
          <h5>SKILLS</h5>
          <h2>Technologies</h2>
        </div>
        <div className="tech-skill-wrapper color-white">
          <p className="fw-7">The Skills and Technologies I used...</p>
          <div
            className="tech-skill-container flex align-center justify-center gap-2"
            data-aos="fade-up"
          >
            <div className="tech-skill skill-1">
              <img src="/assets/after-effects.png" alt="After Effects" />
            </div>
            <div className="tech-skill skill-2">
              <img src="/assets/premiere.png" alt="Adobe Premiere Pro" />
            </div>
            <div className="tech-skill skill-3">
              <img src="/assets/Adobe Media Encoder CC.png" alt="Adobe Media Encoder" />
            </div>
            <div className="tech-skill skill-4">
              <img src="/assets/pngwing.com (20).png" alt="Blender" />
            </div>
            <div className="tech-skill skill-5">
              <img src="/assets/topaz.svg" alt="Topaz" />
            </div>
            <div className="tech-skill skill-6">
              <img src="/assets/pngwing.com (21).png" alt="Adobe Photoshop" />
            </div>
            <div className="tech-skill skill-7">
              <img src="/assets/pngwing.com (22).png" alt="Canva" />
            </div>
          </div>
        </div>
        <div className="shopify-skill-wrapper color-white">
          <div className="text-start shopify-skill-content">
            <p>What I excel at when it comes to </p>
            <h2 className="text-start shopify-skill-title">
              Video Editing.
            </h2>
          </div>
            <div className="shopify-skill-list flex align-center space-between">
            <div className="width-100 shopify-skill flex align-center space-between text-start">
              <div className="width-50 skill-details" data-aos="fade-down-right">
                <h3>Iman Ghazi Style</h3>
              </div>
              <div className="width-50 skill-details" data-aos="fade-down-left">
                <p>
                  "Clean, minimalistic editing style inspired by Iman Ghazi — sharp cuts,
                  high clarity, and cinematic pacing to maintain audience attention."
                </p>
              </div>
            </div>

            <div className="width-100 shopify-skill flex align-center space-between text-start">
              <div className="width-50 skill-details" data-aos="fade-right">
                <h3>VFX Editing</h3>
              </div>
              <div className="width-50 skill-details" data-aos="fade-left">
                <p>
                  "Dynamic visual effects integration, motion tracking, screen replacements,
                  and transitions that elevate storytelling and viewer engagement."
                </p>
              </div>
            </div>

            <div className="width-100 shopify-skill flex align-center space-between text-start">
              <div className="width-50 skill-details" data-aos="fade-up-right">
                <h3>Advertising/Commercial</h3>
              </div>
              <div className="width-50 skill-details" data-aos="fade-up-left">
                <p>
                  "Crafting visually impactful promotional content tailored for brands —
                  optimized for social media, product launches, and marketing campaigns."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
