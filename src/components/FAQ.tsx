"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do you build WordPress sites too?",
    a: "Yes — alongside Next.js and React, I build and customize WordPress websites including themes, plugins, and content setup.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Absolutely. After launch I remain available for updates, fixes, and feature additions. I can also set up a support agreement if you need regular maintenance.",
  },
  {
    q: "How do I get a quote?",
    a: "Just send me a message through the form or reach me on WhatsApp with a few details about your project, and I'll get back to you with a clear, honest quote.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on the scope. Simple landing pages usually take a few days, while larger multi-page business sites take one to two weeks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium"
              >
                {f.q}
                <ChevronDown
                  size={18}
                  className={`text-accent-2 transition-transform shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                  {f.a}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}