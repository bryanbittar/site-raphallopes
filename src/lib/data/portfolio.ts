import { buildGalleryPaths, galleryConfigs, type GalleryConfig } from "@/lib/data/galleries";

export type PortfolioItem = {
  id: string;
  src: string;
  caption: string;
  width: number;
  height: number;
};

function buildItems(config: GalleryConfig): PortfolioItem[] {
  return buildGalleryPaths(config).map((src, i) => {
    const isPortrait = config.portraitFrames.includes(i + 1);
    return {
      id: `${config.folder}-${String(i + 1).padStart(2, "0")}`,
      src,
      caption: `${config.label} — foto ${i + 1}`,
      width: isPortrait ? 1600 : 2400,
      height: isPortrait ? 2400 : 1600,
    };
  });
}

export const weddingItems = buildItems(galleryConfigs.wedding);
export const quinceaneraItems = buildItems(galleryConfigs.quinceanera);
export const preWeddingItems = buildItems(galleryConfigs.preWedding);

export const portfolioCategories = [
  { slug: galleryConfigs.wedding.folder, title: galleryConfigs.wedding.label, items: weddingItems },
  {
    slug: galleryConfigs.quinceanera.folder,
    title: galleryConfigs.quinceanera.label,
    items: quinceaneraItems,
  },
  {
    slug: galleryConfigs.preWedding.folder,
    title: galleryConfigs.preWedding.label,
    items: preWeddingItems,
  },
];
