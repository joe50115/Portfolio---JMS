import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects/index.js";
import { svgPlaceholder } from "../utils/placeholder.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import StatusBadge from "../components/StatusBadge.jsx";
import TagPill from "../components/TagPill.jsx";
import MarkdownContent from "../components/MarkdownContent.jsx";
import Gallery from "../components/Gallery.jsx";
import DetailSection from "../components/DetailSection.jsx";

// Every field/section below is optional except slug/title/status — see
// data/projects/example-*.js for what a fully filled-out project looks
// like versus a bare-bones planned one. DetailSection skips anything
// that's empty, so this template scales down gracefully.
function ProjectDetailScreen() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = index === -1 ? null : PROJECTS[index];

  useEffect(() => {
    document.title = project ? `${project.title} — Joseph Solis` : "Project not found — Joseph Solis";
  }, [project]);

  useScrollToHash([project]);

  if (!project) {
    return (
      <section className="wrap" style={{ padding: "96px 0" }}>
        <span className="eyebrow">Not found</span>
        <h1>That project doesn't exist (yet).</h1>
        <p className="lede">No project matches "<code>{slug}</code>". It may have moved, or the link is off.</p>
        <div className="cta-row">
          <Link className="btn primary" to="/archive">Back to the archive</Link>
        </div>
      </section>
    );
  }

  const cover = svgPlaceholder(project.slug, project.label, 1200, 500);
  const s = project.sections || {};

  return (
    <>
      <header className="detail-head">
        <div className="wrap">
          <Link to="/archive" className="eyebrow">← Back to archive</Link>
          <div className="detail-meta-row" style={{ marginTop: "18px" }}>
            <StatusBadge status={project.status} />
            <span className="date">
              {project.dateStarted || "—"} → {project.dateCompleted || (project.status === "completed" ? "—" : "ongoing")}
            </span>
          </div>
          <h1>{project.title}</h1>
          <p className="lede">{project.shortDescription}</p>
        </div>
      </header>

      <div className="wrap">
        <img className="detail-cover" src={cover} alt={`${project.title} cover graphic`} />

        <div className="detail-layout">
          <div>
            <DetailSection id="overview" title="Overview" show={!!s.overview}>
              <MarkdownContent markdown={s.overview} />
            </DetailSection>

            <DetailSection title="Goal" show={!!project.goal}>
              <MarkdownContent markdown={project.goal} />
            </DetailSection>

            <DetailSection title="Background" show={!!s.background}>
              <MarkdownContent markdown={s.background} />
            </DetailSection>

            <DetailSection title="Planning and Design" show={!!s.planningAndDesign}>
              <MarkdownContent markdown={s.planningAndDesign} />
            </DetailSection>

            <DetailSection title="Decision Log" show={!!(s.decisionLog && s.decisionLog.length)}>
              <ul className="decision-log">
                {(s.decisionLog || []).map((entry, i) => (
                  <li key={i}>
                    <span className="log-date">{entry.date}</span>
                    <p><strong>Decision:</strong> {entry.decision}</p>
                    <p><strong>Reason:</strong> {entry.reason}</p>
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection id="development-log" title="Development Log" show={!!(s.developmentLog && s.developmentLog.length)}>
              <ul className="dev-log">
                {(s.developmentLog || []).map((entry, i) => (
                  <li key={i}>
                    <span className="log-date">{entry.date}</span>
                    <p>{entry.update}</p>
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Problems Encountered" show={!!s.problemsEncountered}>
              <MarkdownContent markdown={s.problemsEncountered} />
            </DetailSection>

            <DetailSection title="Solutions" show={!!s.solutions}>
              <MarkdownContent markdown={s.solutions} />
            </DetailSection>

            <DetailSection id="gallery" title="Gallery" show={!!(s.gallery && s.gallery.length)}>
              <Gallery label={project.label} items={s.gallery} />
            </DetailSection>

            <DetailSection title="Final Result" show={!!s.finalResult}>
              <MarkdownContent markdown={s.finalResult} />
            </DetailSection>

            <DetailSection id="lessons-learned" title="Lessons Learned" show={!!s.lessonsLearned}>
              <MarkdownContent markdown={s.lessonsLearned} />
            </DetailSection>

            <DetailSection title="Future Improvements" show={!!s.futureImprovements}>
              <MarkdownContent markdown={s.futureImprovements} />
            </DetailSection>

            <DetailSection title="Version History" show={!!(s.versionHistory && s.versionHistory.length)}>
              <table className="version-table">
                <thead>
                  <tr><th>Version</th><th>Date</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {(s.versionHistory || []).map((v, i) => (
                    <tr key={i}>
                      <td>{v.version}</td>
                      <td>{v.date}</td>
                      <td>{v.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DetailSection>
          </div>

          <aside className="detail-sidebar">
            <h4>Status</h4>
            <p style={{ marginBottom: "18px" }}><StatusBadge status={project.status} /></p>

            <h4>Date Started</h4>
            <p style={{ marginBottom: "18px" }}>{project.dateStarted || "—"}</p>

            <h4>Date Completed</h4>
            <p style={{ marginBottom: "18px" }}>{project.dateCompleted || "—"}</p>

            <h4>Difficulty</h4>
            <p style={{ marginBottom: "18px" }}>{project.difficulty || "—"}</p>

            <h4>Time Invested</h4>
            <p style={{ marginBottom: "18px" }}>{project.timeInvested || "—"}</p>

            <h4>Technologies Used</h4>
            <div className="tag-row" style={{ marginBottom: "18px" }}>
              {(project.technologies && project.technologies.length > 0
                ? project.technologies
                : project.possibleTechnologies || []
              ).map((tech) => <TagPill key={tech} label={tech} />)}
            </div>

            <h4>Tags</h4>
            <div className="tag-row" style={{ marginBottom: "18px" }}>
              {project.tags.map((tag) => <TagPill key={tag} label={tag} />)}
            </div>

            <h4>Repository</h4>
            <p style={{ marginBottom: "18px" }}>
              {project.repoLink
                ? <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View repo →</a>
                : "—"}
            </p>

            <h4>Live Demo</h4>
            <p>
              {project.liveDemoLink
                ? <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">View demo →</a>
                : "—"}
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailScreen;
