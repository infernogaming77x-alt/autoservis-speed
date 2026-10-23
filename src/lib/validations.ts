import { z } from "zod";
import { ROLES } from "./permissions";

export const registerSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  password: z.string().min(10).max(200),
  locale: z.enum(["sk", "cs"]),
  privacyConsent: z.literal(true),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(200),
});

export const organizationSchema = z.object({
  name: z.string().trim().min(2).max(160),
  country: z.enum(["SK", "CZ"]),
});

export const inviteSchema = z.object({
  email: z.string().trim().email(),
  role: z.enum(ROLES),
});

export function currencyForCountry(country: "SK" | "CZ"): "EUR" | "CZK" {
  return country === "CZ" ? "CZK" : "EUR";
}

export function defaultLocaleForCountry(country: "SK" | "CZ"): "sk" | "cs" {
  return country === "CZ" ? "cs" : "sk";
}
