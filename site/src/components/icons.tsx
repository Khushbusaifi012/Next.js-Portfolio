export function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 6h16v12H4V6z" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M6.5 4.5h3l1.5 4.5-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5l1.5-2 4.5 1.5v3a1 1 0 0 1-1 1A17 17 0 0 1 3 5.5a1 1 0 0 1 1-1z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 0 0 18M12 3a15 15 0 0 1 0 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconMap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.69-.21.69-.47v-1.64c-2.82.61-3.41-1.37-3.41-1.37-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.56 2.39 1.11 2.97.85.09-.67.36-1.11.65-1.37-2.25-.26-4.61-1.13-4.61-5.03 0-1.11.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.74 1.05a9.53 9.53 0 0 1 5 0c1.89-1.32 2.73-1.05 2.73-1.05.56 1.41.21 2.45.11 2.71.65.71 1.02 1.63 1.02 2.74 0 3.92-2.37 4.76-4.63 5.02.37.31.69.93.69 1.88v2.78c0 .26.18.58.69.47A10 10 0 1 0 12 2z"
      />
    </svg>
  );
}

export function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.58 7.05a2.76 2.76 0 0 0-1.93-2C17.93 4.67 12 4.67 12 4.67s-5.93 0-7.65.38A2.76 2.76 0 0 0 2.42 7.05 28.93 28.93 0 0 0 2 11.33v1.34a29 29 0 0 0 .42 4.29 2.76 2.76 0 0 0 1.93 2c1.72.39 7.65.39 7.65.39s5.93 0 7.65-.39a2.76 2.76 0 0 0 1.93-2 29 29 0 0 0 .42-4.29v-1.34a29 29 0 0 0-.42-4.29zM9.93 14.93V9.06l5.43 2.93-5.43 3z" />
    </svg>
  );
}
export function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 4v12.5M8 12l4 4 4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconExternal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 4h6v6M10 14 20 4M20 14v6H4V4h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
