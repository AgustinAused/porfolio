import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agustín Aused | Software Engineer & Mainframe Specialist",
  description: "Desarrollador Full Stack especializado en Java, React y sistemas mainframe CICS. Transformando ideas en soluciones tecnológicas innovadoras.",
  keywords: ["Agustín Aused", "Software Engineer", "Full Stack Developer", "Java", "React", "CICS", "Mainframe", "Next.js", "Spring Boot"],
  authors: [{ name: "Agustín Aused" }],
  openGraph: {
    title: "Agustín Aused | Software Engineer & Mainframe Specialist",
    description: "Portafolio profesional de Agustín Aused - Desarrollador Full Stack",
    url: "https://agusaused.com",
    siteName: "Agustín Aused Portfolio",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
