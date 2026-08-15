"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Timer, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: CheckCircle2,
    title: "Available for Work",
    desc: "Currently open to new freelance projects and collaborations.",
  },
  {
    icon: Timer,
    title: "Fast Response",
    desc: "I usually reply within 24 hours — often much sooner.",
  },
  {
    icon: Clock,
    title: "Flexible Timezone",
    desc: "Based in Pakistan (PKT, UTC+5), happy to coordinate across time zones.",
  },
];

export default function Availability() {
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
            AVAILABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Am I <span className="gradient-text">Available?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-accent-2" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}