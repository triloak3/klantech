// About page — club story, mission, vision, and departments
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Target, Eye, Heart, Users, Wrench, Cpu, Camera, BookOpen, Calendar } from "lucide-react";

// Club departments
const departments = [
  { name: "Design Team", icon: Target, desc: "CAD modeling, rendering, and concept design for all vehicle projects." },
  { name: "Mechanical Team", icon: Wrench, desc: "Fabrication, assembly, testing, and hands-on vehicle building." },
  { name: "Electronics Team", icon: Cpu, desc: "Sensors, embedded systems, data acquisition, and telemetry." },
  { name: "Media Team", icon: Camera, desc: "Photography, videography, social media, and branding." },
  { name: "Research Team", icon: BookOpen, desc: "Technical papers, simulations, and emerging tech exploration." },
  { name: "Event Team", icon: Calendar, desc: "Planning workshops, talks, competitions, and club activities." },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="About Klantech Autosport" subtitle="Our story, mission, and what drives us" />
          <p className="text-muted-foreground mb-6">
            Klantech Autosport was founded by a group of passionate engineering students who believed
            that real learning happens outside the classroom. What started as a small group discussing
            motorsport and car design has grown into a full-fledged technical club building real vehicles,
            competing nationally, and inspiring the next generation of automotive engineers.
          </p>
          <p className="text-muted-foreground">
            We are a community of builders, designers, and racers united by a love for speed, technology,
            and innovation. Every project we take on pushes us to learn, collaborate, and create something
            extraordinary.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide students with hands-on experience in automotive engineering, motorsports, and innovation through real-world projects and competitions.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the leading student automotive club in the country, known for engineering excellence, creativity, and competitive spirit.",
            },
            {
              icon: Heart,
              title: "Why Join Us",
              text: "Gain practical skills, work on real vehicles, compete nationally, build your portfolio, and be part of a passionate community of makers.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <item.icon size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Departments" subtitle="Specialized teams working together" />
          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-5 card-hover"
              >
                <dept.icon size={28} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
