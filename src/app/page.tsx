"use client";

import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Paintbrush,
  Settings,
  Activity,
  Disc,
  Truck,
  ChevronRight,
  Menu,
  X,
  User,
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap
} from 'lucide-react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Automechanické práce",
      description: "Komplexné opravy motorov, podvozkov a náprav pre osobné aj ľahké úžitkové autá.",
      icon: <Wrench className="w-6 h-6" />,
      tag: "Základ"
    },
    {
      title: "Lakovňa & Striekací box",
      description: "Profesionálne lakovanie dielov a celých vozidiel vo vlastnom modernom striekacom boxe.",
      icon: <Paintbrush className="w-6 h-6" />,
      tag: "Premium"
    },
    {
      title: "Autoklampiarske práce",
      description: "Kvalitné opravy karosérie a precízne vyrovnávanie plechov po nehodách.",
      icon: <Settings className="w-6 h-6" />,
      tag: "Kvalita"
    },
    {
      title: "Autodiagnostika",
      description: "Moderná počítačová diagnostika riadiacich jednotiek a oprava elektrických rozvodov.",
      icon: <Activity className="w-6 h-6" />,
      tag: "Technológia"
    },
    {
      title: "3D Geometria kolies",
      description: "Presná nastavovacia geometria kolies pre maximálnu bezpečnosť a životnosť pneumatík.",
      icon: <Disc className="w-6 h-6" />,
      tag: "Presnosť"
    },
    {
      title: "Pneuservis & Klimatizácie",
      description: "Profesionálna výmena pneumatík a kompletný servis klimatizačných sústav.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Komfort"
    },
    {
      title: "Odťahová služba",
      description: "Rýchla a spoľahlivá pomoc pri poruchách a nehodách priamo na mieste.",
      icon: <Truck className="w-6 h-6" />,
      tag: "SOS"
    },
  ];

  const contacts = [
    { name: "p. Mikuš", phone: "0907 582 904", href: "tel:+421907582904", role: "Hlavný technik / Príjem" },
    { name: "p. Paprčka", phone: "0908 232 080", href: "tel:+421908232080", role: "Vedenie servisu" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-400 py-2.5 px-4 text-[13px] hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> Severná 13, Prievidza – Dubina (areál býv. družstva)
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Clock className="w-3.5 h-3.5 text-blue-500" /> Po – Pi: 8:00 – 16:30
            </span>
          </div>
          <div className="font-medium uppercase tracking-widest text-slate-200 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" /> Spoľahlivosť <span className="text-blue-500 font-bold">od roku 2001</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-blue-600 text-white font-black text-xl w-11 h-11 flex items-center justify-center rounded-xl shadow-md shadow-blue-200 group-hover:rotate-3 transition-transform">
              AS
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-slate-900">
                AUTO <span className="text-blue-600">-</span> SPEED
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mt-1">Autoservis Prievidza</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-slate-600">
            <a href="#o-nas" className="hover:text-blue-600 transition-all">O nás</a>
            <a href="#sluzby" className="hover:text-blue-600 transition-all">Služby</a>
            <a href="#kontakt" className="hover:text-blue-600 transition-all">Kontakt</a>
            <a href="tel:+421907582904" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-200 active:scale-95">
              <Phone className="w-4 h-4" /> Zavolať teraz
            </a>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#o-nas" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2">O nás</a>
            <a href="#sluzby" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2">Služby</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2">Kontakt</a>
            <a href="tel:+421907582904" className="bg-blue-600 text-white text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md">
              <Phone className="w-5 h-5" /> Zavolať teraz
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 flex items-center overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 rounded-l-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-400/10 rounded-full blur-3xl" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Profesionálny servis v Prievidzi
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase leading-[0.95] tracking-tighter">
                Kvalita <br />
                <span className="text-blue-600">bez kompromisov</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed font-medium">
                Od roku 2001 sa staráme o vaše vozidlá s maximálnou precíznosťou. Kombinujeme dlhoročné skúsenosti s najmodernejšou autodiagnostikou a vlastnou lakovňou.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="tel:+421907582904" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 text-base shadow-xl shadow-blue-200 active:scale-95">
                  <Phone className="w-5 h-5" /> Objednať termín
                </a>
                <a href="#sluzby" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 text-base border border-slate-200 shadow-sm">
                  Naše služby <ChevronRight className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Graphic Showcase */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-[36px] shadow-2xl border border-slate-700 space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">AUTO - Speed s.r.o.</span>
                    <h3 className="text-2xl font-black uppercase mt-1">Kompletné služby</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400">
                    <Wrench className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl font-black text-blue-400">2001</div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Rok založenia</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl font-black text-blue-400">100%</div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Vlastná lakovňa</div>
                  </div>
                </div>

                <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-xl"><Clock className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs font-bold text-slate-300 uppercase">Otváracie hodiny</div>
                    <div className="text-base font-extrabold text-white">Pondelok – Piatok: 8:00 – 16:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O nás Section */}
        <section id="o-nas" className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Paintbrush className="w-5 h-5" /></div>
                  <h4 className="font-bold text-base uppercase">Lakovňa</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Vlastný striekací box pre nanášanie laku bez prachu.</p>
                </div>
                <div className="p-6 bg-blue-50 text-slate-900 rounded-3xl space-y-3 border border-blue-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Activity className="w-5 h-5" /></div>
                  <h4 className="font-bold text-base uppercase">Diagnostika</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Počítačové vyhľadávanie porúch a reset chýb.</p>
                </div>
                <div className="p-6 bg-blue-50 text-slate-900 rounded-3xl space-y-3 border border-blue-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Disc className="w-5 h-5" /></div>
                  <h4 className="font-bold text-base uppercase">3D Geometria</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Presné laserové meranie a nastavenie podvozku.</p>
                </div>
                <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Award className="w-5 h-5" /></div>
                  <h4 className="font-bold text-base uppercase">Tradícia</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Viac ako 20 rokov stabilne v Prievidzi - Dubine.</p>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-6">
                <div>
                  <div className="text-blue-600 font-black uppercase tracking-[0.25em] text-xs mb-2">Naša história</div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-tight">
                    Budujeme dôveru <br />
                    <span className="text-blue-600">od roku 2001</span>
                  </h2>
                </div>
                <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  Spoločnosť <strong>AUTO - Speed s.r.o.</strong> bola založená v roku 2001 v areáli bývalého družstva v Prievidzi. Z pôvodne malej dielne zameranej na mechanické a klampiarske práce sme vybudovali plne vybavený autoservis.
                </p>
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  Dnes disponujeme vlastným lakovacím boxom, špičkovou 3D geometriou kolies, diagnostickými zariadeniami a kompletným zázemím pre rýchly a poctivý servis vášho auta.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 md:py-28 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-blue-600 font-black uppercase tracking-[0.25em] text-xs mb-2">Široký rozsah služieb</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4 tracking-tighter">
                Všetko pre vaše <span className="text-blue-600">vozidlo</span>
              </h2>
              <p className="text-slate-600 text-base font-medium">
                Od bežnej údržby po náročné karosárske a lakovnícke opravy pod jednou strechou.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group p-8 bg-white border border-slate-200/80 rounded-3xl hover:border-blue-300 transition-all hover:-translate-y-1 duration-300 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-3 uppercase text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden text-white">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              
              <div className="space-y-8 lg:col-span-1">
                <div>
                  <span className="text-blue-400 font-bold uppercase text-xs tracking-widest block mb-2">Lokalita & Kontakt</span>
                  <h2 className="text-4xl font-black uppercase leading-tight">
                    Nájdete nás <span className="text-blue-500">v Prievidzi</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 items-start">
                    <MapPin className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-400 text-xs uppercase font-bold">Adresa:</div>
                      <div className="text-base font-bold">Severná 13, 971 01 Prievidza – Dubina</div>
                      <div className="text-xs text-slate-400">(areál bývalého družstva)</div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 items-start">
                    <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-400 text-xs uppercase font-bold">Otváracie hodiny:</div>
                      <div className="text-base font-bold">Pondelok – Piatok: 8:00 – 16:30</div>
                      <div className="text-xs text-slate-400">Sobota – Nedeľa: Zatvorené</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                {contacts.map((person, index) => (
                  <div key={index} className="p-8 bg-white text-slate-900 rounded-3xl flex flex-col justify-between shadow-xl space-y-6">
                    <div>
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                        <User className="w-6 h-6" />
                      </div>
                      <span className="text-blue-600 font-extrabold uppercase text-[11px] tracking-wider">{person.role}</span>
                      <h3 className="text-2xl font-black uppercase mt-1">{person.name}</h3>
                    </div>

                    <a href={person.href} className="bg-slate-900 hover:bg-blue-600 text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-md">
                      <Phone className="w-5 h-5" /> {person.phone}
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white font-black text-sm px-2.5 py-1 rounded-lg">AS</div>
            <span className="font-black tracking-tighter uppercase text-slate-900 text-lg">
              AUTO - Speed s.r.o.
            </span>
          </div>
          <div className="text-center md:text-right text-xs font-medium space-y-1">
            <div>Severná 13, Prievidza – Dubina</div>
            <div>© 2026 AUTO - Speed s.r.o. Všetky práva vyhradené.</div>
       
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;