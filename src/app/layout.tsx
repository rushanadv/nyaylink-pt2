import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
      className={`${bodoniModa.variable} ${instrumentSerif.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050D13] text-[#F4E8D0] selection:bg-[#D9AD68] selection:text-[#050D13]">
        {children}
      </body>
    </html>
  );
}
