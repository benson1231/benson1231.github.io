import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Nav from './nav.jsx'
import ProfileCard from './profilecard.jsx'
import AboutMe from './AboutMe.jsx'
import Footer from './Footer.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Certifications from './Certifications.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <ProfileCard/>
    <AboutMe/>
    <Education/>
    <Experience />
    <Skills />
    <Portfolio />
    <Certifications />
    <Footer />
  </StrictMode>,
)
