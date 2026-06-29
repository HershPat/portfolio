import React, { useState, useEffect } from "react";
import IDEHeader from "@/components/portfolio/IDEHeader";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import TerminalFooter from "@/components/portfolio/TerminalFooter";

const sectionIds = ["hero", "skills", "experience", "projects", "education", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollCheckpoint = window.scrollY + 120;
      const activeId = sectionIds.reduce((current, id) => {
        const el = document.getElementById(id);
        if (!el) return current;
        return el.offsetTop <= scrollCheckpoint ? id : current;
      }, "hero");

      setActiveSection(activeId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="bg-[#0B0E14] min-h-screen text-[#E0E6ED]">
      <ScrollProgress />
      <IDEHeader activeSection={activeSection} />

      {/* File explorer sidebar (desktop only) */}
      <div className="hidden lg:block fixed left-0 top-[72px] bottom-0 w-12 bg-[#080A0F] border-r border-[#1E2330] z-40">
        <div className="flex flex-col items-center gap-6 pt-6">
          {sectionIds.map((id, i) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative group"
              >
                <span
                  className={`font-mono text-[10px] tabular-nums transition-colors ${
                    isActive ? "text-[#5DE4C7]" : "text-[#E0E6ED]/15 group-hover:text-[#E0E6ED]/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isActive && (
                  <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-[#5DE4C7]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="lg:ml-12">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <TerminalFooter />
      </main>
    </div>
  );
}
