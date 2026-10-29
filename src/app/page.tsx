"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  Clock,
  Cpu,
  Droplets,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  UserCheck,
  Wrench,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Údaje firmy – tu stačí upraviť text, zvyšok stránky sa aktualizuje sám     */
/* -------------------------------------------------------------------------- */

const FIRMA = {
  nazov: "AUTO - Speed s.r.o.",
  konatel: "Maroš Mikuš",
  rokZalozenia: 2001,
  lokalita: "Prievidza – Dubina",
  telefon1: { zobrazenie: "0905 272 052", odkaz: "tel:+421905272052" },
  telefon2: { zobrazenie: "046 542 7302", odkaz: "tel:+421465427302" },
  otvaracieHodiny: { dni: "Pondelok – Piatok", cas: "8:00 – 16:30" },
  mapa:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("AUTO Speed autoservis Prievidza Dubina"),
};

const NAVIGACIA = [
  { nazov: "Služby", href: "#sluzby" },
  { nazov: "O nás", href: "#o-nas" },
  { nazov: "Cenník", href: "#cennik" },
  { nazov: "Kontakt", href: "#kontakt" },
];

type Sluzba = {
  nazov: string;
  popis: string;
  ikona: LucideIcon;
};

const SLUZBY: Sluzba[] = [
  {
    nazov: "Počítačová diagnostika",
    popis:
      "Vyčítanie chýb zo systémov vozidla a určenie príčiny poruchy ešte pred samotnou opravou.",
    ikona: Cpu,
  },
  {
    nazov: "Pneuservis",
    popis:
      "Sezónne prezúvanie, vyváženie kolies a oprava pneumatík bez zbytočného čakania.",
    ikona: CircleDot,
  },
  {
    nazov: "Mechanické opravy",
    popis:
      "Brzdy, podvozok, spojka, rozvody a ďalšie bežné opravy, ktoré auto potrebuje počas prevádzky.",
    ikona: Wrench,
  },
  {
    nazov: "STK a EK",
    popis:
      "Príprava vozidla na technickú a emisnú kontrolu a odstránenie zistených nedostatkov.",
    ikona: ClipboardCheck,
  },
  {
    nazov: "Klimatizácia",
    popis:
      "Kontrola, plnenie a servis klimatizácie, aby v lete fungovala spoľahlivo.",
    ikona: Snowflake,
  },
  {
    nazov: "Výmena olejov",
    popis:
      "Výmena motorového oleja a filtrov podľa odporúčaní výrobcu vášho vozidla.",
    ikona: Droplets,
  },
];

type Principe = {
  nazov: string;
  popis: string;
  ikona: LucideIcon;
};

const PRINCIPY: Principe[] = [
  {
    nazov: `Tradícia od roku ${FIRMA.rokZalozenia}`,
    popis: "Viac ako dvadsať rokov práce s autami priamo v Dubine.",
    ikona: BadgeCheck,
  },
  {
    nazov: "Férové jednanie",
    popis:
      "Rýchla diagnostika, jasná cena a žiadne nečakané poplatky po oprave.",
    ikona: ShieldCheck,
  },
  {
    nazov: "Osobný prístup",
    popis: `Firmu vedie konateľ ${FIRMA.konatel}. Vždy viete, na koho sa obrátiť.`,
    ikona: UserCheck,
  },
];

type PolozkaCennika = {
  ukon: string;
  poznamka: string;
  cena: string;
};

/*
  POZOR: ceny nižšie sú ILUSTRAČNÉ a slúžia len ako vzor.
  Pred nasadením stránky ich nahraďte skutočnými cenami servisu.
*/
const CENNIK: PolozkaCennika[] = [
  {
    ukon: "Počítačová diagnostika",
    poznamka: "Vyčítanie chýb a vyhodnotenie",
    cena: "od 25 €",
  },
  {
    ukon: "Prezutie a vyváženie 4 kolies",
    poznamka: "Osobné vozidlá, cena podľa rozmeru",
    cena: "od 30 €",
  },
  {
    ukon: "Oprava pneumatiky",
    poznamka: "Záplata alebo výmena ventilu",
    cena: "od 10 €",
  },
  {
    ukon: "Výmena oleja a olejového filtra",
    poznamka: "Práca, materiál sa účtuje zvlášť",
    cena: "od 20 €",
  },
  {
    ukon: "Výmena brzdových platničiek",
    poznamka: "Jedna náprava, práca bez materiálu",
    cena: "od 35 €",
  },
  {
    ukon: "Plnenie klimatizácie",
    poznamka: "Kontrola a doplnenie chladiva",
    cena: "od 60 €",
  },
  {
    ukon: "Príprava na STK a EK",
    poznamka: "Predbežná kontrola vozidla",
    cena: "od 20 €",
  },
];

/* -------------------------------------------------------------------------- */
/*  Spoločné triedy                                                            */
/* -------------------------------------------------------------------------- */

const FOKUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400";

const TLACIDLO_HLAVNE = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-orange-400 ${FOKUS}`;

const TLACIDLO_VEDLAJSIE = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition-colors hover:border-orange-500 hover:text-orange-400 ${FOKUS}`;

/* -------------------------------------------------------------------------- */
/*  Pomocné komponenty                                                         */
/* -------------------------------------------------------------------------- */

function NadpisSekcie({
  maly,
  nadpis,
  popis,
}: {
  maly: string;
  nadpis: string;
  popis?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
        {maly}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {nadpis}
      </h2>
      {popis ? (
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          {popis}
        </p>
      ) : null}
    </div>
  );
}

function Navbar() {
  const [otvorene, setOtvorene] = useState(false);
  const zavriet = () => setOtvorene(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#top"
          onClick={zavriet}
          aria-label={`${FIRMA.nazov} – späť na začiatok`}
          className={`flex items-center gap-3 rounded-lg ${FOKUS}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-slate-950">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-white">
              AUTO - Speed
            </span>
            <span className="block text-[11px] text-slate-400">
              s.r.o. · Prievidza
            </span>
          </span>
        </a>

        {/* Navigácia na väčších obrazovkách */}
        <nav
          aria-label="Hlavná navigácia"
          className="hidden items-center gap-1 md:flex"
        >
          {NAVIGACIA.map((polozka) => (
            <a
              key={polozka.href}
              href={polozka.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-orange-400 ${FOKUS}`}
            >
              {polozka.nazov}
            </a>
          ))}
        </nav>

        {/* Tlačidlo na volanie + menu pre mobil */}
        <div className="flex items-center gap-2">
          <a
            href={FIRMA.telefon1.odkaz}
            aria-label={`Zavolať na ${FIRMA.telefon1.zobrazenie}`}
            className={`inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-lg bg-orange-500 px-3 font-semibold text-slate-950 transition-colors hover:bg-orange-400 sm:px-4 ${FOKUS}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">{FIRMA.telefon1.zobrazenie}</span>
          </a>

          <button
            type="button"
            onClick={() => setOtvorene((v) => !v)}
            aria-expanded={otvorene}
            aria-controls="mobilne-menu"
            aria-label={otvorene ? "Zavrieť menu" : "Otvoriť menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-100 transition-colors hover:border-orange-500 md:hidden ${FOKUS}`}
          >
            {otvorene ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobilné menu */}
      {otvorene ? (
        <nav
          id="mobilne-menu"
          aria-label="Mobilná navigácia"
          className="border-t border-slate-800 bg-slate-950 md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {NAVIGACIA.map((polozka) => (
              <li
                key={polozka.href}
                className="border-b border-slate-800 last:border-b-0"
              >
                <a
                  href={polozka.href}
                  onClick={zavriet}
                  className={`flex min-h-[52px] items-center justify-between text-base font-medium text-slate-100 ${FOKUS}`}
                >
                  {polozka.nazov}
                  <ChevronRight
                    className="h-5 w-5 text-slate-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stránka                                                                    */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />

      <main>
        {/* ------------------------------ HERO ------------------------------ */}
        <section className="border-b border-slate-800">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14 lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
                {FIRMA.lokalita} · od roku {FIRMA.rokZalozenia}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Poctivý autoservis a pneuservis v Prievidzi
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Opravujeme autá v Dubine už od roku {FIRMA.rokZalozenia}. Žiadne
                nečakané poplatky, rýchla diagnostika a férový prístup.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={FIRMA.telefon1.odkaz} className={`${TLACIDLO_HLAVNE} w-full sm:w-auto`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Zavolať: {FIRMA.telefon1.zobrazenie}
                </a>
                <a href="#cennik" className={`${TLACIDLO_VEDLAJSIE} w-full sm:w-auto`}>
                  Zistiť ceny
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Konateľ:{" "}
                <span className="font-semibold text-slate-200">
                  {FIRMA.konatel}
                </span>
              </p>
            </div>

            {/* Základné informácie */}
            <aside
              aria-label="Základné informácie o servise"
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Základné informácie
              </h2>

              <dl className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <UserCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm text-slate-400">Konateľ</dt>
                    <dd className="font-semibold text-white">{FIRMA.konatel}</dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm text-slate-400">Adresa</dt>
                    <dd className="font-semibold text-white">{FIRMA.lokalita}</dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm text-slate-400">
                      {FIRMA.otvaracieHodiny.dni}
                    </dt>
                    <dd className="font-semibold text-white">
                      {FIRMA.otvaracieHodiny.cas}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm text-slate-400">Telefón</dt>
                    <dd className="space-y-1 font-semibold text-white">
                      <a
                        href={FIRMA.telefon1.odkaz}
                        className={`block rounded hover:text-orange-400 ${FOKUS}`}
                      >
                        {FIRMA.telefon1.zobrazenie}
                      </a>
                      <a
                        href={FIRMA.telefon2.odkaz}
                        className={`block rounded hover:text-orange-400 ${FOKUS}`}
                      >
                        {FIRMA.telefon2.zobrazenie}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* ----------------------------- SLUŽBY ----------------------------- */}
        <section
          id="sluzby"
          className="scroll-mt-16 border-b border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <NadpisSekcie
              maly="Služby"
              nadpis="Čo u nás opravíme a zabezpečíme"
              popis="Od diagnostiky až po sezónne prezutie. Všetko na jednom mieste v Dubine."
            />

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SLUZBY.map((sluzba) => {
                const Ikona = sluzba.ikona;
                return (
                  <li
                    key={sluzba.nazov}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-orange-500">
                      <Ikona className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {sluzba.nazov}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      {sluzba.popis}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ------------------------------ O NÁS ----------------------------- */}
        <section id="o-nas" className="scroll-mt-16 border-b border-slate-800">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <NadpisSekcie maly="O nás" nadpis="Prečo si vybrať nás" />

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                <p>
                  {FIRMA.nazov} sídli v Prievidzi-Dubine a autá opravuje od roku{" "}
                  {FIRMA.rokZalozenia}. Za tie roky sme sa držali jednoduchého
                  pravidla: zákazník má vedieť, čo sa s jeho autom deje a koľko
                  to bude stáť.
                </p>
                <p>
                  Pred opravou vám vysvetlíme, čo je pokazené, čo treba riešiť
                  hneď a čo môže počkať. Bez zbytočných výmen a bez
                  prekvapení na faktúre.
                </p>
                <p>
                  Firmu vedie konateľ{" "}
                  <span className="font-semibold text-white">{FIRMA.konatel}</span>
                  . Jeho osobný prístup je to, na čom si v servise zakladáme.
                </p>
              </div>

              <div className="mt-8 inline-flex items-baseline gap-3 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
                <span className="text-4xl font-bold text-orange-500">
                  {FIRMA.rokZalozenia}
                </span>
                <span className="text-sm text-slate-400">rok založenia</span>
              </div>
            </div>

            <ul className="space-y-4">
              {PRINCIPY.map((principe) => {
                const Ikona = principe.ikona;
                return (
                  <li
                    key={principe.nazov}
                    className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-orange-500">
                      <Ikona className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {principe.nazov}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-slate-400">
                        {principe.popis}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ----------------------------- CENNÍK ----------------------------- */}
        <section id="cennik" className="scroll-mt-16 border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <NadpisSekcie
              maly="Cenník"
              nadpis="Orientačný cenník"
              popis="Základné úkony a ceny, aby ste vedeli, s čím môžete počítať ešte predtým, než zavoláte."
            />

            <div className="mt-10 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Orientačný cenník základných úkonov
                </caption>
                <thead className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium sm:px-6">
                      Úkon
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-right font-medium sm:px-6"
                    >
                      Cena
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {CENNIK.map((polozka) => (
                    <tr key={polozka.ukon}>
                      <th
                        scope="row"
                        className="px-4 py-4 text-base font-semibold text-white sm:px-6"
                      >
                        {polozka.ukon}
                        <span className="mt-0.5 block text-sm font-normal text-slate-400">
                          {polozka.poznamka}
                        </span>
                      </th>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-base font-semibold text-orange-500 sm:px-6">
                        {polozka.cena}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                Ceny sú orientačné a závisia od typu vozidla a rozsahu práce.
                Presnú cenu vám povieme pred začatím opravy.
              </p>
              <a
                href={FIRMA.telefon1.odkaz}
                className={`${TLACIDLO_HLAVNE} w-full sm:w-auto`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Spýtať sa na cenu
              </a>
            </div>
          </div>
        </section>

        {/* ---------------------------- KONTAKT ----------------------------- */}
        <section id="kontakt" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <NadpisSekcie
              maly="Kontakt"
              nadpis="Zavolajte alebo sa zastavte"
              popis="Najrýchlejšie nás zastihnete telefonicky v pracovných dňoch."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {/* Adresa */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-orange-500">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">Adresa</h3>
                <p className="mt-2 text-base text-slate-300">{FIRMA.nazov}</p>
                <p className="text-base text-slate-300">{FIRMA.lokalita}</p>
                <a
                  href={FIRMA.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex min-h-[44px] items-center gap-2 rounded text-base font-semibold text-orange-500 hover:text-orange-400 ${FOKUS}`}
                >
                  Zobraziť na mape
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Telefón */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-orange-500">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">Telefón</h3>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      href={FIRMA.telefon1.odkaz}
                      className={`inline-flex min-h-[44px] items-center rounded text-xl font-semibold text-white hover:text-orange-400 ${FOKUS}`}
                    >
                      {FIRMA.telefon1.zobrazenie}
                    </a>
                  </li>
                  <li>
                    <a
                      href={FIRMA.telefon2.odkaz}
                      className={`inline-flex min-h-[44px] items-center rounded text-xl font-semibold text-white hover:text-orange-400 ${FOKUS}`}
                    >
                      {FIRMA.telefon2.zobrazenie}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Otváracie hodiny */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-orange-500">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  Otváracie hodiny
                </h3>
                <p className="mt-2 text-base text-slate-300">
                  {FIRMA.otvaracieHodiny.dni}
                </p>
                <p className="text-xl font-semibold text-white">
                  {FIRMA.otvaracieHodiny.cas}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={FIRMA.telefon1.odkaz}
                className={`${TLACIDLO_HLAVNE} w-full sm:w-auto`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Zavolať: {FIRMA.telefon1.zobrazenie}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------ PÄTA ------------------------------- */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            <span className="font-semibold text-slate-200">{FIRMA.nazov}</span> ·{" "}
            {FIRMA.lokalita}
          </p>
          <p>Konateľ: {FIRMA.konatel}</p>
        </div>
      </footer>
    </div>
  );
}
