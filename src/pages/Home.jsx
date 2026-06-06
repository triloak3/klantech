// Home page — the main landing page with all sections
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cog, Gauge, Zap, PenTool, Hammer, Cpu, Flag, Lightbulb,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import StatsSection from "@/components/StatsSection";
import ProjectCard from "@/components/ProjectCard";
import EventCard from "@/components/EventCard";
import AchievementCard from "@/components/AchievementCard";
import { projectsData } from "@/data/projectsData";
import { eventsData } from "@/data/eventsData";
import { achievementsData } from "@/data/achievementsData";

// Focus areas / domains of the club
const domains = [
  { name: "Automotive Engineering", icon: Cog, desc: "Vehicle systems, powertrains, and chassis design" },
  { name: "Motorsports", icon: Flag, desc: "Racing strategy, competition prep, and track performance" },
  { name: "EV / Vehicle Tech", icon: Zap, desc: "Electric vehicles, battery tech, and motor controllers" },
  { name: "CAD / Design", icon: PenTool, desc: "3D modeling, rendering, and engineering drawings" },
  { name: "Fabrication", icon: Hammer, desc: "Welding, machining, composites, and prototyping" },
  { name: "Electronics", icon: Cpu, desc: "Sensors, embedded systems, and data acquisition" },
  { name: "Performance", icon: Gauge, desc: "Vehicle dynamics, testing, and optimization" },
  { name: "Innovation", icon: Lightbulb, desc: "Research, new concepts, and creative solutions" },
];

export default function Home() {
  // Show only a few items on the homepage
  const featuredProjects = projectsData.slice(0, 3);
  const upcomingEvents = eventsData.filter((e) => e.type === "upcoming").slice(0, 3);
  const topAchievements = achievementsData.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* About Preview */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="Who We Are"
            subtitle="Klantech Autosport is a student-driven club passionate about automobiles, motorsports, and engineering innovation."
          />
          <p className="text-muted-foreground text-sm md:text-base">
            From designing formula-style race cars to building electric karts, we bring together students
            who love speed, technology, and hands-on engineering. Whether you're into CAD, fabrication,
            electronics, or just love cars — there's a place for you here.
          </p>
        </div>
      </section>

      {/* Domains / Focus Areas */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Domains" subtitle="Areas we explore and innovate in" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center card-hover"
              >
                <domain.icon size={28} className="text-primary mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                  {domain.name}
                </h3>
                <p className="text-xs text-muted-foreground">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
    

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Featured Projects" subtitle="Some of what we've been working on" />
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="btn-primary-gradient px-6 py-2.5 rounded-lg text-sm inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Upcoming Events" subtitle="Don't miss out on what's next" />
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="btn-primary-gradient px-6 py-2.5 rounded-lg text-sm inline-block">
              All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Achievements" subtitle="Our wins and recognitions" />
          <div className="grid md:grid-cols-3 gap-6">
            {topAchievements.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/achievements" className="btn-primary-gradient px-6 py-2.5 rounded-lg text-sm inline-block">
              All Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      
    </div>
  );
}
