import BoringBusiness from "@/components/BoringBusiness";
import Projects from "@/components/Projects";
import Process from "@/components/Process";

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-accent-2 text-sm font-semibold tracking-widest">
            PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            My <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            A look at the projects I&apos;ve built — from a live business
            website to the tools I use to bring ideas to life.
          </p>
        </div>
      </section>
      <BoringBusiness />
      <Projects />
      <Process />
    </>
  );
}