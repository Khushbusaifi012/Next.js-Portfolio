import { skillGroups } from "@/data/resume";
import { SkillIconCell } from "@/lib/skillIconLookup";
import { Reveal } from "@/components/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-[var(--border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              ⚡ Skills
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Tools &amp; languages 🛠️
            </h2>
          </header>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={Math.min(gi * 45, 200)} className="h-full">
              <div className="flex h-full min-h-0 flex-col rounded-2xl border border-[color-mix(in_oklab,var(--accent-dim)_35%,var(--border))] bg-[color-mix(in_oklab,var(--elevated)_90%,transparent)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--text)_6%,transparent),0_0_40px_-24px_color-mix(in_oklab,var(--accent)_18%,transparent)] sm:p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-dim)]">
                  {group.title}
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {group.items.map((name) => (
                    <SkillIconCell key={name} name={name} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
