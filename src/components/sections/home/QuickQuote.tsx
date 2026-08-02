"use client";

import { useState, type CSSProperties } from "react";
import { MessageCircle, MapPin, Bus, Wrench, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { fleetCategories } from "@/lib/data/fleet";
import { services, divisionMeta, type Division } from "@/lib/data/services";
import { SITE } from "@/lib/utils";

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];

const divisionOrder: Division[] = ["passenger", "towing", "equipment"];

const selectClass =
  "w-full appearance-none border border-ink/15 bg-white py-3.5 pl-11 pr-9 text-[14px] text-ink outline-none transition-colors focus:border-primary";

export function QuickQuote() {
  const [location, setLocation] = useState("");
  const [busSize, setBusSize] = useState("");
  const [service, setService] = useState("");

  function handleSubmit() {
    const serviceLabel = services.find((s) => s.slug === service)?.name;
    const busLabel = fleetCategories.find((f) => f.key === busSize)?.label;

    const parts: string[] = [];
    if (serviceLabel) parts.push(serviceLabel);
    if (busLabel) parts.push(`using a ${busLabel.toLowerCase()}`);
    if (location) parts.push(`in ${location}`);

    const message =
      parts.length > 0
        ? `Hi SevenSkys, I'd like a quote for ${parts.join(" ")}.`
        : "Hi SevenSkys, I'd like a transport quote.";

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative -mt-10 z-20 pb-4 lg:-mt-14">
      <Container>
        <div className="border border-ink/10 bg-paper p-6 shadow-[0_20px_50px_-20px_rgba(20,16,70,0.25)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Eyebrow>Find Your Perfect Bus</Eyebrow>
              <p className="mt-2 text-[14px] text-slate">Answer three quick questions, get a quote on WhatsApp in seconds.</p>
            </div>
            <span className="border border-primary/30 bg-primary-tint px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              Instant Quote
            </span>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <select
                aria-label="Select location"
                className={selectClass}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Emirate</option>
                {emirates.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            </div>

            <div className="relative">
              <Bus className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <select
                aria-label="Choose bus size"
                className={selectClass}
                value={busSize}
                onChange={(e) => setBusSize(e.target.value)}
              >
                <option value="">Any Vehicle Type</option>
                {fleetCategories.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            </div>

            <div className="relative">
              <Wrench className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <select
                aria-label="Select service"
                className={selectClass}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Select Service</option>
                {divisionOrder.map((division) => (
                  <optgroup key={division} label={divisionMeta[division].label}>
                    {services
                      .filter((s) => s.division === division)
                      .map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-sweep mt-5 flex w-full items-center justify-center gap-2 bg-[#25D366] px-7 py-4 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 ease-signature sm:w-auto"
            style={{ "--btn-sweep-color": "#141046" } as CSSProperties}
          >
            <MessageCircle className="h-4 w-4" />
            Get Quote on WhatsApp
          </button>
        </div>
      </Container>
    </section>
  );
}
