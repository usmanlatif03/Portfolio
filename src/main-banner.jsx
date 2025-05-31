function MainBanner(){
    return(
        <div className="hero-banner-container">
            <div className="hero-banner-warpper flex align-center space-between">
                <div className="hero-banner-content color-white" data-aos="zoom-in-right">
                    <h4>Hi I am</h4>
                    <h1>Video Editor </h1>
                    {/* <h1>Developer</h1> */}
                    <p>After Effects | Premiere Pro | Blender</p>
                </div>
                <div className="portfolio-img" data-aos="zoom-in-left" data-aos-duration="1000">
                    <img src="./assets/ChatGPT Image May 31, 2025, 11_13_18 PM.png" alt="Muhammad Usman Latif" />
                </div>
            </div>
        </div>
    )
}
export default MainBanner