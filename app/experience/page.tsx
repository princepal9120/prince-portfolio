import ExperienceSection from "@/components/sections/experience-sections";
import FadeIn from "@/components/animations/fade-in";

export default function Experience() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <p className="text-muted-foreground">
            My professional journey and accomplishments
          </p>
        </FadeIn>
      </div>
      <ExperienceSection />
    </div>
  );
}
