import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sk", "cs"],
  defaultLocale: "sk",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
