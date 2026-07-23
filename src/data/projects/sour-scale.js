/* ==========================================================================
   ACTIVE DEVELOPMENT
   ========================================================================== */

export const project = {
  slug: "sour-scale",
  title: "Sour Scale",
  label: "SOUR",
  status: "active-development",
  featured: false,
  version: "v0.1",

  shortDescription:
    "An online candy marketplace centered around sour candy — users can purchase candy while rating how sour it actually is.",
  tags: ["Web Dev", "E-Commerce"],
  technologies: ["React", "Node.js", "PostgreSQL"],
  difficulty: "Intermediate",
  dateStarted: "2026-06-01",
  dateCompleted: null,
  timeInvested: "~15 hours so far",
  repoLink: "", // add your repo link here
  liveDemoLink: null,
  updatedAt: "2026-07-22",

  goal:
    "Build a marketplace for sour candy where the community rates actual sourness, so the label on the package isn't the only source of truth.",

  sections: {
    overview:
      "A store for sour candy where every product carries a community-driven 'Sour Score' built from user ratings, alongside written reviews — starting with the core catalog and rating system before the recommendation/trending features.",

    background:
      "Sourness labeling on candy packaging is inconsistent and mostly marketing — the idea is a crowd-sourced score that actually reflects what buyers experience.",

    planningAndDesign:
      "Building the catalog and rating system first (a product needs to exist and be ratable before 'trending' or 'rankings' mean anything). AI recommendations and trending are explicitly future work, not part of the initial data model.",

    milestones: [
      "Sketched the product/rating data model",
      "Basic product catalog page working",
    ],

    developmentLog: [
      { date: "2026-06-01", update: "Set up the project and sketched the product/rating data model." },
      { date: "2026-07-01", update: "Basic product catalog page working; rating submission still in progress." },
    ],

    roadmap: [
      "Community Sour Score aggregation",
      "Written reviews",
      "AI-driven recommendations",
      "Trending-candies feed",
      "Overall candy rankings",
    ],
  },
};
