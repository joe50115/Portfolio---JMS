/* ==========================================================================
   TIMELINE HELPERS
   Groups projects by the year they started, purely from `dateStarted` on
   PROJECTS — no separate timeline data to maintain. Projects with no
   dateStarted yet (future ideas) land in a leading "Future" bucket, shown
   before the dated years since that's the top of the roadmap.
   ========================================================================== */

export function groupProjectsByStartYear(projects) {
  const byYear = new Map();
  const future = [];

  for (const project of projects) {
    if (!project.dateStarted) {
      future.push(project);
      continue;
    }
    const year = project.dateStarted.slice(0, 4);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year).push(project);
  }

  const years = Array.from(byYear.keys()).sort((a, b) => b.localeCompare(a));
  const groups = years.map((year) => ({
    label: year,
    projects: byYear.get(year).sort((a, b) => (a.dateStarted < b.dateStarted ? -1 : 1)),
  }));

  if (future.length > 0) {
    groups.unshift({ label: "Future", projects: future });
  }

  return groups;
}
