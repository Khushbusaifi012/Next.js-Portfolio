"use client";

import { useState } from "react";
import { flagEmoji, phoneCountryFlagSrc, phoneCountryLabels } from "@/lib/flagEmoji";

type PhoneWithFlagProps = {
  iso2: string;
  number: string;
  className?: string;
};

export function PhoneWithFlag({ iso2, number, className = "" }: PhoneWithFlagProps) {
  const tel = number.replace(/\s/g, "");
  const upper = iso2.toUpperCase();
  const country = phoneCountryLabels[upper] ?? upper;
  const flagSrc = phoneCountryFlagSrc[upper];
  const flag = flagEmoji(upper);
  const [imgFailed, setImgFailed] = useState(false);

  const showEmoji = !flagSrc || imgFailed;

  /** India asset reads larger than UAE at the same box; match visual size to UAE. */
  const isIndia = upper === "IN";
  const imgDims = isIndia
    ? { width: 22, height: 15, className: "h-[0.875rem] w-auto max-w-[1.45rem] shrink-0 object-contain object-left" }
    : { width: 26, height: 18, className: "h-[1.125rem] w-auto max-w-[1.85rem] shrink-0 object-contain object-left" };

  return (
    <a
      href={`tel:${tel}`}
      className={`inline-flex items-center gap-2 ${className}`.trim()}
      aria-label={`${country}, ${number}`}
    >
      {showEmoji ? (
        <span
          className={`select-none leading-none ${isIndia ? "text-[0.875rem]" : "text-[1.125rem]"}`}
          title={country}
          aria-hidden
        >
          {flag}
        </span>
      ) : (
        <img
          src={flagSrc}
          alt=""
          width={imgDims.width}
          height={imgDims.height}
          className={imgDims.className}
          title={country}
          draggable={false}
          onError={() => setImgFailed(true)}
        />
      )}
      <span className="font-[family-name:var(--font-mono)] tabular-nums tracking-tight">{number}</span>
    </a>
  );
}
