/* ==========================================================================
   STABLE — this site. Settled v1, still gets periodic maintenance/features.
   ========================================================================== */

export const project = {
  slug: "personal-portfolio-website",
  title: "Personal Portfolio Website",
  label: "PORT",
  status: "stable",
  featured: true,
  version: "v1.0",

  shortDescription:
    "A website documenting all of my engineering and software projects.",
  tags: ["Web Dev", "Frontend"],
  technologies: ["React", "Vite", "JavaScript", "CSS"],
  difficulty: "Intermediate",
  dateStarted: "2026-06-10",
  dateCompleted: "2026-07-20",
  timeInvested: "~60 hours",
  repoLink: "https://github.com/joe50115/Portfolio---JMS",
  liveDemoLink: null,
  updatedAt: "2026-07-22",

  whatILearned:
    "A data-driven project registry (one JS file per project) makes it painless to keep adding write-ups later, instead of hand-editing markup every time.",
  goal:
    "Build a single place to document every project I work on, at whatever stage it's at, with enough detail per project that the write-up is actually useful later — not just a screenshot and a one-liner, and never framed as 'finished' just because a first version shipped.",

  sections: {
    overview:
      "A React + Vite single-page site with no backend: every project and profile detail lives in a plain JS/data file, and the Home, Projects, Archive, and detail pages all render from that data automatically.",

    background:
      "I wanted a portfolio that would actually grow with me instead of going stale after the first draft — one where adding a new project is just adding a data file, not rebuilding a page.",

    planningAndDesign:
      "Kept content and presentation strictly separate: every project is a plain object (metadata + a `sections` object for the write-up), and every screen just filters/maps over that array. The Projects page, the searchable Archive, and the detail page all read from the same registry — no project ever needs to move between sections as its status changes.",

    milestones: [
      "Scaffolded the site structure — data-driven project registry, routing, base design system",
      "Built the expandable project cards and the searchable/filterable archive",
      "Added the About, Resume, and Timeline pages",
      "Added dark/light mode, scroll animations, and a polish pass",
      "Reworked the project data model around status/version/milestones/roadmap instead of a completed/in-progress/planned split",
    ],

    developmentLog: [
      { date: "2026-06-10", update: "Scaffolded the site structure — data-driven project registry, routing, base design system." },
      { date: "2026-06-28", update: "Built the expandable project cards and the searchable/filterable archive." },
      { date: "2026-07-10", update: "Added the About, Resume, and Timeline pages." },
      { date: "2026-07-20", update: "Added dark/light mode, scroll animations, and polish pass." },
      { date: "2026-07-22", update: "Reworked the whole project data model to represent projects as living/evolving instead of completed-or-not." },
    ],

    gallery: [
      { type: "image", seed: "portfolio-1", caption: "Home page hero and dashboard" },
      { type: "image", seed: "portfolio-2", caption: "Expandable project card" },
    ],

    finalResult:
      "A site that separates content from presentation completely — new projects and profile updates are all just data-file edits.",

    lessonsLearned:
      "Designing the data schema before writing any screen components paid off — once the shape of a 'project' was settled, every page (Home, Projects, Archive, detail) fell out of it almost for free.",

    roadmap: [
      "Swap remaining generated placeholder graphics for real screenshots as projects accumulate them",
    ],
  },
};
