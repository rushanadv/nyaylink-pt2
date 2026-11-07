import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NyayLink — Justice, Made Accessible",
  description:
    "Find verified lawyers, get legal guidance, and manage your cases — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0F] text-[#F9F6F0] selection:bg-[#F9F6F0] selection:text-[#0D0D0F]">
        {children}
      </body>
    </html>
  );
}
