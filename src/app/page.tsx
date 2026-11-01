import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Car,
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
  Truck,
  Wrench,
} from "lucide-react";

const font = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
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
  "https://www.google.com/maps/search/?api=1&query=AUTO-SPEED+s.r.o.+Severn%C3%A1+13+Prievidza";

const NAV_LINKS = [
  { href: "#sluzby", label: "Služby" },
  { href: "#dielna", label: "Dielňa" },
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

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  text: string;
};

const PHOTOS: Photo[] = [
  {
    src: "/images/pneuservis.jpg",
    width: 564,
    height: 374,
    alt: "Pneuservis: zariadenie na montáž pneumatík a vyvažovačka kolies",
    title: "Pneuservis",
    text: "Opravy defektov, výmeny pneumatík a vyváženie plechových aj ALU diskov do veľkosti 21 palcov. Pneumatiky si u nás môžete aj kúpiť.",
  },
  {
    src: "/images/diagnostika.jpg",
    width: 555,
    height: 379,
    alt: "Diagnostika elektroniky vozidla pomocou diagnostického zariadenia",
    title: "Autodiagnostika",
    text: "Čítanie chýb riadiacich jednotiek a diagnostika elektroniky pomocou diagnostického zariadenia TEXA.",
  },
  {
    src: "/images/klimatizacia.jpg",
    width: 406,
    height: 377,
    alt: "Zariadenie Valeo na servis klimatizácie",
    title: "Servis klimatizácie",
    text: "Hľadáme úniky chladiva, meníme kompresory, expanzné ventily a výparníky. Okruh dezinfikujeme ozónmakerom. Pracujeme so zariadením Valeo.",
  },
  {
    src: "/images/lakovnicke-materialy.jpg",
    width: 570,
    height: 377,
    alt: "Regál s lakovníckymi materiálmi",
    title: "Lakovanie a lakovnícke materiály",
    text: "Používame pomocné lakovnícke materiály 3M Mirka BKP a najmodernejšie vodou riediteľné materiály Standohyd.",
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
    title: "Skúsenosti od roku 2001",
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

const TRUST = ["Záruka na prácu", "Férové ceny", "Moderné vybavenie"];

const CARD =
  "rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm";
const CHIP =
  "flex shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300";

export default function Page() {
  return (
    <div
      className={`${font.className} min-h-screen bg-[#060a14] text-[#c2cde3] antialiased selection:bg-blue-500/40 selection:text-white`}
    >
      {/* ───────────── HLAVIČKA ───────────── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="AUTO - Speed s.r.o., úvod"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-900/40">
              <Car className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-bold text-white">
                AUTO - Speed
              </span>
              <span className="block text-xs text-[#94a3c4]">
                Autoservis a pneuservis
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavná navigácia">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#c2cde3] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a14]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Zavolať
          </a>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto border-t border-white/5 px-4 py-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Mobilná navigácia"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400/50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ───────────── HERO ───────────── */}
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60rem_28rem_at_75%_-10%,rgba(59,130,246,0.22),transparent_70%)]"
          />

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 text-sm font-medium text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Viac ako 20 rokov dôvery
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Poctivý autoservis v Prievidzi – Dubine od roku 2001
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#94a3c4]">
                Opravy, pneuservis, diagnostika, STK & EK aj klimatizácia na
                jednom mieste. Zavolajte a dohodneme termín.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a14]"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Zavolať {PHONE_DISPLAY}
                </a>
                <a
                  href="#sluzby"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-slate-100 transition-colors hover:border-blue-400/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Naše služby
                </a>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#c2cde3]">
                {TRUST.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* fotka dielne + údaje */}
            <figure
              className={`${CARD} overflow-hidden shadow-2xl shadow-blue-950/50`}
            >
              <Image
                src="/images/budova-odtah.jpg"
                width={559}
                height={369}
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                alt="Budova autoservisu AUTO - Speed s odťahovým vozíkom na nádvorí"
                className="h-auto w-full"
              />
              <figcaption className="grid gap-4 p-5 sm:grid-cols-2">
                <span className="flex items-center gap-3">
                  <span className={`${CHIP} h-10 w-10`}>
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-[#94a3c4]">Adresa</span>
                    <span className="block font-semibold text-white">
                      Severná 13, Prievidza
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className={`${CHIP} h-10 w-10`}>
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-[#94a3c4]">Otvorené</span>
                    <span className="block font-semibold text-white">
                      Po – Pi, 8:00 – 16:30
                    </span>
                  </span>
                </span>
                <span className="flex items-start gap-3 border-t border-white/10 pt-4 text-sm text-[#c2cde3] sm:col-span-2">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                  Zabezpečíme aj odťah osobných vozidiel do 2 t a požičiame
                  vozík na odťah.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ───────────── SLUŽBY ───────────── */}
        <section id="sluzby" className="scroll-mt-28 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Čo pre vaše auto robíme
              </h2>
              <p className="mt-4 text-[#94a3c4]">
                Od bežnej údržby po náročné opravy a diagnostiku. Staráme sa o
                vaše vozidlo komplexne.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, description, detail }) => (
                <article
                  key={title}
                  className={`${CARD} group p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-blue-950/40`}
                >
                  <span className={`${CHIP} h-12 w-12 transition-colors group-hover:bg-blue-500/25`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#94a3c4]">
                    {description}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm text-[#c2cde3]">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── DIELŇA (FOTKY) ───────────── */}
        <section id="dielna" className="scroll-mt-28 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Takto to vyzerá u nás v dielni
              </h2>
              <p className="mt-4 text-[#94a3c4]">
                Vybavenie, s ktorým pracujeme na vašom aute.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {PHOTOS.map((photo) => (
                <figure key={photo.src} className={`${CARD} overflow-hidden`}>
                  <Image
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                    alt={photo.alt}
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="p-5">
                    <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#94a3c4]">
                      {photo.text}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── O NÁS ───────────── */}
        <section id="o-nas" className="scroll-mt-28 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1c3d] to-[#0a1226] p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Prečo si vybrať AUTO - Speed
                </h2>
                <p className="mt-5 leading-relaxed text-[#b4c4e6]">
                  AUTO - Speed s.r.o. pôsobí v Prievidzi – Dubine od roku 2001.
                  Za tie roky sme si meno vybudovali poctivou prácou a otvoreným
                  prístupom k zákazníkom.
                </p>
                <p className="mt-4 leading-relaxed text-[#b4c4e6]">
                  Firmu vedie majiteľ Maroš Mikuš, ktorý dohliada na kvalitu
                  práce v dielni. U nás nájdete jasnú komunikáciu, moderné
                  vybavenie a servis, na ktorý sa dá spoľahnúť.
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/25 text-base font-bold text-white">
                    MM
                  </span>
                  <div>
                    <p className="font-semibold text-white">Maroš Mikuš</p>
                    <p className="text-sm text-[#94a3c4]">Majiteľ</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-5">
                {REASONS.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex gap-4">
                    <span className={`${CHIP} h-11 w-11`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-[#a9bde6]">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── KONTAKT ───────────── */}
        <section id="kontakt" className="scroll-mt-28 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Zavolajte a dohodneme termín
              </h2>
              <p className="mt-4 text-[#94a3c4]">
                Telefonát je najrýchlejší spôsob, ako zistiť, kedy vám auto
                vezmeme do servisu.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <a
                href={PHONE_HREF}
                className="group rounded-2xl border border-blue-400/30 bg-gradient-to-b from-blue-500/20 to-blue-500/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <span className={`${CHIP} h-12 w-12 bg-blue-500/30 text-white`}>
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm text-[#94a3c4]">Telefón</p>
                <p className="mt-1 text-xl font-bold text-white">{PHONE_DISPLAY}</p>
                <p className="mt-3 text-sm font-medium text-blue-300 transition-colors group-hover:text-white">
                  Zavolať teraz
                </p>
              </a>

              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CARD} group p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
              >
                <span className={`${CHIP} h-12 w-12`}>
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm text-[#94a3c4]">Adresa</p>
                <p className="mt-1 text-xl font-bold text-white">Severná 13</p>
                <p className="text-[#94a3c4]">971 01 Prievidza – Dubina</p>
                <p className="mt-3 text-sm font-medium text-blue-300 transition-colors group-hover:text-white">
                  Otvoriť v mapách
                </p>
              </a>

              <div className={`${CARD} p-6`}>
                <span className={`${CHIP} h-12 w-12`}>
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm text-[#94a3c4]">Otváracia doba</p>
                <p className="mt-1 text-xl font-bold text-white">Pondelok – Piatok</p>
                <p className="text-[#c2cde3]">8:00 – 16:30</p>
                <p className="mt-3 text-sm text-[#94a3c4]">
                  V sobotu a nedeľu máme zatvorené.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── PÄTIČKA ───────────── */}
      <footer className="border-t border-white/10 bg-[#04070f]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">AUTO - Speed s.r.o.</p>
            <p className="mt-1 text-[#94a3c4]">
              Severná 13, 971 01 Prievidza – Dubina. Autoservis a pneuservis od
              roku 2001.
            </p>
          </div>
          <div className="text-[#94a3c4] md:text-right">
            <p>Majiteľ: Maroš Mikuš</p>
            <p className="mt-1">© 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
