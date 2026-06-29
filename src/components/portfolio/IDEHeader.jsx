import React from "react";
import { FileCode2, X } from "lucide-react";

const tabs = [
  { id: "hero", label: "home.ts" },
  { id: "skills", label: "skills.json" },
  { id: "experience", label: "experience.log" },
  { id: "projects", label: "projects.md" },
  { id: "education", label: "education.conf" },
  { id: "contact", label: "contact.sh" },
];

export default function IDEHeader({ activeSection }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E14] border-b border-[#1E2330]">
      {/* Title bar */}
      <div className="h-8 flex items-center px-4 bg-[#080A0F] border-b border-[#1E2330]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F07178]/80" />
          <div className="w-3 h-3 rounded-full bg-[#FAC863]/80" />
          <div className="w-3 h-3 rounded-full bg-[#5DE4C7]/80" />
        </div>
        <span className="ml-4 text-xs text-[#E0E6ED]/40 font-mono tracking-wider">
          hersh-patel-portfolio — Visual Studio Code
        </span>
      </div>

      {/* Tabs */}
      <div className="flex items-center overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`flex items-center gap-2 px-4 h-10 min-w-fit text-xs font-mono border-r border-[#1E2330] transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-[#151921] text-[#E0E6ED] border-t-2 border-t-[#5DE4C7]"
                  : "bg-[#0B0E14] text-[#E0E6ED]/40 hover:text-[#E0E6ED]/70 border-t-2 border-t-transparent"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#91B4D5]" />
              {tab.label}
              {isActive && <X className="w-3 h-3 ml-2 text-[#E0E6ED]/30" />}
            </button>
          );
        })}
      </div>
    </header>
  );
}