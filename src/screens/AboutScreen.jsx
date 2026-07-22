import { useState } from "react";
import { EDUCATION, SKILLS, INTERESTS } from "../data/about.js";
import { profile } from "../data/profile.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import TagPill from "../components/TagPill.jsx";

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h4>{title}</h4>
      <div className="tag-row">
        {items.map((item) => <TagPill key={item} label={item} />)}
      </div>
    </div>
  );
}

function AboutScreen() {
  useScrollToHash();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>About Me</h1>
          <p className="lede">A bit more about my background, skills, interests, resume, and how to reach me.</p>
        </div>
      </header>

      <section id="education">
        <div className="wrap">
          <div className="section-head"><h2>Education</h2></div>
          <div className="about-block">
            {EDUCATION.map((entry) => (
              <div key={entry.school} className="education-card">
                <h3>{entry.school}</h3>
                <p className="card-fact">{entry.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head"><h2>Skills</h2></div>
          <div className="skills-grid">
            <SkillGroup title="Programming" items={SKILLS.programming} />
            <SkillGroup title="Embedded" items={SKILLS.embedded} />
            <SkillGroup title="Software" items={SKILLS.software} />
          </div>
        </div>
      </section>

      <section id="interests">
        <div className="wrap">
          <div className="section-head"><h2>Interests</h2></div>
          <div className="tag-row">
            {INTERESTS.map((interest) => <TagPill key={interest} label={interest} />)}
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="wrap resume-head">
          <div>
            <div className="section-head"><h2>Resume</h2></div>
            <p className="lede">Download a copy to keep, or use the Education/Skills sections above for the short version.</p>
          </div>
          <a className="btn primary" href={profile.links.resume} download>
            Download Resume (PDF)
          </a>
        </div>
      </section>

      <section id="contact">
        <div className="wrap contact-columns">
          <div>
            <div className="section-head"><h2>Contact</h2></div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required value={form.name} onChange={handleChange("name")} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required value={form.email} onChange={handleChange("email")} />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" required value={form.message} onChange={handleChange("message")} />
              </div>
              <button type="submit" className="btn primary">Send message</button>
              <p className="form-note">
                This site has no backend, so submitting opens your email client with
                the message pre-filled instead of sending silently.
              </p>
            </form>
          </div>

          <div>
            <h4 className="eyebrow">Other ways to reach me</h4>
            <div className="contact-links">
              <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                {profile.links.github.replace("https://", "")}
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                {profile.links.linkedin.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutScreen;
