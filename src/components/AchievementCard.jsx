// AchievementCard — displays a single achievement
import { motion } from "framer-motion";
import { Trophy, Award, Users, FileText, Handshake } from "lucide-react";

// Map icon names to Lucide components
const iconMap = {
  trophy: Trophy,
  award: Award,
  users: Users,
  file: FileText,
  handshake: Handshake,
};

// Props: achievement (object with title, description, date, category, icon)
export default function AchievementCard({ achievement }) {
  const Icon = iconMap[achievement.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-lg p-5 card-hover"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-primary" />
      </div>

      {/* Category + Date */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-primary font-medium uppercase tracking-wide">
          {achievement.category}
        </span>
        <span className="text-xs text-muted-foreground">{achievement.date}</span>
      </div>

      {/* Title and description */}
      <h3 className="font-heading font-semibold text-foreground text-base mb-2">
        {achievement.title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {achievement.description}
      </p>
    </motion.div>
  );
}
