
import React, { useState } from 'react';
import { DEPOSIT_POINTS } from '../constants';
import { DepositPoint } from '../types';

const MapSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<DepositPoint | null>(null);

  return (
    <section id="puntos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#84A98C] font-semibold uppercase tracking-widest text-xs">Localizador</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Nuestra red de recogida</h2>
          </div>
          <p className="max-w-sm text-[#2D2D2D]/60 italic">
            Estamos donde tú estás. Gimnasios, estudios de yoga y cafés boutique diseñados para tu estilo de vida.
          </p>
        </div>

        <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-[#E5E5E1]">
          {/* Mock Map Background */}
          <div className="absolute inset-0 grayscale opacity-80 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=2000" 
              alt="Map" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Map Overlay for interaction */}
          <div className="absolute inset-0" onClick={() => setSelectedPoint(null)}></div>

          {/* Custom Markers */}
          {DEPOSIT_POINTS.map((point) => (
            <button
              key={point.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPoint(point);
              }}
              style={{ top: `${point.lat}%`, left: `${point.lng}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-4 rounded-full shadow-lg transition-all duration-300 transform
                ${selectedPoint?.id === point.id ? 'bg-[#84A98C] scale-125 z-20' : 'bg-white hover:scale-110 z-10'}`}
            >
              <svg 
                className={`w-5 h-5 ${selectedPoint?.id === point.id ? 'text-white' : 'text-[#84A98C]'}`} 
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {/* Tooltip styled like price tag */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {point.type}
              </div>
            </button>
          ))}

          {/* Info Card (Floating) */}
          {selectedPoint && (
            <div className="absolute bottom-10 right-10 w-full max-w-[320px] bg-white rounded-3xl shadow-2xl p-4 animate-fade-in z-30 border border-[#2D2D2D]/5">
              <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                <img src={selectedPoint.image} alt={selectedPoint.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedPoint(null)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-xl font-bold mb-1">{selectedPoint.name}</h3>
              <p className="text-sm text-[#2D2D2D]/50 mb-4">{selectedPoint.address}</p>
              <button className="w-full py-3 bg-[#84A98C] text-white rounded-xl font-medium hover:bg-[#84A98C]/90 transition-colors">
                Dejar ropa aquí
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
