
import React, { useEffect, useState, useRef } from 'react';

const steps = [
  { title: 'Deposita', desc: 'Deja tus prendas en nuestros hubs seleccionados.', icon: 'M12 4v16m8-8H4' },
  { title: 'Gestionamos', desc: 'Autenticación, fotografía y logística logística premium.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Cobra', desc: 'Recibe tus beneficios automáticamente tras la venta.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const ProcessTimeline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight / 2;
      const end = rect.bottom - windowHeight / 2;
      const progress = Math.max(0, Math.min(1, -start / (end - start)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="proceso" ref={containerRef} className="py-32 bg-[#F9F9F7]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[#2D2D2D]">El lujo de no hacer nada</h2>
        
        <div className="relative">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#B08968]/20 -translate-y-1/2 hidden md:block"></div>
          
          {/* Progress Line */}
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-[#84A98C] -translate-y-1/2 transition-all duration-300 hidden md:block"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-16 md:gap-0">
            {steps.map((step, idx) => {
              const isActive = scrollProgress >= idx / (steps.length - 1);
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[250px] group">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 mb-6
                      ${isActive ? 'bg-[#84A98C] border-[#84A98C] text-white' : 'bg-white border-[#B08968]/30 text-[#B08968]'}`}
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 uppercase tracking-widest ${isActive ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]/40'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
