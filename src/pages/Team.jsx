// Team page — display team members with category filters
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import { teamData } from "@/data/teamData";

// Filter categories
const categories = ["All", "Core Team", "Mechanical", "Design", "Electronics", "Media"];

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter team members based on selected category
  const filteredMembers =
    activeFilter === "All"
      ? teamData
      : teamData.filter((m) => m.category === activeFilter);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Team" subtitle="The people behind the machines" />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
