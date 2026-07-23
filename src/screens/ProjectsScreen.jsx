import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects/index.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import ProjectGrid from "../components/ProjectGrid.jsx";

// One unified list, not split by status — a project's status/version/
// milestones/roadmap tell the story of where it's at, so it never needs to
// be "moved" between sections as it evolves. See each card's colored
// status badge for where a given project currently stands.
function ProjectsScreen() {
  useScrollToHash();

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Projects</h1>
          <p className="lede">
            Everything I'm building, at whatever stage it's at — actively evolving,
            settled and stable, still just a concept, or somewhere in between. Every
            project, big or small, is also searchable in the <Link to="/archive">Archive</Link>.
          </p>
        </div>
      </header>

      <ProjectGrid
        title="All Projects"
        description="Tracked by status, not a finish line."
        projects={PROJECTS}
      />
    </>
  );
}

export default ProjectsScreen;
