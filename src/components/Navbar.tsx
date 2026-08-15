"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          M.<span className="gradient-text">Hussain</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`transition-colors ${
                  isActive(l.href)
                    ? "text-accent-2 font-medium"
                    : "hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
        >
          Hire Me
        </Link>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg-soft border-t border-border px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`transition-colors ${
                isActive(l.href)
                  ? "text-accent-2 font-medium"
                  : "text-muted hover:text-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-white"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}