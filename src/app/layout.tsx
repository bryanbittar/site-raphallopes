import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#16130f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  keywords: [
    "fotógrafo de casamento",
    "destination wedding photographer",
    "fotógrafo de casamento no exterior",
    "fotografia de casamento Mato Grosso do Sul",
    "fotógrafo de casamento premium",
    "wedding photographer Brazil",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.shortTitle,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * A stray #hash in the URL (left over from clicking a nav anchor, then
 * reloading or reopening the tab) makes the browser auto-scroll straight
 * past the hero on first paint. Stripping it here — before hydration,
 * before the browser resolves the fragment — guarantees every fresh visit
 * lands on Home. In-page anchor clicks after load are unaffected.
 */
function ScrollToHomeOnLoad() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; }
if (window.location.hash) { window.history.replaceState(null, "", window.location.pathname + window.location.search); }
window.scrollTo(0, 0);`,
      }}
    />
  );
}

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: siteConfig.legalName,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: `+${siteConfig.contact.whatsapp}`,
    priceRange: "$$$",
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Fotógrafo de casamento",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.baseCity,
      addressCountry: "BR",
    },
    areaServed: siteConfig.areasServed,
    sameAs: [
      siteConfig.social.instagram.url,
      siteConfig.social.youtube.url,
      siteConfig.social.facebook.url,
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fotografia de casamento e destination wedding",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <head>
        <ScrollToHomeOnLoad />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "font-sans",
            },
          }}
        />
      </body>
    </html>
  );
}
