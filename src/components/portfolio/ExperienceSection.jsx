import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Charles Schwab",
    role: "Software Development Engineer",
    period: "Jun 2026 – Present",
    location: "Austin, TX",
    type: "Full-Time",
    typeColor: "text-[#5DE4C7] bg-[#5DE4C7]/10 border-[#5DE4C7]/25",
    bullets: [
      "Contributed to the full SDLC by collaborating cross-functionally to modernize a Retirement Plan Services platform through a Domain-Driven Design migration, improving system scalability and long-term maintainability in an agile environment using .NET Core and C#.",
      "Improved developer experience and reduced integration effort for consuming teams by designing full end-to-end RESTful API endpoints and authoring OpenAPI specification documentation — establishing a single source of truth for all endpoint contracts, request/response schemas, and error definitions, backed by optimized MSSQL queries.",
      "Enhanced system reliability and reduced mean time to resolution for production incidents by implementing structured observability pipelines using Splunk, while integrating AI-assisted development tools to increase engineering throughput and deliver higher-quality solutions for client-facing financial services.",
    ],
    tags: [".NET Core", "C#", "MSSQL", "REST APIs", "OpenAPI", "Splunk", "DDD", "Agile"],
  },
  {
    company: "MSH Global",
    role: "AI Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Hillsborough, NJ",
    type: "AI / Backend",
    typeColor: "text-[#91B4D5] bg-[#91B4D5]/10 border-[#91B4D5]/25",
    bullets: [
      "Architected an AI-powered policy chatbot for insurance employees using LangChain, PostgreSQL on Azure, and a FAISS vector store with OpenAI Embeddings — performing semantic search across thousands of billing and policy documents, cutting average query latency by 50% and eliminating manual document lookups.",
      "Integrated SQLDatabaseChain with a LangChain SQL agent to automate structured insurance query resolution against a live relational database, reducing data retrieval time by over 75% for high-frequency operational workflows.",
      "Designed and deployed a customer-facing Node.js UI on top of the chatbot backend, abstracting the underlying LLM and database infrastructure so non-technical insurance companies could independently configure and operate the tool.",
    ],
    tags: ["Python", "LangChain", "FAISS", "PostgreSQL", "Azure", "OpenAI Embeddings", "Node.js"],
  },
  {
    company: "Snowlake Solutions",
    role: "Full Stack Software Developer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Austin, TX",
    type: "Full Stack",
    typeColor: "text-[#FAC863] bg-[#FAC863]/10 border-[#FAC863]/25",
    bullets: [
      "Developed a production .NET Core C# REST API for a Portfolio Management System supporting real-time client account and holdings search, using Generics, LINQ, async/await, and Entity Framework Core — shipped via a fully automated CI/CD pipeline on GitLab.",
      "Authored stored procedures, scalar functions, and indexed views in MSSQL Server 2019 to optimize complex multi-table data operations across client account datasets, ensuring transactional consistency across environments.",
      "Built interactive Angular 17 (TypeScript) UI components with real-time data binding, enabling employees to query, filter, and visualize portfolio holdings with significantly improved response times over the legacy interface.",
    ],
    tags: [".NET Core", "C#", "Angular 17", "MSSQL Server", "Entity Framework", "GitLab CI/CD"],
  },
];

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-xs text-[#5DE4C7]/60 tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-[#1E2330]" />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-[#1E2330]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionLabel label="Work Experience" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E0E6ED] mb-3 tracking-tight">
          Where I've Worked
        </h2>
        <p className="font-mono text-sm text-[#E0E6ED]/40 mb-12">
          Currently at Charles Schwab — previously built production systems across AI, backend, and full-stack engineering.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-[#151921] border border-[#1E2330] rounded-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="flex flex-wrap items-start justify-between gap-4 px-6 py-5 border-b border-[#1E2330]">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Briefcase className="w-4 h-4 text-[#5DE4C7]" />
                    <h3 className="font-heading font-bold text-xl text-[#E0E6ED]">{exp.company}</h3>
                    <span className={`font-mono text-[10px] px-2 py-0.5 border rounded-sm ${exp.typeColor}`}>{exp.type}</span>
                  </div>
                  <p className="font-mono text-sm text-[#91B4D5] mb-2">{exp.role}</p>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#E0E6ED]/40">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="px-6 py-5 space-y-3">
                {exp.bullets.map((b, bi) => (
                  <div key={bi} className="flex gap-3">
                    <span className="text-[#5DE4C7] shrink-0 font-mono text-sm mt-0.5">▸</span>
                    <p className="text-[#E0E6ED]/80 text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-6 pb-5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-2.5 py-1 bg-[#0B0E14] border border-[#1E2330] text-[#E0E6ED]/50 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}