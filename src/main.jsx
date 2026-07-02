import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './base.css'
import App from './App.jsx'
import Header from './header.jsx'
import MainBanner from './main-banner.jsx'
import AboutMe from './aboutme.jsx'
import Services from './services.jsx'
import Projects from './projects.jsx'
import TechStack from './tech-stack.jsx'
import Experience from './experience.jsx'
import Testimonials from './testimonials.jsx'
import Faq from './faq.jsx'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <MainBanner />
    <AboutMe />
    <Services />
    <Projects />
    <TechStack />
    {/* <Experience /> */}
    <Testimonials />
    <Faq />
    <Footer />
  </StrictMode>
)
