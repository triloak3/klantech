// Achievements page — display all achievements
import SectionTitle from "@/components/SectionTitle";
import AchievementCard from "@/components/AchievementCard";
import { achievementsData } from "@/data/achievementsData";

export default function Achievements() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Achievements" subtitle="Our wins, awards, and milestones" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
