/**
 * Google Drive `.../file/d/.../view` links → direct download URL.
 * Any other URL → used as-is (Dropbox, hosted PDF, etc.).
 */
export function getResumeDownloadHref(raw: string): string | null {
  const url = raw.trim();
  if (!url) return null;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  const full = url;

  const fileIdMatch = full.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch?.[1]) {
    return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
  }

  const host = parsed.hostname.replace(/^www\./i, "");
  if (host === "drive.google.com" && parsed.pathname === "/open") {
    const id = parsed.searchParams.get("id");
    if (id) return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  return full;
}
