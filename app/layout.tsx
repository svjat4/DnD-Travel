import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import LoadingScreen from "../components/loading-screen"; // KITA IMPORT LOADING SCREEN

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// DI SINI KITA TAMBAHKAN PENGATURAN FAVICON (icons)
export const metadata: Metadata = {
  title: "D&D Travel & Tour | Explore Bali Your Way",
  description: "Discover Bali with D&D Travel & Tour. Explore tours, adventures, transport, entertainment and private experiences across Bali. Easy booking via WhatsApp.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col pt-20">
        <LoadingScreen /> {/* LOADING SCREEN MUNCUL PALING DEPAN */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}