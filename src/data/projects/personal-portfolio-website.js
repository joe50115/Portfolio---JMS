/* ==========================================================================
   COMPLETED — this site.
   ========================================================================== */

export const project = {
  slug: "personal-portfolio-website",
  title: "Personal Portfolio Website",
  label: "PORT",
  status: "completed",
  featured: true,

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
  updatedAt: "2026-07-20",

  whatILearned:
    "A data-driven project registry (one JS file per project) makes it painless to keep adding write-ups later, instead of hand-editing markup every time.",
  goal:
    "Build a single place to document every project I work on — completed, in progress, and future ideas — with enough detail per project that the write-up is actually useful later, not just a screenshot and a one-liner.",

  sections: {
    overview:
      "A React + Vite single-page site with no backend: every project and profile detail lives in a plain JS/data file, and the Home, Projects, Archive, and detail pages all render from that data automatically.",

    background:
      "I wanted a portfolio that would actually grow with me instead of going stale after the first draft — one where adding a new project is just adding a data file, not rebuilding a page.",

    planningAndDesign:
      "Kept content and presentation strictly separate: every project is a plain object (metadata + a `sections` object for the write-up), and every screen just filters/maps over that array. Status-specific pages (Projects/In Progress/Future Ideas), the searchable Archive, and the detail page all read from the same registry.",

    developmentLog: [
      { date: "2026-06-10", update: "Scaffolded the site structure — data-driven project registry, routing, base design system." },
      { date: "2026-06-28", update: "Built the expandable project cards and the searchable/filterable archive." },
      { date: "2026-07-10", update: "Added the About, Resume, and Timeline pages." },
      { date: "2026-07-20", update: "Added dark/light mode, scroll animations, and polish pass." },
    ],

    gallery: [
      { type: "image", seed: "portfolio-1", caption: "Home page hero and dashboard" },
      { type: "image", seed: "portfolio-2", caption: "Expandable project card" },
    ],

    finalResult:
      "A site that separates content from presentation completely — new projects and profile updates are all just data-file edits.",

    lessonsLearned:
      "Designing the data schema before writing any screen components paid off — once the shape of a 'project' was settled, every page (Home, Projects, Archive, detail) fell out of it almost for free.",

    futureImprovements:
      "Swap the generated placeholder graphics for real screenshots as projects accumulate them.",
  },
};
