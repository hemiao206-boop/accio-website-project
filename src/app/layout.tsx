import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hubei Ruichuang Metal Products Co., Ltd. | Global Metal Supplier",
  description: "A professional metal supply chain and trading enterprise specializing in high-purity non-ferrous metals, industrial scrap, and strategic mineral resources. Serving over 50 countries with ISO9001 certified quality.",
  openGraph: {
    title: "Hubei Ruichuang Metal Products Co., Ltd.",
    description: "Your Premier Global Partner for High-Purity Industrial Metal Products & Solutions.",
    type: "website",
    url: "https://wh-ruichuang.com",
  },
  keywords: ["Metal Supplier", "Copper Scrap", "Aluminum Ingot", "Zinc Ingot", "Lead Ingot", "Indium Ingot", "Antimony Ingot", "Cobalt Plate", "China Metal Manufacturer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hubei Ruichuang Metal Products Co., Ltd.",
    "url": "https://wh-ruichuang.com",
    "logo": "https://wh-ruichuang.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "sales@wh-ruichuang.com",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
