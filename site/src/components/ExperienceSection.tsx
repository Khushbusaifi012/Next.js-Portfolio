import Image from "next/image";
import type { ExperienceItem } from "@/data/resume";
import { Reveal } from "@/components/Reveal";

function TimelineCard({ job }: { job: ExperienceItem }) {
  return (
    <article className="group relative">
      <div className="absolute left-0 top-2 hidden h-[calc(100%-0.25rem)] w-px bg-[linear-gradient(to_bottom,var(--accent-dim),transparent)] sm:block md:left-[7.75rem]" />
      <div className="absolute left-[-5px] top-2 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_12px_color-mix(in_oklab,var(--accent)_65%,transparent)] sm:block md:left-[7.4rem]" />

      <div className="md:ml-[9.5rem]">
        <div className="rounded-2xl border border-[color-mix(in_oklab,var(--accent-dim)_42%,var(--border))] bg-[color-mix(in_oklab,var(--elevated)_88%,transparent)] p-5 pt-7 pb-6 shadow-[0_0_40px_-16px_color-mix(in_oklab,var(--accent)_22%,transparent)] transition-[border-color,box-shadow] sm:p-6 sm:pt-9 sm:pb-7 group-hover:border-[color-mix(in_oklab,var(--accent-dim)_58%,var(--border))] group-hover:shadow-[0_0_48px_-14px_color-mix(in_oklab,var(--accent)_28%,transparent)]">
          <div className="mb-5">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="min-w-0 flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)] sm:text-xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{job.company}</p>
                <p className="mt-0.5 text-sm text-[var(--muted)]">{job.location}</p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--accent-dim)] md:hidden">
                  {job.start} — {job.end}
                </p>
              </div>
              {job.logoSrc ? (
                <div
                  className="relative h-[3.75rem] w-[3.75rem] shrink-0 overflow-hidden rounded-xl border border-[color-mix(in_oklab,var(--accent-dim)_35%,var(--border))] bg-[color-mix(in_oklab,var(--bg)_40%,var(--elevated))] shadow-[inset_0_1px_0_color-mix(in_oklab,var(--text)_06%,transparent)] sm:h-16 sm:w-16"
                >
                  <Image
                    src={job.logoSrc}
                    alt={`${job.company} logo`}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain object-center p-1.5 sm:p-2"
                  />
                </div>
              ) : (
                <div
                  className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--accent-dim)_35%,var(--border))] bg-[color-mix(in_oklab,var(--bg)_40%,var(--elevated))] text-2xl leading-none sm:h-16 sm:w-16"
                  aria-hidden
                  title="Role"
                >
                  {job.emoji}
                </div>
              )}
            </div>
            <p className="pointer-events-none hidden font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--accent-dim)] md:absolute md:left-0 md:top-9 md:block md:w-28 md:text-right md:text-[0.65rem]">
              {job.start} — {job.end}
            </p>
          </div>

          {job.projects && job.projects.length > 0 ? (
            <div className="space-y-6">
              {job.projects.map((proj) => (
                <div
                  key={proj.name}
                  className="rounded-xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_55%,var(--elevated))] p-5 transition-colors group-hover:border-[color-mix(in_oklab,var(--accent-dim)_28%,var(--border))]"
                >
                  <h4 className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--accent)]">
                    <span aria-hidden>▸</span>
                    {proj.name}
                  </h4>
                  <ul className="mt-3 list-none space-y-2.5">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                        <span className="mt-0.5 shrink-0 font-medium text-[var(--accent)]" aria-hidden>
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="list-none space-y-2.5">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <span className="mt-0.5 shrink-0 font-medium text-[var(--accent)]" aria-hidden>
                    ✓
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({ jobs }: { jobs: ExperienceItem[] }) {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              💼 Experience
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Building systems that ship 🚀
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Backend APIs, AWS operations, CI/CD, and quantitative workflows across fintech and trading stacks.
            </p>
          </header>
        </Reveal>

        <div className="relative mt-16 space-y-16 md:space-y-24">
          {jobs.map((job, i) => (
            <Reveal key={`${job.company}-${job.start}-${i}`} delay={i * 85}>
              <TimelineCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
