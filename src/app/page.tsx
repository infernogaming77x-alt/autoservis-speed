"use client";

import { useState } from "react";
import { Barlow_Condensed, Figtree } from "next/font/google";
import {
  ArrowUpRight,
  Calendar,
  ClipboardCheck,
  Clock,
  Cog,
  Cpu,
  Gauge,
  MapPin,
  Paintbrush,
  Phone,
  Snowflake,
  User,
  Wrench,
  Zap,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Fonty                                                                     */
/* -------------------------------------------------------------------------- */

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/*  Údaje firmy                                                               */
/* -------------------------------------------------------------------------- */

const COMPANY = "AUTO - Speed s.r.o.";
const ADDRESS = "Severná 13, Prievidza - Dubina";
const HOURS = "Po - Pi: 8:00 - 16:30";
const SINCE = "Tradícia od r. 2001";

const MOBILE = "0905 272 052";
const MOBILE_HREF = "tel:+421905272052";
const LANDLINE = "046 / 542 7302";
const LANDLINE_HREF = "tel:+421465427302";

const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Severná 13, Prievidza");

/* -------------------------------------------------------------------------- */
/*  Obsah                                                                     */
/* -------------------------------------------------------------------------- */

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const SERVICES: Service[] = [
  {
    icon: Paintbrush,
    title: "Lakovanie & Klampiarske práce",
    text: "Vlastný striekací box a lakovňa. Opravy karosérie, rovnanie a lakovanie na jednom mieste.",
  },
  {
    icon: Wrench,
    title: "Mechanické práce & GO",
    text: "Bežné mechanické opravy aj generálne opravy (GO) motorov.",
  },
  {
    icon: Zap,
    title: "Autoelektrika & Diagnostika",
    text: "Počítačová diagnostika, elektro rozvody a hľadanie porúch v elektrike vozidla.",
  },
  {
    icon: CircleDot,
    title: "Pneuservis & Geometria",
    text: "Prezúvanie pneumatík, vyvažovanie a nastavenie geometrie podvozka.",
  },
  {
    icon: Snowflake,
    title: "Klimatizácie",
    text: "Kontrola a servis klimatizácie vo vozidle.",
  },
  {
    icon: ClipboardCheck,
    title: "STK/EK",
    text: "Technická a emisná kontrola. Auto vám na ňu pripravíme.",
  },
];

type MiniCard = {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
};

const MINI_CARDS: MiniCard[] = [
  {
    icon: Paintbrush,
    title: "Lakovňa",
    short: "Vlastný striekací box",
    detail:
      "Karosárske práce aj lakovanie robíme vo vlastnej lakovni so striekacím boxom, bez posielania auta k iným.",
  },
  {
    icon: Cpu,
    title: "Diagnostika",
    short: "Počítačová diagnostika",
    detail:
      "Poruchu najprv odčítame počítačom, aby sme opravovali príčinu a nie len následok.",
  },
  {
    icon: Cog,
    title: "Motory",
    short: "Generálne opravy (GO)",
    detail:
      "Okrem bežných opráv robíme aj generálne opravy motorov.",
  },
  {
    icon: Zap,
    title: "Elektro",
    short: "Elektro rozvody",
    detail:
      "Opravy elektro rozvodov a autoelektriky, od kabeláže po hľadanie porúch.",
  },
];

type Step = {
  when: string;
  title: string;
  text: string;
};

const HISTORY: Step[] = [
  {
    when: "2001",
    title: "Vznik servisu",
    text: "Začali sme v areáli bývalého družstva v Prievidzi.",
  },
  {
    when: "Prvé roky",
    title: "Mechanika a klampiarčina",
    text: "Robili sme menšie mechanické a klampiarske práce.",
  },
  {
    when: "Neskôr",
    title: "Vlastná lakovňa",
    text: "Pribudol vlastný striekací box a lakovňa.",
  },
  {
    when: "Dnes",
    title: "Kompletný servis",
    text: "Máme počítačovú diagnostiku, elektro rozvody a generálne opravy (GO) motorov.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Pomocné komponenty                                                        */
/* -------------------------------------------------------------------------- */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${COMPANY} úvod`}
      className={`group inline-flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-900 px-2.5 py-2 shadow-inner shadow-black/50 ring-1 ring-inset ring-white/5 transition-colors duration-300 hover:border-blue-500/60 sm:gap-3 sm:px-3 ${focusRing} ${className}`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transition-none sm:h-9 sm:w-9">
        <Gauge className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-[family-name:var(--font-display)] text-lg font-bold tracking-wide text-slate-50 sm:text-xl">
          AUTO - SPEED
        </span>
        <span className="mt-0.5 block text-[11px] text-slate-400">s.r.o.</span>
      </span>
    </a>
  );
}

function CallButton({
  label = MOBILE,
  className = "",
  size = "md",
}: {
  label?: string;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizing =
    size === "lg"
      ? "px-7 py-4 text-lg gap-3"
      : "px-4 py-2.5 text-sm gap-2 sm:px-5 sm:text-base";
  return (
    <a
      href={MOBILE_HREF}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/40 hover:brightness-110 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${sizing} ${focusRing} ${className}`}
    >
      <Phone
        className={size === "lg" ? "h-5 w-5" : "h-4 w-4"}
        aria-hidden="true"
      />
      <span>{label}</span>
    </a>
  );
}

function SectionHeading({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none tracking-tight text-slate-50 sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stránka                                                                   */
/* -------------------------------------------------------------------------- */

export default function Page() {
  const [active, setActive] = useState(0);
  const ActiveIcon = MINI_CARDS[active].icon;

  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-x-hidden bg-slate-950 font-[family-name:var(--font-body)] text-slate-300 antialiased selection:bg-blue-600/40 selection:text-white`}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          html { scroll-behavior: smooth; }
        }
        @keyframes as-reveal {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .as-reveal { animation: as-reveal .8s cubic-bezier(.2,.7,.2,1) both; }
        .as-d1 { animation-delay: .08s; }
        .as-d2 { animation-delay: .18s; }
        .as-d3 { animation-delay: .28s; }
        .as-d4 { animation-delay: .38s; }
        @media (prefers-reduced-motion: reduce) {
          .as-reveal { animation: none; }
        }
      `}</style>

      {/* Jemný glow v pozadí */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute top-40 -right-32 h-[380px] w-[380px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute top-96 -left-32 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* 1. Horná lišta */}
      <div className="relative z-10 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs text-slate-400 sm:justify-between sm:px-6 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            {ADDRESS}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            {HOURS}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar
              className="h-3.5 w-3.5 text-blue-400"
              aria-hidden="true"
            />
            {SINCE}
          </span>
        </div>
      </div>

      {/* 2. Hlavička */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Logo />
          <nav
            aria-label="Hlavná navigácia"
            className="hidden items-center gap-1 md:flex"
          >
            {[
              ["O firme", "#o-firme"],
              ["Služby", "#sluzby"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-800/70 hover:text-white ${focusRing}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <CallButton />
        </div>
      </header>

      <main className="relative z-10">
        {/* 3. Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="as-reveal inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3.5 py-1.5 text-sm text-slate-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                Prievidza - Dubina, od roku 2001
              </p>

              <h1 className="as-reveal as-d1 mt-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
                Autoservis v Prievidzi s vlastnou lakovňou
              </h1>

              <p className="as-reveal as-d2 mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Mechanika, klampiarčina, elektro, diagnostika aj lakovanie
                robíme na jednom mieste v Dubine. Zavolajte a dohodnite si
                termín.
              </p>

              <div className="as-reveal as-d3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton label={`Zavolať ${MOBILE}`} size="lg" />
                <a
                  href="#sluzby"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 text-base font-medium text-slate-200 backdrop-blur transition duration-300 hover:border-blue-500/60 hover:bg-slate-900 hover:text-white motion-reduce:transition-none ${focusRing}`}
                >
                  Pozrieť služby
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Rýchle štatistiky */}
              <dl className="as-reveal as-d4 mt-12 grid max-w-md grid-cols-2 divide-x divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur">
                <div className="flex flex-col-reverse justify-end px-5 py-4 sm:px-6">
                  <dt className="mt-1.5 text-sm text-slate-400">
                    rokov skúseností
                  </dt>
                  <dd className="font-[family-name:var(--font-display)] text-4xl font-bold leading-none text-slate-50 sm:text-5xl">
                    20+
                  </dd>
                </div>
                <div className="flex flex-col-reverse justify-end px-5 py-4 sm:px-6">
                  <dt className="mt-1.5 text-sm text-slate-400">lakovňa</dt>
                  <dd className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl font-bold leading-none text-slate-50 sm:text-3xl">
                    <Paintbrush
                      className="h-6 w-6 text-blue-400 sm:h-7 sm:w-7"
                      aria-hidden="true"
                    />
                    Vlastná
                  </dd>
                </div>
              </dl>
            </div>

            {/* Interaktívne mini-karty */}
            <div className="as-reveal as-d2 relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 blur-2xl"
              />
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-xl sm:p-5">
                <div
                  role="group"
                  aria-label="Čo u nás robíme"
                  className="grid grid-cols-2 gap-3"
                >
                  {MINI_CARDS.map((card, i) => {
                    const Icon = card.icon;
                    const isActive = i === active;
                    return (
                      <button
                        key={card.title}
                        type="button"
                        aria-pressed={isActive}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        className={`group rounded-2xl border p-4 text-left transition duration-300 motion-reduce:transition-none ${focusRing} ${
                          isActive
                            ? "border-blue-500/60 bg-slate-800/80 shadow-lg shadow-blue-600/10"
                            : "border-slate-800 bg-slate-900 hover:-translate-y-0.5 hover:border-slate-700 motion-reduce:hover:translate-y-0"
                        }`}
                      >
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl transition duration-300 motion-reduce:transition-none ${
                            isActive
                              ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                              : "bg-slate-800 text-blue-400 group-hover:text-blue-300"
                          }`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="mt-3 block font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-slate-50">
                          {card.title}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-400">
                          {card.short}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div
                  aria-live="polite"
                  className="mt-3 flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-800 text-blue-400">
                    <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-50">
                      {MINI_CARDS[active].title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {MINI_CARDS[active].detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. O firme / História */}
        <section
          id="o-firme"
          className="scroll-mt-24 border-y border-slate-800/80 bg-slate-900/30 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              title="Rodinná tradícia z Dubiny"
              text="Servis vznikol v roku 2001 v areáli bývalého družstva v Prievidzi. Odvtedy sme z malej dielne vyrástli na servis, kde auto opravíme, nadiagnostikujeme aj nalakujeme."
            />

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
              <ol className="relative space-y-8 border-l border-slate-800 pl-8">
                {HISTORY.map((step) => (
                  <li key={step.when} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-slate-900"
                    />
                    <p className="text-sm font-medium text-blue-400">
                      {step.when}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-50">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg leading-relaxed text-slate-400">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Kontaktná osoba */}
              <aside className="h-fit rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/30 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
                    <User className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Kontaktná osoba</p>
                    <p className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-slate-50">
                      Maroš Mikuš
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={MOBILE_HREF}
                    className={`group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors duration-200 hover:border-blue-500/60 ${focusRing}`}
                  >
                    <span>
                      <span className="block text-xs text-slate-500">Mobil</span>
                      <span className="block font-semibold text-slate-100">
                        {MOBILE}
                      </span>
                    </span>
                    <Phone
                      className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={LANDLINE_HREF}
                    className={`group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors duration-200 hover:border-blue-500/60 ${focusRing}`}
                  >
                    <span>
                      <span className="block text-xs text-slate-500">
                        Pevná linka
                      </span>
                      <span className="block font-semibold text-slate-100">
                        {LANDLINE}
                      </span>
                    </span>
                    <Phone
                      className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 5. Služby */}
        <section
          id="sluzby"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
        >
          <SectionHeading
            title="Služby autoservisu"
            text="Od drobnej opravy po lakovanie celej karosérie. Všetko vybavíte u nás, v Prievidzi."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-600/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-600/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-600/25"
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-slate-800 text-blue-400 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white motion-reduce:transition-none">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-slate-50">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 leading-relaxed text-slate-400">
                    {service.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 6a. Kontaktný banner */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 shadow-2xl shadow-blue-600/20 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-slate-950/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                  Treba opraviť alebo nalakovať auto?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-blue-50/90 sm:text-lg">
                  Zavolajte nám v pracovných dňoch od 8:00 do 16:30. Dohodneme
                  termín.
                </p>
              </div>
              <a
                href={MOBILE_HREF}
                className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-slate-950 px-7 py-4 text-lg font-semibold text-white shadow-xl shadow-slate-950/40 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {MOBILE}
              </a>
            </div>
          </div>
        </section>

        {/* 6b. Kontaktná sekcia */}
        <section
          id="kontakt"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
        >
          <SectionHeading
            title="Kde nás nájdete"
            text="Servis máme v Prievidzi, v časti Dubina."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 hover:border-blue-500/50 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-800 text-blue-400">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-50">
                Adresa
              </h3>
              <address className="mt-2 not-italic leading-relaxed text-slate-400">
                {COMPANY}
                <br />
                Severná 13
                <br />
                Prievidza - Dubina
              </address>
              <a
                href={MAP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 ${focusRing}`}
              >
                Otvoriť v mapách
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 hover:border-blue-500/50 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-800 text-blue-400">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-50">
                Telefón
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href={MOBILE_HREF}
                    className={`block rounded-md text-lg font-semibold text-slate-100 transition-colors hover:text-blue-300 ${focusRing}`}
                  >
                    {MOBILE}
                    <span className="block text-sm font-normal text-slate-500">
                      Mobil, Maroš Mikuš
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={LANDLINE_HREF}
                    className={`block rounded-md text-lg font-semibold text-slate-100 transition-colors hover:text-blue-300 ${focusRing}`}
                  >
                    {LANDLINE}
                    <span className="block text-sm font-normal text-slate-500">
                      Pevná linka
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 hover:border-blue-500/50 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-800 text-blue-400">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-50">
                Otváracie hodiny
              </h3>
              <p className="mt-2 text-lg font-semibold text-slate-100">
                {HOURS}
              </p>
              <p className="mt-1 text-sm text-slate-500">{SINCE}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Pätička */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-900/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <Logo />
          <p className="text-sm text-slate-500">
            {ADDRESS} · {HOURS}
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {COMPANY} Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </div>
  );
}