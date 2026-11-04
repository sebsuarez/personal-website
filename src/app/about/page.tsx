import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Portrait from "@/components/Portrait";
import { aboutProfessional, currentlyExploring } from "@/content/about";
import { getByCategory, type GalleryCategory } from "@/content/gallery";
import { imageExists } from "@/lib/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Sebastian Suarez",
  description:
    "Sebastian Suarez is a software engineering student at the University of Calgary, building full-stack applications in JavaScript and Python.",
};

// ─── Photo journal types ──────────────────────────────────────────────────────

type PlaceholderSlot = {
  key: string;
  aspectRatio: string;
  span?: 2 | 3;
  hint: string;
};

const categoryLayouts: Record<GalleryCategory, PlaceholderSlot[]> = {
  cats: [
    { key: "cat1", aspectRatio: "1/1", hint: "cat photo" },
    { key: "cat2", aspectRatio: "4/3", span: 2, hint: "cat photo" },
    { key: "cat3", aspectRatio: "1/1", hint: "cat photo" },
    { key: "cat4", aspectRatio: "1/1", hint: "cat photo" },
  ],
  football: [
    { key: "f1", aspectRatio: "16/9", span: 2, hint: "action" },
    { key: "f2", aspectRatio: "1/1", hint: "detail" },
    { key: "f3", aspectRatio: "1/1", hint: "square" },
    { key: "f4", aspectRatio: "4/3", span: 2, hint: "wide" },
  ],
  travel: [
    { key: "t1", aspectRatio: "21/9", span: 3, hint: "panoramic" },
    { key: "t2", aspectRatio: "3/4", hint: "portrait" },
    { key: "t3", aspectRatio: "1/1", hint: "square" },
    { key: "t4", aspectRatio: "1/1", hint: "square" },
  ],
  cars: [
    { key: "c1", aspectRatio: "16/9", span: 2, hint: "wide" },
    { key: "c2", aspectRatio: "1/1", hint: "detail" },
    { key: "c3", aspectRatio: "21/9", span: 3, hint: "panoramic" },
  ],
};

const categoryLabels: Record<GalleryCategory, string> = {
  cats: "Cats",
  football: "Football",
  travel: "Travel",
  cars: "Cars",
};

const categories: GalleryCategory[] = ["cats", "football", "travel", "cars"];

// ─── Photo slot component ─────────────────────────────────────────────────────

function PhotoSlot({
  src,
  alt,
  caption,
  aspectRatio,
  span,
  hint,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  aspectRatio: string;
  span?: 2 | 3;
  hint?: string;
}) {
  const hasImage = src ? imageExists(src) : false;

  const spanClass = span === 3 ? "photo-span-3" : span === 2 ? "photo-span-2" : "";

  return (
    <div
      className={`photo-slot${spanClass ? ` ${spanClass}` : ""}`}
      style={{ aspectRatio }}
    >
      {hasImage && src ? (
        <>
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 50vw, 33vw"
          />
          {caption && <span className="photo-caption">{caption}</span>}
        </>
      ) : (
        <div className="photo-slot-placeholder">
          <span className="photo-slot-hint">{hint ?? "add photo"}</span>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">

          {/* ── Hero ──────────────────────────────── */}
          <section className="about-hero" aria-label="About Sebastian">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 220px",
                gap: "4.5rem",
                alignItems: "start",
              }}
            >
              <div>
                <h1 className="about-headline">
                  {aboutProfessional.headline}
                </h1>

                <div className="about-bio">
                  {aboutProfessional.paragraphs.map((para, i) => (
                    <p key={i} className="about-bio-para">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Portrait, same as homepage, desktop only */}
              <div
                style={{ display: "none" }}
                className="about-portrait-col"
              >
                <Portrait />
              </div>
            </div>
          </section>

          {/* ── Exploring ─────────────────────────── */}
          <ScrollReveal>
            <section className="section" aria-label="Currently exploring">
              <span className="section-label">Currently exploring</span>

              <ul className="exploring-list" role="list">
                {currentlyExploring.map((item, i) => (
                  <li key={i} className="exploring-item">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* ── Photo journal ────────────────────── */}
          <ScrollReveal>
            <section className="section" aria-label="Outside of engineering">
              <span className="section-label">Outside of engineering</span>

              <div className="photo-journal">
                {categories.map((category) => {
                  const images = getByCategory(category);
                  const layout = categoryLayouts[category];

                  return (
                    <div key={category} className="photo-category">
                      <span className="photo-category-label">
                        {categoryLabels[category]}
                      </span>

                      <div className="photo-grid" role="list">
                        {images.length > 0
                          ? images.map((img) => (
                              <PhotoSlot
                                key={img.id}
                                src={img.src}
                                alt={img.alt}
                                caption={img.caption}
                                aspectRatio="4/3"
                                span={img.span as 2 | 3 | undefined}
                                hint={category}
                              />
                            ))
                          : layout.map((slot) => (
                              <PhotoSlot
                                key={slot.key}
                                aspectRatio={slot.aspectRatio}
                                span={slot.span}
                                hint={slot.hint}
                              />
                            ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

        </div>

        <Footer />
      </main>
    </>
  );
}
