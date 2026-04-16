// ProjectCard — displays a project with its details and status
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

// Status colors for the badge
const statusColors = {
  "Idea": "bg-accent/20 text-accent",
  "In Progress": "bg-primary/20 text-primary",
  "Completed": "bg-green-500/20 text-green-400",
};

// Props: project (object with title, description, tech, team, status, category)
export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-lg overflow-hidden card-hover"
    >
      {/* Image placeholder */}
      <div className="h-40 bg-secondary flex items-center justify-center">
        <img
        src={project.image}
        alt={project.name}
        className="w-full h-full  "
        />
      </div>

      <div className="p-5">
        {/* Status + category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {project.category}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[project.status] || ""}`}>
            {project.status}
          </span>
        </div>

        {/* Title and description */}
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tech used */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>

        {/* Team */}
        <p className="text-xs text-muted-foreground">
          Team: {project.team.join(", ")}
        </p>
      </div>
    </motion.div>
  );
}
