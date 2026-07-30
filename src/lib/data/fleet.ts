export type FleetCategory =
  | "passenger-bus"
  | "mini-bus"
  | "school-bus"
  | "pickup"
  | "recovery"
  | "heavy-equipment";

export interface FleetVehicle {
  slug: string;
  name: string;
  category: FleetCategory;
  categoryLabel: string;
  capacity: string;
  description: string;
  bestFor: string[];
  code: string;
}

export const fleetCategories: { key: FleetCategory; label: string }[] = [
  { key: "passenger-bus", label: "Passenger Buses" },
  { key: "mini-bus", label: "Minibuses" },
  { key: "school-bus", label: "School Buses" },
  { key: "recovery", label: "Recovery Vehicles" },
  { key: "pickup", label: "Pickup Trucks" },
  { key: "heavy-equipment", label: "Heavy Equipment" },
];

export const fleet: FleetVehicle[] = [
  {
    slug: "toyota-coaster",
    name: "Toyota Coaster",
    category: "passenger-bus",
    categoryLabel: "Passenger Bus",
    capacity: "Up to 30 seats",
    description:
      "The workhorse of our passenger fleet, built to move large groups swiftly and safely across the Emirates on daily staff and labour routes.",
    bestFor: ["Staff transportation", "Labour transportation", "Corporate shuttles"],
    code: "PB-30",
  },
  {
    slug: "mitsubishi-rosa",
    name: "Mitsubishi Rosa",
    category: "passenger-bus",
    categoryLabel: "Passenger Bus",
    capacity: "Up to 34 seats",
    description:
      "A modern, comfortable mid-size coach suited to longer routes and multi-stop pick-up schedules without compromising ride quality.",
    bestFor: ["Corporate transportation", "Event transportation", "Monthly contracts"],
    code: "PB-34",
  },
  {
    slug: "ashok-leyland-bus",
    name: "Ashok Leyland Bus",
    category: "passenger-bus",
    categoryLabel: "Large Passenger Bus",
    capacity: "67 & 83 seater",
    description:
      "Our highest-capacity coach, deployed for large-scale labour camp movements and site-wide staff transport contracts.",
    bestFor: ["Labour transportation", "Annual contracts", "Site mobilisation"],
    code: "PB-83",
  },
  {
    slug: "toyota-hiace-minibus",
    name: "Toyota Hiace / Minibus",
    category: "mini-bus",
    categoryLabel: "Minibus",
    capacity: "12 & 14 seater",
    description:
      "Modern, comfortable minibuses for rental inside Dubai or to any site across the UAE, our most requested short-notice vehicle.",
    bestFor: ["Minibus rental", "Corporate transportation", "Pick & drop"],
    code: "MB-14",
  },
  {
    slug: "school-bus",
    name: "School Bus",
    category: "school-bus",
    categoryLabel: "School Transport",
    capacity: "Purpose-built, seatbelt fitted",
    description:
      "Dedicated, compliant school transport with trained drivers and dependable scheduling for students across Dubai and the Northern Emirates.",
    bestFor: ["School transportation", "Annual contracts"],
    code: "SB-01",
  },
  {
    slug: "toyota-hilux",
    name: "Toyota Hilux",
    category: "pickup",
    categoryLabel: "Pickup Truck",
    capacity: "1-tonne payload",
    description:
      "A dependable pickup for material transport, site support and light-duty logistics on short or long-term hire.",
    bestFor: ["Pickup truck rental", "Loading & unloading"],
    code: "PU-01",
  },
  {
    slug: "3-ton-pickup",
    name: "3-Ton Pickup",
    category: "pickup",
    categoryLabel: "Pickup Truck",
    capacity: "3-tonne payload",
    description:
      "Heavier-duty flatbed pickup for construction sites and bulk material movement across the UAE.",
    bestFor: ["Heavy machinery transport", "Contract hire"],
    code: "PU-03",
  },
  {
    slug: "recovery-flatbed",
    name: "Recovery Flatbed",
    category: "recovery",
    categoryLabel: "Recovery Vehicle",
    capacity: "Light & heavy vehicle recovery",
    description:
      "Flatbed recovery trucks dispatched around the clock for breakdowns, accidents and heavy vehicle recovery anywhere in the UAE.",
    bestFor: ["24/7 towing", "Emergency towing", "Heavy vehicle recovery"],
    code: "RV-01",
  },
  {
    slug: "heavy-equipment",
    name: "Heavy Equipment",
    category: "heavy-equipment",
    categoryLabel: "Heavy Machinery",
    capacity: "Site-configured on request",
    description:
      "Heavy machinery and dump trucks available for rental and transport in support of construction and infrastructure projects.",
    bestFor: ["Heavy equipment rental", "Heavy machinery transport"],
    code: "HE-01",
  },
];
