/* ==========================================================================
   DASHBOARD HELPERS
   Everything the Home page's Engineering Dashboard section needs, derived
   from the PROJECTS array — nothing here needs to be hand-maintained. Bump
   a project's `updatedAt` and it flows through automatically.
   ========================================================================== */

export function getStatusCounts(projects) {
  return {
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    planned: projects.filter((p) => p.status === "planned").length,
  };
}

// The in-progress project that was touched most recently.
export function getCurrentFocus(projects) {
  const inProgress = projects.filter((p) => p.status === "in-progress");
  if (inProgress.length === 0) return null;
  return [...inProgress].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))[0];
}

// The single most recently updated project, regardless of status.
export function getLastUpdatedProject(projects) {
  if (projects.length === 0) return null;
  return [...projects].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))[0];
}
