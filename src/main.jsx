import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Nav from './nav.jsx'
import ProfileCard from './profilecard.jsx'
import AboutMe from './aboutMe.jsx'
import Footer from './footer.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';
import Skills from './skills.jsx';
import Portfolio from './portfolio.jsx';
import Certifications from './certifications.jsx';

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
