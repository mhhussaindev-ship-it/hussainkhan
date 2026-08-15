"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Next.js", level: 78 },
  { name: "Tailwind CSS", level: 85 },
  { name: "WordPress", level: 80 },
  { name: "Git & GitHub", level: 75 },
];

export default function Skills() {
  return (
    <section className="relative py-24 px-6 bg-bg-soft">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            WHAT I USE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-accent-2">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-card overflow-hidden border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
