import ProjectCard from "./ProjectCard.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

// Shared "section of project cards, or an empty state" block used by the
// Projects page, so the grid/empty-state markup only lives in one place.
function ProjectGrid({ id, title, description, projects }) {
  const revealRef = useScrollReveal();

  return (
    <section id={id} ref={revealRef} className="reveal">
      <div className="wrap">
        <div className="section-head">
          <h2>{title}</h2>
          <span className="result-count">{projects.length} project{projects.length === 1 ? "" : "s"}</span>
        </div>
        <p className="lede" style={{ marginTop: "-16px", marginBottom: "28px" }}>{description}</p>
        {projects.length > 0 ? (
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Nothing here yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectGrid;
