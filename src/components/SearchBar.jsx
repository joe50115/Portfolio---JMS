function SearchBar({ value, onChange, placeholder = "Search projects by name, tag, or description…", label = "Search projects" }) {
  return (
    <div className="search-row">
      <label htmlFor="search" className="visually-hidden">{label}</label>
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
