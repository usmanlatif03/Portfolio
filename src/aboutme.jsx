function AboutMe() {
  return (
    <div className="about-me-ccontainer" id="About">
      <div className="about-me-head color-white text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2>About Me</h2>
        <p>Transforming Ideas into Digital Experiences</p>
      </div>
      <div className="about-me-content flex align-center space-between">
        <div className="about-me-intro color-white">
          <h4>Hello, I'm</h4>
          <h2>Usman</h2>
          <p>
           Creative Video Editor | 4+ Years of Experience in Crafting Engaging Visual Stories Across Diverse Formats.
           Successfully Delivered Many Projects Including PUBG Mobile Edits, Brand Opening Videos, Short form Edits ,Voice-Over Edits, and More.
           Skilled in Adobe Premiere Pro, After Effects, Blender and Audio Syncing. Let’s Bring Your Vision to Life with Impactful Edits That Stand Out!
          </p>
        </div>
        <div className="about-me-img" data-aos="zoom-out-left">
          <img src="/IMG_0010-removebg-preview.png" alt="Muhammad Hassan Latif" />
        </div>
      </div>
      <div
        className="overview-skill-wrapper flex align-center space-between"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        {/* skill 1 */}
        <div className="skill skill-2 flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-icon">
              <img src="/montage.png" alt="Front End Developer" />
            </div>
            <div className="skill-name">Video Editor</div>
          </div>
        </div>
        {/* skill 2 */}
        <div className="skill skill-1 flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-icon">
              <img src="/after-effects.png" alt="Shopify Developer" />
            </div>
            <div className="skill-name">After Effects</div>
          </div>
        </div>
        {/* skill 3 */}
        <div className="skill skill-3 flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-icon">
              <img src="/premiere.png" alt="Js Developer" />
            </div>
            <div className="skill-name">Premiere Pro</div>
          </div>
        </div>
        {/* skill 4 */}
        <div className="skill skill-4 flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-icon">
              <img  src="/pngwing.com (20).png" alt="Web App Developer" />
            </div>
            <div className="skill-name">Blender</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
