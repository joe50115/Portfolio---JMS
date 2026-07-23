/* ==========================================================================
   ACTIVE DEVELOPMENT
   ========================================================================== */

export const project = {
  slug: "movie-tracker",
  title: "Movie Tracking App",
  label: "MOVIE",
  status: "active-development",
  featured: true,
  version: "v0.4",

  shortDescription:
    "A personal movie tracking application for discovering, rating, organizing, and reviewing movies.",
  tags: ["Web Dev", "Full Stack"],
  technologies: ["React", "Node.js", "PostgreSQL"],
  difficulty: "Intermediate",
  dateStarted: "2026-04-15",
  dateCompleted: null,
  timeInvested: "~50 hours so far",
  repoLink: "", // add your repo link here
  liveDemoLink: null,
  updatedAt: "2026-07-22",

  whatILearned:
    "Modeling a many-to-many relationship (users, movies, tags, ratings) cleanly up front saves a lot of migration pain once the feature list starts growing.",
  goal:
    "Build a self-hosted alternative to third-party movie trackers — discover, rate, organize, and review movies without handing that data to another platform.",

  sections: {
    overview:
      "A web app for logging movies watched, rating them, tagging them into custom collections, and writing short reviews — the discovery/rating/organizing core is working, with several bigger features still ahead.",

    background:
      "Wanted more control over my own watch history and ratings than a third-party app gives, plus a project to get more comfortable with a full React + Node + PostgreSQL stack end to end.",

    planningAndDesign:
      "Started with the core loop — search a movie, log it, rate it — before touching any of the bigger features like recommendations or social sharing. Data model: users, movies (cached from a public movie API), ratings, and custom collections as a join table.",

    milestones: [
      "Set up the project and the movie/rating/user schema",
      "Built movie search and logging a watched movie with a rating",
      "Added custom collections for grouping movies beyond a watch list",
    ],

    developmentLog: [
      { date: "2026-04-15", update: "Set up the project and the movie/rating/user schema." },
      { date: "2026-05-10", update: "Built movie search and the ability to log a watched movie with a rating." },
      { date: "2026-06-08", update: "Added custom collections so movies can be grouped beyond just a watch list." },
      { date: "2026-07-05", update: "Working on the review-writing UI and cleaning up the collections view." },
    ],

    problemsEncountered:
      "Caching movie metadata from the external API locally made search fast, but keeping that cache in sync when metadata changes upstream (e.g. a corrected release date) isn't handled yet.",

    solutions:
      "In progress — planning a periodic refresh job for cached movies instead of treating the initial cache as permanent.",

    gallery: [
      { type: "image", seed: "movie-1", caption: "Movie search and logging flow, current in-progress styling" },
    ],

    roadmap: [
      "Watchlists",
      "Recommendations based on watch history",
      "Statistics (genres/years/ratings breakdowns)",
      "Custom collections beyond the basic version already in",
      "Social features (following friends, seeing what they've watched)",
    ],
  },
};
