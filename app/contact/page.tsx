import ContactSection from '@/components/sections/contact-section';
import FadeIn from '@/components/animations/fade-in';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-muted-foreground">Get in touch for collaborations or questions</p>
        </FadeIn>
      </div>
      <ContactSection />
    </div>
  );
}