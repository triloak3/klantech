// Join Us / Contact page — form and contact info
import SectionTitle from "@/components/SectionTitle";
import JoinForm from "@/components/JoinForm";
import { Mail, MapPin, Globe, LinkIcon, Code } from "lucide-react";

export default function Join() {
  return (
    <div className="pt-16">
      {/* Join Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Join Klantech Autosport" subtitle="Fill out the form below and we'll get back to you" />
          <JoinForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Get in Touch" subtitle="Reach out through any of these channels" />
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">klantech@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">Room 204, Engineering Block, Campus</span>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Globe size={20} /> @klantech_autosport
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <LinkIcon size={20} /> Klantech Autosport
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Code size={20} /> klantech-autosport
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
