import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://refabafrica.tacommunity.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Refab Africa — Reimagining Sustainability in Africa",
    template: "%s | Refab Africa",
  },
  description:
    "Refab Africa transforms textile waste into meaningful products while empowering communities through collaboration, circular fashion, and sustainable impact across Africa.",
  keywords: [
    "Refab Africa",
    "textile waste",
    "sustainability Africa",
    "circular fashion",
    "upcycling",
    "community impact",
    "social enterprise Nigeria",
    "eco fashion",
    "sustainable development",
  ],
  authors: [{ name: "Refab Africa", url: BASE_URL }],
  creator: "Refab Africa",
  publisher: "Refab Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Refab Africa",
    title: "Refab Africa — Reimagining Sustainability in Africa",
    description:
      "Transforming textile waste into meaningful products while empowering communities through collaboration and creativity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Refab Africa — Reimagining Sustainability in Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RefabAfrica",
    creator: "@RefabAfrica",
    title: "Refab Africa — Reimagining Sustainability in Africa",
    description:
      "Transforming textile waste into meaningful products while empowering communities through collaboration and creativity.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-clash antialiased">
        {children}
      </body>
    </html>
  );
}
