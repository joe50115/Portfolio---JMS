/* ==========================================================================
   COMPLETED — Senior Design project.
   ========================================================================== */

export const project = {
  slug: "hydroponic-sensor-regulator",
  title: "Automated Hydroponic Sensor and Regulator",
  label: "HYDRO",
  status: "completed",
  featured: true,

  shortDescription:
    "Senior Design project that automated monitoring and regulation of hydroponic nutrient levels using sensors and dosing systems.",
  tags: ["Embedded Systems", "Hardware", "Senior Design"],
  technologies: ["Embedded C", "Sensors", "Pumps", "PCB", "Microcontrollers"],
  difficulty: "Advanced",
  dateStarted: "2025-09-02",
  dateCompleted: "2026-05-08",
  timeInvested: "~250 hours",
  repoLink: "", // add your senior design repo link here
  liveDemoLink: null,
  updatedAt: "2026-05-08",

  whatILearned:
    "Closed-loop control gets a lot harder once you're dosing a real chemical system instead of blinking an LED — sensor noise and dosing lag both have to be designed around.",
  goal:
    "Build a system that continuously monitors a hydroponic reservoir's nutrient concentration (EC) and pH, then automatically doses nutrient solution and pH adjuster to keep both in range without manual testing.",

  sections: {
    overview:
      "A microcontroller-based unit that reads EC and pH probes submerged in a hydroponic reservoir, compares the readings against target ranges, and drives peristaltic pumps to dose nutrient solution or pH up/down as needed. Custom PCB carries the sensor analog front-end, pump drivers, and microcontroller.",

    background:
      "Manually testing and dosing a hydroponic system every day doesn't scale, and nutrient swings outside the target range directly hurt plant growth. This was our Senior Design capstone project — the goal was a self-contained unit that could run unattended for days at a time.",

    planningAndDesign:
      "Split the system into three blocks: sensing (EC/pH probes + analog conditioning), decision logic (microcontroller reading sensors on an interval and applying a control loop with dosing cooldowns), and actuation (peristaltic pumps for nutrient A/B and pH adjuster). Deliberately added a minimum-interval lockout between doses so the system couldn't overshoot by dosing faster than the solution could actually mix and re-stabilize.",

    decisionLog: [
      {
        date: "2025-09-20",
        decision: "Designed a custom PCB instead of prototyping permanently on a breadboard.",
        reason:
          "The unit needed to survive next to a reservoir of water and nutrient solution for months — a breadboard wasn't durable or reliable enough for a deployed system.",
      },
      {
        date: "2025-11-03",
        decision: "Added a dosing cooldown timer instead of dosing continuously until the target was hit.",
        reason:
          "Nutrient solution takes time to mix through the reservoir. Dosing on every reading before the last dose had even taken effect caused overshoot in early testing.",
      },
    ],

    developmentLog: [
      { date: "2025-09-02", update: "Kicked off the project — defined requirements and picked EC/pH sensor modules." },
      { date: "2025-10-05", update: "Analog front-end for the probes built and validated against a calibration solution." },
      { date: "2025-12-01", update: "First PCB revision assembled; microcontroller reading both sensors reliably." },
      { date: "2026-02-14", update: "Pump driver circuit integrated; first automated dosing cycle completed end-to-end." },
      { date: "2026-04-01", update: "Fixed overshoot by adding the dosing cooldown timer (see Decision Log)." },
      { date: "2026-05-08", update: "Final integration, enclosure, and Senior Design presentation." },
    ],

    problemsEncountered:
      "Early on, the system would over-dose: it read EC/pH again before the last dose had fully mixed into the reservoir, saw the target still unmet, and dosed again — repeatedly overshooting past the target range.",

    solutions:
      "Added a minimum-interval lockout between doses long enough for the reservoir to mix and the probes to reflect the true post-dose reading, which eliminated the overshoot.",

    gallery: [
      { type: "image", seed: "hydro-1", caption: "Custom PCB with EC/pH analog front-end and pump drivers" },
      { type: "image", seed: "hydro-2", caption: "Full system deployed next to the reservoir" },
      { type: "image", seed: "hydro-3", caption: "Dosing cycle test — EC trending back toward target range" },
    ],

    finalResult:
      "A self-contained unit that kept a hydroponic reservoir's EC and pH within target range for multi-day unattended runs, dosing nutrient solution and pH adjuster automatically based on live sensor readings.",

    lessonsLearned:
      "Control loops on real chemical/physical systems need to account for lag between an action and its effect being measurable — dosing immediately based on the latest reading isn't the same as dosing correctly. I'll default to adding settle/cooldown time to any control loop acting on a slow-to-change physical quantity going forward.",

    futureImprovements:
      "Add data logging so nutrient trends can be reviewed over weeks, not just the live reading. Also want a small display/notification path so I don't need to check the microcontroller directly to see system status.",

    versionHistory: [
      { version: "v0.1", date: "2025-12-01", notes: "First PCB revision, sensors reading reliably, no dosing yet." },
      { version: "v0.5", date: "2026-02-14", notes: "Automated dosing working, overshoot bug present." },
      { version: "v1.0", date: "2026-05-08", notes: "Dosing cooldown fixed, final enclosure, presented for Senior Design." },
    ],
  },
};
