import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NyayLink — Legal Services Marketplace & Advisory",
  description:
    "Technology, trust and legal expertise — working together for a fairer India. Connecting citizens, enterprises, and verified advocates across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geist.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EEEAE1] text-[#191917] selection:bg-[#493025] selection:text-[#EEEAE1]">
        {children}
      </body>
    </html>
  );
}
