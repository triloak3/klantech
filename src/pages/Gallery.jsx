// Gallery page — image gallery with category filters
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryData, galleryCategories } from "@/data/galleryData";

export default function Gallery() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Gallery" subtitle="Moments from workshops, builds, and competitions" />
          <GalleryGrid images={galleryData} categories={galleryCategories} />
        </div>
      </section>
    </div>
  );
}
