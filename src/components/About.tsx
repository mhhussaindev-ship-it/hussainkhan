"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function About() {
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
            WHO I AM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted leading-relaxed"
        >
          <p>
            Hi, I&apos;m <span className="text-text font-medium">M. Hussain Khan</span> —
            a 20-year-old, self-taught web developer from Shahdadpur, Sindh,
            Pakistan. I build clean, responsive websites using{" "}
            <span className="text-text">JavaScript, Next.js, React, Tailwind CSS,
            HTML, CSS</span>, and{" "}
            <span className="text-text">WordPress</span>.
          </p>
          <p>
            My journey started with curiosity about how websites work, and grew
            into a real passion for turning ideas into fast, modern, well-designed
            web experiences — from simple landing pages to full multi-page
            business websites.
          </p>
          <p>
            Alongside development, I also help run my family&apos;s business,{" "}
            <span className="text-text font-medium">Khan Boring Service</span> — a
            borewell drilling and water solutions company based in Shahdadpur. I
            designed and built the company&apos;s own website from the ground up,
            which is now live and helping the business reach more customers
            online. You can read more about that in the{" "}
            <Link href="/work" className="text-accent-2 hover:underline">
              Boring Business
            </Link>{" "}
            section.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent-2" />
              Age: 20
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent-2" />
              Shahdadpur, Sindh, Pakistan
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}