import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Mobnavbar from "@/components/Mobnavbar";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "A responsive ecommerce store with Tailwind CSS and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <Mobnavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
