"use client";

const FLOAT = [
  { emoji: "🐍", className: "right-[6%] top-[18%] text-2xl opacity-[0.22] animate-float-slow" },
  { emoji: "📈", className: "right-[18%] top-[38%] text-xl opacity-[0.18] animate-float-slower" },
  { emoji: "☁️", className: "right-[10%] bottom-[28%] text-2xl opacity-[0.2] animate-float-slowest" },
  { emoji: "⚡", className: "left-[4%] top-[32%] hidden text-xl opacity-[0.15] sm:block animate-float-slower" },
] as const;

export function HeroFloatingEmoji() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {FLOAT.map(({ emoji, className }, i) => (
        <span key={i} className={`absolute select-none ${className}`}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
