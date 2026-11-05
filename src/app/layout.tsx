import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
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
      className={`${instrumentSerif.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0f] text-[#EEEAE1] selection:bg-[#cbb69d] selection:text-[#0d0d0f]">
        {children}
      </body>
    </html>
  );
}
