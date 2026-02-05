import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Navbar from "@/components/layout/navbar/navbar";
import Header from "@/components/layout/header/header";
import CoverParticles from "@/components/animations/cover-particles/cover-particles";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matias Gonzalez Autelli | Software Engineer Front-end",
  description: "Portfolio de Matias Gonzalez Autelli - Software Engineer Front-end especializado en Vue.js y React. Desarrollo de interfaces modernas y escalables.",
  icons: {
    icon: "/ico.png",
    shortcut: "/ico.png",
    apple: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.className} antialiased`}>
        <CoverParticles />
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
