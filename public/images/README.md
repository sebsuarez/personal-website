# Image guide

## Folder structure

```
public/images/
├── personal/
│   ├── portraits/      ← your profile photo (homepage + about)
│   ├── photography/    ← photography category, about page journal
│   ├── football/       ← football / sports category
│   ├── travel/         ← travel category
│   └── cars/           ← cars category
│
├── projects/
│   ├── lotion/         ← Lotion case study screenshots
│   ├── jobwhen/        ← Job When? case study screenshots
│   └── placeholder/    ← placeholder for a third project
│
└── placeholders/       ← general purpose placeholder images
```

---

## Profile portrait

Place your photo at:
```
public/images/personal/portraits/portrait.jpg
```
WebP is preferred (smaller file size):
```
public/images/personal/portraits/portrait.webp
```
The site checks for WebP first, then falls back to JPG.

**Recommended dimensions:** 480 × 600 px minimum (4:5 ratio).  
The site crops to `objectPosition: center top`, so keep your face in the upper half.

---

## Photo journal (about page)

Each category maps to a folder. Add photos, then register them in:
```
src/content/gallery.ts
```

Example entry:
```ts
{
  id: "football-01",
  category: "football",
  src: "/images/personal/football/football-01.jpg",
  alt: "Match at McMahon Stadium",
  caption: "Calgary, 2026",   // optional
  span: 2,                    // 1 = 1/3 width, 2 = 2/3 width, 3 = full width
  order: 1,                   // controls display order within the category
},
```

Until photos are registered in `gallery.ts`, the about page shows editorial placeholder tiles that demonstrate the intended layout.

**Supported formats:** JPG, WebP, PNG, AVIF  
**Recommended minimum widths:**
- span 1 → 480 px wide
- span 2 → 960 px wide
- span 3 → 1200 px wide

**Naming convention:** `{category}-{two-digit number}.jpg`  
Example: `travel-01.jpg`, `cars-02.webp`

---

## Project screenshots (case study pages)

Each case study page looks for a hero image at:
```
public/images/projects/{slug}/hero.jpg
public/images/projects/{slug}/hero.webp   ← preferred
```

The slug matches the project's `slug` field in `src/content/case-studies.ts`.

**Recommended dimensions:** 1200 × 675 px (16:9 ratio).

---

## Removing or replacing a photo

- **Replace**: drop the new file at the same path and name. The site picks it up on the next build.
- **Remove from gallery**: delete or comment out the entry in `gallery.ts`. The image file can stay in the folder.
- **Remove a portrait**: delete the file; the site shows the initials placeholder automatically.

---

## Empty folders

Folders without registered images produce styled placeholder tiles that show the intended layout. The site will never show a broken image.
