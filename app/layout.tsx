import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Script from "next/script";
import { IMAGES, SITE_URL } from "@/lib/constants";
import {
  apartmentComplexSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const title =
  "Bronte Trails Townhomes Oakville | Pre-Construction by Caivan | Register VIP";
const description =
  "Bronte Trails townhomes by Caivan — pre-construction freehold homes at Bronte Road & Upper Middle Road West, Oakville. No condo fees. Register for VIP floor plans & pricing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bronte Trails Townhomes Oakville by Caivan | Register VIP",
    description:
      "Coming soon: Bronte Trails freehold townhomes in Oakville at Bronte Road & Upper Middle Road West. Adjacent to Bronte Creek Provincial Park. VIP registration open.",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: IMAGES.aerial,
        width: 1200,
        height: 630,
        alt: "Bronte Trails townhomes Oakville aerial view by Caivan Communities",
      },
    ],
    locale: "en_CA",
    siteName: "Bronte Trails Towns",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bronte Trails Townhomes Oakville | Pre-Construction by Caivan",
    description:
      "Freehold townhomes in Oakville — no condo fees. Register for VIP access to Bronte Trails pricing and floor plans.",
    images: [IMAGES.aerial],
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Oakville",
  },
};

const schemas = [
  apartmentComplexSchema,
  faqSchema,
  breadcrumbSchema,
  websiteSchema,
  organizationSchema,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-CA" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        {gtmId && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        )}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
