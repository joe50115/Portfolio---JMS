import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects/index.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import ProjectGrid from "../components/ProjectGrid.jsx";

function ProjectsScreen() {
  useScrollToHash();

  const inProgress = PROJECTS.filter((p) => p.status === "in-progress");
  const planned = PROJECTS.filter((p) => p.status === "planned");
  const completed = PROJECTS.filter((p) => p.status === "completed");

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Projects</h1>
          <p className="lede">
            Everything I'm building — what's actively in progress, what's still just an
            idea, and what's finished and documented end to end. Every project, big or
            small, is also searchable in the <Link to="/archive">Archive</Link>.
          </p>
          <nav className="jump-links" aria-label="On this page">
            <a href="#in-progress">In Progress</a>
            <a href="#future-ideas">Future Ideas</a>
            <a href="#completed">Completed Projects</a>
          </nav>
        </div>
      </header>

      <ProjectGrid
        id="in-progress"
        title="In Progress"
        description="Currently in active development."
        projects={inProgress}
      />

      <ProjectGrid
        id="future-ideas"
        title="Future Ideas"
        description="On the roadmap, not started yet."
        projects={planned}
      />

      <ProjectGrid
        id="completed"
        title="Completed Projects"
        description="Finished and documented end to end."
        projects={completed}
      />
    </>
  );
}

export default ProjectsScreen;
