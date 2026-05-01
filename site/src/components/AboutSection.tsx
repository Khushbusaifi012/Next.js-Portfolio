import Image from "next/image";
import { about } from "@/data/resume";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  const hasPhoto = Boolean(about.photoSrc?.trim());

  return (
    <section id="about" className="scroll-mt-24 border-b border-[var(--border)] py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header className="mb-12 text-center sm:mb-16">
            <h2 className="bg-gradient-to-r from-[var(--text)] via-[#f472b6] to-[#c084fc] bg-clip-text font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f472b6] shadow-[0_0_24px_color-mix(in_oklab,#ec4899_40%,transparent)]"
              aria-hidden
            />
          </header>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={60} className="order-2 lg:order-1">
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] bg-[var(--elevated)] shadow-[0_28px_90px_-28px_color-mix(in_oklab,var(--accent)_38%,transparent),0_0_0_1px_color-mix(in_oklab,var(--border)_100%,transparent)] ring-1 ring-white/[0.06]"
                aria-label="Profile photo"
              >
                {hasPhoto ? (
                  <Image
                    src={about.photoSrc}
                    alt="Bhupinder Kumar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    priority={false}
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 px-6 text-center sm:min-h-[340px]">
                    <span className="text-5xl opacity-90" aria-hidden>
                      📷
                    </span>
                    <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--text)]">Your photo goes here</p>
                    <p className="max-w-[16rem] text-xs leading-relaxed text-[var(--muted)]">
                      Add an image file to{" "}
                      <code className="rounded-md bg-[var(--surface)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent-dim)]">
                        site/public/
                      </code>{" "}
                      (e.g.{" "}
                      <code className="rounded-md bg-[var(--surface)] px-1 py-0.5 font-[family-name:var(--font-mono)] text-[11px]">
                        about-photo.jpg
                      </code>
                      ), then set{" "}
                      <code className="rounded-md bg-[var(--surface)] px-1 py-0.5 font-[family-name:var(--font-mono)] text-[11px]">
                        photoSrc
                      </code>{" "}
                      in <code className="font-[family-name:var(--font-mono)] text-[11px]">resume.ts</code> to{" "}
                      <code className="rounded-md bg-[var(--surface)] px-1 py-0.5 font-[family-name:var(--font-mono)] text-[11px]">
                        /about-photo.jpg
                      </code>
                      .
                    </p>
                  </div>
                )}
              </div>

              <div
                className="absolute -right-1 top-10 z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--elevated)_92%,transparent)] text-2xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md sm:right-[-0.75rem]"
                aria-hidden
              >
                <span className="drop-shadow-[0_0_12px_rgba(251,146,60,0.75)]">⚡</span>
              </div>
              <div
                className="absolute -bottom-1 -left-1 z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--elevated)_92%,transparent)] text-2xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md sm:-left-3"
                aria-hidden
              >
                <span>🚀</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
