import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Star, BookOpen, Calendar } from "lucide-react";

const coursework = [
  "Machine Learning Principles",
  "Intro to Data Science",
  "Data Structures",
  "Discrete Structures",
  "Linear Algebra",
  "Linear Optimization",
  "Data Management for Data Science",
  "Design & Analysis of Computer Algorithms",
  "Principles of Information & Data Management",
];

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-xs text-[#5DE4C7]/60 tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-[#1E2330]" />
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-t border-[#1E2330]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionLabel label="Education" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E0E6ED] mb-3 tracking-tight">
          Where I Studied
        </h2>
        <p className="font-mono text-sm text-[#E0E6ED]/40 mb-12">
          B.S. complete, now pursuing M.S. at UT Austin — 4.0 GPA and Dean's List throughout.
        </p>

        <div className="space-y-5">
          {/* UT Austin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#151921] border border-[#1E2330] rounded-sm overflow-hidden"
          >
            <div className="px-6 py-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <GraduationCap className="w-5 h-5 text-[#91B4D5]" />
                    <h3 className="font-heading font-bold text-xl text-[#E0E6ED]">University of Texas at Austin</h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 border rounded-sm text-[#91B4D5] bg-[#91B4D5]/10 border-[#91B4D5]/25">Online</span>
                  </div>
                  <p className="font-mono text-sm text-[#91B4D5] mb-2">M.S. Computer Science</p>
                  <div className="font-mono text-xs text-[#E0E6ED]/40 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Expected May 2028
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rutgers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-[#151921] border border-[#1E2330] rounded-sm overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-[#1E2330]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <GraduationCap className="w-5 h-5 text-[#5DE4C7]" />
                    <h3 className="font-heading font-bold text-xl text-[#E0E6ED]">Rutgers University</h3>
                  </div>
                  <p className="font-mono text-sm text-[#91B4D5] mb-2">B.S. Computer Science — New Brunswick, NJ</p>
                  <div className="font-mono text-xs text-[#E0E6ED]/40 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> May 2026
                  </div>
                </div>
                <div className="text-center bg-[#5DE4C7]/10 border border-[#5DE4C7]/25 rounded-sm px-5 py-3">
                  <p className="font-heading font-bold text-3xl text-[#5DE4C7]">4.0</p>
                  <p className="font-mono text-xs text-[#E0E6ED]/40 mt-0.5">GPA</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-b border-[#1E2330] flex items-center gap-3">
              <Star className="w-4 h-4 text-[#FAC863] shrink-0" />
              <p className="text-[#E0E6ED]/80 text-sm">
                <span className="text-[#FAC863] font-mono font-medium">Dean's List</span> — September 2023 to Present
              </p>
            </div>

            <div className="px-6 py-5">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#91B4D5]" />
                <span className="font-mono text-xs text-[#E0E6ED]/50 uppercase tracking-widest">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="font-mono text-xs px-3 py-1.5 bg-[#0B0E14] border border-[#1E2330] text-[#E0E6ED]/65 rounded-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}