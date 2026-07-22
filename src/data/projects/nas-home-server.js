/* ==========================================================================
   COMPLETED
   ========================================================================== */

export const project = {
  slug: "nas-home-server",
  title: "NAS Home Server",
  label: "NAS",
  status: "completed",
  featured: true,

  shortDescription:
    "Built a private NAS using OpenMediaVault with automated BorgBackup backups, SMB shares, and Linux administration.",
  tags: ["Linux", "Homelab", "Networking"],
  technologies: ["Linux", "OpenMediaVault", "BorgBackup", "SMB", "SSH"],
  difficulty: "Intermediate",
  dateStarted: "2026-03-01",
  dateCompleted: "2026-04-12",
  timeInvested: "~35 hours",
  repoLink: "", // add a link to your OMV/Borg config repo, if you have one
  liveDemoLink: null,
  updatedAt: "2026-04-12",

  whatILearned:
    "Automated, versioned backups (BorgBackup) are worth setting up before you actually need them — restoring from a scheduled snapshot is a very different experience than realizing you never had one.",
  goal:
    "Move personal file storage and backups off of cloud services and onto self-hosted hardware I fully control, with automated backups instead of manual copies.",

  sections: {
    overview:
      "A dedicated machine running OpenMediaVault, exposing SMB shares to every device on the network, with BorgBackup running on a schedule to take deduplicated, encrypted backups of the important shares to a separate disk.",

    background:
      "Was relying on a mix of cloud storage and manual USB drive copies, which meant no consistent backup schedule and recurring subscription costs for storage I could host myself.",

    planningAndDesign:
      "Chose OpenMediaVault over a bare Samba/Linux setup for the web UI around share and user management, since this needed to stay maintainable without re-learning the CLI config every time. Backups run as a separate BorgBackup job rather than relying on RAID alone — RAID protects against a drive failure, not against deleting or overwriting a file by mistake.",

    decisionLog: [
      {
        date: "2026-03-10",
        decision: "Used BorgBackup instead of a simple rsync cron job.",
        reason:
          "Borg's deduplication and encryption meant backups didn't balloon in size over time, and snapshots could be pruned by age without losing the ability to restore any individual day.",
      },
    ],

    developmentLog: [
      { date: "2026-03-01", update: "Installed OpenMediaVault and set up the base storage pool." },
      { date: "2026-03-10", update: "Configured SMB shares and per-user permissions for the network." },
      { date: "2026-03-22", update: "Set up BorgBackup with a nightly cron job to a second disk." },
      { date: "2026-04-12", update: "Tested a full restore from a Borg snapshot to confirm backups actually work, not just run." },
    ],

    problemsEncountered:
      "SMB shares were reachable from Linux and phone clients immediately, but a Windows machine on the same network couldn't see the server in network discovery.",

    solutions:
      "Enabled the WS-Discovery/NetBIOS-adjacent settings in OMV's SMB plugin that Windows expects for network discovery — the shares were always reachable directly by address, it was purely a discovery/browsing issue.",

    gallery: [
      { type: "image", seed: "nas-1", caption: "OpenMediaVault dashboard showing storage pool and shares" },
      { type: "image", seed: "nas-2", caption: "BorgBackup restore test" },
    ],

    finalResult:
      "A NAS reachable from every device on the network over SMB, with nightly encrypted, deduplicated backups to a second disk and a confirmed working restore path.",

    lessonsLearned:
      "A backup you haven't test-restored isn't a verified backup — running the restore once, deliberately, before actually needing it, is what turned this from 'probably fine' into something I trust.",

    futureImprovements:
      "Add an off-site backup copy (even just an encrypted archive shipped to cold storage periodically) so the setup survives more than a single-location failure like a fire or theft.",
  },
};
