import Image from "next/image";
import type { ExperienceItem } from "@/data/resume";
import { Reveal } from "@/components/Reveal";

function TimelineCard({ job }: { job: ExperienceItem }) {
  return (
    <article className="group relative">
      <div className="absolute left-0 top-2 hidden h-[calc(100%-0.25rem)] w-px bg-[linear-gradient(to_bottom,var(--accent-dim),transparent)] sm:block md:left-[7.75rem]" />
      <div className="absolute left-[-5px] top-2 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_12px_color-mix(in_oklab,var(--accent)_65%,transparent)] sm:block md:left-[7.4rem]" />

      <div className="md:ml-[9.5rem]">
        <div className="rounded-2xl border border-[color-mix(in_oklab,var(--accent-dim)_42%,var(--border))] bg-[color-mix(in_oklab,var(--elevated)_88%,transparent)] p-5 shadow-[0_0_40px_-16px_color-mix(in_oklab,var(--accent)_22%,transparent)] transition-[border-color,box-shadow] sm:p-6 group-hover:border-[color-mix(in_oklab,var(--accent-dim)_58%,var(--border))] group-hover:shadow-[0_0_48px_-14px_color-mix(in_oklab,var(--accent)_28%,transparent)]">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between md:block md:space-y-1">
            <div>
              <h3 className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)] sm:text-xl">
                {job.logoSrc ? (
                  <span className="relative inline-flex h-7 max-h-8 shrink-0 items-center sm:h-8">
                    <Image
                      src={job.logoSrc}
                      alt={`${job.company} logo`}
                      width={140}
                      height={38}
                      className="h-6 w-auto max-h-7 max-w-[8.25rem] object-contain object-left sm:h-7 sm:max-h-8 sm:max-w-[9.5rem]"
                    />
                  </span>
                ) : (
                  <span className="select-none text-2xl leading-none" aria-hidden title="Role">
                    {job.emoji}
                  </span>
                )}
                <span>{job.role}</span>
              </h3>
              <p className="text-sm font-medium text-[var(--muted)]">
                {job.company} · {job.location}
              </p>
            </div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--accent-dim)] md:absolute md:left-0 md:top-1 md:w-28 md:text-right md:text-[0.65rem]">
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
