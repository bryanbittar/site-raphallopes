export type GalleryConfig = {
  folder: string;
  count: number;
  label: string;
};

export const galleryConfigs = {
  wedding: { folder: "casamento", count: 13, label: "Casamento" },
  quinceanera: { folder: "festa-15-anos", count: 10, label: "Festa de 15 Anos" },
  preWedding: { folder: "pre-wedding", count: 12, label: "Pré Wedding" },
} as const satisfies Record<string, GalleryConfig>;

export function buildGalleryPaths({ folder, count }: GalleryConfig) {
  return Array.from(
    { length: count },
    (_, i) => `/images/gallery/${folder}/${String(i + 1).padStart(2, "0")}.jpg`,
  );
}

/** Used by the Hero slideshow. */
export const weddingGallery = buildGalleryPaths(galleryConfigs.wedding);
