import { PROJECT, SITE_URL } from "./constants";
import { faqs } from "./content";

export const apartmentComplexSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: `${PROJECT.name} Townhomes`,
  description:
    "Bronte Trails is a pre-construction freehold townhome community by Caivan Communities at Bronte Road and Upper Middle Road West in Oakville, Ontario. Located adjacent to Bronte Creek Provincial Park with no monthly condo fees.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bronte Road & Upper Middle Road West",
    addressLocality: "Oakville",
    addressRegion: "ON",
    addressCountry: "CA",
    postalCode: "L6M",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.4350",
    longitude: "-79.7450",
  },
  numberOfRooms: "2-4",
  petsAllowed: false,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Bronte Creek Provincial Park access (350+ acres)",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Freehold townhomes — no condo fees",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Minutes to Bronte GO Station",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Access to QEW, Highway 403, Highway 407",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bronte Trails Townhomes Oakville",
      item: `${SITE_URL}/#overview`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "VIP Registration",
      item: `${SITE_URL}/#register`,
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bronte Trails Towns",
  url: SITE_URL,
  description:
    "Pre-construction freehold townhomes by Caivan Communities in Oakville, Ontario. VIP registration for pricing and floor plans.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/#faq?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bronte Trails Towns",
  url: SITE_URL,
  description:
    "Independent informational website about Bronte Trails pre-construction townhomes in Oakville, Ontario. Not affiliated with Caivan Communities.",
};
