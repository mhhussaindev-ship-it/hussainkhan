"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, Globe, Heart } from "lucide-react";

const STATS = [
  { icon: Rocket, value: "20+", label: "Projects Learning" },
  { icon: Layers, value: "8+", label: "Skills Mastered" },
  { icon: Globe, value: "1", label: "Live Business Website" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

export default function Highlights() {
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
            HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Quick <span className="gradient-text">Facts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <s.icon size={20} className="text-accent-2" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold gradient-text">
                {s.value}
              </p>
              <p className="text-sm text-muted mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}