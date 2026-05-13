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
                      
          </div>
        </div>
      </section>
    </div>
  );
}
