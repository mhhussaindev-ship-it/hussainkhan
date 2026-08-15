import Contact from "@/components/Contact";
import Availability from "@/components/Availability";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you.
          </p>
        </div>
      </section>
      <Contact />
      <Availability />
      <FAQ />
    </>
  );
}