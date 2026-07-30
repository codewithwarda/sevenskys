export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  return /^[+\d][\d\s-]{6,}$/.test(value.trim());
}

export function required(value: string) {
  return value.trim().length > 0;
}
