import { clients } from "@/lib/data/clients";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const loop = [...clients, ...clients];
  return (
    <section className="border-b border-ink/10 bg-white py-10">
      <Container>
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-slate">
          Trusted across the Emirates by
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-14 whitespace-nowrap py-1 motion-reduce:animate-none">
          {loop.map((name, i) => (
            <span key={i} className="font-display text-lg font-semibold tracking-tight text-ink/40">
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
