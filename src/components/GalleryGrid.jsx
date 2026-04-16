import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function GalleryGrid({ images, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredImages.map((img) => (
          <motion.div
            key={img.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl break-inside-avoid group bg-zinc-900 border border-zinc-800 hover:border-red-500/40 shadow-lg"
          >
            {img.image ? (
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-zinc-800">
                <Camera size={36} className="text-gray-500" />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm md:text-base">
                  {img.title}
                </p>
                <p className="text-gray-300 text-xs mt-1">{img.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}