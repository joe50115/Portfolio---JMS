import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects/index.js";
import { profile } from "../data/profile.js";
import { getStatusCounts, getCurrentFocus, getLastUpdatedProject } from "../utils/dashboard.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import ProfileAvatar from "../components/ProfileAvatar.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import DashboardStats from "../components/DashboardStats.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import AudioVisualizer from "../components/AudioVisualizer.jsx";

function HomeScreen() {
  const inProgress = PROJECTS.filter((p) => p.status === "active-development").slice(0, 3);
  const counts = getStatusCounts(PROJECTS);
  const currentFocus = getCurrentFocus(PROJECTS);
  const lastUpdated = getLastUpdatedProject(PROJECTS);

  const dashboardRef = useScrollReveal();
  const buildingRef = useScrollReveal();

  return (
    <>
      {/* ---------------------------- Hero ---------------------------- */}
      <header className="hero profile-hero">
        <div className="wrap profile-hero-layout">
          <ProfileAvatar label={profile.avatarLabel} />
          <div>
            <span className="eyebrow">{profile.role}</span>
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            {profile.about.map((paragraph, i) => (
              <p key={i} className="lede">{paragraph}</p>
            ))}
            <div className="cta-row">
              <Link className="btn primary" to="/projects">View Projects</Link>
              <Link className="btn" to="/about#contact">Contact Me</Link>
            </div>
            <SocialLinks links={profile.links} />
          </div>
        </div>
      </header>

      <AudioVisualizer />

      {/* ------------------------------ Dashboard ------------------------------ */}
      <section ref={dashboardRef} className="reveal">
        <div className="wrap">
          <div className="section-head">
            <h2>Engineering Dashboard</h2>
          </div>
          <DashboardStats counts={counts} currentFocus={currentFocus} lastUpdated={lastUpdated} />
        </div>
      </section>

      {/* --------------------------- Currently building --------------------------- */}
      <section ref={buildingRef} className="reveal">
        <div className="wrap">
          <div className="section-head">
            <h2>Currently building</h2>
            <Link to="/archive" className="see-all">See all →</Link>
          </div>
          <div className="grid">
            {inProgress.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
