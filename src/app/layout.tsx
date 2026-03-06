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
  title: "Reeves Estates — Houston's Trusted Estate Specialists",
  description:
    "Every piece cared for. Every detail honored. From first call to final close. White-glove estate handling for Houston's finest families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${libreBaskerville.variable} ${neueMachina.variable}`}>
      <body className="antialiased relative z-10">{children}</body>
    </html>
  );
}
