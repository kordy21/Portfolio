import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYear(date: string): string {
  return new Date(date).getFullYear().toString();
}

export function getLocalizedValue<T>(
  value: { en: T; ar: T },
  locale: string
): T {
  return locale === "ar" ? value.ar : value.en;
}
