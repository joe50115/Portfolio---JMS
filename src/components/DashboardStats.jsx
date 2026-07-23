import { Link } from "react-router-dom";

// The "Engineering Dashboard" stat grid on Home. All values are computed
// from the PROJECTS array (see utils/dashboard.js) — nothing here is
// hand-typed, so it stays correct as projects are added.
function DashboardStats({ counts, currentFocus, lastUpdated }) {
  return (
    <div className="dashboard-grid">
      <div className="stat-tile">
        <span className="stat-label">Active Development</span>
        <span className="stat-value">{counts.activeDevelopment}</span>
      </div>
      <div className="stat-tile">
        <span className="stat-label">Stable</span>
        <span className="stat-value">{counts.stable}</span>
      </div>
      <div className="stat-tile">
        <span className="stat-label">Concept</span>
        <span className="stat-value">{counts.concept}</span>
      </div>
      <div className="stat-tile">
        <span className="stat-label">Current Focus</span>
        {currentFocus ? (
          <Link className="stat-value stat-link" to={`/archive/${currentFocus.slug}`}>{currentFocus.title}</Link>
        ) : (
          <span className="stat-value stat-muted">Nothing in active development</span>
        )}
      </div>
      <div className="stat-tile">
        <span className="stat-label">Last Updated</span>
        {lastUpdated ? (
          <Link className="stat-value stat-link" to={`/archive/${lastUpdated.slug}`}>
            {lastUpdated.title} <span className="stat-muted">({lastUpdated.updatedAt})</span>
          </Link>
        ) : (
          <span className="stat-value stat-muted">—</span>
        )}
      </div>
    </div>
  );
}

export default DashboardStats;
