import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "hershvpatel@gmail.com",
    icon: Mail,
    href: "mailto:hershvpatel@gmail.com",
    color: "text-[#5DE4C7]",
    border: "border-[#5DE4C7]/20",
    bg: "bg-[#5DE4C7]/5",
  },
  {
    label: "Phone",
    value: "(732) 877-5181",
    icon: Phone,
    href: "tel:+17328775181",
    color: "text-[#91B4D5]",
    border: "border-[#91B4D5]/20",
    bg: "bg-[#91B4D5]/5",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hershvpatel",
    icon: Linkedin,
    href: "https://linkedin.com/in/hershvpatel",
    color: "text-[#FAC863]",
    border: "border-[#FAC863]/20",
    bg: "bg-[#FAC863]/5",
  },
  {
    label: "GitHub",
    value: "github.com/HershPat",
    icon: Github,
    href: "https://github.com/HershPat",
    color: "text-[#F07178]",
    border: "border-[#F07178]/20",
    bg: "bg-[#F07178]/5",
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

export default function TerminalFooter() {
  return (
    <footer id="contact" className="py-24 border-t border-[#1E2330]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionLabel label="Contact" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#E0E6ED] mb-3 tracking-tight">
          Get In Touch
        </h2>
        <p className="font-mono text-sm text-[#E0E6ED]/40 mb-12">
          Open to full-time roles, internships, and new opportunities. Let's talk.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 bg-[#151921] border ${c.border} rounded-sm p-5 hover:${c.bg} transition-colors`}
              >
                <div className={`w-10 h-10 rounded-sm ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs text-[#E0E6ED]/40 mb-0.5">{c.label}</p>
                  <p className={`font-mono text-sm ${c.color} truncate`}>{c.value}</p>
                </div>
                <ExternalLink className={`w-4 h-4 ${c.color} opacity-0 group-hover:opacity-60 transition-opacity shrink-0`} />
              </a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="bg-[#151921] border border-[#5DE4C7]/20 rounded-sm p-8 text-center mb-10">
          <h3 className="font-heading font-bold text-2xl text-[#E0E6ED] mb-2">Ready to work together?</h3>
          <p className="font-mono text-sm text-[#E0E6ED]/50 mb-6">
            I'm currently seeking summer 2026 internships and new grad roles.
          </p>
          <a
            href="mailto:hershvpatel@gmail.com"
            className="inline-flex items-center gap-2 bg-[#5DE4C7] text-[#0B0E14] font-mono font-semibold text-sm px-8 py-3 rounded-sm hover:bg-[#5DE4C7]/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Me a Message
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-[#1E2330]">
          <span className="font-mono text-xs text-[#E0E6ED]/20">
            <span className="text-[#5DE4C7]">hersh</span>@portfolio<span className="text-[#E0E6ED]/30">:~$</span>
          </span>
          <span className="font-mono text-xs text-[#E0E6ED]/20">
            © 2026 Hersh Patel · Software Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}