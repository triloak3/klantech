// SectionTitle — reusable heading with racing stripe accent
import { motion } from "framer-motion";

// Props: title (string), subtitle (string, optional)
export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <div className="racing-stripe mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
