import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const SITE = {
  name: "SevenSkys Group of Companies",
  shortName: "SevenSkys",
  domain: "https://www.sevenskys.co",
  founded: 2006,
  phonePrimary: "+971 4 220 7470",
  phoneMobile: "+971 50 362 5642",
  whatsapp: "971503625642",
  email: "info@sevenskys.co",
  address: {
    line1: "Office# 605, Al Saud Tower",
    line2: "Amman Street, Al Qusais 4",
    poBox: "P.O. Box 48328",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  social: {
    instagram: "https://instagram.com/sevenskys",
    linkedin: "https://linkedin.com/company/sevenskys",
    facebook: "https://facebook.com/sevenskys",
  },
} as const;

export function yearsInBusiness(): number {
  return new Date().getFullYear() - SITE.founded;
}
