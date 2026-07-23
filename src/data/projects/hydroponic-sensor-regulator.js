/* ==========================================================================
   RESEARCH — Senior Design capstone (ECE Senior Design, Team 2631) is
   complete; continuing on as a home research project.
   Sourced from the team's final project report.
   ========================================================================== */

export const project = {
  slug: "hydroponic-sensor-regulator",
  title: "Automated Hydroponic Sensor and Regulator System",
  label: "HYDRO",
  status: "research",
  featured: true,
  version: "v1.0",
  coverImage: "/projects/hydroponic-sensor-regulator/lettuce-net-pot.jpg",

  shortDescription:
    "Senior Design capstone (Team 2631) that closed the loop on hydroponic nutrient management — an Arduino Mega reads pH/EC/temperature/humidity and drives dosing pumps automatically, with a Raspberry Pi + Node-RED dashboard for remote monitoring and a live camera feed.",
  tags: ["Embedded Systems", "Hardware", "IoT", "Senior Design"],
  technologies: [
    "Embedded C",
    "Arduino Mega",
    "Raspberry Pi",
    "Node-RED",
    "Atlas Scientific EZO Sensors",
    "Peristaltic Pumps",
  ],
  difficulty: "Advanced",
  dateStarted: "2025-06-08",
  dateCompleted: "2026-05-10",
  timeInvested: "~250 hours",
  repoLink: "https://github.com/joe50115/SD-AutoHydroponics",
  liveDemoLink: null,
  projectPageLink: "https://seniordesignday.engr.uconn.edu/seniorprojectpt/senior-design-2026-electrical-and-computer-engineering-team-31/",
  updatedAt: "2026-07-22",

  whatILearned:
    "Closed-loop control on a real chemical system is a lot less forgiving than blinking an LED. We only built automated correction in one direction for EC (Base A/B raise it, nothing lowers it), and that single gap dragged our EC accuracy down from 97.87% (pH, bidirectional) to 86.65%. Next time I'd treat 'can this go too high AND too low' as a hard requirement from day one, not an add-on.",

  goal:
    "Design and implement a fully automated hydroponic monitoring and control system that continuously tracks pH, electrical conductivity (EC), water temperature, air temperature, and humidity; automatically adjusts solution chemistry via peristaltic pump dosing; provides a real-time remote monitoring dashboard over the local network (with a live camera feed and manual override); and operates reliably with minimal manual intervention.",

  sections: {
    overview:
      "A Nutrient Film Technique (NFT) hydroponic system with closed-loop automation layered on top. Atlas Scientific EZO-pH and EZO-EC probes (UART) plus an I²C air temp/humidity sensor and an analog water-temperature probe feed an Arduino Mega, which runs the control loop and drives four peristaltic pumps (pH-up, pH-down, Base A, Base B) via PWM along with a relay-controlled grow light. A Raspberry Pi connects to the Arduino over USB serial and to a webcam, and hosts a Node-RED dashboard for live sensor graphs, manual dosing overrides, plant-profile selection, and the camera feed — all accessible from any device on the local network.",

    background:
      "This started as a personal project, not a class assignment: in June 2025 I built a manual (non-automated) NFT hydroponic system on my own, just to grow something and see how it worked. Running it by hand made the core problem obvious fast — in an NFT system there's no soil to buffer chemistry, so the nutrient solution is the plant's only mineral source, and pH/EC can drift a full unit within hours as roots absorb ions unevenly, CO2 exchange shifts the carbonate balance, and evaporation concentrates the solution. Manually checking pH and EC one to three times a day doesn't scale and is easy to get wrong, and uncorrected drift causes nutrient lockout and stunted growth. Once I'd felt that pain firsthand, I emailed my professor in July 2025 proposing to turn it into an automated closed-loop system for Senior Design. The project was also directly inspired by GREENBOX, a research-scale automated hydroponic 'plant factory' built at UConn by Professor Xiusheng (Harrison) Yang — but no low-cost, closed-loop solution existed yet for small-scale growers running a simple NFT setup, which is the gap this project targeted.",

    planningAndDesign:
      "Split the system into three subsystems — sensing, control, and user interface — communicating in a closed loop. The Arduino Mega runs a state-machine control loop every five minutes: read all sensors, check whether the minimum dosing interval has elapsed (abort and just log if not), evaluate pH against the active plant profile and dose pH-up/down if out of range, evaluate EC and dose Base A + Base B if it's low, then log the reading and transmit it as a JSON packet to the Raspberry Pi over USB serial. A post-dosing mixing delay is enforced between cycles so the reservoir can homogenize before the next reading — deliberately trading responsiveness for stability so the controller doesn't fight its own lag.",

    milestones: [
      "Built manual NFT hydroponic system",
      "Automated pH/EC dosing with peristaltic pumps",
      "Built Node-RED dashboard with live camera feed",
      "Completed 4-day validation test (97.87% pH / 86.65% EC accuracy)",
      "Presented at UConn Senior Design Day",
    ],

    decisionLog: [
      {
        decision: "Built the control electronics on a breadboard with Atlas Scientific carrier boards rather than designing a custom PCB.",
        reason:
          "Kept iteration fast for a single semester-long build — swapping sensor carrier boards and rewiring the Arduino Mega during development mattered more than long-term durability for a proof-of-concept unit.",
      },
      {
        decision: "Automated EC correction in one direction only (Base A + Base B to raise EC), with no automated dilution/flush to lower it.",
        reason:
          "Bringing EC down safely needs a drain or dilution mechanism, which was out of scope for the initial build. Flagged explicitly as the primary driver of lower EC accuracy and the top item on the Roadmap.",
      },
      {
        decision: "Tuned the sense-dose-mix loop to a 5-minute interval, set empirically rather than analytically.",
        reason:
          "Too short an interval caused overcorrection oscillations in early testing; too long reduced responsiveness to real drift. Five minutes was the empirical sweet spot.",
      },
      {
        decision: "Framed all Arduino↔Raspberry Pi communication as JSON packets over a single USB serial link, with a checksum/retry mechanism.",
        reason:
          "One serial connection had to carry sensor readings, dosing status, light control commands and responses, and plant-profile updates without the message types colliding or getting misparsed.",
      },
    ],

    developmentLog: [
      { date: "2025-06-08", update: "Built a manual (non-automated) NFT hydroponic system on my own, outside of any class — the starting point for everything that followed." },
      { date: "2025-07-22", update: "Emailed my professor proposing to automate the manual system as my Senior Design capstone project." },
      { update: "Senior Design kickoff with the assigned team — defined requirements and selected the Atlas Scientific EZO-pH/EZO-EC sensors for the automated build." },
      { update: "Sensor integration validated: EZO-pH/EC over UART, HTU21D-F air temp/humidity over I2C, and analog water-temp probe all reading reliably into the Arduino Mega." },
      { update: "Pump driver and relay switching validated; PWM-driven peristaltic pump actuation calibrated to known dosing volumes." },
      { update: "First end-to-end automated dosing cycle completed; overshoot observed when dosing before the solution had fully mixed." },
      { update: "Added the mixing/cooldown delay between dosing cycles (see Decision Log) and finished staged integration: Arduino↔sensors, Arduino↔pumps, Arduino↔Pi, Pi↔Node-RED." },
      { update: "Node-RED dashboard finished: live sensor graphs, plant-profile selection, manual dosing overrides, and the webcam feed." },
      { date: "2026-04-20", update: "Started the four-day continuous validation test growing lettuce." },
      { date: "2026-04-24", update: "Validation test complete: 97.87% pH regulation accuracy, 86.65% EC regulation accuracy, ~1.5 hour stabilization time." },
      { date: "2026-05-10", update: "Final assembly, Senior Design presentation, and report submission." },
    ],

    problemsEncountered:
      "Early automated dosing cycles overshot: the system re-read pH/EC before the previous dose had fully mixed into the reservoir, saw the target still unmet, and dosed again — compounding into oscillation past the target range. Separately, EC could only be corrected upward (via Base A/B), so once EC rose above target there was no automated way to bring it back down, which became the main limitation validated in testing. The Arduino-to-Pi USB serial link also had to reliably carry several distinct message types (sensor data, dosing events, light control, plant profiles) without collisions or dropped frames.",

    solutions:
      "Added a minimum-interval mixing/cooldown lockout between dosing cycles (tuned empirically to 5 minutes) so the reservoir could stabilize and the probes could reflect the true post-dose reading before the next correction — this eliminated the pH overcorrection oscillation. For the serial link, structured every message as a JSON packet with a checksum/retry mechanism so the Raspberry Pi could reliably identify and route each message type. The EC-reduction gap itself was accepted as a known limitation for this iteration rather than solved, and carried forward into the Roadmap.",

    gallery: [
      { type: "video", src: "/projects/hydroponic-sensor-regulator/presentation.mp4", caption: "Senior Design presentation video" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/nft-channel-assembly.jpg", caption: "NFT channel assembly — plants growing directly in the sloped, nutrient-film channels" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/electronics-wiring.jpg", caption: "Arduino Mega with Atlas Scientific EZO-pH/EC carrier boards, RTD temperature probe, and HTU21D-F humidity sensor" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/pump-array.jpg", caption: "Peristaltic pump array dosing pH-up, pH-down, Base A, and Base B from reservoir bottles" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/lettuce-net-pot.jpg", caption: "Lettuce grown in the system, roots exposed in its net pot" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/hardware-wiring-diagram.jpg", caption: "Hardware wiring diagram — Raspberry Pi, Arduino Mega, sensors, pumps, and grow light" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/node-red-dashboard.jpg", caption: "Node-RED monitoring dashboard — live sensor graphs, plant profile, light control, and camera feed" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/ph-test-chart.jpg", caption: "pH over the four-day lettuce validation run, with dosing events marked" },
      { type: "image", src: "/projects/hydroponic-sensor-regulator/ec-test-chart.jpg", caption: "EC over the four-day lettuce validation run — the upward-only drift after stabilization reflects the lack of automated EC reduction" },
    ],

    finalResult:
      "Over a four-day continuous validation test growing lettuce, the system achieved 97.87% pH regulation accuracy and 86.65% EC regulation accuracy, with a solution stabilization time of approximately 1.5 hours after initial fill or a major disturbance. No significant sensor drift was observed post-calibration. Total system cost was $1,320.",

    lessonsLearned:
      "Control loops acting on a slow-to-change physical/chemical quantity need settle time built in from the start — dosing on the very latest reading, before the last dose has had time to take effect, causes overshoot rather than correction. Just as importantly, a closed-loop controller is only as good as its weakest correction path: building bidirectional control for pH but only one-directional control for EC meant the EC accuracy result (86.65%) was capped by a design gap, not sensor or algorithm noise. I'd scope 'raise and lower' as a single requirement next time, not two separate features.",

    roadmap: [
      "Automated EC reduction via a dilution or partial-flush mechanism",
      "Leak detection with capacitive/resistive moisture sensors at plumbing junctions",
      "Watchdog/anomaly-detection logic for implausible or disconnected sensor readings",
      "AI-based plant health tracking (leaf color, size, wilting) via computer vision on the existing camera feed",
      "Water-level sensor with a network-accessible emergency shutoff",
    ],
  },
};
