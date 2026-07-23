export function statusLabel(status) {
  return {
    "active-development": "🟢 Active Development",
    "stable": "🔵 Stable",
    "research": "🟡 Research",
    "concept": "⚪ Concept",
    "archived": "🔴 Archived",
  }[status] || status;
}

export const ALL_STATUSES = ["active-development", "stable", "research", "concept", "archived"];
