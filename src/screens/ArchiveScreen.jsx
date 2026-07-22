import { useMemo, useState } from "react";
import { PROJECTS } from "../data/projects/index.js";
import { ALL_STATUSES, statusLabel } from "../utils/status.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import ProjectCard from "../components/ProjectCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterGroup from "../components/FilterGroup.jsx";

function ArchiveScreen() {
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState(new Set());
  const [tags, setTags] = useState(new Set());
  const revealRef = useScrollReveal();

  const allTags = useMemo(
    () => Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort(),
    []
  );

  const statusOptions = ALL_STATUSES.map((s) => ({ value: s, display: statusLabel(s) }));
  const tagOptions = allTags.map((t) => ({ value: t, display: t }));

  function toggleStatus(value) {
    setStatuses((prev) => toggledSet(prev, value));
  }

  function toggleTag(value) {
    setTags((prev) => toggledSet(prev, value));
  }

  function toggledSet(set, value) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }

  function clearFilters() {
    setQuery("");
    setStatuses(new Set());
    setTags(new Set());
  }

  const results = PROJECTS.filter((p) => {
    if (statuses.size && !statuses.has(p.status)) return false;
    if (tags.size && !p.tags.some((t) => tags.has(t))) return false;
    if (query) {
      const haystack = `${p.title} ${p.shortDescription} ${p.tags.join(" ")} ${p.technologies.join(" ")}`.toLowerCase();
      if (!haystack.includes(query.trim().toLowerCase())) return false;
    }
    return true;
  });

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Everything, searchable</span>
          <h1>Project Archive</h1>
          <p className="lede">
            Every project, big or small, finished or not. Search by name, filter by tag
            or status.
          </p>
        </div>
      </header>

      <section ref={revealRef} className="reveal">
        <div className="wrap">
          <div className="archive-controls">
            <SearchBar value={query} onChange={setQuery} />
            <FilterGroup
              label="Status"
              options={statusOptions}
              selected={statuses}
              onToggle={toggleStatus}
            />
            <FilterGroup
              label="Tags"
              options={tagOptions}
              selected={tags}
              onToggle={toggleTag}
            />
          </div>

          <p className="result-count">
            {results.length} project{results.length === 1 ? "" : "s"}
          </p>

          {results.length > 0 ? (
            <div className="grid">
              {results.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="eyebrow">No matches</span>
              <p>Nothing matches those filters. Try clearing a tag or the status filter.</p>
              <button className="btn" onClick={clearFilters}>Clear all filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ArchiveScreen;
