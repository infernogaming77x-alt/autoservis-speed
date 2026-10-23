import React from 'react';
import { 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Car, 
  CheckCircle2, 
  Star, 
  Cpu, 
  Gauge, 
  Thermometer, 
  Disc, 
  Zap, 
  ChevronRight,
  Award
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> Severná 13, Prievidza - Dubina
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-blue-500" /> Po - Pi: 8:00 - 17:00
            </span>
          </div>
          <div className="flex items-center gap-2 font-medium text-blue-400">
            <Award className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Spodné a hlavné opravy všetkých značiek vozidiel</span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-tight text-white block leading-none group-hover:text-blue-400 transition-colors">
                AUTO - SPEED <span className="text-xs font-normal text-blue-500">s.r.o.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Autoservis & Pneuservis Prievidza</span>
            </div>
          </div>

          <a 
            href="tel:0905123456" 
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>Zavolať do servisu</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest shadow-inner">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Garancia kvality a rýchlosti
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Spoľahlivý autoservis pre vaše auto v <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Prievidzi</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Poskytujeme kompletnú starostlivosť o osobná aj úžitkové vozidlá. Od počítačovej diagnostiky, cez autoelektriku, pneuservis, až po záručný a pozáručný servis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:0905123456" 
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Objednať sa na opravu</span>
              </a>
              <a 
                href="#sluzby" 
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:-translate-y-1"
              >
                <span>Prezrieť služby</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Highlights Badges */}
            <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium">Profesionálny prístup</div>
              </div>
              <div>
                <div className="text-2xl font-black text-blue-400">Rýchlo</div>
                <div className="text-xs text-slate-400 font-medium">Krátke dodacie lehoty</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Prievidza</div>
                <div className="text-xs text-slate-400 font-medium">Mestská časť Dubina</div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Cards Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Cpu className="w-7 h-7 text-blue-400" />,
                title: "Autoelektrika",
                desc: "Diagnostika riadiacich jednotiek a riešenie zložitej elektroinštalácie."
              },
              {
                icon: <Disc className="w-7 h-7 text-blue-400" />,
                title: "Pneuservis",
                desc: "Prezúvanie, vyváženie kolies a oprava defektov pre všetky rozmery."
              },
              {
                icon: <Thermometer className="w-7 h-7 text-blue-400" />,
                title: "Klimatizácie",
                desc: "Plnenie, dezinfekcia ozónom a kompletný servis autoklimatizácie."
              },
              {
                icon: <Gauge className="w-7 h-7 text-blue-400" />,
                title: "STK & EK",
                desc: "Kompletná príprava vozidla a vybavenie emisií a technickej kontroly."
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="group bg-slate-900/80 backdrop-blur border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 cursor-default"
              >
                <div className="bg-slate-800/80 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Services Section */}
      <section id="sluzby" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block">
            Naša ponuka služieb
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Čo pre vaše vozidlo zabezpečujeme?
          </h3>
          <p className="text-slate-400 text-base">
            V servise <strong>AUTO - Speed s.r.o.</strong> kladieme dôraz na presnosť, kvalitné náhradné diely a bezpečnosť vášho auta na cestách.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Mechanické opravy motorov",
              desc: "Výmeny rozvodov, bŕzd, tlmičov, výfukových systémov, čapov, spojok a generálne opravy pohonných jednotiek.",
              icon: <Wrench className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Autoelektrika & Diagnostika",
              desc: "Zisťovanie závad najmodernejšou diagnostickou technikou, oprava štartérov, alternátorov a senzorov.",
              icon: <Zap className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Kompletný Pneuservis",
              desc: "Sezónne prezúvanie pneumatík, vyváženie diskov, lepenie defektov a uskladnenie kolies.",
              icon: <Disc className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Servis klimatizácií",
              desc: "Plnenie chladivom, čiistenie okruhu, ozónová dezinfekcia interiéru a oprava kompresorov.",
              icon: <Thermometer className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Príprava a vykonanie STK/EK",
              desc: "Dôkladná kontrola technického stavu vozidla a kompletné absolvovanie štátnej kontroly za vás.",
              icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Pravidelný záručný servis",
              desc: "Výmena motorového oleja, filtrov, sviečok, brzdovej kvapaliny a celková prevádzková prehliadka.",
              icon: <Car className="w-6 h-6 text-blue-400" />
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Viac info po telefóne</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Call to Action Banner */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-14 overflow-hidden shadow-2xl shadow-blue-600/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black text-white mb-3">Potrebujete rýchlu opravu alebo prehliadku?</h3>
            <p className="text-blue-100 text-base">
              Zavolajte nám a dohodnite si termín, ktorý vám vyhovuje. Sme tu pre vás v Prievidzi - Dubine.
            </p>
          </div>
          <a 
            href="tel:0905123456" 
            className="relative z-10 shrink-0 bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span>0905 123 456</span>
          </a>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">Kde nás nájdete?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Náš autoservis sídli v Prievidzi, v mestskej časti Dubina. Vďaka výbornej dostupnosti k nám ľahko trafíte z celej Prievidze a blízkeho okolia.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Adresa dielne</div>
                  <div className="text-base font-bold text-white">Severná 13, Prievidza - Dubina</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Kontakt pre objednávky</div>
                  <div className="text-base font-bold text-white">0905 123 456</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours Box */}
          <div className="bg-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <Clock className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold text-white">Otváracie hodiny</h4>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Pondelok - Piatok</span>
                <span className="font-bold text-white bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Sobota</span>
                <span className="font-semibold text-slate-300">Na objednávku</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-400">Nedeľa</span>
                <span className="text-slate-500 font-medium">Zatvorené</span>
              </div>
            </div>

            <a 
              href="tel:0905123456" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              Zavolať a dohodnúť termín
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 px-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-300 text-sm">
              AUTO - Speed s.r.o.
            </span>
          </div>
          <div>
            Severná 13, Prievidza - Dubina | Autoservis & Pneuservis
          </div>
          <div>
            © 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.
          </div>
        </div>
      </footer>

    </div>
  );
}