import type { Metadata } from "next";
import { IBM_Plex_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  CircleDot,
  ClipboardCheck,
  Clock,
  Cpu,
  Droplets,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";

const display = Sofia_Sans_Extra_Condensed({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUTO - Speed s.r.o. | Autoservis a pneuservis Prievidza – Dubina",
  description:
    "Poctivý autoservis a pneuservis v Prievidzi – Dubine od roku 2001. Mechanické opravy, pneuservis a geometria, autodiagnostika, STK & EK, servis klimatizácie. Zavolajte +421 905 272 052.",
};

const PHONE_DISPLAY = "+421 905 272 052";
const PHONE_HREF = "tel:+421905272052";
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=AUTO+Speed+Prievidza+Dubina";

const DISPLAY = "font-[family-name:var(--font-display)]";

const NAV_LINKS = [
  { href: "#sluzby", label: "Služby" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
};

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Mechanické opravy",
    description:
      "Opravy od drobných závad až po náročnejšie zásahy do mechaniky vášho auta.",
    detail: "Motory, podvozky, brzdy",
  },
  {
    icon: CircleDot,
    title: "Pneuservis & geometria",
    description:
      "Správne namontované a nastavené kolesá sú základ bezpečnej jazdy.",
    detail: "Pneumatiky, vyvažovanie, 3D geometria",
  },
  {
    icon: Cpu,
    title: "Autodiagnostika",
    description:
      "Príčinu problému nájdeme presne, bez výmeny dielov naslepo.",
    detail: "Chyby riadiacich jednotiek, elektronika",
  },
  {
    icon: ClipboardCheck,
    title: "STK & EK",
    description:
      "Auto pripravíme na technickú a emisnú kontrolu a kontrolu vám aj vykonáme.",
    detail: "Predkontrola, oprava nedostatkov, STK & EK",
  },
  {
    icon: Snowflake,
    title: "Servis klimatizácie",
    description:
      "Aby ste cestovali v pohodlí a s čistým vzduchom v kabíne.",
    detail: "Plnenie a dezinfekcia okruhu",
  },
  {
    icon: Droplets,
    title: "Pravidelné prehliadky",
    description:
      "Pravidelná údržba predlžuje životnosť auta a predchádza drahým opravám.",
    detail: "Výmena olejov, servisné prehliadky",
  },
];

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Award,
    title: "Skúsenosti od 2001",
    description:
      "Viac ako dve desaťročia práce na autách zákazníkov z Prievidze a okolia.",
  },
  {
    icon: Gauge,
    title: "Kvalitné vybavenie",
    description:
      "Moderné diagnostické a dielenské vybavenie pre presnú a spoľahlivú prácu.",
  },
  {
    icon: BadgeCheck,
    title: "Férové ceny",
    description:
      "Vopred povieme, čo auto potrebuje a koľko to bude stáť. Bez prekvapení na faktúre.",
  },
  {
    icon: ShieldCheck,
    title: "Záruka na prácu",
    description:
      "Za vykonanou prácou si stojíme. Ak je s ňou problém, vyriešime ho.",
  },
];

/**
 * Koleso s nápismi na boku pneumatiky (rozmer 205/55 R16 91V je bežný rozmer
 * pre osobné autá). Po načítaní stránky sa raz roztočí a zastaví.
 */
function Wheel({ className }: { className?: string }) {
  const polar = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: +(200 + radius * Math.cos(rad)).toFixed(2),
      y: +(200 + radius * Math.sin(rad)).toFixed(2),
    };
  };
  const angles = [-90, -18, 54, 126, 198];

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <path id="sidewall-path" d="M 200 52 A 148 148 0 1 1 199.9 52" />
      </defs>
      <g className="wheel-spin">
        {/* pneumatika */}
        <circle cx="200" cy="200" r="190" fill="#0a0f19" stroke="#22345a" strokeWidth="1.5" />
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="#16233a"
          strokeWidth="9"
          strokeDasharray="11 7"
        />
        <circle cx="200" cy="200" r="172" stroke="#17233a" strokeWidth="1.5" />

        {/* nápisy na boku pneumatiky */}
        <text
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          <textPath href="#sidewall-path" startOffset="10">
            <tspan fill="#6c9bff">AUTO - SPEED</tspan>
            <tspan fill="#4f70b5" dx="30">PRIEVIDZA – DUBINA</tspan>
            <tspan fill="#4f70b5" dx="30">205/55 R16 91V</tspan>
            <tspan fill="#4f70b5" dx="30">OD 2001</tspan>
          </textPath>
        </text>

        <circle cx="200" cy="200" r="118" stroke="#22345a" strokeWidth="1.5" />

        {/* disk */}
        <circle cx="200" cy="200" r="104" fill="#070b13" stroke="#6c9bff" strokeWidth="2" />
        {angles.map((a) => {
          const from = polar(a, 28);
          const to = polar(a, 90);
          return (
            <g key={a}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#14264a"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#2f6bff"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                strokeLinecap="round"
              />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="28" fill="#0a1630" stroke="#2f6bff" strokeWidth="2" />
        {angles.map((a) => {
          const p = polar(a, 14);
          return <circle key={`bolt-${a}`} cx={p.x} cy={p.y} r="3" fill="#6c9bff" />;
        })}
      </g>
    </svg>
  );
}

const MOTION_CSS = `
@keyframes wheel-settle {
  from { transform: rotate(-720deg); }
  to { transform: rotate(0deg); }
}
.wheel-spin {
  transform-box: view-box;
  transform-origin: 50% 50%;
  animation: wheel-settle 2.2s cubic-bezier(0.12, 0.8, 0.2, 1) both;
}
@media (prefers-reduced-motion: reduce) {
  .wheel-spin { animation: none; }
}
`;

export default function Page() {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[#05070b] font-[family-name:var(--font-body)] text-[#c3cde0] antialiased selection:bg-[#2f6bff]/40 selection:text-white`}
    >
      <style>{MOTION_CSS}</style>

      {/* ───────────── HLAVIČKA ───────────── */}
      <header className="sticky top-0 z-50 border-b border-[#17233a] bg-[#05070b]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c9bff]"
            aria-label="AUTO - Speed s.r.o., úvod"
          >
            <span className="flex items-baseline gap-2">
              <span className={`${DISPLAY} text-3xl font-extrabold leading-none tracking-wide text-white`}>
                AUTO - Speed
              </span>
              <span className="hidden text-xs text-[#8c9ab3] sm:inline">
                autoservis a pneuservis
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavná navigácia">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#c3cde0] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-[#2f6bff] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4d82ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c9bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Zavolať
          </a>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto border-t border-[#17233a] px-4 py-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Mobilná navigácia"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-[#22345a] px-4 py-1.5 text-sm font-medium text-[#e8eefc] transition-colors hover:border-[#2f6bff]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ───────────── HERO ───────────── */}
        <section className="border-b border-[#17233a]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
            <div>
              <h1
                className={`${DISPLAY} max-w-3xl text-6xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl`}
              >
                Poctivý autoservis v Prievidzi – Dubine od roku 2001
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#9fb0cc]">
                Opravy, pneuservis, diagnostika, STK & EK aj klimatizácia na
                jednom mieste. Zavolajte a dohodneme termín.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#2f6bff] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#4d82ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c9bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Zavolať {PHONE_DISPLAY}
                </a>
                <a
                  href="#sluzby"
                  className="inline-flex items-center justify-center rounded-md border border-[#22345a] px-6 py-3.5 text-base font-semibold text-[#e8eefc] transition-colors hover:border-[#2f6bff] hover:bg-[#0a101c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c9bff]"
                >
                  Naše služby
                </a>
              </div>

              <p className="mt-6 text-sm text-[#8c9ab3]">
                Otvorené pondelok až piatok, 8:00 – 16:00.
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <Wheel className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* ───────────── SLUŽBY ───────────── */}
        <section id="sluzby" className="scroll-mt-28 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2
              className={`${DISPLAY} max-w-2xl text-5xl font-extrabold leading-none text-white sm:text-6xl`}
            >
              Čo pre vaše auto robíme
            </h2>
            <p className="mt-5 max-w-xl text-[#9fb0cc]">
              Od bežnej údržby po náročné opravy a diagnostiku. Staráme sa o
              vaše vozidlo komplexne.
            </p>

            <ul className="mt-12">
              {SERVICES.map(({ icon: Icon, title, description, detail }) => (
                <li
                  key={title}
                  className="group grid gap-x-6 gap-y-2 border-t border-[#17233a] px-2 py-6 transition-colors hover:bg-[#0a101c] sm:grid-cols-[2rem_1fr] sm:px-4 lg:grid-cols-[2rem_1.1fr_1fr_1fr] lg:items-center"
                >
                  <Icon
                    className="h-7 w-7 text-[#2f6bff] transition-colors group-hover:text-[#6c9bff]"
                    aria-hidden="true"
                  />
                  <h3 className={`${DISPLAY} text-3xl font-bold leading-none text-white`}>
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#9fb0cc] sm:col-start-2 lg:col-start-3">
                    {description}
                  </p>
                  <p className="text-sm text-[#8c9ab3] sm:col-start-2 lg:col-start-4">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── O NÁS ───────────── */}
        <section id="o-nas" className="scroll-mt-28 bg-[#0a1630]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
              <h2
                className={`${DISPLAY} text-5xl font-extrabold leading-none text-white sm:text-6xl`}
              >
                Prečo si vybrať AUTO - Speed
              </h2>
              <div className="space-y-4 leading-relaxed text-[#b4c4e6]">
                <p>
                  AUTO - Speed s.r.o. pôsobí v Prievidzi – Dubine od roku 2001.
                  Za tie roky sme si meno vybudovali poctivou prácou a otvoreným
                  prístupom k zákazníkom.
                </p>
                <p>
                  Firmu vedie majiteľ Maroš Mikuš, ktorý dohliada na kvalitu
                  práce v dielni. U nás nájdete jasnú komunikáciu, moderné
                  vybavenie a servis, na ktorý sa dá spoľahnúť.
                </p>
              </div>
            </div>

            <ul className="mt-14 grid gap-x-16 gap-y-10 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-5">
                  <Icon
                    className="mt-1 h-7 w-7 shrink-0 text-[#6c9bff]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className={`${DISPLAY} text-3xl font-bold leading-none text-white`}>
                      {title}
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#a9bde6]">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── KONTAKT ───────────── */}
        <section id="kontakt" className="scroll-mt-28 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2
              className={`${DISPLAY} text-5xl font-extrabold leading-none text-white sm:text-6xl`}
            >
              Zavolajte a dohodneme termín
            </h2>

            <a
              href={PHONE_HREF}
              className={`${DISPLAY} mt-7 inline-flex items-center gap-4 rounded text-6xl font-extrabold leading-none text-[#6c9bff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c9bff] sm:text-8xl`}
            >
              <Phone className="h-9 w-9 sm:h-14 sm:w-14" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <dl className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-[#8c9ab3]">Adresa</dt>
                  <dd className="mt-1 text-lg font-medium text-white">
                    Prievidza – Dubina, Slovensko
                  </dd>
                  <dd className="mt-2">
                    <a
                      href={MAPS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#6c9bff] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
                    >
                      Otvoriť v mapách
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-[#8c9ab3]">Otváracia doba</dt>
                  <dd className="mt-1 text-lg font-medium text-white">
                    Pondelok – Piatok: 8:00 – 16:00
                  </dd>
                  <dd className="mt-1 text-sm text-[#8c9ab3]">
                    V sobotu a nedeľu máme zatvorené.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* ───────────── PÄTIČKA ───────────── */}
      <footer className="border-t border-[#17233a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`${DISPLAY} text-3xl font-extrabold leading-none tracking-wide text-white`}>
              AUTO - Speed s.r.o.
            </p>
            <p className="mt-2 text-[#8c9ab3]">
              Autoservis a pneuservis, Prievidza – Dubina. Od roku 2001.
            </p>
          </div>
          <div className="text-[#8c9ab3] md:text-right">
            <p>Majiteľ: Maroš Mikuš</p>
            <p className="mt-1">© 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}