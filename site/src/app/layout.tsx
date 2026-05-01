import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bhupinder Kumar — Python Full-Stack Developer",
    template: "%s — Bhupinder Kumar",
  },
  description:
    "Portfolio of Bhupinder Kumar: Python full-stack developer specializing in trading automation, AWS infrastructure, Flask/FastAPI, and data-heavy systems.",
  openGraph: {
    title: "Bhupinder Kumar — Python Full-Stack Developer",
    description:
      "Trading automation, AWS at scale, and production APIs — based in Abu Dhabi, UAE.",
    url: "/",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupinder Kumar — Python Full-Stack Developer",
    description: "Trading automation, cloud infrastructure, and production Python APIs.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
