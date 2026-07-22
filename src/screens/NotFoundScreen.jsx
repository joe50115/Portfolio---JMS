import { Link } from "react-router-dom";

function NotFoundScreen() {
  return (
    <section className="wrap" style={{ padding: "96px 0" }}>
      <span className="eyebrow">404</span>
      <h1>Page not found.</h1>
      <p className="lede">That page doesn't exist. It may have moved, or the link is off.</p>
      <div className="cta-row">
        <Link className="btn primary" to="/">Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFoundScreen;
