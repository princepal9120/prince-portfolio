import SkillsSection from "@/components/sections/skills-section";
import FadeIn from "@/components/animations/fade-in";

export default function Skills() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </FadeIn>
      </div>
      <SkillsSection />
    </div>
  );
}
