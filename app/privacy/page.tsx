import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Bronte Trails Towns",
  robots: { index: false },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 px-5 py-20">
      <div className="mx-auto max-w-2xl font-body text-sm leading-relaxed text-text-body">
        <Link href="/" className="text-brand hover:underline">
          ← Back to Bronte Trails Towns
        </Link>
        <h1 className="mt-8 font-display text-3xl text-brand-deep">
          Privacy Policy
        </h1>
        <p className="mt-6">
          This website (www.brontetrailstowns.ca) collects personal information
          submitted through registration forms solely for the purpose of providing
          updates related to Bronte Trails townhomes and pre-construction
          opportunities in Oakville, Ontario.
        </p>
        <p className="mt-4">
          Information collected may include your first name, last name, email
          address, phone number, and whether you are a registered real estate
          broker. We may also capture UTM campaign parameters and form interaction
          data for analytics purposes. This information is not sold to third
          parties.
        </p>
        <p className="mt-4">
          Lead data is stored securely and may be shared with authorized partners
          involved in the Bronte Trails registration process. You may request
          deletion of your data by contacting us through the registration form on
          the homepage.
        </p>
        <p className="mt-4">
          This site may use Google Analytics or Google Tag Manager when configured
          via environment variables. Standard cookie and tracking policies of
          those services apply.
        </p>
        <p className="mt-4 text-xs text-text-muted">
          Last updated: June 2026. E.&amp;O.E.
        </p>
      </div>
    </div>
  );
}
