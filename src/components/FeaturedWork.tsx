"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section className="relative py-24 px-6">
      <div className="glow-blob w-[400px] h-[400px] bg-accent bottom-0 left-1/3" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm text-muted mb-1">Featured project</p>
            <h3 className="text-xl font-semibold mb-2">Khan Boring Service</h3>
            <p className="text-muted text-sm max-w-xl">
              A fully responsive multi-page business website for my family&apos;s
              borewell drilling company — built with Next.js and deployed live on
              Vercel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://khan-boring-service.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent transition-colors"
            >
              Visit Website <ExternalLink size={16} />
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              See All Work <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}