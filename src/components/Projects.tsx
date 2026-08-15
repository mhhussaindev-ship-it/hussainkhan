"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const PROJECTS = [
  {
    title: "Khan Boring Service",
    desc: "A multi-page business website for a borewell drilling company — built with Next.js, TypeScript, and custom CSS. Includes services, rates, gallery, and contact pages.",
    tags: ["Next.js", "TypeScript", "CSS"],
    link: "https://khan-boring-service.vercel.app",
  },
  {
    title: "Project Two",
    desc: "Short description of your second project goes here. Mention the problem it solves and the tech used.",
    tags: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Three",
    desc: "Short description of your third project goes here. Feel free to add more cards by copying this block.",
    tags: ["Next.js", "TypeScript"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative py-24 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Latest <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-hover rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-gradient-to-br from-accent/30 to-accent-2/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted/60">
                  PROJECT {i + 1}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full border border-border px-3 py-1 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent/90 transition-colors"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold hover:border-accent transition-colors"
                  >
                    GitHub <GithubIcon size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
