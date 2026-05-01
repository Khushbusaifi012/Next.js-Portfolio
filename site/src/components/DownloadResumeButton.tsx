import { personal } from "@/data/resume";
import { getResumeDownloadHref } from "@/lib/resumeDownloadUrl";
import { IconDownload } from "@/components/icons";

type DownloadResumeButtonProps = {
  size?: "hero" | "compact";
  /** Shorter text for the small hero pill (e.g. "Résumé") */
  label?: string;
};

function mailtoResumeFallback(): string {
  const whom = personal.name.split(" ")[0] ?? personal.name;
  const subject = encodeURIComponent("Résumé / CV request");
  const body = encodeURIComponent(`Hi ${whom},\n\nI'd like your résumé (PDF).\n\nThanks,`);
  return `mailto:${personal.email}?subject=${subject}&body=${body}`;
}

/**
 * Gradient button — always visible. With `resumeDownloadUrl` set → opens PDF/Drive.
 * Until then → same button opens email to ask for résumé (Server Component friendly, no onClick).
 */
export function DownloadResumeButton({ size = "hero", label = "Download Resume" }: DownloadResumeButtonProps) {
  const direct = getResumeDownloadHref(personal.resumeDownloadUrl);
  const href = direct ?? mailtoResumeFallback();
  const isPdfLink = !!direct && href.startsWith("http");

  const isWide = size === "hero";

  return (
    <a
      href={href}
      {...(isPdfLink ? { target: "_blank" as const, rel: "noopener noreferrer" as const } : {})}
      title={
        direct
          ? undefined
          : "Add resumeDownloadUrl in src/data/resume.ts to open PDF/Direct link directly"
      }
      className={
        isWide
          ? "btn-micro inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-[0_12px_40px_-12px_rgba(192,132,252,0.55)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_16px_48px_-12px_rgba(236,72,153,0.45)] sm:w-auto sm:min-w-[14rem]"
          : "btn-micro inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-white/15 transition-[filter] hover:brightness-110 sm:px-4 sm:py-2 sm:text-[13px]"
      }
    >
      <IconDownload className={`shrink-0 text-white ${isWide ? "h-5 w-5" : "h-3.5 w-3.5"}`} />
      {label}
    </a>
  );
}
