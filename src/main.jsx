import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Nav from './components/Nav.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import AboutMe from './components/AboutMe.jsx'
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Certifications from './components/Certifications.jsx';

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
