"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    year: "2021",
    title: "Matriculation (Science)",
    place: "Your School Name Here",
  },
  {
    year: "2023",
    title: "Intermediate / BSc",
    place: "Your College / University Here",
  },
];

export default function Education() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            MY BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-hover rounded-2xl border border-border bg-card p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-accent-2" />
              </div>
              <div>
                <span className="text-xs text-accent-2 font-medium">
                  {e.year}
                </span>
                <h3 className="font-semibold mt-1">{e.title}</h3>
                <p className="text-sm text-muted mt-0.5">{e.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}