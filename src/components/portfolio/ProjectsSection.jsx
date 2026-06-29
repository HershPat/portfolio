import React from "react";
import { motion } from "framer-motion";
import { Activity, BarChart3, Server } from "lucide-react";

const PROJECTS_IMG = "https://media.db.com/images/public/6a3dfc3e90867e1198f7190d/24f2c8880_generated_aee416e0.png";

const projects = [
  {
    name: "NBA Score Predictor",
    tagline: "End-to-end ML pipeline predicting total NBA game scores — MAE < 5 pts, MAPE < 5.5%",
    date: "Dec 2025",
    stack: ["Python", "PyTorch", "scikit-learn", "NumPy", "pandas", "matplotlib", "seaborn"],
    icon: BarChart3,
    iconColor: "text-[#5DE4C7]",
    borderColor: "border-[#1E2330] hover:border-[#5DE4C7]/30",
    pulse: false,
    bullets: [
      "Engineered a modular scikit-learn feature transformation pipeline + custom PyTorch neural network (stacked Linear layers, ReLU, Dropout, BatchNorm) with Adam optimizer, LR scheduling, and Huber Loss — achieving MAE < 5 pts and MAPE < 5.5% on held-out test data, outperforming linear regression and ensemble baselines across all CV splits.",
      "Conducted rigorous EDA via matplotlib/seaborn — KDEs, residual plots, correlation heatmaps, and distributional drift analysis — driving feature selection decisions that improved convergence speed and generalization by 30%.",
    ],
  },
  {
    name: "Account Documents Migration System",
    tagline: "Cloud-native .NET Core microservice automating large-scale legacy document migration to AWS S3",
    date: "Sep – Nov 2025",
    stack: ["C#", ".NET Core", "AWS S3", "DynamoDB", "IAM", "AWS SDK"],
    icon: Server,
    iconColor: "text-[#FAC863]",
    borderColor: "border-[#1E2330] hover:border-[#FAC863]/30",
    pulse: false,
    bullets: [
      "Architected a production-grade cloud-native .NET Core microservice using AWS SDK to automate large-scale migration of thousands of legacy documents to S3 — event-driven ingestion pipeline with zero-trust IAM least-privilege access and regex-based document classification for automated S3 folder routing.",
      "Designed a master-worker concurrency architecture with dynamic thread pool autoscaling, async/await parallelism, and DynamoDB-persisted audit logs with conditional writes and optimistic locking for idempotent deduplication and point-in-time rollback.",
    ],
  },
  {
    name: "Railex",
    tagline: "Full-stack multi-tier train reservation platform with RBAC, MVC, and ACID-compliant MySQL",
    date: "Jun – Jul 2025",
    stack: ["Java", "JSP", "MySQL", "JDBC", "HTML/CSS", "JavaScript"],
    icon: Activity,
    iconColor: "text-[#91B4D5]",
    borderColor: "border-[#1E2330] hover:border-[#91B4D5]/30",
    pulse: false,
    bullets: [
      "Architected a full-stack multi-tier train reservation platform using Java Servlets, JSP, and MVC — implementing RBAC with session management and auth middleware, backed by a 3NF-normalized MySQL schema with composite indexes and ACID-compliant parameterized JDBC queries with connection pooling to prevent SQL injection under high-concurrency load.",
      "Shipped a responsive UI with CSS Flexbox/Grid and vanilla JS, featuring client-side validation, dynamic DOM rendering, and async data fetching across customer and employee portals.",
    ],
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-[#1E2330] relative">
      <div className="absolute inset-0 pointer-events-none">
        <img src={PROJECTS_IMG} alt="" className="w-full h-full object-cover opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionLabel label="Projects" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E0E6ED] mb-3 tracking-tight">
          What I've Built
        </h2>
        <p className="font-mono text-sm text-[#E0E6ED]/40 mb-12">
          Shipped projects spanning AI, full-stack, ML, and cloud infrastructure.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-[#151921] border ${proj.borderColor} rounded-sm overflow-hidden transition-colors`}
              >
                {/* Header */}
                <div className="px-6 py-5 border-b border-[#1E2330]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      {proj.pulse ? (
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DE4C7] opacity-60" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5DE4C7]" />
                        </span>
                      ) : (
                        <Icon className={`w-4 h-4 ${proj.iconColor}`} />
                      )}
                      <h3 className="font-heading font-bold text-lg text-[#E0E6ED]">{proj.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#E0E6ED]/60 text-sm leading-relaxed mb-1">{proj.tagline}</p>
                  {proj.date && <p className="font-mono text-xs text-[#E0E6ED]/30 mb-3">{proj.date}</p>}
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2 py-0.5 bg-[#0B0E14] border border-[#1E2330] text-[#E0E6ED]/50 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <div className="px-6 py-5 space-y-3">
                  {proj.bullets.map((b, bi) => (
                    <div key={bi} className="flex gap-3">
                      <span className={`shrink-0 font-mono text-sm mt-0.5 ${proj.iconColor}`}>▸</span>
                      <p className="text-[#E0E6ED]/80 text-sm leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
