/* ==========================================================================
   DASHBOARD HELPERS
   Everything the Home page's Engineering Dashboard section needs, derived
   from the PROJECTS array — nothing here needs to be hand-maintained. Bump
   a project's `updatedAt` and it flows through automatically.
   ========================================================================== */

export function getStatusCounts(projects) {
  return {
    activeDevelopment: projects.filter((p) => p.status === "active-development").length,
    stable: projects.filter((p) => p.status === "stable").length,
    concept: projects.filter((p) => p.status === "concept").length,
  };
}

// The active-development project that was touched most recently.
export function getCurrentFocus(projects) {
  const activeDevelopment = projects.filter((p) => p.status === "active-development");
  if (activeDevelopment.length === 0) return null;
  return [...activeDevelopment].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))[0];
}

// The single most recently updated project, regardless of status.
export function getLastUpdatedProject(projects) {
  if (projects.length === 0) return null;
  return [...projects].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))[0];
}
