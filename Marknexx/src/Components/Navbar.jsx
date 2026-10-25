import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";

function MobileNavLinks({ closeMenu }) {
  return (
    <>
      <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
        Services
      </NavLink>
      <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
        Contact
      </NavLink>
      <a
        href="https://wa.me/917048931619"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        onClick={closeMenu}
      >
        Let's Talk
        <ArrowUpRight size={17} />
      </a>
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("codeight-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("codeight-theme", theme);
  }, [theme]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // Close the mobile menu automatically if the window is resized back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
        Code<span>ight</span>
        </Link>

        {/* Desktop Navigation — always inline, hidden below 760px via CSS */}
        <nav className="nav-links">
          <MobileNavLinks closeMenu={closeMenu} />
        </nav>

        {/* Right Controls */}
        <div className="nav-actions">

          {/* Theme Button */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            title={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Mobile Menu toggle */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile overlay menu — portaled straight onto <body> so it can
          never be trapped/clipped by a transformed or overflow:hidden
          ancestor (e.g. a page-transition wrapper). Only exists in the
          DOM while open. */}
      {menuOpen &&
        createPortal(
          <div className="mobile-nav-overlay">
            <MobileNavLinks closeMenu={closeMenu} />
          </div>,
          document.body
        )}
    </header>
  );
}