
import React from 'react';

const HubVideo: React.FC = () => {
  return (
    <section id="video" className="py-32 bg-[#2D2D2D] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#84A98C] font-semibold uppercase tracking-[0.4em] text-xs">Visión 2025</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">Dentro del Re-Style <span className="italic">Hub</span></h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#84A98C] to-[#B08968] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl border border-white/10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/-lz-cUS2pcA?autoplay=0&mute=1" 
              title="Re-Style Hub Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#84A98C]">15k+</p>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Prendas Rescatadas</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#84A98C]">98%</p>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Satisfacción</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#84A98C]">24h</p>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Promedio Recogida</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#84A98C]">€2.4M</p>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Devuelto a Usuarios</p>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#84A98C]/5 skew-x-12 transform origin-top"></div>
    </section>
  );
};

export default HubVideo;
