export function flagEmoji(iso2: string): string {
  const upper = iso2.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(upper)) return "";
  return [...upper].map((c) => String.fromCodePoint(127397 + c.charCodeAt(0))).join("");
}

export const phoneCountryLabels: Record<string, string> = {
  IN: "India",
  AE: "United Arab Emirates",
};

/** Paths under `public/` for phone-row flags (`india.png`, `uae.png`). */
export const phoneCountryFlagSrc: Partial<Record<string, string>> = {
  IN: "/india.png",
  AE: "/uae.png",
};
