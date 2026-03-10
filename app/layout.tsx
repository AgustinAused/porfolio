// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://agusaused.com";
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
    default: "Agustín Aused | CICS Specialist & Co-founder",
    template: "%s | Agustín Aused",
  },
  description:
    "CICS Specialist N2 en banca y co-founder de Beescend. Construyendo FixBee — SaaS para talleres de electrónica en LATAM. Buenos Aires, Argentina.",
  keywords: [
    "Agustín Aused",
    "CICS Specialist",
    "Mainframe",
    "z/OS",
    "JCL",
    "VSAM",
    "TSO ISPF",
    "Beescend",
    "FixBee",
    "SaaS LATAM",
    "Next.js",
    "FastAPI",
    "Co-founder",
    "Buenos Aires",
    "startup Argentina",
  ],
  authors: [{ name: "Agustín Aused", url: SITE_URL }],
  alternates: {
    canonical: SITE_URL,
    languages: { "es-AR": SITE_URL, es: SITE_URL },
  },
  openGraph: {
    title: "Agustín Aused | CICS Specialist & Co-founder",
    description:
      "Mainframe de día, startup de noche. CICS Specialist N2 construyendo FixBee — SaaS para talleres de electrónica en LATAM.",
    url: SITE_URL,
    siteName: "Agustín Aused",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Agustín Aused — CICS Specialist & Co-founder de Beescend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Aused | CICS Specialist & Co-founder",
    description:
      "Mainframe de día, startup de noche. Construyendo FixBee para talleres de electrónica en LATAM.",
    images: [OG_IMAGE],
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
  applicationName: "Agustín Aused",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agustín Aused",
    url: SITE_URL,
    jobTitle: "CICS Specialist",
    description:
      "CICS Specialist N2 en banca. Software Engineer apasionado por construir productos digitales en LATAM.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: [
      "https://github.com/AgustinAused",
      "https://www.linkedin.com/in/agustinaused",
      "https://propuesta.lat",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          src="https://plausible.io/js/script.js"
          data-domain="agusaused.com"
          strategy="afterInteractive"
        />
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}