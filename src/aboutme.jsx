function AboutMe() {
  return (
    <div className="about-me-ccontainer" id="About">
      <div className="about-me-head color-white text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2>About Me</h2>
        <p>Transforming Ideas into Digital Experiences</p>
      </div>
      <div className="about-me-content flex align-center space-between">
        <div className="about-me-intro color-white">
          <h4>Hi, I'm</h4>
          <h2>Usman Latif</h2>
          <p>
           A Creative Designer, Video Editor, and Digital Marketing Specialist. I help businesses build a
           strong online presence through impactful visual design, engaging video content, and data-driven
           advertising strategies. From creating eye-catching brand assets to producing compelling videos and
           managing high-performing Meta and Google Ads campaigns, I focus on delivering creative solutions
           that drive real business growth.
          </p>
        </div>
        <div className="about-me-img" data-aos="zoom-out-left">
          <img src="/portfolioImg.jpeg" alt="Usman Latif" />
        </div>
      </div>
      <div
        className="overview-skill-wrapper flex align-center space-between"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        {/* pillar 1 */}
        <div className="skill flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-emoji">🎨</div>
            <div className="skill-name">Graphic Design</div>
          </div>
        </div>
        {/* pillar 2 */}
        <div className="skill flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-emoji">🎬</div>
            <div className="skill-name">Video Editing</div>
          </div>
        </div>
        {/* pillar 3 */}
        <div className="skill flex align-center justify-center">
          <div className="skill-box color-white">
            <div className="skill-emoji">📈</div>
            <div className="skill-name">Digital Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
