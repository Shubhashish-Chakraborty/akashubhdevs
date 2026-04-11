import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubhashish / shubhdevs",
  description:
    "full-stack developer building web apps and tools. open source contributor.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js"],
  openGraph: {
    title: "Shubhashish / shubhdevs",
    description: "full-stack developer building web apps and tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-[#0d0e0f] text-[#d4be98] antialiased">
        {children}
      </body>
    </html>
  );
}
