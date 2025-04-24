import AboutSection from '@/components/sections/about-section';
import FadeIn from '@/components/animations/fade-in';

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground">Learn more about my background and skills</p>
        </FadeIn>
      </div>
      <AboutSection />
    </div>
  );
}