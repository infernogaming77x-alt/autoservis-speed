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
  Truck,
  FileText,
  Building2
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
              <span className="text-lg font-bold tracking-tight text-white block">AUTO – Speed s.r.o.</span>
              <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Autoservis a pneuservis • Prievidza</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#sluzby" className="hover:text-blue-400 transition-colors">Služby</a>
            <a href="#o-nas" className="hover:text-blue-400 transition-colors">O nás</a>
            <a href="#fakturacia" className="hover:text-blue-400 transition-colors">Fakturačné údaje</a>
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
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
            <img 
              src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1600" 
              alt="Autoservis dielňa" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a10] via-[#0b101c]/90 to-transparent z-0"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Severná 13, Prievidza – Dubina • Od roku 2001
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Kompletná starostlivosť o osobné a ľahké úžitkové auta
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Vykonávame odborné opravy motorov, podvozkov, náprav, modernú autodiagnostiku TEXA, 3D geometriu JohnBean a pneuservis.
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
                <span>Prezrieť služby</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. DETAILED SERVICES SECTION (Podľa zložiek z pôvodného webu) */}
        <section id="sluzby" className="space-y-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Naše odborné služby
            </h2>
            <p className="text-slate-400 text-base">
              Všetky práce vykonávame precízne, s dôrazom na kvalitu a použitie moderného vybavenia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Service 1: Autodiagnostika */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Autodiagnostika & Elektrické rozvody</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Diagnostika riadiacich jednotiek, vyhľadávanie závad elektrických obvodov pomocou profesionálneho diagnostického zariadenia <strong className="text-blue-400">TEXA – navigátor</strong>.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800" 
                    alt="Autodiagnostika" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Elektrické rozvody • Riadiace jednotky • TEXA
              </div>
            </div>

            {/* Service 2: Pneuservis */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Disc className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Pneuservis & kolesá</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Opravy defektov, odborné výmeny pneumatík, vyváženie plechových aj ALU diskov do veľkosti <strong>21 palcov</strong>. Možnosť zakúpenia pneumatík priamo u nás za výborné ceny.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=800" 
                    alt="Pneuservis" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Prezúvanie • Vyvažovanie • Predaj pneu do 21"
              </div>
            </div>

            {/* Service 3: Geometria 3D */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Geometria 3D technikou</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Používame modernú <strong className="text-blue-400">3D geometriu JohnBean</strong>, ktorá zaručuje maximálne presné a kvalitné zostavenie zbiehavosti a geometrie náprav.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" 
                    alt="Geometria 3D" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                JohnBean 3D technológia • Zbiehavosť
              </div>
            </div>

            {/* Service 4: Servis klimatizácie */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Snowflake className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Servis klimatizácie & čistenie s O3</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Diagnostika poruchy úniku chladiaceho média pomocou dusíka a čuchacieho zariadenia. Výmeny kompresorov, ventilov, výparníkov. Používame zariadenie <strong className="text-blue-400">Valeo</strong> a dezinfikujeme ozónmakarom.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1597780004245-ec54483a3254?auto=format&fit=crop&q=80&w=800" 
                    alt="Servis klimatizácie" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Valeo zariadenie • Ozónová dezinfekcia O3
              </div>
            </div>

            {/* Service 5: Odťahová služba */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Odťahová služba</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Odťah osobných vozidiel, možnosť zapožičania vozíka na odťah vozidiel. Komplexný odťah do hmotnosti <strong>2 tony</strong>.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800" 
                    alt="Odťahová služba" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Odťah do 2t • Preprava vozidiel
              </div>
            </div>

            {/* Service 6: Mechanické práce & Lakovanie */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Droplet className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Automechanické a klampiarske práce</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Kompletné opravy motorov, podvozkov, náprav, autoklampiarske práce, lakovanie a výmena lakovnických materiálov na špičkovej úrovni.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800" 
                    alt="Autoservis dielňa" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Motory • Podvozky • Lakovanie
              </div>
            </div>

          </div>
        </section>

        {/* 3. ABOUT / MANAGEMENT & BILLING INFO */}
        <section id="o-nas" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vedenie firmy */}
          <div className="bg-gradient-to-br from-[#0b101c] to-[#080c14] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vedenie firmy</span>
              <h3 className="text-2xl font-extrabold text-white">Kontakty na majiteľov</h3>
            </div>
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div>
                  <h4 className="text-white font-bold">Maroš Mikuš</h4>
                  <p className="text-slate-400 text-xs">Majiteľ autoservisu</p>
                </div>
                <a href="tel:+421907582904" className="text-blue-400 font-semibold text-sm hover:underline">
                  0907 582 904
                </a>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div>
                  <h4 className="text-white font-bold">Jozef Paprčka</h4>
                  <p className="text-slate-400 text-xs">Odborný personál</p>
                </div>
                <a href="tel:+421908232080" className="text-blue-400 font-semibold text-sm hover:underline">
                  0908 232 080
                </a>
              </div>
            </div>
          </div>

          {/* Fakturačné údaje */}
          <div id="fakturacia" className="bg-gradient-to-br from-[#0b101c] to-[#080c14] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Údaje spoločnosti</span>
              <h3 className="text-2xl font-extrabold text-white">Fakturačné údaje</h3>
            </div>
            <div className="space-y-3 text-sm text-slate-300 pt-2">
              <p className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Spoločnosť:</span> 
                <span className="font-semibold text-white">AUTO - SPEED s.r.o.</span>
              </p>
              <p className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Sídlo:</span> 
                <span className="font-semibold text-white">Severná 13, 971 01 Prievidza</span>
              </p>
              <p className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">IČO:</span> 
                <span className="font-semibold text-white">45311579</span>
              </p>
              <p className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">IČ DPH:</span> 
                <span className="font-semibold text-white">SK2022938676</span>
              </p>
              <p className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Bankové spojenie:</span> 
                <span className="font-semibold text-white">SK17 0200 0000 0026 8976 0753</span>
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Firma je zapísaná v živnostenskom registri pod číslom: 340-292 65.
              </p>
            </div>
          </div>

        </section>

        {/* 4. CONTACT & WORKING HOURS */}
        <section id="kontakt" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kontaktujte nás
            </h2>
            <p className="text-slate-400 text-base">
              Navštívte nás v našej dielni v Prievidzi - Dubine alebo nám zavolajte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0b101c] border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Telefón & Pevná linka</span>
                  <a href="tel:+421905272052" className="text-xl font-bold text-white hover:text-blue-400 transition-colors block mt-1">
                    +421 905 272 052
                  </a>
                  <p className="text-slate-400 text-xs mt-1">Pevná linka: 046 / 542 7302</p>
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
                  <h3 className="text-xl font-bold text-white mt-1">Severná 13</h3>
                  <p className="text-slate-400 text-sm mt-0.5">971 01 Prievidza – Dubina</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Severná+13+Prievidza" 
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
                  <p className="text-blue-400 font-semibold text-sm mt-0.5">8:00 – 16:30 hod.</p>
                </div>
              </div>
              <div className="text-xs text-slate-400 py-3 px-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                V sobotu a nedeľu máme zatvorené.
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-800/80 mt-24 py-12 bg-[#05070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-200 text-sm">AUTO – Speed s.r.o.</p>
            <p>Autoservis a pneuservis, Severná 13, Prievidza. Od roku 2001.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <p>Majitelia: Maroš Mikuš, Jozef Paprčka</p>
            <span className="hidden md:inline text-slate-700">•</span>
            <p>© 2026 AUTO – Speed s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}