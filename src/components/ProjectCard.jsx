import { Link } from "react-router-dom";
import { svgPlaceholder } from "../utils/placeholder.js";
import StatusBadge from "./StatusBadge.jsx";
import TagPill from "./TagPill.jsx";

// One card, used on Home, Projects, and Archive. Every project — regardless
// of status — shows the same fact block (version, started, last updated,
// next goal off the roadmap), since projects here don't have a "finished"
// state that needs different treatment; they're just at different points
// in an ongoing life cycle.
//
// The image and title link straight to the project's detail page; the rest
// of the card (badge, summary, expandable details) sits outside that link
// so the GitHub/Live Demo/Development Log buttons inside the <details> stay
// valid, clickable interactive elements instead of nested anchors.
function ProjectCard({ project }) {
  const cover = project.coverImage || svgPlaceholder(project.slug, project.label);
  const techList = project.status === "concept" ? project.possibleTechnologies : project.technologies;
  const detailPath = `/archive/${project.slug}`;
  const nextGoal = project.sections?.roadmap?.[0];
  const hasExpandContent =
    (techList && techList.length > 0) || project.whatILearned || project.repoLink || project.liveDemoLink;

  return (
    <div className="card">
      <Link to={detailPath}>
        <img className="cover" src={cover} alt={`${project.title} cover graphic`} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="card-top-row">
          <h3>
            <Link to={detailPath}>{project.title}</Link>
          </h3>
        </div>
        <StatusBadge status={project.status} />
        <p className="summary">{project.shortDescription}</p>

        <div className="card-fact">Version: {project.version || "—"}</div>
        <div className="card-fact">Started: {project.dateStarted || "—"}</div>
        <div className="card-fact">Updated: {project.updatedAt || "—"}</div>
        {nextGoal && <div className="card-fact">Next: {nextGoal}</div>}

        {hasExpandContent && (
          <details className="card-expand">
            <summary>More details</summary>
            <div className="card-expand-body">
              {techList && techList.length > 0 && (
                <>
                  <h4>Technologies</h4>
                  <div className="tag-row">
                    {techList.map((tech) => <TagPill key={tech} label={tech} />)}
                  </div>
                </>
              )}

              {project.whatILearned && (
                <>
                  <h4>What I Learned</h4>
                  <p className="card-fact">{project.whatILearned}</p>
                </>
              )}

              <div className="card-actions">
                {project.repoLink && (
                  <a className="btn" href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.liveDemoLink && (
                  <a className="btn" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
                <Link className="btn" to={`${detailPath}#development-log`}>Development Log</Link>
              </div>
            </div>
          </details>
        )}

        <Link className="card-cta" to={detailPath}>View Full Project →</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
