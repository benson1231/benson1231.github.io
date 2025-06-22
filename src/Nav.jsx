import React from "react";
import "./nav.css";

const menuItems = [
  { href: "#profile", label: "Home" },
  { href: "#bio", label: "About Me" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#certifications", label: "Certifications" },
  { href: "#footer", label: "Contact" },
];

function Nav() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-wrapper">
        <div className="nav-logo">Chin-Yu Lee</div>
        <ul className="nav-menu">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Nav);
