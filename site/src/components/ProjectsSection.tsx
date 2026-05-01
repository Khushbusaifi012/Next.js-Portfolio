import { projects } from "@/data/resume";
import { IconExternal } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              🎯 Projects
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Featured builds 💡
            </h2>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 90}>
              <article className="card-lift group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--elevated)_88%,transparent)] p-6 hover:border-[color-mix(in_oklab,var(--accent-dim)_40%,var(--border))]">
                <div className="flex flex-1 flex-col">
                  <h3 className="flex flex-wrap items-start gap-3 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)]">
                    <span className="select-none text-2xl leading-none" aria-hidden title="Project">
                      {proj.emoji}
                    </span>
                    <span className="pt-0.5">{proj.name}</span>
                  </h3>
                  {"bullets" in proj && proj.bullets && proj.bullets.length > 0 ? (
                    <ul className="mt-3 flex-1 list-none space-y-2.5">
                      {proj.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                          <span className="mt-0.5 shrink-0 font-medium text-[var(--accent)]" aria-hidden>
                            ✓
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    proj.description && <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{proj.description}</p>
                  )}
                  <p className="mt-5 font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    Technologies
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="rounded-md bg-[var(--bg)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent-dim)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  {proj.href ? (
                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-micro mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      Open project
                      <IconExternal className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm italic text-[var(--muted)]">Public demo — add repo or demo URL when ready 🔗</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
