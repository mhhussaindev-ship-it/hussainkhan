import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-lg font-bold">
          M.<span className="gradient-text">Hussain</span>
        </Link>

        <div className="flex items-center gap-5 text-muted">
          <a href="#" aria-label="GitHub" className="hover:text-accent-2 transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent-2 transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent-2 transition-colors">
            <InstagramIcon size={18} />
          </a>
        </div>

        <Link
          href="/"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </Link>
      </div>
      <p className="text-center text-xs text-muted mt-6">
        &copy; 2026 M. Hussain Khan. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}