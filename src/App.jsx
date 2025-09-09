import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Globe, Cpu, Brush, Cloud, Layers } from "lucide-react";

export default function AnmolIntro() {
  const chip = (Icon, label) => (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
      <Icon className="h-4 w-4" /> {label}
    </span>
  );

  const Section = ({ id, title, children }) => (
    <section id={id} className="w-full px-6 py-16 md:py-24">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="text-base/7 text-white/80">{children}</div>
    </section>
  );

  const projects = [
    {
      title: "Snap2Style",
      desc:
        "AI-powered image styling & generative design. FastAPI + React, SQL for mails & credits. Stability AI integrated (full deploy pending).",
      links: [
        { href: "https://github.com/AnmolAgarwal4/Snap2Style-", label: "GitHub", icon: Github },
      ],
      tags: ["FastAPI", "React", "SQL", "AI/ML"],
    },
    {
      title: "NeuroTrace",
      desc:
        "Sketch-based image retrieval with FAISS + OpenCLIP. FastAPI backend, security-oriented matching.",
      links: [],
      tags: ["FastAPI", "FAISS", "OpenCLIP", "Vector Search"],
    },
    {
      title: "Simple Web Vulnerability Scanner",
      desc:
        "Python tool to detect XSS & SQLi on target sites. Minor project (Sem V).",
      links: [],
      tags: ["Python", "Security", "XSS", "SQLi"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(255,0,0,0.25),transparent_60%),radial-gradient(1000px_400px_at_20%_120%,rgba(0,150,255,0.18),transparent_60%)]" />
        
        <header className="flex w-full items-center justify-between gap-4 px-6 py-6">
          <div className="font-semibold tracking-tight">anmol.ag</div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#skills" className="opacity-80 hover:opacity-100">Skills</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </nav>
        </header>

        <main className="w-full px-6 pb-16 pt-10 md:pb-28 md:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Anmol Agarwal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-4 max-w-4xl text-white/80"
          >
            CSE @ UPES • UI/UX • Cloud • Full-Stack • AI/ML. I build fast, clean, and
            practical products — unapologetically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            {chip(Brush, "UI/UX")}
            {chip(Cloud, "Cloud")}
            {chip(Layers, "Full-Stack")}
            {chip(Cpu, "AI/ML")}
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-medium text-neutral-900 transition hover:bg-white/90"
            >
              See projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/AnmolAgarwal4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anmolagarwal4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </main>
      </div>

      {/* About */}
      <Section id="about" title="About">
        <p>
          I’m a builder who loves shipping UI that feels great and backends that don’t
          break. Recent work includes <span className="font-medium">Snap2Style</span>, an AI
          image styling app, a sketch-based retrieval tool (<span className="font-medium">NeuroTrace</span>),
          and a simple web vulnerability scanner. I care about clarity, speed, and clean
          UX — and learning in public.
        </p>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-2 text-lg font-semibold">{p.title}</div>
              <p className="mb-4 text-white/80">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-xl bg-white/10 px-2 py-0.5 text-xs">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-1.5 hover:bg-white/10">
                    <l.icon className="h-4 w-4" /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-2">
          {["C", "UXUI/", "JS", "FastAPI", "React", "TailwindCSS", "Python", "SQL", "Git/GitHub", "Figma", "Cloud", "Virtualization"].map((s) => (
            <span key={s} className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:anmolagarwal325@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> anmolagarwal325@gmail.com
          </a>
          <a
            href="https://anmolagarwal4.github.io" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <Globe className="h-4 w-4" /> Portfolio (soon)
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Want a PDF resume? Ping me or check LinkedIn. Open to design + full-stack internships.
        </p>
      </Section>

      <footer className="w-full px-6 pb-10 text-sm text-white/50">
        © {new Date().getFullYear()} Anmol Agarwal • Built with React + Tailwind • F1-energy
      </footer>
    </div>
  );
}
