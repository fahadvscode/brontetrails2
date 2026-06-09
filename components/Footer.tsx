import Image from "next/image";
import Link from "next/link";
import { IMAGES, PROJECT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-12">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="relative h-11 w-44">
              <Image
                src={IMAGES.logo}
                alt="Bronte Trails South Oakville townhomes"
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
            <p className="mt-4 font-body text-sm font-semibold text-ink">{PROJECT.tag}</p>
            <p className="mt-1 font-body text-xs text-text-muted">{PROJECT.location}</p>
          </div>
          <div className="flex gap-6 font-body text-sm text-brand">
            <Link href="/privacy" className="hover:text-brand-dark">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-dark">
              Sitemap
            </Link>
          </div>
        </div>
        <p className="mt-8 max-w-3xl font-body text-xs leading-relaxed text-text-muted">
          This website is for informational purposes only. We do not represent
          the builder, Caivan Communities, or any party affiliated with the
          development. All information is from sources believed reliable but
          accuracy is not guaranteed. Prices, specifications, and availability
          are subject to change without notice. E.&amp;O.E.
        </p>
      </div>
    </footer>
  );
}
