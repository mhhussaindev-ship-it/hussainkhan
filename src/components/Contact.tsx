"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, PhoneCall } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:babk9662@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <Mail size={18} className="text-accent-2" />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-medium">babk9662@gmail.com</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <Phone size={18} className="text-accent-2" />
              </div>
              <div>
                <p className="text-xs text-muted">Phone / WhatsApp</p>
                <p className="font-medium">+92 303 2721991</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <MapPin size={18} className="text-accent-2" />
              </div>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="font-medium">Sohni, Shahdadpur, Sindh, Pakistan</p>
              </div>
            </div>
            <a
              href="https://wa.me/923032721991"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:03032721991"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent transition-colors"
            >
              <PhoneCall size={15} /> Call Now
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-xs text-muted mb-1.5 block">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg bg-bg border border-border px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-bg border border-border px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg bg-bg border border-border px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            {sent && (
              <p className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-3 text-sm text-accent-2">
                Message sent! Your email client should open with the message pre-filled.
              </p>
            )}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Send Message <Send size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
