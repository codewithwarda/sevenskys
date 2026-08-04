"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { primaryNav } from "@/lib/data/nav";
import { SITE } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

function isNavItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Trap keyboard focus inside the mobile menu while it's open, and restore
  // it to the toggle button on close, so keyboard/screen-reader users can't
  // tab past the visible menu into content sitting behind it.
  useEffect(() => {
    if (!open) return;
    const container = mobileNavRef.current;
    if (!container) return;

    const getFocusable = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    const focusable = getFocusable();
    focusable[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-ink text-white/80 md:block">
        <div className="container-edge flex h-9 items-center justify-between font-mono text-[11px] tracking-[0.15em]">
          <span>{SITE.address.city.toUpperCase()}, UAE &middot; SINCE {SITE.founded}</span>
          <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-3 w-3" /> {SITE.phonePrimary}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-signature",
          scrolled ? "border-ink/10 bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper"
        )}
      >
        <div className="container-edge flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/mark.png" alt="SevenSkys" width={40} height={42} className="h-10 w-auto" priority />
            <span className="hidden font-display text-lg font-bold leading-none tracking-tight text-ink sm:block">
              SEVEN<span className="text-primary">SKYS</span>
              <span className="mt-0.5 block font-mono text-[9px] font-normal uppercase tracking-[0.25em] text-slate">
                Group of Companies
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item, i) => {
              const active = isNavItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium transition-colors",
                    active ? "text-primary" : "text-ink/80 hover:text-primary"
                  )}
                >
                  <span className="font-mono text-[10px] text-silver group-hover:text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-px h-[2px] scale-x-0 bg-primary transition-transform duration-300 ease-signature group-hover:scale-x-100",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/request-a-quote" className="hidden md:inline-flex" showArrow={false}>
              Request a Quote
            </Button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        ref={mobileNavRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-ink text-white transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ top: "80px" }}
      >
        <nav className="container-edge flex h-full flex-col justify-between py-10">
          <ul className="space-y-1">
            {primaryNav.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link href={item.href} className="flex items-center justify-between py-4 font-display text-2xl font-semibold">
                  {item.label}
                  <span className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Button href="/request-a-quote" variant="outline" className="w-full justify-center border-white/30 text-white">
              Request a Quote
            </Button>
            <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 py-3 font-mono text-sm">
              <Phone className="h-4 w-4" /> {SITE.phonePrimary}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
