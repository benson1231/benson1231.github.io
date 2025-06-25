import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-wrapper">
        <div className="nav-logo">Chin-Yu Lee</div>

        {/* 漢堡選單按鈕 */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Nav);
