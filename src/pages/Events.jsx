// Events page — upcoming and past events
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/eventsData";

export default function Events() {
  const upcoming = eventsData.filter((e) => e.type === "upcoming");
  const past = eventsData.filter((e) => e.type === "past");

  return (
    <div className="pt-16">
      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Upcoming Events" subtitle="Register now and don't miss out" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Past Events" subtitle="What we've done so far" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
