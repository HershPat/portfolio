import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const HERO_IMG = "https://media.db.com/images/public/6a3dfc3e90867e1198f7190d/13be5beb0_generated_8ce8fb51.png";

const importLine = `import { Developer } from 'ut-austin';`;

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < importLine.length) {
        setTypedText(importLine.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  const scrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/70 via-[#0B0E14]/85 to-[#0B0E14]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        {/* Typing animation */}
        <div className="mb-10">
          <div className="bg-[#151921] border border-[#2A3145] rounded px-4 py-3 inline-block">
            <code className="font-mono text-sm text-[#E0E6ED]/60">
              <span className="text-[#F07178]">import</span>
              {" { "}
              <span className="text-[#5DE4C7]">Developer</span>
              {typedText.length > 29 ? " } " : ""}
              {typedText.length > 32 ? <span className="text-[#F07178]">from</span> : ""}
              {typedText.length > 37 ? <span className="text-[#FAC863]"> 'ut-austin'</span> : ""}
              {typedText.length >= importLine.length ? ";" : ""}
              <span className={`inline-block w-[2px] h-4 bg-[#5DE4C7] ml-0.5 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </code>
          </div>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={typingDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}>
          
          <h1 className="font-heading font-bold text-[#E0E6ED] text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
            <span className="text-[#5DE4C7]">HERSH</span>{" "}
            <span className="text-[#E0E6ED]">PATEL</span>
          </h1>

          {/* Role badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["SDE @ Charles Schwab", "AI & Backend", "Full-Stack", "Cloud Architect"].map((role) =>
            <span key={role} className="font-mono text-sm px-3 py-1 bg-[#5DE4C7]/10 border border-[#5DE4C7]/30 text-[#5DE4C7] rounded-sm">
                {role}
              </span>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-mono text-sm text-[#E0E6ED]/60">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Edison, NJ</span>
            <a href="mailto:hershvpatel@gmail.com" className="flex items-center gap-1.5 hover:text-[#5DE4C7] transition-colors">
              <Mail className="w-3.5 h-3.5" /> hershvpatel@gmail.com
            </a>
            <a href="tel:+17328775181" className="flex items-center gap-1.5 hover:text-[#5DE4C7] transition-colors">
              <Phone className="w-3.5 h-3.5" /> (732) 877-5181
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToExperience}
              className="flex items-center gap-2 bg-[#5DE4C7] text-[#0B0E14] font-mono font-semibold text-sm px-6 py-3 rounded-sm hover:bg-[#5DE4C7]/90 transition-colors">
              
              <Play className="w-4 h-4" />
              View Experience
            </button>
            <a
              href="https://linkedin.com/in/hershvpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#2A3145] text-[#E0E6ED]/70 font-mono text-sm px-6 py-3 rounded-sm hover:border-[#5DE4C7]/50 hover:text-[#5DE4C7] transition-colors">
              
              <ExternalLink className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/HershPat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#2A3145] text-[#E0E6ED]/70 font-mono text-sm px-6 py-3 rounded-sm hover:border-[#5DE4C7]/50 hover:text-[#5DE4C7] transition-colors">
              
              <ExternalLink className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}