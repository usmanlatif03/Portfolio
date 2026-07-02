function MainBanner(){
    return(
        <div className="hero-banner-container" id="Home">
            <div className="hero-banner-warpper flex align-center space-between">
                <div className="hero-banner-content color-white" data-aos="zoom-in-right">
                    <h4>Hi, I'm Usman Latif</h4>
                    <h1>Creative Designer <span className="color-orange">·</span> Video Editor <span className="color-orange">·</span> Digital Marketing Specialist</h1>
                    <p>I help brands grow through compelling visual design, engaging video content, and performance-driven advertising with Google Ads and Meta Ads.</p>
                    <div className="hero-cta flex align-center gap-1">
                        <a className="btn btn-primary" href="#Portfolio">View My Work</a>
                        <a className="btn btn-outline" href="#contact">Get in Touch</a>
                    </div>
                </div>
                <div className="portfolio-img" data-aos="zoom-in-left" data-aos-duration="1000">
                    <img src="/ChatGPT Image May 31, 2025, 11_13_18 PM.png" alt="Usman Latif" />
                </div>
            </div>
        </div>
    )
}
export default MainBanner