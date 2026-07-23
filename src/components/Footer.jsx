import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-col">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React + Vite and Claude Code.</span>
        </div>

        <div className="footer-col footer-links">
          <Link to="/archive">Archive</Link>
        </div>

        <div className="footer-col footer-links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
