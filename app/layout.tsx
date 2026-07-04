import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/syne";
import "./globals.css";

import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Shams Media — Premium Creative Editing Agency",
    template: "%s | Shams Media",
  },
  description:
    "Shams Media is a premium creative editing agency delivering cinematic visuals, motion design, and brand storytelling that captivates audiences.",
  keywords: ["creative editing", "video production", "motion design", "brand storytelling", "Shams Media"],
  authors: [{ name: "Shams Media" }],
  creator: "Shams Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shams Media",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
