 import React from "react"
 import { useState } from "react"

export default function Header() {
    const [active , setActive] = useState(false)
    const openNav = () =>{
          setActive(!active)
          
    }
    return (
        <header >
            <div className="header-wrapper background-white flex align-center space-between">
                <div className="dev-title color-white">
                    <a href="#Home">Usman Latif</a>
                </div>
                <div className={active ? "header-nav open" : "header-nav"}>
                    <nav className="navigation">
                        <ul className="nav-list color-white gap-1 flex align-center" onClick={() => setActive(false)}>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Portfolio">Portfolio</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Testimonials">Testimonials</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div onClick={openNav} className="mobile-nav">
                    <svg fill="#fff" width={"24px"} height={"24px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    {/* <img  src="/menu-hamburger.svg" alt="Menu" /> */}
                </div>
            </div>
        </header>
    )
}

