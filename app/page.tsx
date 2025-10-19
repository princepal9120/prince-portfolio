import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-sections";
import ContactSection from "@/components/sections/contact-section";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import ContributionGraph from "@/components/sections/contribution-graph";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContributionGraph />
      <SkillsSection />
      <ProjectsSection />
      <BlogPreviewSection posts={posts} />
      <ContactSection />
    </div>
  );
}
