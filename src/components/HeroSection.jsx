// HeroSection — bold hero area with background image, title, and CTA buttons
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Calendar } from "lucide-react";
import buggy from "@/assets/buggy.png";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={buggy}
          alt="Racing car on track"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Racing stripe accent */}
          <div className="racing-stripe mx-auto mb-6" />

          {/* Club name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-4">
            <span className="gradient-text">KLANTECH</span>
            <br />
            <span className="text-foreground">AUTOSPORT</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-heading text-muted-foreground mb-4">
            Driven by Innovation
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base">
            A student-driven club focused on automobiles, motorsports, and engineering innovation. 
            We design, build, and race — pushing the boundaries of what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/join"
              className="btn-primary-gradient px-6 py-3 rounded-lg flex items-center gap-2"
            >
              Join the Club <ChevronRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-heading font-semibold tracking-wide uppercase text-sm hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-2"
            >
              <Zap size={18} /> View Projects
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-heading font-semibold tracking-wide uppercase text-sm hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-2"
            >
              <Calendar size={18} /> Explore Events
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
