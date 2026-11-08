import type { Metadata, Viewport } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-anton" });
const manrope = Manrope({ weight: ["400", "500", "700", "800"], subsets: ["latin", "latin-ext"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bakutechs.com"),
  title: "Bakı Texnoloji Həlləri — Tezliklə xidmətinizdəyik",
  description: "Bakı Texnoloji Həlləri — IT həlləri təqdim edən şirkət. Yeni saytımız tezliklə istifadəyə veriləcək.",
  openGraph: {
    title: "Bakı Texnoloji Həlləri — Tezliklə xidmətinizdəyik",
    description: "IT həlləri, veb saytlar, rəqəmsal strategiya. Tezliklə xidmətinizdəyik.",
    url: "https://bakutechs.com/",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#1F4BF2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${anton.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
