// TeamCard — displays a single team member with their info
import { motion } from "framer-motion";
import { LinkIcon, Code, User } from "lucide-react";

// Props: member (object with name, role, department, year, skills, linkedin, github)
export default function TeamCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-lg p-5 card-hover"
    >
      <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
         <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full  "
        />
      </div>

      {/* Name and role */}
      <h3 className="text-center font-heading font-semibold text-foreground text-lg">
        {member.name}
      </h3>
      <p className="text-center text-sm text-primary font-medium mb-1">
        {member.role}
      </p>
      <p className="text-center text-xs text-muted-foreground mb-3">
        {member.department} • {member.year}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-2">
        <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
          <LinkIcon size={16} />
        </a>
      </div>
    </motion.div>
  );
}
