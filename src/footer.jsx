export default function Footer(){
    return(
        <div className="footer-container background-white" id="contact">
            <div className="footer-wrapper">
                <div className="footer-content color-white" data-aos="fade-up" >
                    <h2 className="footer-title">Get In Touch</h2>
                    <p className="footer-description"> Based in Lahore, Pakistan. For inquiries or collaborations, feel free to <a  className="color-white" href="tel:+923120452712" aria-label="Phone Number">schedule a call</a> or email <a className="color-white" href="mailto:xsilent664@gmail.com" aria-label="Email">xsilent664@gmail.com</a>. </p>
                    <p className="social-icons flex align-center gap-1 justify-center">
                        <a href="https://www.linkedin.com/in/usman-latif-b54430363/" target="blank" aria-label="Linkedin">
                            <img src="/linkedin-custom.png" alt="Linkedin" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=923120452712&text=Hello, Usman" target="blank" aria-label="Whatsapp">
                            <img src="/whatsapp-custom.png" alt="Whatsapp" />
                        </a>
                        <a href="mailto:xsilent664@gmail.com" target="blank" aria-label="Gmail">
                            <img src="/gmail icon-3.png" alt="Gmail" />
                        </a>
                    </p>
                </div>
            </div>  
        </div>
    )
}
