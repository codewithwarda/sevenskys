import { fleet } from "@/lib/data/fleet";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { BlueprintGrid } from "@/components/graphics/BlueprintGrid";
import { yearsInBusiness } from "@/lib/utils";

const stats = [
  { label: "Years on the road", value: `${yearsInBusiness()}+` },
  { label: "Core divisions", value: "3" },
  { label: "Vehicle classes", value: String(fleet.length) },
  { label: "Services offered", value: String(services.length) },
  { label: "Recovery availability", value: "24/7" },
  { label: "Coverage", value: "UAE-wide" },
];

export function StatsLedger() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white">
      <BlueprintGrid className="opacity-20" />
      <Container className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t-2 border-primary/50 pt-4">
            <p className="font-display text-4xl font-semibold tracking-tight">{s.value}</p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
