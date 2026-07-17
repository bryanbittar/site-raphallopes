export type GalleryConfig = {
  folder: string;
  count: number;
  label: string;
  /** 1-based frame numbers shot in portrait orientation (all others are landscape). */
  portraitFrames: number[];
};

export const galleryConfigs = {
  wedding: { folder: "casamento", count: 13, label: "Casamento", portraitFrames: [4, 5, 10, 12] },
  quinceanera: {
    folder: "festa-15-anos",
    count: 10,
    label: "15 Anos",
    portraitFrames: [4, 8],
  },
  preWedding: {
    folder: "pre-wedding",
    count: 12,
    label: "Pré Wedding",
    portraitFrames: [1, 5],
  },
} as const satisfies Record<string, GalleryConfig>;

export function buildGalleryPaths({ folder, count }: GalleryConfig) {
  return Array.from(
    { length: count },
    (_, i) => `/images/gallery/${folder}/${String(i + 1).padStart(2, "0")}.jpg`,
  );
}

/**
 * Used by the Hero slideshow. Landscape shots only — the hero band is wide
 * and short, so portrait photos get cropped too tight there. The full set
 * (including portraits) still appears in the Portfólio album below.
 */
const weddingHeroFrames = ["01", "02", "03", "06", "07", "08", "09", "11", "13"];
export const weddingGallery = weddingHeroFrames.map(
  (n) => `/images/gallery/${galleryConfigs.wedding.folder}/${n}.jpg`,
);
