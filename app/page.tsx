import HeroSection from "@/components/sections/hero-section";

import ProjectsSection from "@/components/sections/projects-section";

import BlogPreviewSection from "@/components/sections/blog-preview-section";

import ExperienceSection from "@/components/sections/experience-section-new";
import FloatingNav from "@/components/floating-nav";
import { getAllPosts } from "@/lib/blog";
import BlogPage from "./blog/page";

export default function Home() {
  const posts = getAllPosts();
  

  return (
   <>
  <div className="px-6 md:px-0 md:max-w-[1100px] md:mx-auto">
    <HeroSection />
    <ExperienceSection />
    {/* <ContributionGraph /> */}
    {/* <SkillsSection /> */}
    <ProjectsSection />
    <BlogPage />
  </div>
  <FloatingNav />
</>

  );
}
