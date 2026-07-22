# Joseph Solis — personal engineering portfolio (React + Vite)

A long-term engineering journal, not a traditional résumé site: Home, Projects
(In Progress / Future Ideas / Completed, top to bottom), Timeline, and About
Me (which also holds the Resume and Contact sections), plus a searchable
Archive. Every project gets a full documentation page (goal, decisions,
development log, problems/solutions, lessons learned, version history)
alongside a shorter expandable summary card. No backend — everything lives
in plain JS data files under `src/data/`.

## Run it locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**.

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to `dist/` — that folder is all you
need to deploy anywhere (see Hosting below).

## Project structure

```
src/
  main.jsx                    entry point (BrowserRouter + App)
  App.jsx                     route table
  index.css                   design tokens + all component/page styles

  data/
    profile.js                 your name, bio, tagline, and links (GitHub/LinkedIn/resume/email)
    about.js                    education, skills, and interests (About Me + Resume pages)
    projects/
      index.js                  registers every project — import new ones here
      *.js                       one file per project (see comments inside each for the schema)

  hooks/
    useScrollReveal.js           IntersectionObserver hook powering scroll-in animations
    useScrollToHash.js           scrolls a project detail page (or About) to the right #section on load

  utils/
    dashboard.js                computes dashboard stats from PROJECTS
    timeline.js                  groups PROJECTS by start year for the Timeline page
    placeholder.js               deterministic SVG placeholder generator (covers, avatar)
    markdown.js                   minimal markdown -> HTML renderer for section content
    status.js                     status label helper + list of valid statuses

  components/                  reusable, presentational pieces
    NavBar, Footer, ProjectCard, ProjectGrid, StatusBadge, TagPill,
    SearchBar, FilterGroup, ProfileAvatar, SocialLinks, DashboardStats,
    DetailSection, Gallery, MarkdownContent, ScrollToTopButton, LoadingSpinner

  screens/                     one component per route
    HomeScreen, ProjectsScreen (In Progress / Future Ideas / Completed
    sections, in that order), ArchiveScreen, ProjectDetailScreen, AboutScreen
    (also holds the Resume and Contact sections), TimelineScreen,
    NotFoundScreen
```

## Editing your info

Open `src/data/profile.js` and fill in your name, role, tagline, bio, and the
GitHub/LinkedIn/resume/email links — every page that shows this info (Home,
About Me) reads from this one file. Drop a real `resume.pdf` into `public/`
(see `public/README.md`) to make the About page's "Download Resume" button
and the Resume link in the social links work.

Edit `src/data/about.js` to update Education, Skills, and Interests — shown
in the Education/Skills/Interests sections of the About Me page.

## Adding a new project

1. Copy `src/data/projects/hydroponic-sensor-regulator.js` (completed),
   `movie-tracker.js` (in-progress), or `privacy-phone.js` (planned) —
   whichever status is closest to what you need — to a new file, e.g.
   `src/data/projects/my-new-project.js`.
2. Fill in the fields. Metadata (dates, difficulty, time invested, tags,
   technologies, repo/live-demo links, the short `whatILearned` summary
   shown on the card) goes at the top, then a `sections` object with the
   full write-up (Overview, Goal, Background, Planning and Design, Decision
   Log, Development Log, Problems Encountered, Solutions, Gallery, Final
   Result, Lessons Learned, Future Improvements, Version History).
3. Register it in `src/data/projects/index.js`: import the file and add it
   to the `PROJECTS` array.

That's the only file-layout change you need to make. Home's dashboard, the
Projects page (grouped by status), the Timeline, the Archive's search/filter,
and the project's own detail page all update
automatically — no screen or component code needs to change.

**Leave a section blank and it disappears.** A `planned` project might only
have `overview` and `background` filled in; the detail page skips every
other section instead of showing empty headings. See any of the
`planned`-status files (e.g. `privacy-phone.js`) for a minimal example, and
`movie-tracker.js` for one that's partially filled in (some sections done,
some left blank because the project isn't finished).

**Gallery images/videos**: gallery items default to auto-generated
placeholder graphics (`{ type: "image", seed: "my-seed", caption: "..." }`).
Once you have real screenshots or clips, swap in
`{ type: "image", src: "/images/my-photo.jpg", caption: "..." }` or
`{ type: "video", src: "/videos/my-clip.mp4", caption: "..." }` — drop the
actual files in a `public/` folder so the paths resolve.

**Keep `updatedAt` current.** Bump it (and add a `developmentLog` entry)
whenever you touch a project — Home's "Last Updated" stat and "Recent
Updates" feed are both generated from these fields, so there's nothing else
to maintain by hand.

## Hosting for free (GitHub Pages)

1. In `vite.config.js`, add a `base` matching your repo name (skip this
   step if you're deploying to a custom domain or a `username.github.io`
   user/organization page):

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```

2. Build the site and turn the output into a GitHub Pages-compatible SPA
   (this copies `index.html` to `404.html` so that direct links like
   `/archive/my-project` don't 404 on refresh):

   ```bash
   npm run build
   cp dist/index.html dist/404.html
   ```

3. Push the contents of `dist/` to a `gh-pages` branch. The easiest way is
   the `gh-pages` package:

   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```

   Then in your GitHub repo settings, under **Pages**, set the source to
   the `gh-pages` branch.

4. Your site will be live at `https://your-username.github.io/your-repo-name/`.

To automate steps 2–3 on every push, add a GitHub Actions workflow that
runs `npm run build`, copies `404.html`, and deploys `dist/` — ask if you'd
like one added later.
