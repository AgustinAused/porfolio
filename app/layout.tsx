// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://agusaused.com"; // <-- PRODUCCIÓN
const OG_IMAGE = `${SITE_URL}/og/og-image.jpg`; // 1200x630

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0b1020" }],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agustín Aused | Software Engineer & Mainframe Specialist",
    template: "%s | Agustín Aused",
  },
  description:
    "Desarrollador Full Stack especializado en Java, React y mainframe CICS. Diseño sistemas modernos, escalables y listos para producción.",
  keywords: [
    "Agustín Aused","Software Engineer","Full Stack","Java","React",
    "CICS","Mainframe","Spring Boot","Next.js","Arquitectura"
  ],
  authors: [{ name: "Agustín Aused", url: SITE_URL }],
  alternates: {
    canonical: SITE_URL,
    languages: { "es-AR": SITE_URL, "es": SITE_URL },
  },
  openGraph: {
    title: "Agustín Aused | Software Engineer & Mainframe Specialist",
    description:
      "Portafolio profesional: modernización de legacy, arquitectura escalable y producto listo para producción.",
    url: SITE_URL,
    siteName: "Agustín Aused Portfolio",
    locale: "es_AR",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Agustín Aused" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Aused | Software Engineer & Mainframe Specialist",
    description:
      "Full Stack + Mainframe CICS. Transformo sistemas en productos modernos.",
    images: [OG_IMAGE],
    creator: "@tu_handle", // opcional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", sizes: "any" },
      { url: "/img/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/img/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/img/favicon.ico",
  },
  applicationName: "Agustín Aused Portfolio",
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agustín Aused",
    url: SITE_URL,
    jobTitle: "Software Engineer",
    description:
      "Full Stack + Mainframe CICS. Arquitecturas escalables y modernización de sistemas.",
    sameAs: [
      "https://github.com/AgustinAused",
      "https://www.linkedin.com/in/agustinaused",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD para rich results */}
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
