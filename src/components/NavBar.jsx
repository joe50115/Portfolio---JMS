import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((open) => !open);
  }

  function linkClass({ isActive }) {
    return isActive ? "active" : undefined;
  }

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link to="/" className="brand">
          ~/<span>joseph-solis</span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/timeline" className={linkClass} onClick={() => setMenuOpen(false)}>Timeline</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About Me</NavLink></li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          Menu
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
