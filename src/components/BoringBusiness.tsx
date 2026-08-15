"use client";

import { motion } from "framer-motion";
import { ExternalLink, Wrench, Droplets, Globe } from "lucide-react";

export default function BoringBusiness() {
  return (
    <section className="relative py-24 px-6">
      <div className="glow-blob w-[400px] h-[400px] bg-accent-2 bottom-0 left-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            FAMILY BUSINESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Khan <span className="gradient-text">Boring Service</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Alongside web development, I help manage and maintain the digital
            side of my family&apos;s borewell drilling business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: Droplets,
              title: "Borewell Drilling",
              desc: "Professional borewell drilling and tube well installation for homes, farms, and industries across Sindh.",
            },
            {
              icon: Wrench,
              title: "Repair & Maintenance",
              desc: "Pump installation, motor repair, welding, and emergency repair services for existing water systems.",
            },
            {
              icon: Globe,
              title: "Website I Built",
              desc: "I designed, developed, and deployed the company's full website using Next.js — from scratch to live.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm text-muted mb-1">My role</p>
            <h3 className="text-xl font-semibold mb-2">
              Website Developer — Khan Boring Service
            </h3>
            <p className="text-muted text-sm max-w-xl">
              Built a fully responsive multi-page site (Home, About, Services,
              Projects, Gallery, Contact and more) using Next.js and deployed it
              live on Vercel, giving the business its first real online presence.
            </p>
          </div>
          <a
            href="https://khan-boring-service.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Visit Website <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
