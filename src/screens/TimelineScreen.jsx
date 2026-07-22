import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects/index.js";
import { groupProjectsByStartYear } from "../utils/timeline.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import StatusBadge from "../components/StatusBadge.jsx";

function TimelineScreen() {
  const groups = groupProjectsByStartYear(PROJECTS);
  const revealRef = useScrollReveal();

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">History and roadmap</span>
          <h1>Timeline</h1>
          <p className="lede">When each project started, from the earliest build to what's still just an idea.</p>
        </div>
      </header>

      <section ref={revealRef} className="reveal">
        <div className="wrap">
          <ol className="timeline">
            {groups.map((group) => (
              <li key={group.label} className="timeline-year">
                <h2>{group.label}</h2>
                <ul className="timeline-items">
                  {group.projects.map((project) => (
                    <li key={project.slug} className="timeline-item">
                      <span className="timeline-dot" aria-hidden="true" />
                      <Link to={`/archive/${project.slug}`} className="timeline-title">{project.title}</Link>
                      <StatusBadge status={project.status} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default TimelineScreen;
