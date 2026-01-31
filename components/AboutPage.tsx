
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Story Section */}
        <div className="space-y-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#2D2D2D]">
            Mucho más que <br /><span className="text-[#84A98C]">segunda mano</span>
          </h1>
          
          <div className="space-y-6 text-lg text-[#2D2D2D]/70 leading-relaxed">
            <p className="font-medium text-[#2D2D2D]">
              Re-Style Hub nació de una frustración compartida: el tiempo que perdemos intentando ser sostenibles.
            </p>
            <p>
              Nuestra historia comenzó con una visión clara: democratizar la moda circular premium. Vimos armarios llenos de valor que terminaban en el olvido porque el proceso de venta era tedioso y carente de confianza. 
            </p>
            <p>
              Decidimos que la moda circular no debería ser un trabajo extra, sino una experiencia de conserjería de lujo. Hoy, somos el nexo entre los mejores armarios de la ciudad y los coleccionistas de piezas únicas.
            </p>
          </div>
        </div>

        {/* Visual Section - No people, just aesthetic textures */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1594494024039-6617119cc995?auto=format&fit=crop&q=80&w=1000" 
              alt="Premium clothing textures and quality control" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#84A98C] text-white p-10 rounded-3xl shadow-xl hidden md:block max-w-[280px]">
            <p className="text-3xl font-black mb-2 italic">"La mejor prenda es la que ya existe."</p>
            <p className="text-xs uppercase tracking-widest opacity-80">- Nuestro Mantra</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#2D2D2D]/5 pt-20">
        <div>
          <span className="text-[#84A98C] font-bold uppercase tracking-widest text-[10px] mb-4 block">01 / Excelencia</span>
          <h3 className="text-xl font-bold mb-4 uppercase">Curaduría Rigurosa</h3>
          <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
            Cada pieza que pasa por nuestros Hubs es autenticada por expertos. No vendemos ropa, gestionamos activos de moda con historia.
          </p>
        </div>
        <div>
          <span className="text-[#84A98C] font-bold uppercase tracking-widest text-[10px] mb-4 block">02 / Simplicidad</span>
          <h3 className="text-xl font-bold mb-4 uppercase">Fricción Cero</h3>
          <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
            Tu único trabajo es dejar la prenda en un Hub. Nosotros nos encargamos de la fotografía, el listado, la negociación y el envío.
          </p>
        </div>
        <div>
          <span className="text-[#84A98C] font-bold uppercase tracking-widest text-[10px] mb-4 block">03 / Impacto</span>
          <h3 className="text-xl font-bold mb-4 uppercase">Ecosistema Real</h3>
          <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
            Nuestra red de Hubs físicos apoya a negocios locales mientras reduce drásticamente la huella de carbono logística.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
