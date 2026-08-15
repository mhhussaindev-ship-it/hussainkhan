"use client";

import { motion } from "framer-motion";
import { Zap, Code2, MessagesSquare, BadgeCheck } from "lucide-react";

const VALUES = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "I respect your time and ship work quickly without cutting corners.",
  },
  {
    icon: Code2,
    title: "Clean Modern Code",
    desc: "Structured, readable, and maintainable code using modern best practices.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    desc: "Regular updates and honest answers, so you're never left guessing.",
  },
  {
    icon: BadgeCheck,
    title: "Fair Pricing",
    desc: "Honest quotes with no hidden fees — you pay for the value you get.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            WHY ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <v.icon size={20} className="text-accent-2" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}