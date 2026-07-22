// Wraps one numbered section of a project detail page. Pass `show={false}`
// (or leave the underlying data empty) and the whole section — heading
// included — is skipped, so planned/in-progress projects don't render a
// wall of empty headings.
function DetailSection({ id, title, show = true, children }) {
  if (!show) return null;
  return (
    <section id={id} className="detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default DetailSection;
