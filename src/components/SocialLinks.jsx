// Renders the GitHub / LinkedIn / Resume / Email row from data/profile.js.
function SocialLinks({ links }) {
  return (
    <div className="social-links">
      <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
      <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn">Resume</a>
      <a href={`mailto:${links.email}`} className="btn">Email</a>
    </div>
  );
}

export default SocialLinks;
