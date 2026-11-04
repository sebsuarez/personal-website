// ─── Personal photo gallery ───────────────────────────────────────────────────
//
// Add entries here after placing images in public/images/personal/{category}/.
// See public/images/README.md for naming conventions and supported formats.
//
// span: 1 = one-third width, 2 = two-thirds width, 3 = full width
// order: controls display order within a category (ascending)

export type GalleryCategory = "cats" | "football" | "travel" | "cars";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  caption?: string;
  span?: 1 | 2 | 3;
  order?: number;
};

export const gallery: GalleryImage[] = [
  // Example: uncomment and edit after adding the image:
  // {
  //   id: "football-01",
  //   category: "football",
  //   src: "/images/personal/football/football-01.jpg",
  //   alt: "Football match photograph",
  //   span: 2,
  //   order: 1,
  // },
];

export function getByCategory(category: GalleryCategory): GalleryImage[] {
  return gallery
    .filter((img) => img.category === category)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}
