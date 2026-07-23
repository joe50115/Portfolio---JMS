/* ==========================================================================
   CONCEPT — not started yet.
   ========================================================================== */

export const project = {
  slug: "privacy-phone",
  title: "Privacy Phone",
  label: "PRIV",
  status: "concept",
  featured: false,

  shortDescription:
    "A Linux-based minimalist smartphone with an E Ink display and physical keyboard — calls, texting, navigation, and reading, with no addictive apps.",
  tags: ["Embedded Systems", "Hardware", "Privacy"],
  technologies: [],
  possibleTechnologies: ["Linux", "Embedded Hardware", "PCB Design", "E Ink"],
  difficulty: "Advanced",
  dateStarted: null,
  dateCompleted: null,
  timeInvested: null,
  repoLink: "",
  liveDemoLink: null,
  updatedAt: "2026-07-22",

  goal:
    "Build a Linux-based phone deliberately limited to calls, texting, navigation, and reading — an E Ink display and physical keyboard by design, with no space for addictive apps.",

  sections: {
    overview:
      "Idea: a minimalist smartphone running Linux, with an E Ink screen and physical keyboard instead of a touchscreen app grid. Scope is intentionally narrow — calls, texting, navigation, reading — with no app store for anything designed to be addictive.",

    background:
      "Interested in privacy-focused technology and in devices that are useful without being engineered to maximize time spent on them. This is the most hardware-ambitious future idea on the list — combining embedded Linux, custom PCB work, and an E Ink display.",

    roadmap: [
      "E Ink display + physical keyboard hardware selection",
      "Embedded Linux bring-up",
      "Scope the software to calls, texting, navigation, and reading only",
    ],
  },
};
