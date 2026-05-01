import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  CandlestickChart,
  CircleDot,
  PlugZap,
  ShieldHalf,
} from "lucide-react";

/** Pinned icons: some brands were dropped from cdn.simpleicons.org; npm package still ships SVGs. */
const SIMPLE_ICONS_LEGACY = "https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons";

export type SkillVisualMeta = {
  /** Simple Icons slug for https://cdn.simpleicons.org/:slug */
  slug?: string;
  iconSrc?: string;
  Fallback?: LucideIcon;
  shortLabel?: string;
};

export const SKILL_ICON_LOOKUP: Record<string, SkillVisualMeta> = {
  Python: { slug: "python" },
  Java: { slug: "openjdk" },
  C: { slug: "c" },
  "Object-Oriented Programming": { Fallback: Boxes, shortLabel: "OOP" },
  SQL: { slug: "mysql" },
  MQL: { Fallback: CandlestickChart },

  Django: { slug: "django" },
  FastAPI: { slug: "fastapi" },
  Flask: { slug: "flask" },
  "Spring Boot": { slug: "springboot" },
  "Django REST Framework (DRF)": { slug: "django", shortLabel: "Django REST" },

  NumPy: { slug: "numpy" },
  Pandas: { slug: "pandas" },
  JWT: { Fallback: ShieldHalf },
  Docker: { slug: "docker" },
  Git: { slug: "git" },
  GitLab: { slug: "gitlab" },
  Jenkins: { slug: "jenkins" },
  "AWS (EC2, ECS, S3, CodeCommit, Redshift, Athena)": {
    iconSrc: `${SIMPLE_ICONS_LEGACY}/amazonaws.svg`,
    shortLabel: "AWS",
  },

  HTML5: { slug: "html5" },
  CSS: { slug: "css" },
  "REST APIs": { Fallback: PlugZap, shortLabel: "REST APIs" },

  Linux: { slug: "linux" },
  Windows: { iconSrc: `${SIMPLE_ICONS_LEGACY}/windows.svg` },
  FreeBSD: { slug: "freebsd" },
  MySQL: { slug: "mysql" },
  SQLite: { slug: "sqlite" },
  Redis: { slug: "redis" },

  PyCharm: { slug: "pycharm" },
  "Jupyter Notebook": { slug: "jupyter", shortLabel: "Jupyter" },
  "Visual Studio Code": {
    iconSrc: `${SIMPLE_ICONS_LEGACY}/visualstudiocode.svg`,
    shortLabel: "VS Code",
  },
  "IntelliJ IDEA": { slug: "intellijidea", shortLabel: "IntelliJ IDEA" },
};

export function SkillIconCell({ name }: { name: string }) {
  const meta = SKILL_ICON_LOOKUP[name];
  const label = meta?.shortLabel ?? name;

  const Icon = meta?.Fallback;
  const imgUrl = meta?.iconSrc ?? (meta?.slug ? `https://cdn.simpleicons.org/${meta.slug}` : undefined);
  const iconBox = imgUrl ? (
    <img
      src={imgUrl}
      alt=""
      width={44}
      height={44}
      className="h-11 w-11 object-contain"
      loading="lazy"
      decoding="async"
    />
  ) : Icon ? (
    <Icon className="h-11 w-11 text-[var(--accent)]" aria-hidden strokeWidth={1.5} />
  ) : (
    <CircleDot className="h-11 w-11 text-[var(--muted)]" aria-hidden strokeWidth={1.5} />
  );

  return (
    <article
      className="card-lift flex min-h-[6.75rem] flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--elevated)_92%,transparent)] px-2 py-3 text-center shadow-[inset_0_1px_0_color-mix(in_oklab,var(--text)_5%,transparent)] transition-colors hover:border-[color-mix(in_oklab,var(--accent-dim)_45%,var(--border))] sm:min-h-[7.75rem] sm:gap-3 sm:px-3 sm:py-4"
      title={name}
    >
      <div className="flex h-14 w-full items-center justify-center [&_img]:drop-shadow-[0_1px_8px_color-mix(in_oklab,var(--accent)_22%,transparent)]">
        {iconBox}
      </div>
      <p className="text-center font-[family-name:var(--font-mono)] text-[11px] font-medium leading-snug text-[var(--text)] sm:text-xs">
        {label}
      </p>
    </article>
  );
}
