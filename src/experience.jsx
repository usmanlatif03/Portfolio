export default function Experience() {
    return (
        <div className="experience-container background-black" id="Experience">
            <div className="experience-wrapper">
                <div className="experience-content color-white text-center" data-aos="fade-left">
                    <h4>My journey so far</h4>
                    <h2>Experience</h2>
                </div>
                <div className="experience-journey">
                    <div className="experience-journey-wrapper">
                        {/* Journey 1 */}
                        <div className="journey-content journey-1 pos-relative flex align-center flex-start" data-aos="fade-right" >
                            <span className="journey-line" data-aos="fade-up" ></span>
                            <div className="journey-data color-white text-start">
                                <h2 className="journey-designation">Digital Marketing Specialist</h2>
                                <span>2024 - Present | Freelance</span>
                            </div>
                        </div>
                        {/* Journey 2 */}
                        <div className="journey-content journey-2 pos-relative flex align-center flex-end" data-aos="fade-up" >
                            <span className="journey-line" data-aos="fade-up" ></span>
                            <div className="journey-data color-white text-end">
                                <h2 className="journey-designation">Video Editor</h2>
                                <span>2021 - Present | Freelance & Brands</span>
                            </div>
                        </div>
                        {/* Journey 3 */}
                        <div className="journey-content journey-3 pos-relative flex align-center flex-start"data-aos="fade-right" >
                            {/* <span className="journey-line"></span> */}
                            <div className="journey-data color-white text-start">
                                <h2 className="journey-designation">Graphic Designer</h2>
                                <span>2020 - Present | Freelance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}