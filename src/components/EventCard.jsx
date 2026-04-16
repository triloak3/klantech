// EventCard — displays an event with date, venue, and register button
import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";

// Props: event (object with title, date, venue, description, type)
export default function EventCard({ event }) {
  const isPast = event.type === "past";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-card border border-border rounded-lg p-5 card-hover ${isPast ? "opacity-70" : ""}`}
    >
      {/* Date badge */}
      <div className="flex items-center gap-2 text-sm text-primary mb-2">
        <CalendarDays size={16} />
        <span className="font-medium">{event.date}</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
        {event.title}
      </h3>

      {/* Venue */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
        <MapPin size={14} />
        <span>{event.venue}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">
        {event.description}
      </p>
      <img src={event.image}/>

      {/* Register button (only for upcoming events) */}
      {!isPast && (
        <button className="btn-primary-gradient px-4 py-2 rounded-md text-sm w-full">
          Register Now
        </button>
      )}
      {isPast && (
        <span className="text-xs text-muted-foreground italic">Event completed</span>
      )}
    </motion.div>
  );
}
