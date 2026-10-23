import React from 'react';
import { Wrench, Phone, MapPin, Clock, ShieldCheck, Car, CheckCircle2, Star } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Severná 13, Prievidza - Dubina</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-400" /> Po - Pi: 8:00 - 17:00</span>
          </div>
          <div>
            <span className="text-blue-400 font-medium">Rýchly a spoľahlivý autoservis v Prievidzi</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md shadow-blue-500/20">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-slate-900 block leading-none">AUTO - SPEED</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Autoservis Prievidza</span>
            </div>
          </div>
          <a 
            href="tel:0905123456" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Phone className="w-4 h-4" />
            <span>Zavolať servis</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Profesionálna starostlivosť
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Kompletné služby pre vaše vozidlo na jednom mieste
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Postaráme sa o bezchybný chod vášho auta. Ponúkame rýchly záručný aj pozáručný servis, diagnostiku, pneuservis a opravy všetkých značiek v Prievidzi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0905123456" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold text-center shadow-lg shadow-blue-600/30 transition-all"
              >
                Objednať sa na opravu
              </a>
              <a 
                href="#sluzby" 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-7 py-3.5 rounded-xl font-bold text-center transition-all"
              >
                Naše služby
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/50 p-6 rounded-2xl">
              <Car className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-1">Diagnostika</h3>
              <p className="text-slate-400 text-sm">Presné zistenie závad najmodernejšou technikou.</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/50 p-6 rounded-2xl">
              <Wrench className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-1">Pneuservis</h3>
              <p className="text-slate-400 text-sm">Prezúvanie, vyváženie a oprava defektov na počkanie.</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/50 p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-1">STK & EK</h3>
              <p className="text-slate-400 text-sm">Kompletná príprava a absolvovanie kontroly za vás.</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/50 p-6 rounded-2xl">
              <Star className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-1">Klimatizácie</h3>
              <p className="text-slate-400 text-sm">Čistenie, plnenie a dezinfekcia autoklimatizácií.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Čo všetko pre vás vieme spraviť?</h2>
          <p className="text-slate-600">
            V AUTO - Speed s.r.o. sa zameriavame na kvalitu, rýchlosť a férové ceny pre každého zákazníka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Opravy motorov a podvozkov",
              desc: "Výmena rozvodov, bŕzd, tlmičov, čapov, výfukov a generálne opravy motorov."
            },
            {
              title: "Pravidelná údržba & Oleje",
              desc: "Výmena oleja, filtrov, sviečok a kompletná sezónna prehliadka vozidla."
            },
            {
              title: "Autoelektrika & Diagnostika",
              desc: "Riešenie svietiacich kontroliek, opravy kabeláže, štartérov a alternátorov."
            },
            {
              title: "Príprava na STK / EK",
              desc: "Dôkladná kontrola vášho auta pred štátnou kontrolou vrátane jej vybavenia."
            },
            {
              title: "Servis klimatizácií",
              desc: "Plnenie chladivom R134a aj R1234yf, kontrola tesnosti a ozónová dezinfekcia."
            },
            {
              title: "Pneuservisné práce",
              desc: "Prezúvanie pneumatík, vyváženie kolies, sezónne uskladnenie a predaj pneu."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Navštívte nás v Prievidzi</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Nájdete nás v mestskej časti Dubina. Ak máte akýkoľvek problém s vozidlom, neváhajte nám zavolať alebo sa zastaviť osobne.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-xs text-slate-400">Adresa servisu</div>
                  <div className="font-semibold">Severná 13, Prievidza - Dubina</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-xs text-slate-400">Telefónny kontakt</div>
                  <div className="font-semibold">0905 123 456</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
            <h3 className="text-2xl font-bold mb-4">Otváracie hodiny</h3>
            <div className="space-y-3 text-slate-300 mb-8">
              <div className="flex justify-between py-2 border-b border-slate-700/50">
                <span>Pondelok - Piatok</span>
                <span className="font-semibold text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-700/50">
                <span>Sobota</span>
                <span className="font-semibold text-white">Na objednávku</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Nedeľa</span>
                <span className="text-slate-500">Zatvorené</span>
              </div>
            </div>
            <a 
              href="tel:0905123456" 
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
            >
              Zavolať a dohodnúť termín
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-6 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="font-black text-slate-900 tracking-tight">
              AUTO - Speed s.r.o.
            </span>
          </div>
          <div className="text-center md:text-right text-xs font-medium space-y-1">
            <div>Severná 13, Prievidza - Dubina</div>
            <div>© 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}