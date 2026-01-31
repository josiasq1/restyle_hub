
import React from 'react';

interface PressPageProps {
  onBack: () => void;
}

const pressReleases = [
  {
    source: 'Vogue Business',
    date: '12 Mayo, 2025',
    title: 'Re-Style Hub levanta 5M€ para digitalizar el armario premium en Europa.',
    link: '#'
  },
  {
    source: 'Forbes',
    date: '28 Abril, 2025',
    title: 'Las 30 startups de sostenibilidad que cambiarán el consumo en 2025.',
    link: '#'
  },
  {
    source: 'Business of Fashion',
    date: '15 Marzo, 2025',
    title: 'Por qué la logística de proximidad es la clave del éxito en la moda circular.',
    link: '#'
  }
];

const PressPage: React.FC<PressPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#84A98C] mb-16 hover:translate-x-[-4px] transition-transform"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
        <div className="lg:col-span-2">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#2D2D2D] mb-8">
            Sala de <br /><span className="text-[#84A98C]">Prensa</span>
          </h1>
          <p className="text-xl text-[#2D2D2D]/60 max-w-xl leading-relaxed">
            Estamos redefiniendo la relación entre los consumidores y sus armarios. Descubre nuestra historia, recursos y últimas actualizaciones.
          </p>
        </div>
        
        <div className="bg-[#2D2D2D] text-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">Press Kit 2025</h3>
            <p className="text-sm text-white/60 mb-8 leading-relaxed">
              Descarga nuestros logotipos oficiales, fotografías de los Hubs y biografías de los fundadores.
            </p>
          </div>
          <button className="w-full py-4 bg-[#84A98C] hover:bg-[#84A98C]/90 text-white rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Descargar Assets (.ZIP)
          </button>
        </div>
      </div>

      <section className="mb-32">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#2D2D2D]/40 mb-12 border-b border-[#2D2D2D]/5 pb-6">
          Noticias Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressReleases.map((release, i) => (
            <a 
              key={i} 
              href={release.link}
              className="group block p-8 bg-white border border-[#2D2D2D]/5 rounded-3xl hover:border-[#84A98C] transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#84A98C] bg-[#84A98C]/10 px-3 py-1 rounded-full">
                  {release.source}
                </span>
                <span className="text-[10px] text-[#2D2D2D]/40 uppercase font-bold">
                  {release.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-4 group-hover:text-[#84A98C] transition-colors leading-tight">
                {release.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mt-8 group-hover:translate-x-2 transition-transform">
                Leer más
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#F9F9F7] p-12 md:p-20 rounded-[3rem] border border-[#2D2D2D]/5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Contacto para Medios</h2>
          <p className="text-[#2D2D2D]/60 mb-10 leading-relaxed">
            ¿Eres periodista o creador de contenido y quieres saber más sobre nuestra visión de la moda circular? Nuestro equipo de comunicación está a tu disposición.
          </p>
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#2D2D2D]/40 mb-2 font-bold">Relaciones Globales</p>
              <p className="text-lg font-bold">press@restylehub.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#2D2D2D]/40 mb-2 font-bold">Teléfono Directo</p>
              <p className="text-lg font-bold">+34 91 234 56 78</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
