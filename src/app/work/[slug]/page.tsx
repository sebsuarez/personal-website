import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getCaseStudy, caseStudies } from "@/content/case-studies";
import { imageExists } from "@/lib/images";
import Image from "next/image";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Project not found" };

  return {
    title: `${cs.title} | Sebastian Suarez`,
    description: cs.overview,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BackArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path
      d="M10 6H2M2 6L6 2M2 6L6 10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  const heroPath = `/images/projects/${cs.slug}/hero.jpg`;
  const heroWebp = `/images/projects/${cs.slug}/hero.webp`;
  const heroSrc = imageExists(heroWebp)
    ? heroWebp
    : imageExists(heroPath)
    ? heroPath
    : null;

  return (
    <>
      <Nav />
      <main>
        <div className="container">

          {/* ── Hero ──────────────────────────────── */}
          <section className="case-hero" aria-label={cs.title}>
            <a href="/#work" className="case-back">
              <BackArrow />
              All work
            </a>

            <h1 className="case-title">{cs.title}</h1>
            <p className="case-tagline">{cs.tagline}</p>

            {/* Meta row */}
            <div className="case-meta" role="list">
              <div className="case-meta-item" role="listitem">
                <span className="case-meta-label">Year</span>
                <span className="case-meta-value">{cs.year}</span>
              </div>
              <div className="case-meta-item" role="listitem">
                <span className="case-meta-label">Role</span>
                <span className="case-meta-value">{cs.role}</span>
              </div>
              <div className="case-meta-item" role="listitem">
                <span className="case-meta-label">Stack</span>
                <div className="case-tech-list" role="list">
                  {cs.technologies.map((tech) => (
                    <span key={tech} className="case-tech-tag" role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="case-hero-img">
              {heroSrc ? (
                <Image
                  src={heroSrc}
                  alt={`${cs.title} screenshot`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  priority
                />
              ) : (
                <span
                  className="case-hero-img-label"
                  title={`public/images/projects/${cs.slug}/hero.jpg`}
                  data-path={`public/images/projects/${cs.slug}/hero.jpg`}
                >
                  placeholder
                </span>
              )}
            </div>
          </section>

          {/* ── Case study content ─────────────────── */}
          <div className="case-content">
            {/* Overview */}
            <ScrollReveal>
              <div className="case-section">
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: 1.68,
                    color: "var(--text)",
                    fontWeight: 400,
                  }}
                >
                  {cs.overview}
                </p>
              </div>
            </ScrollReveal>

            {/* Sections */}
            {cs.sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="case-section">
                  <p className="case-section-heading">{section.heading}</p>
                  <p className="case-section-text">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}

            {/* Links */}
            {(cs.githubUrl || cs.liveUrl) && (
              <ScrollReveal>
                <div className="case-links">
                  {cs.githubUrl && (
                    <a
                      href={cs.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-link"
                    >
                      View on GitHub
                      <ExternalArrow />
                    </a>
                  )}
                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-link"
                    >
                      Live site
                      <ExternalArrow />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            )}
          </div>

        </div>

        <Footer />
      </main>
    </>
  );
}
