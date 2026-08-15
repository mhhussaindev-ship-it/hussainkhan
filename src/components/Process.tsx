"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Understand Requirements",
    desc: "We discuss your goals, audience, and what success looks like.",
  },
  {
    num: "02",
    title: "Design & Plan",
    desc: "I map out the structure, content, and visual direction of the site.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "I develop the site, keep you updated, and test everything thoroughly.",
  },
  {
    num: "04",
    title: "Deploy & Support",
    desc: "Your site goes live and I stay available for fixes and improvements.",
  },
];

export default function Process() {
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
            HOW I WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-3xl font-bold gradient-text">{s.num}</span>
              <h3 className="font-semibold mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}