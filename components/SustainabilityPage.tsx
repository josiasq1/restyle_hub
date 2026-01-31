
import React from 'react';

interface SustainabilityPageProps {
  onBack: () => void;
}

const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#84A98C] mb-16 hover:translate-x-[-4px] transition-transform"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <span className="text-[#84A98C] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Nuestro Compromiso</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#2D2D2D] mb-8">
            Moda que <br /><span className="text-[#84A98C]">No termina</span>
          </h1>
          <p className="text-xl text-[#2D2D2D]/60 leading-relaxed max-w-xl">
            En Re-Style Hub, no solo vendemos ropa de segunda mano. Diseñamos el sistema logístico que permitirá que el 100% de las prendas premium permanezcan en uso, evitando que terminen en vertederos.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
              alt="Sustainable Fashion Materials" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-[#2D2D2D]/5 flex flex-col items-center">
            <span className="text-4xl font-black text-[#84A98C]">100%</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D2D2D]/40">Circular</span>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <section className="bg-[#2D2D2D] text-white rounded-[4rem] p-12 md:p-24 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">Impacto Acumulado 2024</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="text-6xl font-black text-[#84A98C] mb-4">42.5M</div>
            <p className="text-sm uppercase tracking-widest text-white/50">Litros de agua ahorrados</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-black text-[#84A98C] mb-4">120T</div>
            <p className="text-sm uppercase tracking-widest text-white/50">CO2 evitado al medio ambiente</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-black text-[#84A98C] mb-4">15k</div>
            <p className="text-sm uppercase tracking-widest text-white/50">Prendas premium rescatadas</p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="w-12 h-12 bg-[#84A98C]/10 rounded-2xl flex items-center justify-center text-[#84A98C]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold uppercase">Logística de Proximidad</h3>
          <p className="text-[#2D2D2D]/60 leading-relaxed text-sm">
            Nuestros Hubs situados en negocios locales reducen los viajes de última milla, consolidando recogidas y minimizando nuestra huella de transporte.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="w-12 h-12 bg-[#84A98C]/10 rounded-2xl flex items-center justify-center text-[#84A98C]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold uppercase">Extensión de Vida Útil</h3>
          <p className="text-[#2D2D2D]/60 leading-relaxed text-sm">
            Cada prenda que vuelve al mercado desplaza la necesidad de producir una nueva pieza, ahorrando recursos críticos de nuestro planeta.
          </p>
        </div>

        <div className="space-y-6">
          <div className="w-12 h-12 bg-[#84A98C]/10 rounded-2xl flex items-center justify-center text-[#84A98C]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold uppercase">Packaging Zero-Waste</h3>
          <p className="text-[#2D2D2D]/60 leading-relaxed text-sm">
            Utilizamos materiales 100% compostables y reciclados en todos nuestros envíos, eliminando plásticos de un solo uso de nuestra cadena de suministro.
          </p>
        </div>
      </div>

      {/* Future Roadmap */}
      <section className="mt-40 border-t border-[#2D2D2D]/5 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-3xl font-bold uppercase max-w-xs">Hoja de ruta <br /><span className="text-[#84A98C]">Net Zero 2030</span></h2>
          <div className="flex-grow space-y-8">
            <div className="flex gap-8">
              <span className="font-black text-[#84A98C]">2025</span>
              <p className="text-sm text-[#2D2D2D]/70">Electrificación total de la flota de última milla en las 10 principales ciudades europeas.</p>
            </div>
            <div className="flex gap-8">
              <span className="font-black text-[#84A98C]">2027</span>
              <p className="text-sm text-[#2D2D2D]/70">Lanzamiento del programa de reparación y restauración premium integrado en Hubs.</p>
            </div>
            <div className="flex gap-8">
              <span className="font-black text-[#84A98C]">2030</span>
              <p className="text-sm text-[#2D2D2D]/70">Alcanzar la neutralidad de carbono real en todas las operaciones globales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
