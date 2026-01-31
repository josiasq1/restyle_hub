
import React from 'react';
import { PLATFORMS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="bg-[#F9F9F7] py-24 md:py-32 border-y border-[#2D2D2D]/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Copywriting Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">
            Posicionamos tu ropa en las mejores vitrinas del mundo
          </h2>
          <p className="text-lg text-[#2D2D2D]/60 max-w-2xl mx-auto leading-relaxed">
            Gestionamos la venta en las plataformas líderes para asegurar el máximo valor de tus prendas.
          </p>
        </div>

        {/* Platform Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className="group transition-all duration-500">
              <img 
                src={platform.logo} 
                alt={platform.name} 
                className="h-8 md:h-12 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out object-contain"
              />
            </div>
          ))}
        </div>

        {/* Trust Element */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#2D2D2D]/40 font-medium border-t border-[#2D2D2D]/5 pt-8 inline-block px-12">
            Expertos en la gestión de marcas de vanguardia: desde Inditex hasta firmas de lujo
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
