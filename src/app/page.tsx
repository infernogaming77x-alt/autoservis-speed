import React from 'react';
import { 
  Phone, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Disc, 
  Cpu, 
  ClipboardCheck, 
  Gauge, 
  Settings, 
  Shield, 
  Award, 
  MapPin 
} from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    title: "Mechanické opravy",
    description: "Kompletné opravy motorov, podvozkov, bŕzd, výmena rozvodov a výfukových systémov pre všetky značky áut."
  },
  {
    icon: <Disc className="w-6 h-6 text-blue-600" />,
    title: "Pneuservis & Geometria",
    description: "Sezónne prezúvanie pneumatík, vyvažovanie kolies, oprava defektov a 3D nastavovanie geometrie náprav."
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    title: "Profesionálna autodiagnostika",
    description: "Hĺbkové čítanie a mazanie chýb riadiacich jednotiek, diagnostika motora, DPF filtrov a elektroniky."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    title: "Príprava a vykonanie STK & EK",
    description: "Kompletná predkontrola vozidla pred technickou a emisnou kontrolou, vrátane vybavenia všetkých úkonov za vás."
  },
  {
    icon: <Gauge className="w-6 h-6 text-blue-600" />,
    title: "Servis klimatizácie",
    description: "Plnenie, čistenie, dezinfekcia okruhu klimatizácie a detekcia únikov chladiva modernou metódou."
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    title: "Pravidelné prehliadky",
    description: "Výmena olejov, filtrov a prevádzkových kvapalín podľa predpisov výrobcu so zachovaním záruky vozidla."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white text-slate-900 min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        {/* Jemný svetlý mriežkový vzor na pozadí */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />

        <div className="relative max-w-7xl mx-auto w-full py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Ľavá strana: Nadpis a akcie */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Poctivý autoservis v Prievidzi – Dubine od roku 2001</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Kompletná starostlivosť o vaše vozidlo <span className="text-blue-600">bez kompromisov</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Profesionálny autoservis a pneuservis pod vedením Maroša Mikuša. Rýchla diagnostika, spoľahlivé opravy a férové jednanie pre každé auto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="tel:+421905272052"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Zavolať ihneď: 0905 272 052</span>
              </a>

              <a
                href="#sluzby"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold px-8 py-4 rounded-xl transition-all shadow-sm"
              >
                <Wrench className="w-5 h-5 text-blue-600" />
                <span>Naše služby</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Otvorené</p>
                  <p className="text-sm font-semibold text-slate-800">Po - Pi: 8:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Záruka</p>
                  <p className="text-sm font-semibold text-slate-800">Na všetky práce</p>
                </div>
              </div>
            </div>

          </div>

          {/* Pravá strana: Rýchla info karta */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">AUTO - Speed s.r.o.</h3>
              <p className="text-slate-600 text-sm mb-6">
                Nájdete nás v Prievidzi – Dubine. Poskytujeme kompletný servis osobných motorových vozidiel s dôrazom na kvalitu a rýchlosť.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-sm text-slate-700 font-medium">Pneuservis & Geometria</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">Dostupné</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-sm text-slate-700 font-medium">Autodiagnostika</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">Profi</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-sm text-slate-700 font-medium">Mechanické opravy</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">Expresne</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="sluzby" className="py-24 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Naše odborné služby</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Komplexná starostlivosť pod jednou strechou
            </p>
            <p className="mt-4 text-slate-600 text-lg">
              V autoservise AUTO - Speed s.r.o. v Prievidzi – Dubine používame profesionálne vybavenie a rokmi overené postupy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 transition-all hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="o-nas" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Tradícia a skúsenosti</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Spoľahlivý partner pre vaše auto <span className="text-blue-600">už od roku 2001</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                Autoservis <strong className="text-slate-900">AUTO - Speed s.r.o.</strong> v Prievidzi – Dubine pod vedením <strong className="text-slate-900">Maroša Mikuša</strong> poskytuje dlhé roky poctivé a komplexné služby pre všetky značky osobných vozidiel. 
              </p>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                Našim cieľom je vždy rýchla diagnostika, férové ceny a maximálna bezpečnosť na cestách. Využívame moderné vybavenie a dlhoročné skúsenosti v odbore.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <p className="text-3xl font-extrabold text-blue-600 mb-1">20+</p>
                  <p className="text-xs text-slate-500">Rokov skúseností v regióne</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <p className="text-3xl font-extrabold text-blue-600 mb-1">100%</p>
                  <p className="text-xs text-slate-500">Dôraz na kvalitu a férovosť</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Záruka na práce</h3>
                <p className="text-xs text-slate-600">Na všetky vykonané opravy a vymenené diely poskytujeme jasnú záruku.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 sm:translate-y-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Moderné vybavenie</h3>
                <p className="text-xs text-slate-600">Pravidelne aktualizovaná diagnostika a profesionálne náradie pre vaše vozidlo.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="kontakt" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Kontaktujte nás</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Kde nás nájdete a ako sa spojíme
            </p>
            <p className="mt-4 text-slate-300 text-lg">
              Máte problém s autom alebo sa chcete objednať na servis či prezutie? Zavolajte nám alebo príďte do prevádzky v Dubine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Adresa prevádzky</h3>
              <p className="text-slate-300 text-sm">
                AUTO - Speed s.r.o.<br />
                Prievidza – Dubina<br />
                Slovensko
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Telefónny kontakt</h3>
              <p className="text-slate-300 text-sm mb-4">Neváhajte nás kontaktovať počas pracovnej doby.</p>
              <a 
                href="tel:+421905272052" 
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
              >
                0905 272 052
              </a>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Otváracia doba</h3>
              <div className="text-slate-300 text-sm space-y-1">
                <p><strong className="text-white">Pondelok – Piatok:</strong> 8:00 – 16:00</p>
                <p><strong className="text-white">Sobota – Nedeľa:</strong> Zatvorené</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <p>© {new Date().getFullYear()} AUTO - Speed s.r.o. (Maroš Mikuš). Všetky práva vyhradené.</p>
            <p className="mt-2 sm:mt-0">Prievidza – Dubina • Od roku 2001</p>
          </div>

        </div>
      </section>

    </main>
  );
}
