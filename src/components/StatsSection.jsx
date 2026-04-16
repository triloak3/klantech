// StatsSection — animated counters showing club stats
import { motion } from "framer-motion";
import { Users, Rocket, Calendar, Trophy } from "lucide-react";

// Stats data — each item has a number, label, and icon
const stats = [
  { value: "50+", label: "Members", icon: Users },
  { value: "12", label: "Projects", icon: Rocket },
  { value: "8", label: "Events", icon: Calendar },
  { value: "5", label: "Competitions", icon: Trophy },
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon size={28} className="text-primary mx-auto mb-2" />
              <p className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
