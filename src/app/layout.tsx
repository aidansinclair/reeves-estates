import type { Metadata } from "next";
import { Playfair_Display, Inter, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const neueMachina = localFont({
  src: "../../public/fonts/PPNeueMachina-InktrapMedium.otf",
  variable: "--font-neue-machina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reeves Estates | Houston Estate Sales, Buyouts & Liquidations",
  description:
    "Houston's trusted full-service estate specialists. Cash buyouts, estate sales, living estates, and liquidations. Serving River Oaks and greater Houston for three generations. Call today.",
  keywords:
    "Houston estate sales, estate liquidation Houston, cash estate buyout Houston, River Oaks estate sales, living estate Houston, estate executor Houston, antique estate sale Houston, Houston estate specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${libreBaskerville.variable} ${neueMachina.variable}`}>
      <head>
        <link rel="preload" href="/images/hero/Hero-1.webp" as="image" type="image/webp" />
      </head>
      <body className="antialiased relative z-10">{children}</body>
    </html>
  );
}
