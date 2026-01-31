
import React from 'react';

interface HeroProps {
  onDiscoverClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
  return (
    <section className="relative pt-20">
      {/* Main Immersive Banner */}
      <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
        {/* Background Image - Aesthetic curated clothing rack, no people */}
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Curated Fashion Rack" 
          className="w-full h-full object-cover object-center brightness-[0.7]"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-5xl animate-fade-in">
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
              Vende tu armario <br className="hidden md:block" /> sin mover un dedo
            </h1>
            
            <p className="text-white text-base md:text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-md opacity-90">
              Vende de forma premium, ahorra tiempo y únete a la red de moda circular más exclusiva.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onDiscoverClick}
                className="bg-white text-black px-12 py-4 rounded-full font-bold text-sm hover:bg-[#007782] hover:text-white transition-all transform hover:scale-105 shadow-xl active:scale-95"
              >
                Descubrir Catálogo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom fade for smoother transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F9F9F7] to-transparent"></div>
      </div>

      {/* Secondary Message */}
      <div className="bg-[#F9F9F7] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#007782] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Estatus Premium</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
            Tu ropa merece una segunda vida, tú mereces tu tiempo libre.
          </h2>
          <p className="text-sm md:text-base text-[#2D2D2D]/60 leading-relaxed">
            Gestionamos tu armario de principio a fin. Recogemos, autenticamos y vendemos en las plataformas líderes mundiales para que tú solo recibas los beneficios de tus piezas mejor cuidadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
