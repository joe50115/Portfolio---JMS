import { Link } from "react-router-dom";
import { svgPlaceholder } from "../utils/placeholder.js";
import StatusBadge from "./StatusBadge.jsx";
import TagPill from "./TagPill.jsx";

// One card, used on Home, the status pages (Projects/In Progress/Future
// Ideas), and Archive. What extra info shows under the summary depends on
// the project's status:
//   completed   -> date completed
//   in-progress -> progress bar + goal
//   planned     -> possible technologies
//
// The image and title link straight to the project's detail page; the rest
// of the card (badge, summary, expandable details) sits outside that link
// so the GitHub/Live Demo/Development Log buttons inside the <details> stay
// valid, clickable interactive elements instead of nested anchors.
function ProjectCard({ project }) {
  const cover = svgPlaceholder(project.slug, project.label);
  const techList = project.status === "planned" ? project.possibleTechnologies : project.technologies;
  const detailPath = `/archive/${project.slug}`;
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

        {project.status === "completed" && project.dateCompleted && (
          <div className="card-fact">Completed: {project.dateCompleted}</div>
        )}

        {project.status === "in-progress" && (
          <div className="card-progress">
            {typeof project.progress === "number" && (
              <>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                </div>
                <span className="progress-label">{project.progress}% complete</span>
              </>
            )}
            {project.goal && <div className="card-fact">Goal: {project.goal}</div>}
          </div>
        )}

        {project.status === "planned" && project.goal && (
          <div className="card-fact">Goal: {project.goal}</div>
        )}

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
