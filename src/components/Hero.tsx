"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 px-6">
      <div className="glow-blob w-[500px] h-[500px] bg-accent -top-40 -left-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-accent-2 top-20 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-accent-2 mb-6">
            I&apos;M A WEB DEVELOPER
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">M. Hussain Khan</span>
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md">
            A 20-year-old developer from Shahdadpur, Sindh, building clean,
            modern websites with Next.js, React, Tailwind CSS, JavaScript,
            HTML, CSS &amp; WordPress.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex items-center gap-4 text-muted">
            <a href="#" aria-label="GitHub" className="hover:text-accent-2 transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent-2 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent-2 transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent to-accent-2 p-1">
            <div className="w-full h-full rounded-full bg-bg-soft flex items-center justify-center overflow-hidden border border-border">
              {/* Replace this placeholder with your real photo: put it at /public/images/profile.jpg
                  and swap this div for: <Image src="/images/profile.jpg" alt="M. Hussain Khan" fill className="object-cover rounded-full" /> */}
              <span className="text-muted text-sm">Your Photo</span>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-6 py-2 text-sm font-medium whitespace-nowrap">
            Web Developer
          </div>
        </motion.div>
      </div>
    </section>
  );
}
