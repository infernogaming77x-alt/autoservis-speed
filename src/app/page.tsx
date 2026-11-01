import React from 'react';
import { 
  Wrench, 
  Disc, 
  Cpu, 
  ClipboardCheck, 
  Snowflake, 
  Droplet, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Award, 
  ExternalLink,
  Star,
  Quote
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070a10]/80 border-b border-slate-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">AUTO – Speed</span>
              <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Autoservis a pneuservis</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#sluzby" className="hover:text-blue-400 transition-colors">Služby</a>
            <a href="#o-nas" className="hover:text-blue-400 transition-colors">O nás</a>
            <a href="#recenzie" className="hover:text-blue-400 transition-colors">Recenzie</a>
            <a href="#kontakt" className="hover:text-blue-400 transition-colors">Kontakt</a>
          </nav>

          <div>
            <a 
              href="tel:+421905272052" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Zavolať</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <section className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0b101c] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent z-0"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Prievidza – Dubina • Od roku 2001
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Pre auto, na ktoré sa môžete spoľahnúť
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Poskytujeme prvotriednu starostlivosť, precízne mechanické opravy a modernú diagnostiku bez kompromisov. Váš spoľahlivý partner v Prievidzi.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="tel:+421905272052" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+421 905 272 052</span>
              </a>
              <a 
                href="#sluzby" 
                className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all backdrop-blur-md"
              >
                <span>Naše služby</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. SERVICES GRID */}
        <section id="sluzby" className="space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Čo pre vaše auto robíme
            </h2>
            <p className="text-slate-400 text-base">
              Komplexný servis a údržba pod vedením skúsených odborníkov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">Mechanické opravy</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Opravy od drobných závad až po náročnejšie zásahy do mechaniky vášho auta.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Motory, podvozky, brzdy
              </div>
            </div>

            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Disc className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">Pneuservis & geometria</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Správne namontované a nastavené kolesá sú základ bezpečnej jazdy.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Pneumatiky, vyvažovanie, 3D geometria
              </div>
            </div>

            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">Autodiagnostika</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Príčinu problému nájdeme presne, bez výmeny dielov naslepo.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Chyby riadiacich jednotiek, elektronika
              </div>
            </div>

            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">STK & EK</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Auto pripravíme na technickú a emisnú kontrolu a kontrolu vám aj vykonáme.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Predkontrola, oprava nedostatkov, STK & EK
              </div>
            </div>

            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Snowflake className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">Servis klimatizácie</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Aby ste cestovali v pohodlí a s čistým vzduchom v kabíne.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Plnenie, dezinfekcia, kontrola okruhu
              </div>
            </div>

            <div className="group relative bg-[#0b101c]/80 hover:bg-[#0e1626] border border-slate-800/80 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Droplet className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">Pravidelné prehliadky</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Pravidelná údržba predlžuje životnosť auta a predchádza drahým opravám.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Výmeny olejov, filtrov, kvapalín
              </div>
            </div>

          </div>
        </section>

        {/* 3. ABOUT / WHY CHOOSE US */}
        <section id="o-nas" className="bg-gradient-to-br from-[#0b101c] to-[#080c14] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prečo si vybrať AUTO – Speed
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              AUTO - Speed s.r.o. pôsobí v Prievidzi – Dubine od roku 2001. Za tie roky sme si meno vybudovali poctivou prácou, odbornosťou a úprimným prístupom k zákazníkom.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Firmu vedie majiteľ Maroš Mikuš, ktorý osobne dohliada na kvalitu každej jednej zákazky. U nás presne viete, čo vaše auto potrebuje a koľko to bude stáť.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
            
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                MM
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Maroš Mikuš</h4>
                <p className="text-slate-400 text-xs mt-0.5">Majiteľ autoservisu</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Tradícia od roku 2001</h4>
                <p className="text-slate-400 text-xs mt-0.5">Viac ako dve desaťročia praxe.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Férový prístup & záruka</h4>
                <p className="text-slate-400 text-xs mt-0.5">Jasná dohoda a záruka na prácu.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. REVIEWS / TESTIMONIALS */}
        <section id="recenzie" className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-blue-400" />
              <span>Skúsenosti zákazníkov</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hovoria za nás výsledky
            </h2>
            <p className="text-slate-400 text-base">
              Prečítajte si, čo o našej práci hovoria vodiči, ktorí nám zverili svoje vozidlá.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800/80" />
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  „Vždy ochotný a profesionálny prístup. Pán Mikuš presne vie, čo robí, auto bolo spravené v dohodnutom termíne a za fér cenu. Určite odporúčam každému v okolí Prievidze.“
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/60">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                  PK
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Peter K.</h4>
                  <p className="text-slate-400 text-xs">Overený zákazník</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800/80" />
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  „Skvelá komunikácia, rýchla autodiagnostika a vyriešenie problému, s ktorým iní servisi nevedeli pohnúť. Oceňujem poctivú prácu a skúsenosti.“
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/60">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                  MR
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Martin R.</h4>
                  <p className="text-slate-400 text-xs">Overený zákazník</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. CONTACT & BOOKING SECTION */}
        <section id="kontakt" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dohodnite si termín servisu
            </h2>
            <p className="text-slate-400 text-base">
              Zavolajte nám priamo alebo nás navštívte v Prievidzi - Dubine. Radi vám pomôžeme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Telefón</span>
                  <a href="tel:+421905272052" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors block mt-1">
                    +421 905 272 052
                  </a>
                </div>
              </div>
              <a 
                href="tel:+421905272052" 
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Zavolať teraz</span>
              </a>
            </div>

            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Adresa dielne</span>
                  <h3 className="text-xl font-bold text-white mt-1">Prievidza – Dubina</h3>
                  <p className="text-slate-400 text-sm mt-0.5">Slovensko</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Prievidza+Dubina+Auto+Speed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition-all border border-slate-700/60"
              >
                <span>Otvoriť v mapách</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Otváracia doba</span>
                  <h3 className="text-lg font-bold text-white mt-1">Pondelok – Piatok</h3>
                  <p className="text-blue-400 font-semibold text-sm mt-0.5">8:00 – 16:00</p>
                </div>
              </div>
              <div className="text-xs text-slate-400 py-3 px-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                V sobotu a nedeľu máme zatvorené.
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 6. FOOTER */}
      <footer className="border-t border-slate-800/80 mt-24 py-12 bg-[#05070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-200 text-sm">AUTO – Speed s.r.o.</p>
            <p>Autoservis a pneuservis, Prievidza – Dubina. Od roku 2001.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <p>Majiteľ: Maroš Mikuš</p>
            <span className="hidden md:inline text-slate-700">•</span>
            <p>© 2026 AUTO – Speed s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}