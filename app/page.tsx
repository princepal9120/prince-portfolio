import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSectionImproved from "@/components/sections/projects-section-improved";
import ContactSection from "@/components/sections/contact-section";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import ContributionGraph from "@/components/sections/contribution-graph";
import ExperienceSection from "@/components/sections/experience-section-new";
import FloatingNav from "@/components/floating-nav";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <ContributionGraph />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSectionImproved />
        <BlogPreviewSection posts={posts} />
        <ContactSection />
      </div>
      <FloatingNav />
    </>
  );
}
