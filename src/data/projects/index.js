/* ==========================================================================
   PROJECT REGISTRY
   This is the ONLY file you need to touch to add a new project to the site.

   To add a project:
     1. Copy an existing file in this folder (pick whichever status is
        closest to what you need) and rename it, e.g. `my-new-project.js`.
     2. Fill in the fields — see hydroponic-sensor-regulator.js (completed),
        movie-tracker.js (in-progress), and privacy-phone.js (planned) for
        what every field does at each stage.
     3. Import it below and add it to the PROJECTS array.

   That's it — Home, Projects, In Progress, Future Ideas, Archive, search,
   filtering, the timeline, and the detail page all read from this array
   automatically. No other file needs to change.
   ========================================================================== */

import { project as hydroponicSensorRegulator } from "./hydroponic-sensor-regulator.js";
import { project as personalPortfolioWebsite } from "./personal-portfolio-website.js";
import { project as nasHomeServer } from "./nas-home-server.js";

import { project as movieTracker } from "./movie-tracker.js";
import { project as birdBunkers } from "./bird-bunkers.js";
import { project as sourScale } from "./sour-scale.js";

import { project as crossyRoadRoguelike } from "./crossy-road-roguelike.js";
import { project as aiDropshippingBusiness } from "./ai-dropshipping-business.js";
import { project as privacyPhone } from "./privacy-phone.js";
import { project as customGamingConsole } from "./custom-gaming-console.js";

export const PROJECTS = [
  hydroponicSensorRegulator,
  personalPortfolioWebsite,
  nasHomeServer,
  movieTracker,
  birdBunkers,
  sourScale,
  crossyRoadRoguelike,
  aiDropshippingBusiness,
  privacyPhone,
  customGamingConsole,
];
