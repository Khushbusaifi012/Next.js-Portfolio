import Image from "next/image";
import { education } from "@/data/resume";
import { Reveal } from "@/components/Reveal";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              🎓 Education
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Academic foundation 📚
            </h2>
          </header>
        </Reveal>

        <Reveal delay={80}>
          <div className="card-lift mt-10 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-8">
            <div className="flex flex-wrap items-start gap-3">
              <Image
                src="/university.png"
                alt={`${education.school} logo`}
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text)]">{education.school}</h3>
                <p className="mt-2 text-[var(--muted)]">{education.degree}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 font-[family-name:var(--font-mono)] text-sm text-[var(--accent-dim)]">
              <span>{education.period}</span>
              <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] sm:inline" />
              <span>{education.detail}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
