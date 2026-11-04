import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Portrait from "@/components/Portrait";
import ScrollReveal from "@/components/ScrollReveal";
import { personal } from "@/content/personal";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";

const ExternalArrow = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
    <path
      d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">

          {/* ── Intro ───────────────────────────────── */}
          <section
            aria-label="Introduction"
            style={{
              paddingTop: "clamp(3.5rem, 9vw, 6.5rem)",
              paddingBottom: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            <div className="intro-grid">
              {/* Text column */}
              <div>
                <h1
                  className="intro-h1"
                  style={{
                    fontSize: "clamp(36px, 5.5vw, 66px)",
                    fontWeight: 500,
                    letterSpacing: "-0.028em",
                    lineHeight: 1.07,
                    maxWidth: "14ch",
                  }}
                >
                  I&rsquo;m Sebastian,{" "}
                  <span style={{ color: "var(--text-2)" }}>
                    a software engineer.
                  </span>
                </h1>

                <p
                  className="intro-bio"
                  style={{
                    marginTop: "1.75rem",
                    fontSize: "18px",
                    lineHeight: 1.65,
                    color: "var(--text-2)",
                    maxWidth: "460px",
                  }}
                >
                  {personal.bio}
                </p>

                <div
                  className="intro-links"
                  style={{
                    marginTop: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1.75rem",
                  }}
                >
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    GitHub
                    <ExternalArrow />
                  </a>

                  {personal.linkedin && (
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      LinkedIn
                      <ExternalArrow />
                    </a>
                  )}

                  <a href={`mailto:${personal.email}`} className="social-link">
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Portrait column — hidden on mobile */}
              <div className="intro-portrait-col">
                <Portrait />
              </div>
            </div>
          </section>

          {/* ── Experience ──────────────────────────── */}
          <section id="experience" className="section" aria-label="Experience">
            <span className="section-label">Experience</span>

            <ScrollReveal>
              <div className="exp-list" role="list">
                {experience.map((entry, i) => (
                  <div
                    key={i}
                    role="listitem"
                    className={`exp-row${entry.isPlaceholder ? " exp-placeholder" : ""}`}
                  >
                    <div className="exp-left">
                      <span className="exp-role">{entry.role}</span>
                      <span className="exp-dates">
                        {entry.startDate}
                        {entry.endDate ? ` – ${entry.endDate}` : ""}
                      </span>
                    </div>

                    <div className="exp-right">
                      <span className="exp-company">{entry.company}</span>
                      <p className="exp-description">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* ── Work ────────────────────────────────── */}
          <section id="work" className="section" aria-label="Selected work">
            <span className="section-label">Selected work</span>

            <ScrollReveal>
              <div className="project-list" role="list">
                {featuredProjects.map((project) => (
                  <a
                    key={project.slug}
                    href={
                      project.isPlaceholder
                        ? undefined
                        : `/work/${project.slug}`
                    }
                    role="listitem"
                    className={`project-row${project.isPlaceholder ? " project-placeholder" : ""}`}
                    aria-label={
                      project.isPlaceholder
                        ? "Placeholder — replace in projects.ts"
                        : `${project.name}: ${project.description}`
                    }
                  >
                    <div className="project-row-top">
                      <span className="project-name">{project.name}</span>
                      <div className="project-meta">
                        <span className="project-year">{project.year}</span>
                        <span className="project-arrow" aria-hidden>→</span>
                      </div>
                    </div>

                    <div className="project-row-bottom">
                      <span className="project-desc">{project.description}</span>
                      {project.technologies.length > 0 && (
                        <span className="project-tech">
                          {project.technologies.join(" · ")}
                        </span>
                      )}
                    </div>

                    {!project.isPlaceholder && (
                      <div className="project-preview" aria-hidden>
                        <span
                          style={{
                            fontSize: "11px",
                            fontFamily: "var(--font-geist-mono), monospace",
                            color: "var(--text-2)",
                            opacity: 0.5,
                          }}
                        >
                          {project.name}
                        </span>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* ── About preview ────────────────────────── */}
          <section id="about-preview" className="section" aria-label="About">
            <span className="section-label">About</span>

            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "end",
                  gap: "3rem",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.65,
                    color: "var(--text-2)",
                    maxWidth: "520px",
                  }}
                >
                  I&rsquo;m a software engineering student at the University of Calgary,
                  working toward a career building software that solves real problems.
                  Outside of engineering, I&rsquo;m interested in photography, football,
                  travel, and cars.
                </p>

                <a
                  href="/about"
                  className="social-link"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Full story
                  <ExternalArrow />
                </a>
              </div>
            </ScrollReveal>
          </section>

        </div>

        <Footer />
      </main>
    </>
  );
}
