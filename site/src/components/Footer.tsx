import { personal } from "@/data/resume";
import { IconMail } from "@/components/icons";
import { PhoneWithFlag } from "@/components/PhoneWithFlag";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--elevated)_100%,transparent),color-mix(in_oklab,var(--bg)_100%,transparent))] p-8 sm:p-12">
            <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">💬 Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Let&apos;s build something reliable ✨
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Always open to interesting roles in backend engineering, trading automation, and cloud-heavy Python stacks. Say hi!
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <a
                href={`mailto:${personal.email}`}
                className="btn-micro inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)]"
              >
                <IconMail className="h-5 w-5 text-[var(--accent-dim)]" />
                {personal.email}
              </a>
              {personal.phones.map((p) => (
                <PhoneWithFlag
                  key={p.number}
                  iso2={p.iso2}
                  number={p.number}
                  className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)]"
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-1.5 text-center text-xs text-[var(--muted)]">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p>Built with Next.js 💙</p>
        </div>
      </div>
    </footer>
  );
}
