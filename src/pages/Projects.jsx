// Projects page — showcase all projects with category filters
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projectsData, projectCategories } from "@/data/projectsData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Projects" subtitle="What we're building and innovating" />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects in this category yet. Stay tuned!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
