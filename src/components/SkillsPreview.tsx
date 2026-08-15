"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PREVIEW = ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "WordPress"];

export default function SkillsPreview() {
  return (
    <section className="relative py-24 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            WHAT I USE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Top <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            A quick look at the technologies I work with every day.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PREVIEW.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium hover:border-accent transition-colors"
            >
              {s}
            </motion.span>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            View All Skills <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}