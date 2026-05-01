import Image from "next/image";
import { personal } from "@/data/resume";
import { IconGitHub, IconLinkedIn, IconMail, IconMap, IconYouTube } from "@/components/icons";
import { PhoneWithFlag } from "@/components/PhoneWithFlag";
import { HeroFloatingEmoji } from "@/components/HeroFloatingEmoji";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";

export function Hero() {
  const firstName = personal.name.split(" ")[0] ?? personal.name;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)] pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% -10%, var(--glow-1), transparent 55%), radial-gradient(ellipse 60% 40% at 10% 60%, var(--glow-2), transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent_40%,var(--bg))] opacity-90" aria-hidden />

      <HeroFloatingEmoji />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:col-span-3">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--elevated)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--muted)]">
            <span className="text-sm" aria-hidden>
              ✨
            </span>
            {personal.totalExperience} experience · {personal.location}
          </p>

          <p className="text-base font-medium text-[var(--muted)] sm:text-lg">
            Hey, I&apos;m <span className="text-[var(--text)]">{firstName}</span>{" "}
            <span aria-hidden className="wave-hand">
              👋
            </span>
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-mono)] text-sm text-[var(--accent)] sm:text-base">
            {personal.title}&nbsp;<span aria-hidden>🐍 ⚡ ☁️</span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">{personal.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="btn-micro inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] hover:brightness-110 active:scale-[0.98]"
            >
              <IconMail className="h-4 w-4" />
              Let&apos;s talk ✉️
            </a>
            <a
              href="#experience"
              className="btn-micro inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--elevated)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent-dim)] hover:text-[var(--text)]"
            >
              View work 🚀
            </a>
            <DownloadResumeButton size="compact" label="Resume" />
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <li className="flex items-center gap-2">
              <IconMail className="h-4 w-4 shrink-0 text-[var(--accent-dim)]" />
              <a href={`mailto:${personal.email}`} className="hover:text-[var(--text)]">
                {personal.email}
              </a>
            </li>
            {personal.phones.map((p) => (
              <li key={p.number} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <PhoneWithFlag
                  iso2={p.iso2}
                  number={p.number}
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                />
              </li>
            ))}
            <li className="flex items-center gap-2">
              <IconMap className="h-4 w-4 shrink-0 text-[var(--accent-dim)]" />
              {personal.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-micro inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--elevated)] text-[var(--text)] transition-colors hover:border-[var(--accent-dim)] hover:text-[var(--accent)]"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-micro inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--elevated)] text-[var(--text)] transition-colors hover:border-[var(--accent-dim)] hover:text-[var(--accent)]"
              aria-label="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </a>
            <a
              href={personal.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="btn-micro inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--elevated)] text-[var(--text)] transition-colors hover:border-[var(--accent-dim)] hover:text-[var(--accent)]"
              aria-label="YouTube"
            >
              <IconYouTube className="h-5 w-5" />
            </a>
          </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-2 lg:justify-end">
            <div
              className="rounded-[2.75rem] bg-gradient-to-br from-[#a855f7] via-[#d946ef] to-[#ec4899] p-[3px] shadow-[0_0_44px_-6px_rgba(168,85,247,0.55),0_12px_48px_-16px_rgba(236,72,153,0.35)]"
            >
              <div className="relative aspect-[3/4] w-[19.5rem] overflow-hidden rounded-[2.5rem] bg-[var(--elevated)] sm:w-[22.5rem] lg:w-[26rem]">
                <Image
                  src={personal.heroImageSrc}
                  alt={personal.name}
                  fill
                  className="object-cover object-[center_28%] sm:object-center"
                  sizes="(max-width: 640px) 312px, (max-width: 1024px) 360px, 416px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
