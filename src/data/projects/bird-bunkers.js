/* ==========================================================================
   ACTIVE DEVELOPMENT
   Gallery uses generated placeholder artwork until real screenshots/concept
   art exist — swap the `seed` items for `src` once you have real images.
   ========================================================================== */

export const project = {
  slug: "bird-bunkers",
  title: "Bird Bunkers",
  label: "BIRD",
  status: "active-development",
  featured: true,
  version: "v0.2",

  shortDescription:
    "A multiplayer bird-themed bunker survival game where players build defenses, survive waves of enemies, and collect unique birds with different abilities.",
  tags: ["Game Dev", "Multiplayer"],
  technologies: ["Godot", "GDScript"],
  difficulty: "Advanced",
  dateStarted: "2026-05-01",
  dateCompleted: null,
  timeInvested: "~30 hours so far",
  repoLink: "", // add your repo link here
  liveDemoLink: null,
  updatedAt: "2026-07-22",

  whatILearned:
    "Networking a game from the start (even a rough prototype) surfaces sync/authority questions way earlier than bolting multiplayer on after the singleplayer version already works.",
  goal:
    "Build a co-op survival game where players fortify a bunker between enemy waves and unlock birds with distinct abilities that change how you build and fight.",

  sections: {
    overview:
      "A wave-based survival game: players gather resources between waves to build and upgrade bunker defenses, then defend against increasingly difficult enemy waves. Birds collected during runs have unique passive/active abilities that change playstyle.",

    background:
      "Wanted to build something with actual multiplayer networking rather than another singleplayer prototype, plus a game concept flexible enough to keep adding content (new birds, enemies, defenses) over time.",

    planningAndDesign:
      "Core loop first: build phase → wave → build phase, on a single map, before any bird abilities or networking. Multiplayer is being built with a client-server model from the start rather than retrofitted later.",

    milestones: [
      "Prototyped the build-phase/wave-phase core loop in singleplayer",
      "Added basic enemy AI and the first wave-spawning system",
    ],

    developmentLog: [
      { date: "2026-05-01", update: "Prototyped the build-phase/wave-phase core loop in singleplayer." },
      { date: "2026-05-20", update: "Added basic enemy AI and the first wave-spawning system." },
      { date: "2026-06-25", update: "Started the client-server networking layer for co-op play." },
    ],

    gallery: [
      { type: "image", seed: "bird-1", caption: "Placeholder concept art — bunker build phase" },
      { type: "image", seed: "bird-2", caption: "Placeholder concept art — enemy wave" },
    ],

    roadmap: [
      "First bird abilities",
      "A proper enemy variety pass",
      "Matchmaking/lobby flow once the core networking is solid",
    ],
  },
};
