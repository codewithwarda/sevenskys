import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { BlueprintGrid } from "@/components/graphics/BlueprintGrid";
import { primaryNav, footerServiceLinks } from "@/lib/data/nav";
import { SITE, yearsInBusiness } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#141046] text-white/70">
      <BlueprintGrid className="opacity-40" />
      <div className="container-edge relative py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-white">
              <Image src="/brand/mark.png" alt="SevenSkys" width={40} height={42} className="h-10 w-auto" />
              <span className="font-display text-lg font-bold">
                SEVEN<span className="text-white/60">SKYS</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/50">
              Pioneering transportation and logistics across the UAE since {SITE.founded},
              passenger transport, towing &amp; recovery, and heavy equipment hire built on
              {" "}{yearsInBusiness()}+ years of on-road experience.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">Contact</h3>
            <ul className="mt-5 space-y-4 text-[14px] text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                  <br />
                  {SITE.address.poBox}, {SITE.address.city}, {SITE.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="block hover:text-white">
                    {SITE.phonePrimary}
                  </a>
                  <a href={`tel:${SITE.phoneMobile.replace(/\s/g, "")}`} className="block hover:text-white">
                    {SITE.phoneMobile}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
