import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Layers, Cloud } from "lucide-react";

const modules = [
  {
    name: "Languages & Frameworks",
    icon: Code2,
    comment: "What I write in",
    items: ["Python", "Java", "C#/.NET", "TypeScript", "JavaScript", "HTML/CSS", "SQL", "MATLAB", "Node.js", "Angular", "React", ".NET Core", "Entity Framework Core", "FastAPI", "pandas", "NumPy", "Matplotlib", "seaborn", "psycopg", "JDBC"],
    color: "text-[#5DE4C7]",
    border: "border-[#5DE4C7]/20",
    bg: "bg-[#5DE4C7]/5",
  },
  {
    name: "Cloud, Databases & DevOps",
    icon: Cloud,
    comment: "Where I deploy & store",
    items: ["AWS (S3, DynamoDB, Lambda, EC2, IAM, CloudFormation)", "Azure (PostgreSQL, Cognitive Services)", "Git", "GitLab CI/CD", "MSSQL Server 2019", "PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
    color: "text-[#FAC863]",
    border: "border-[#FAC863]/20",
    bg: "bg-[#FAC863]/5",
  },
  {
    name: "AI / ML & Tooling",
    icon: Layers,
    comment: "How I build intelligent systems",
    items: ["PyTorch", "scikit-learn", "LangChain", "FAISS", "OpenAI Embeddings API"],
    color: "text-[#91B4D5]",
    border: "border-[#91B4D5]/20",
    bg: "bg-[#91B4D5]/5",
  },
];

const certifications = [
  { name: "AWS Certified Developer – Associate", code: "DVA-C02", color: "text-[#FAC863]" },
  { name: "Azure Developer Associate", code: "AZ-204", color: "text-[#91B4D5]" },
];

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-xs text-[#5DE4C7]/60 tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-[#1E2330]" />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-[#1E2330]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionLabel label="Technical Skills" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E0E6ED] mb-3 tracking-tight">
          What I Work With
        </h2>
        <p className="font-mono text-sm text-[#E0E6ED]/40 mb-12">
          Full-stack, cloud, and AI engineering — from algorithms to production deployments.
        </p>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {modules.map((mod, mi) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: mi * 0.1, duration: 0.5 }}
                className={`bg-[#151921] border ${mod.border} rounded-sm p-5`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${mod.color}`} />
                  <h3 className={`font-mono font-semibold text-sm ${mod.color}`}>{mod.name}</h3>
                </div>
                <p className="font-mono text-xs text-[#E0E6ED]/30 mb-4">{mod.comment}</p>
                <div className="flex flex-wrap gap-2">
                  {mod.items.map((item) => (
                    <span
                      key={item}
                      className={`font-mono text-xs px-2.5 py-1 ${mod.bg} border border-[#1E2330] rounded-sm text-[#E0E6ED]/80`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-[#151921] border border-[#FAC863]/20 rounded-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#FAC863]" />
            <h3 className="font-mono font-semibold text-sm text-[#FAC863]">Certifications</h3>
            <span className="font-mono text-xs text-[#E0E6ED]/30 ml-1">— Industry Verified</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.code} className="flex items-center gap-3">
                <span className="text-[#5DE4C7] font-mono text-sm">✓</span>
                <div>
                  <p className="font-mono text-sm text-[#E0E6ED]">{cert.name}</p>
                  <p className="font-mono text-xs text-[#E0E6ED]/40">{cert.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}