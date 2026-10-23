import React from 'react';
import { 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Car, 
  Star, 
  Cpu, 
  Gauge, 
  Thermometer, 
  Disc, 
  Zap, 
  ChevronRight,
  Award,
  History,
  Paintbrush
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
              <Clock className="w-3.5 h-3.5 text-blue-500" /> Po - Pi: 8:00 - 16:30
            </span>
          </div>
          <div className="flex items-center gap-2 font-medium text-blue-400">
            <Award className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Tradičný autoservis v Prievidzi už od roku 2001</span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo with Original Image & Styled Fallback */}
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="relative bg-white p-2 rounded-xl shadow-lg shadow-blue-600/10 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 flex items-center justify-center min-w-[50px] min-h-[50px]">
              <img 
                src="http://autoservis-prievidza.sk/pic/nadpis.jpg" 
                alt="AUTO - SPEED s.r.o. Logo" 
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  // Fallback ak sa nepodarí načítať externý obrázok z ich starého servera
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="hidden group-has-[img[style*='display: none']]:flex items-center gap-2 text-slate-900 font-black">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div>
              <span className="font-black text-2xl tracking-tight text-white block leading-none group-hover:text-blue-400 transition-colors">
                AUTO - SPEED <span className="text-xs font-semibold text-blue-500">s.r.o.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Autoservis, Lakovňa & Pneuservis</span>
            </div>
          </div>

          <a 
            href="tel:0465427302" 
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>046 / 542 7302</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest shadow-inner">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Tradičná kvalita & Lakovňa
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Kompletná starostlivosť o vaše vozidlo v <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Prievidzi</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Postaráme sa o vaše auto od základného mechanického servisu cez lakovnícke práce a striekací box, až po zložité diagnostiky a generálne opravy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:0465427302" 
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Objednať sa na servis</span>
              </a>
              <a 
                href="#o-nas" 
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:-translate-y-1"
              >
                <span>Náš príbeh od r. 2001</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-black text-white">Od 2001</div>
                <div className="text-xs text-slate-400 font-medium">Viac ako 20 rokov skúseností</div>
              </div>
              <div>
                <div className="text-2xl font-black text-blue-400">Lakovňa</div>
                <div className="text-xs text-slate-400 font-medium">Vlastný striekací box</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Prievidza</div>
                <div className="text-xs text-slate-400 font-medium">Dubina - Severná 13</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Paintbrush className="w-7 h-7 text-blue-400" />,
                title: "Lakovňa & Box",
                desc: "Profesionálny striekací box a autoklampiarske práce po nehode."
              },
              {
                icon: <Cpu className="w-7 h-7 text-blue-400" />,
                title: "Diagnostika & GO",
                desc: "Zisťovanie závad, elektroinštalácia a generálne opravy motorov."
              },
              {
                icon: <Disc className="w-7 h-7 text-blue-400" />,
                title: "Pneuservis",
                desc: "Prezúvanie, vyváženie a oprava defektov na počkanie."
              },
              {
                icon: <Gauge className="w-7 h-7 text-blue-400" />,
                title: "STK & Geometria",
                desc: "Príprava na kontrolu, emisné merania a nastavenie podvozka."
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

      {/* History / About Us Section - Presne z pôvodnej stránky */}
      <section id="o-nas" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <History className="w-4 h-4" /> Profil firmy
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Ako sme vznikli a kam sme sa posunuli
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Firma <strong>AUTO - Speed s.r.o.</strong> vznikla v roku <strong>2001</strong> v areáli bývalého družstva v Prievidzi. V našich začiatkoch sme vykonávali len menšie mechanické a klampiarske práce.
                </p>
                <p>
                  Neskôr sa naša firma rozšírila o moderný <strong>striekací box a vlastnú lakovňu</strong>. Neustále sa rozvíjame a dopĺňame nové technológie – dnes zákazníkom ponúkame špičkovú počitačovú diagnostiku, elektro rozvody aj kompletné generálne opravy (GO) motorov pre osobné a ľahké úžitkové autá.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="inline-flex p-3 rounded-xl bg-blue-600/20 text-blue-400 mb-2">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Kontaktná osoba</h3>
              <p className="text-slate-400 text-sm">Pre všetky otázky a dohodnutie termínu je vám k dispozícii:</p>
              <div className="text-lg font-black text-blue-400">Maroš Mikuš</div>
              <a 
                href="tel:0465427302" 
                className="inline-block bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 transition-colors"
              >
                046 / 542 7302
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="sluzby" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block">
            Kompletná ponuka
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Naše služby pre vaše vozidlo
          </h3>
          <p className="text-slate-400 text-base">
            Poskytujeme servis pre osobné a ľahké úžitkové automobily všetkých značiek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Lakovanie & Klampiarske práce",
              desc: "Vlastný striekací box, lakovanie karosérie, opravy plechov a karosárskych dielov po haváriách.",
              icon: <Paintbrush className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Mechanické práce & GO",
              desc: "Generálne opravy motorov, výmeny rozvodov, bŕzd, tlmičov, výfukových systémov a podvozkových dielov.",
              icon: <Wrench className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Autoelektrika & Diagnostika",
              desc: "Počítačová diagnostika, hľadanie elektrických závad, opravy kabeláží a elektro rozvodov.",
              icon: <Zap className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Pneuservis & Geometria",
              desc: "Prezúvanie pneumatík, vyváženie kolies, lepenie defektov a presné nastavenie geometrie.",
              icon: <Disc className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Servis klimatizácií",
              desc: "Čistenie, plnenie chladivom, ozónová dezinfekcia interiéru a kontrola tesnosti okruhu.",
              icon: <Thermometer className="w-6 h-6 text-blue-400" />
            },
            {
              title: "Odťahová služba & STK/EK",
              desc: "Príprava a absolvovanie technickej aj emisnej kontroly, v prípade potreby odťah vozidla.",
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
                <span>Zavolajte pre konzultáciu</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-14 overflow-hidden shadow-2xl shadow-blue-600/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black text-white mb-3">Potrebujete opraviť auto alebo lakovať diel?</h3>
            <p className="text-blue-100 text-base">
              Neváhajte nás kontaktovať na pevnej linke. Radi vám poradíme a dohodneme najbližší voľný termín.
            </p>
          </div>
          <a 
            href="tel:0465427302" 
            className="relative z-10 shrink-0 bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span>046 / 542 7302</span>
          </a>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">Adresa a kontaktné údaje</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Nájdete nás v mestskej časti Prievidza - Dubina na Severnej ulici č. 13.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Sídlo servisu</div>
                  <div className="text-base font-bold text-white">AUTO-SPEED s.r.o., Severná 13, 971 01 Prievidza - Dubina</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Pevná linka / Kontakt</div>
                  <div className="text-base font-bold text-white">046 / 542 7302 (Maroš Mikuš)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours Box */}
          <div className="bg-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <Clock className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold text-white">Oficiálne otváracie hodiny</h4>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Pondelok – Piatok</span>
                <span className="font-bold text-white bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">8:00 – 16:30</span>
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
              href="tel:0465427302" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              Zavolať do servisu
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
              AUTO - SPEED s.r.o.
            </span>
          </div>
          <div>
            Severná 13, Prievidza - Dubina | Autoservis, Lakovňa & Pneuservis
          </div>
          <div>
            © 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.
          </div>
        </div>
      </footer>

    </div>
  );
}