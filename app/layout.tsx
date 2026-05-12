import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import Header from "@/components/layout/Header";
import CoverParticles from "@/components/animations/cover-particles/cover-particles";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matiasgonzalezautelli.vercel.app"),
  title: "Matias Gonzalez Autelli | Software Engineer Front-end",
  description:
    "Portfolio de Matias Gonzalez Autelli - Software Engineer Front-end especializado en Vue.js y React. Desarrollo de interfaces modernas y escalables.",
  keywords: [
    "front-end",
    "software engineer",
    "Vue.js",
    "React",
    "Next.js",
    "developer",
    "portfolio",
    "Argentina",
    "La Pampa",
  ],
  authors: [{ name: "Matias Gonzalez Autelli" }],
  openGraph: {
    title: "Matias Gonzalez Autelli | Software Engineer Front-end",
    description:
      "Software Engineer Front-end especializado en Vue.js y React. Desarrollo de interfaces modernas y escalables.",
    url: "https://matiasgonzalezautelli.vercel.app",
    siteName: "Matias Gonzalez Autelli Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matias Gonzalez Autelli | Software Engineer Front-end",
    description:
      "Software Engineer Front-end especializado en Vue.js y React.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
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
        <I18nProvider>
          <CoverParticles />
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
