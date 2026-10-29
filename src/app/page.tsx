/**
 * AUTO - Speed s.r.o. - celá homepage v jednom súbore.
 *
 * Použitie: ulož ako app/page.tsx (Next.js App Router, Tailwind CSS, lucide-react).
 * Nič iné netreba meniť. Predvolený app/globals.css z create-next-app stačí
 * (musí obsahovať `@import "tailwindcss";`).
 */
import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import {
  Phone,
  Wrench,
  Gauge,
  Droplets,
  Disc3,
  Cog,
  CircleDot,
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Písma, metadáta, doplnkové CSS                                     */
/* ------------------------------------------------------------------ */

// Nadpisy: Archivo so zúženou šírkou (os wdth) - pripomína nápisy na dielni.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Text: Source Sans 3 - čitateľný aj na malom displeji, má slovenskú diakritiku.
const source = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUTO - Speed s.r.o. | Autoservis a pneuservis Prievidza - Dubina",
  description:
    "Autoservis a pneuservis v Prievidzi - Dubine od roku 2001. Diagnostika, opravy, prezutie pneumatík. Zavolajte: 0905 272 052.",
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

const EXTRA_CSS = `
  html { scroll-behavior: smooth; scroll-padding-top: 7rem; color-scheme: dark; }
  body { background: #020617; }
  .font-display { font-family: var(--font-archivo), ui-sans-serif, system-ui, sans-serif; }
  .font-body { font-family: var(--font-source), ui-sans-serif, system-ui, sans-serif; }
  .site :focus-visible { outline: 2px solid #f59e0b; outline-offset: 3px; border-radius: 4px; }
  .no-scrollbar { scrollbar-width: none; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .site * { transition-duration: 0.01ms !important; }
  }
`;

/* ------------------------------------------------------------------ */
/*  Údaje firmy - všetko, čo treba doplniť alebo opraviť, je tu hore   */
/* ------------------------------------------------------------------ */

const MOBILE = { display: "0905 272 052", href: "tel:0905272052" };
const LANDLINE = { display: "046 542 7302", href: "tel:0465427302" };

// TODO: doplňte ulicu a číslo, ak ich chcete zobraziť (napr. "Ulica 12, Prievidza - Dubina").
const ADDRESS = "Prievidza - Dubina";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("AUTO - Speed s.r.o. Prievidza Dubina");

// TODO: doplňte skutočné otváracie hodiny, napr. [{ days: "Pondelok - Piatok", time: "7:00 - 16:00" }].
// Kým je pole prázdne, web hodiny nezobrazuje.
const HOURS: { days: string; time: string }[] = [];

const STEPS = [
  { title: "Zavoláte alebo prídete", text: "Povedzte, čo sa s autom deje. Aj keď to neviete pomenovať." },
  { title: "Pozrieme sa na auto", text: "Diagnostika a obhliadka, aby sme vedeli, čo je skutočne treba." },
  { title: "Povieme vám cenu vopred", text: "Čo treba spraviť hneď, čo môže počkať a koľko to bude stáť." },
  { title: "Opravujeme po vašom súhlase", text: "Nič navyše, čo ste neodsúhlasili." },
];

const SERVICE_GROUPS = [
  {
    title: "Autoservis",
    intro: "Mechanické opravy a servis osobných áut.",
    items: [
      { icon: Gauge, name: "Diagnostika", text: "Prečítame chybové hlásenia a pozrieme sa aj pod auto. Povieme vám, čo treba spraviť hneď a čo môže počkať." },
      { icon: Droplets, name: "Olej a filtre", text: "Výmena motorového oleja, olejového, vzduchového a peľového filtra." },
      { icon: Disc3, name: "Brzdy", text: "Brzdové doštičky, kotúče a brzdová kvapalina." },
      { icon: Cog, name: "Podvozok a motor", text: "Tlmiče, ramená, ložiská, spojka a ďalšie mechanické opravy." },
    ],
  },
  {
    title: "Pneuservis",
    intro: "Všetko okolo kolies a pneumatík.",
    items: [
      { icon: CircleDot, name: "Prezutie a vyváženie", text: "Výmena letných a zimných pneumatík, vyváženie kolies." },
      { icon: Wrench, name: "Oprava defektu", text: "Zalátanie, alebo férovo povieme, že pneumatika už nestojí za opravu." },
      { icon: Gauge, name: "Kontrola pneumatík", text: "Dezén, tlak a stav bočníc, aby ste vedeli, na čom idete." },
    ],
  },
];

// `price` je voliteľné. Ak ho vyplníte (napr. "od 15 €"), zobrazí sa pri riadku.
const JOBS: { problem: string; work: string; price?: string }[] = [
  { problem: "Brzdy pískajú alebo auto pri brzdení vibruje", work: "Kontrola a výmena brzdových doštičiek a kotúčov" },
  { problem: "Svieti kontrolka motora alebo auto zle štartuje", work: "Diagnostika" },
  { problem: "Auto ťahá do strany alebo bije volant", work: "Kontrola pneumatík, vyváženie kolies a podvozku" },
  { problem: "Prichádza zima alebo leto", work: "Prezutie a vyváženie kolies" },
  { problem: "Pneumatika stráca tlak", work: "Oprava defektu" },
  { problem: "Uplynul interval výmeny oleja", work: "Výmena oleja a filtrov" },
];

const NAV = [
  { href: "#sluzby", label: "Služby" },
  { href: "#cennik", label: "Cenník / Práce" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

/* ------------------------------------------------------------------ */
/*  Časti stránky                                                      */
/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <a
      href="#"
      aria-label="AUTO - Speed s.r.o., Autoservis a Pneuservis"
      className="flex flex-col gap-1 leading-none"
    >
      <span className="font-display flex items-baseline gap-2 text-[1.7rem] font-extrabold text-white [font-stretch:75%]">
        <span className="tracking-tight">AUTO</span>
        <span
          aria-hidden
          className="inline-block h-[0.2em] w-[0.7em] -translate-y-[0.22em] bg-amber-500"
        />
        <span className="italic tracking-tight">Speed</span>
        <span className="font-body text-xs font-normal text-slate-400 [font-stretch:100%]">
          s.r.o.
        </span>
      </span>
      <span className="text-sm text-slate-400">Autoservis &amp; Pneuservis</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pb-3 pt-3 sm:px-6">
        <Logo />

        <nav
          aria-label="Hlavná navigácia"
          className="no-scrollbar order-3 -mx-4 flex w-[calc(100%+2rem)] gap-6 overflow-x-auto px-4 text-[0.95rem] md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-1 text-slate-300 transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={MOBILE.href}
          className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-amber-400 active:bg-amber-600"
        >
          <Phone className="size-4" aria-hidden />
          <span>
            Zavolať<span className="hidden sm:inline">: {MOBILE.display}</span>
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-24">
      <div>
        <h1 className="font-display max-w-[16ch] text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-white [font-stretch:75%] sm:text-6xl lg:text-7xl">
          Poctivý autoservis a pneuservis v Prievidzi
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-slate-300 sm:text-xl">
          Opravujeme autá v Dubine už od roku 2001. Žiadne nečakané poplatky,
          rýchla diagnostika a férový prístup.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={MOBILE.href}
            className="inline-flex items-center justify-center gap-3 rounded-md bg-amber-500 px-6 py-4 text-lg font-bold text-slate-950 transition-colors hover:bg-amber-400 active:bg-amber-600"
          >
            <Phone className="size-5" aria-hidden />
            Zavolať: {MOBILE.display}
          </a>
          <a
            href="#sluzby"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-4 text-lg font-semibold text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-900"
          >
            Pozrieť služby
          </a>
        </div>
        <p className="mt-4 text-slate-400">
          Pevná linka:{" "}
          <a
            href={LANDLINE.href}
            className="text-slate-200 underline decoration-slate-600 underline-offset-4 hover:decoration-amber-500"
          >
            {LANDLINE.display}
          </a>
        </p>
      </div>

      {/* Postup opravy - je to skutočná postupnosť, preto číslovanie */}
      <aside
        aria-labelledby="postup"
        className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 sm:p-8"
      >
        <h2
          id="postup"
          className="font-display text-2xl font-bold text-white [font-stretch:80%]"
        >
          Ako prebieha oprava
        </h2>
        <ol className="mt-6">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[2rem_1fr] gap-x-3 border-t border-dashed border-slate-700 py-4 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span className="font-display text-2xl font-bold leading-none text-amber-500 [font-stretch:80%]">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-[0.95rem] text-slate-400">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-extrabold tracking-tight text-white [font-stretch:75%] sm:text-5xl">
      {children}
    </h2>
  );
}

function Services() {
  return (
    <section id="sluzby" className="border-t border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>Služby</SectionTitle>
        <p className="mt-4 max-w-[60ch] text-slate-400">
          Ak sa vaša závada tu nenachádza, aj tak zavolajte. Povieme vám, či sa jej
          venujeme.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {SERVICE_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 sm:p-8"
            >
              <h3 className="font-display text-3xl font-bold text-white [font-stretch:75%]">
                {group.title}
              </h3>
              <p className="mt-1 text-slate-400">{group.intro}</p>
              <ul className="mt-6 divide-y divide-slate-800">
                {group.items.map(({ icon: Icon, name, text }) => (
                  <li key={name} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <Icon className="mt-1 size-5 shrink-0 text-amber-500" aria-hidden />
                    <div>
                      <p className="font-semibold text-white">{name}</p>
                      <p className="mt-0.5 text-[0.98rem] text-slate-400">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jobs() {
  return (
    <section id="cennik" className="border-t border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>Cenník / Práce</SectionTitle>
        <p className="mt-4 max-w-[62ch] text-slate-400">
          Cena závisí od auta a od rozsahu práce, preto ju nehádame z cenníka na
          stene. Pred každou opravou vám povieme, koľko bude stáť, a začneme až
          po vašom súhlase.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80">
          <div className="hidden grid-cols-2 gap-6 border-b border-slate-800 px-6 py-3 text-sm text-slate-500 md:grid">
            <span>Čo sa deje s autom</span>
            <span>Čo spravíme</span>
          </div>
          <ul className="divide-y divide-slate-800">
            {JOBS.map((job) => (
              <li
                key={job.problem}
                className="grid gap-1 px-6 py-5 md:grid-cols-2 md:gap-6"
              >
                <p className="font-semibold text-white">{job.problem}</p>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-slate-300">{job.work}</p>
                  {job.price && (
                    <span className="shrink-0 font-semibold text-amber-400">
                      {job.price}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-slate-400">
          Nenašli ste svoj problém?{" "}
          <a
            href={MOBILE.href}
            className="font-semibold text-amber-400 underline decoration-amber-500/40 underline-offset-4 hover:decoration-amber-400"
          >
            Zavolajte na {MOBILE.display}
          </a>
          , aj telefonicky vám povieme, čo s tým.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nas" className="border-t border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionTitle>O nás</SectionTitle>
        <div className="max-w-[62ch] space-y-5 text-lg">
          <p>
            AUTO - Speed s.r.o. opravuje autá v Prievidzi - Dubine od roku 2001.
            Firmu vedie konateľ Maroš Mikuš.
          </p>
          <p>
            Za štvrťstoročie sme sa naučili, že zákazník si z dielne odnesie dve
            veci: či auto odišlo v poriadku a či cena sedela s tým, čo mu
            povedali vopred. Preto sa snažíme, aby platilo obe.
          </p>
          <p>
            Keď nie je treba meniť, nemeníme. Keď sa dá niečo odložiť, povieme
            vám to. Rozhodnutie je vždy na vás.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="border-t border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>Kontakt</SectionTitle>
        <p className="mt-4 max-w-[60ch] text-slate-400">
          Najrýchlejšie sa dohodneme po telefóne. Zavolajte a povedzte, čo sa
          s autom deje.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white [font-stretch:80%]">
              Telefón
            </h3>
            <div className="mt-5 space-y-5">
              <a href={MOBILE.href} className="group block">
                <span className="block text-sm text-slate-400">Mobil</span>
                <span className="mt-1 inline-flex items-center gap-3 text-3xl font-bold text-white transition-colors group-hover:text-amber-400">
                  <Phone className="size-6 text-amber-500" aria-hidden />
                  {MOBILE.display}
                </span>
              </a>
              <a href={LANDLINE.href} className="group block">
                <span className="block text-sm text-slate-400">Pevná linka</span>
                <span className="mt-1 inline-flex items-center gap-3 text-3xl font-bold text-white transition-colors group-hover:text-amber-400">
                  <Phone className="size-6 text-slate-500" aria-hidden />
                  {LANDLINE.display}
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white [font-stretch:80%]">
              Kde nás nájdete
            </h3>
            <p className="mt-1 text-slate-400">AUTO - Speed s.r.o.</p>
            <p className="mt-5 flex items-start gap-3 text-lg text-white">
              <MapPin className="mt-1 size-5 shrink-0 text-amber-500" aria-hidden />
              {ADDRESS}
            </p>
            {HOURS.length > 0 ? (
              <ul className="mt-4 space-y-1">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex items-start gap-3">
                    <Clock className="mt-1 size-5 shrink-0 text-amber-500" aria-hidden />
                    <span>
                      <span className="text-white">{h.days}</span>{" "}
                      <span className="text-slate-400">{h.time}</span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 flex items-start gap-3 text-slate-400">
                <Clock className="mt-1 size-5 shrink-0 text-slate-500" aria-hidden />
                Otváracie hodiny vám radi povieme po telefóne.
              </p>
            )}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2.5 font-semibold text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <Navigation className="size-4" aria-hidden />
              Otvoriť v mapách
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 pb-28 pt-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:justify-between">
    <p>© 2026 AUTO - Speed s.r.o. (Maroš Mikuš). Všetky práva vyhradené.</p>
        <p>Autoservis a pneuservis od roku 2001</p>
      </div>
    </footer>
  );
}

/* Na mobile je tlačidlo na zavolanie stále na dosah palca */
function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 p-3 backdrop-blur md:hidden">
      <a
        href={MOBILE.href}
        className="flex items-center justify-center gap-3 rounded-md bg-amber-500 py-3.5 text-lg font-bold text-slate-950 active:bg-amber-600"
      >
        <Phone className="size-5" aria-hidden />
        Zavolať: {MOBILE.display}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "AUTO - Speed s.r.o.",
  telephone: ["+421905272052", "+421465427302"],
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prievidza",
    addressRegion: "Trenčiansky kraj",
    addressCountry: "SK",
  },
};

export default function Home() {
  return (
    <div
      lang="sk"
      className={`site ${archivo.variable} ${source.variable} font-body min-h-screen bg-slate-950 text-[1.0625rem] leading-relaxed text-slate-300 antialiased`}
    >
      <style dangerouslySetInnerHTML={{ __html: EXTRA_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
