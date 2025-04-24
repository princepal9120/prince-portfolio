import ProjectsSection from "@/components/sections/projects-section";
import FadeIn from "@/components/animations/fade-in";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground">
            A showcase of my recent work and applications
          </p>
        </FadeIn>
      </div>
      <ProjectsSection />
    </div>
  );
}
