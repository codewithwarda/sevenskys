export type Division = "passenger" | "towing" | "equipment";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  division: Division;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: ProcessStep[];
  relatedFleet: string[];
}

export const divisionMeta: Record<Division, { label: string; description: string }> = {
  passenger: {
    label: "Passenger Transport",
    description:
      "Staff, labour, school, corporate and event transport across the UAE, run on daily, monthly and annual contracts.",
  },
  towing: {
    label: "Towing & Recovery",
    description:
      "Round-the-clock vehicle recovery, breakdown assistance and heavy vehicle towing wherever the Emirates road network takes you.",
  },
  equipment: {
    label: "Heavy Equipment & Contract Hire",
    description:
      "Heavy machinery, loading support and flexible contract hire for construction and industrial sites.",
  },
};

const passengerProcess: ProcessStep[] = [
  { title: "Share your route", description: "Tell us headcount, pickup points and schedule, whether it runs daily, weekly or long-term." },
  { title: "We match the fleet", description: "We assign the right vehicle class and drivers from our licensed fleet." },
  { title: "Confirm the contract", description: "Fixed, transparent pricing on a monthly, annual or single-trip basis." },
  { title: "Ride, tracked and on time", description: "Vetted drivers, monitored routes, dependable arrival." },
];

const towingProcess: ProcessStep[] = [
  { title: "Call our dispatch line", description: "Available 24/7 across Dubai and the wider UAE." },
  { title: "Share your location", description: "Nearest recovery unit is dispatched immediately." },
  { title: "Vehicle secured", description: "Safe loading and transport to your destination of choice." },
  { title: "Transparent invoicing", description: "Clear, upfront pricing with no hidden call-out fees." },
];

const equipmentProcess: ProcessStep[] = [
  { title: "Define the scope", description: "Site, duration and equipment or manpower required." },
  { title: "Receive a quote", description: "Itemised, contract-ready pricing within one business day." },
  { title: "Mobilise on site", description: "Equipment and crews delivered to your schedule." },
  { title: "Ongoing support", description: "Extend, adjust or renew your contract as the project evolves." },
];

export const services: Service[] = [
  {
    slug: "staff-transportation",
    division: "passenger",
    name: "Staff Transportation",
    shortDescription: "Reliable daily commutes for your workforce, door to site.",
    description:
      "Scheduled staff transportation for companies across Dubai and the UAE, built around shift patterns, multiple pickup points and headcount that changes with the season.",
    benefits: ["Fixed monthly pricing", "Licensed, background-checked drivers", "Multi-point pickup routing", "Fleet scales with headcount"],
    process: passengerProcess,
    relatedFleet: ["toyota-coaster", "mitsubishi-rosa", "toyota-hiace-minibus"],
  },
  {
    slug: "labour-transportation",
    division: "passenger",
    name: "Labour Transportation",
    shortDescription: "High-capacity movement for labour camps and site crews.",
    description:
      "Large-scale labour transport connecting accommodation and job sites, built for construction and industrial projects that depend on consistent, on-time crew mobilisation.",
    benefits: ["High-capacity coaches up to 83 seats", "Site-to-camp scheduling", "Compliant with UAE labour transport standards", "Single point of contact for HR & site teams"],
    process: passengerProcess,
    relatedFleet: ["ashok-leyland-bus", "toyota-coaster"],
  },
  {
    slug: "school-transportation",
    division: "passenger",
    name: "School Transportation",
    shortDescription: "Safe, supervised transport for students across the Emirates.",
    description:
      "Purpose-built school transport with trained drivers, fixed routes and the safety standards parents and school administrators expect, delivered on annual contract.",
    benefits: ["Seatbelt-fitted, purpose-built buses", "Background-verified drivers", "Fixed academic-year contracts", "Route and attendance reporting"],
    process: passengerProcess,
    relatedFleet: ["school-bus", "mitsubishi-rosa"],
  },
  {
    slug: "corporate-transportation",
    division: "passenger",
    name: "Corporate Transportation",
    shortDescription: "Executive-standard transport for meetings, roadshows and offsites.",
    description:
      "Comfortable, professional transport for corporate clients, from client airport transfers to multi-day offsite programmes across the UAE.",
    benefits: ["Premium, well-maintained coaches", "Uniformed, professional drivers", "Flexible single-day or multi-day hire", "Corporate account billing"],
    process: passengerProcess,
    relatedFleet: ["mitsubishi-rosa", "toyota-hiace-minibus"],
  },
  {
    slug: "event-transportation",
    division: "passenger",
    name: "Event Transportation",
    shortDescription: "Coordinated fleet movement for conferences, weddings and activations.",
    description:
      "Guest shuttle programmes and group transport for exhibitions, conferences, weddings and brand activations, scaled to attendee numbers on short notice.",
    benefits: ["Rapid fleet scaling for one-off events", "Multiple simultaneous shuttle loops", "On-site coordination support", "Branding-friendly vehicle options"],
    process: passengerProcess,
    relatedFleet: ["toyota-coaster", "toyota-hiace-minibus"],
  },
  {
    slug: "bus-rental",
    division: "passenger",
    name: "Bus Rental",
    shortDescription: "Full-size coaches for hire across Dubai and the UAE.",
    description:
      "Daily, weekly or long-term bus rental with driver, maintained to a standard suited to staff, school and corporate movement alike.",
    benefits: ["30 to 83-seat options", "Daily, weekly or monthly hire", "Driver included as standard", "UAE-wide coverage"],
    process: passengerProcess,
    relatedFleet: ["toyota-coaster", "mitsubishi-rosa", "ashok-leyland-bus"],
  },
  {
    slug: "minibus-rental",
    division: "passenger",
    name: "Minibus Rental",
    shortDescription: "12 & 14-seater minibuses for smaller groups and tighter routes.",
    description:
      "Our most requested short-notice vehicle: modern, comfortable minibuses for rental inside Dubai or to any site across the UAE.",
    benefits: ["12 & 14-seater options", "Ideal for smaller teams and site visits", "Fast turnaround booking", "Comfortable, air-conditioned cabins"],
    process: passengerProcess,
    relatedFleet: ["toyota-hiace-minibus"],
  },
  {
    slug: "monthly-contracts",
    division: "passenger",
    name: "Monthly Contracts",
    shortDescription: "Predictable monthly billing for ongoing transport needs.",
    description:
      "A fixed monthly transport arrangement for companies that need dependable, budget-friendly coverage without renegotiating terms every trip.",
    benefits: ["Fixed monthly invoicing", "Priority vehicle allocation", "Adjustable routes within contract", "Dedicated account coordinator"],
    process: passengerProcess,
    relatedFleet: ["toyota-coaster", "mitsubishi-rosa"],
  },
  {
    slug: "annual-contracts",
    division: "passenger",
    name: "Annual Contracts",
    shortDescription: "Long-term transport partnerships built around your calendar.",
    description:
      "Year-long transport agreements for schools, corporates and industrial clients who need continuity, compliance and consistent pricing across a full year.",
    benefits: ["Locked-in annual pricing", "Contingency vehicles on standby", "Compliance and reporting support", "Renewal flexibility"],
    process: passengerProcess,
    relatedFleet: ["school-bus", "ashok-leyland-bus"],
  },
  {
    slug: "vehicle-recovery",
    division: "towing",
    name: "Vehicle Recovery",
    shortDescription: "Safe recovery for cars, vans and light commercial vehicles.",
    description:
      "Professional recovery for disabled or accident-involved vehicles, transported securely to a garage, service centre or location of your choice.",
    benefits: ["Flatbed transport, no drag damage", "Available across Dubai & the UAE", "Insurance-friendly documentation", "Rapid dispatch times"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed"],
  },
  {
    slug: "breakdown-assistance",
    division: "towing",
    name: "Breakdown Assistance",
    shortDescription: "On-the-spot support when your vehicle won't move.",
    description:
      "Roadside breakdown response for individuals and fleets, from minor fixes on-site to full recovery when a tow is unavoidable.",
    benefits: ["On-site diagnostics where possible", "Fleet breakdown agreements available", "Clear, upfront pricing", "UAE-wide response network"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed"],
  },
  {
    slug: "heavy-vehicle-recovery",
    division: "towing",
    name: "Heavy Vehicle Recovery",
    shortDescription: "Specialist recovery for trucks, buses and heavy plant.",
    description:
      "Purpose-equipped recovery for heavy commercial vehicles and machinery, handled with the load capacity and expertise heavy recovery demands.",
    benefits: ["Heavy-duty recovery equipment", "Experienced heavy-vehicle crews", "Site and highway recovery", "Coordinated with authorities where required"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed", "heavy-equipment"],
  },
  {
    slug: "emergency-towing",
    division: "towing",
    name: "Emergency Towing",
    shortDescription: "Fast-response towing when every minute counts.",
    description:
      "Emergency towing dispatched the moment you call, prioritised for accident scenes and time-critical situations across the Emirates.",
    benefits: ["Priority emergency dispatch", "Available every hour of every day", "Clear communication while en route", "Careful, damage-free handling"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed"],
  },
  {
    slug: "recovery-services",
    division: "towing",
    name: "Recovery Services",
    shortDescription: "End-to-end recovery, from dispatch to drop-off.",
    description:
      "A full recovery service covering assessment, secure loading and transport, so your vehicle reaches its destination without further damage or delay.",
    benefits: ["Single point of contact throughout", "Documented handover on arrival", "Multiple destination options", "Fleet and individual client support"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed"],
  },
  {
    slug: "24-7-towing",
    division: "towing",
    name: "24/7 Towing",
    shortDescription: "Around-the-clock coverage, every day of the year.",
    description:
      "A standing recovery service available at any hour, so a breakdown at 3am is met with the same response as one at 3pm.",
    benefits: ["No off-hours surcharge surprises", "Consistent response times day or night", "Coverage across Dubai and neighbouring Emirates", "Direct dispatch line"],
    process: towingProcess,
    relatedFleet: ["recovery-flatbed"],
  },
  {
    slug: "heavy-equipment-rental",
    division: "equipment",
    name: "Heavy Equipment Rental",
    shortDescription: "Machinery for construction and infrastructure projects.",
    description:
      "Heavy equipment available for short and long-term rental, supporting construction, infrastructure and industrial projects across the UAE.",
    benefits: ["Well-maintained machinery", "Flexible rental durations", "Operator support available", "Site delivery included"],
    process: equipmentProcess,
    relatedFleet: ["heavy-equipment"],
  },
  {
    slug: "loading-unloading",
    division: "equipment",
    name: "Loading & Unloading",
    shortDescription: "Manpower and equipment for efficient site handling.",
    description:
      "Loading and unloading support for materials, equipment and cargo, coordinated to keep your site schedule moving without bottlenecks.",
    benefits: ["Trained loading crews", "Equipment-assisted handling", "Flexible scheduling around deliveries", "Site safety compliance"],
    process: equipmentProcess,
    relatedFleet: ["heavy-equipment", "3-ton-pickup"],
  },
  {
    slug: "heavy-machinery-transport",
    division: "equipment",
    name: "Heavy Machinery Transport",
    shortDescription: "Secure transport for oversized and heavy equipment.",
    description:
      "Specialist transport for heavy machinery between sites, handled with the right vehicles and route planning for oversized loads.",
    benefits: ["Route-planned oversized transport", "Secure load handling", "Cross-Emirate delivery", "Coordination with site logistics teams"],
    process: equipmentProcess,
    relatedFleet: ["heavy-equipment", "3-ton-pickup"],
  },
  {
    slug: "pickup-truck-rental",
    division: "equipment",
    name: "Pickup Truck Rental",
    shortDescription: "1 to 3-tonne pickups for materials and site logistics.",
    description:
      "Pickup trucks available on short or long-term hire for material transport, site support and general logistics across the UAE.",
    benefits: ["1 and 3-tonne payload options", "Daily to long-term hire", "Driver-included or self-drive options", "Fast turnaround booking"],
    process: equipmentProcess,
    relatedFleet: ["toyota-hilux", "3-ton-pickup"],
  },
  {
    slug: "contract-hire",
    division: "equipment",
    name: "Contract Hire",
    shortDescription: "Bundled vehicles, equipment and manpower on one agreement.",
    description:
      "A single flexible contract covering the mix of transport, equipment and manpower your project or company needs, reviewed and adjusted as requirements evolve.",
    benefits: ["Single contract, multiple services", "Scales up or down with project phase", "One invoice, one account manager", "Priority allocation across our fleet"],
    process: equipmentProcess,
    relatedFleet: ["toyota-coaster", "heavy-equipment", "3-ton-pickup"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByDivision(division: Division) {
  return services.filter((s) => s.division === division);
}
