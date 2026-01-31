
import React from 'react';

interface CareersPageProps {
  onBack: () => void;
}

const jobCategories = [
  { title: 'Development & IT', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'bg-blue-50' },
  { title: 'Design & Branding', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', color: 'bg-purple-50' },
  { title: 'Sales & Marketing', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z', color: 'bg-orange-50' },
  { title: 'Customer Services', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', color: 'bg-green-50' },
  { title: 'Accounting & Finance', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'bg-yellow-50' },
  { title: 'Human Resources', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-red-50' },
  { title: 'Production & Operation', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', color: 'bg-cyan-50' },
  { title: 'Engineering/Architects', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'bg-indigo-50' },
];

const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Search Hero Section */}
      <section className="bg-[#F0F2FF] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Images - Only workspace, no people */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Creative Studio Workspace" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              <div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Carrera</p>
                  <p className="text-xs font-bold">+50 Vacantes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text & Search */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-black text-[#2D2D2D] mb-6 leading-tight">
              Encuentra tu futuro en <span className="text-[#5D5FEF]">Re-Style Hub</span>
            </h1>
            <p className="text-gray-500 mb-10 max-w-lg leading-relaxed">
              Únete al equipo que está redefiniendo la moda. Buscamos mentes brillantes para escalar la economía circular a nivel global.
            </p>

            <div className="bg-white p-4 rounded-3xl shadow-xl space-y-4 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <select className="bg-transparent text-sm font-medium outline-none w-full">
                    <option>Ubicación</option>
                    <option>Madrid, ES</option>
                    <option>Remoto</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <select className="bg-transparent text-sm font-medium outline-none w-full">
                    <option>Tipo de Contrato</option>
                    <option>Jornada Completa</option>
                    <option>Prácticas</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Buscar puesto (ej. Frontend Engineer)" 
                  className="flex-grow px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 text-sm outline-none focus:ring-2 ring-blue-500/20"
                />
                <button className="bg-[#FB6303] text-white px-10 py-3 rounded-2xl font-bold hover:bg-[#e55a02] transition-colors shadow-lg">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Departamentos</h2>
        <p className="text-gray-400 mb-16 max-w-md mx-auto">Explora oportunidades en todos nuestros equipos y encuentra tu lugar en la revolución circular.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobCategories.map((cat, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-gray-50 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 flex flex-col items-center">
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#5D5FEF] transition-colors">{cat.title}</h3>
              <p className="text-xs text-gray-400 font-medium">Ver posiciones abiertas</p>
            </div>
          ))}
        </div>

        <button 
          onClick={onBack}
          className="mt-20 text-xs font-black uppercase tracking-widest text-[#84A98C] hover:opacity-70 transition-opacity flex items-center gap-2 mx-auto"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al Inicio
        </button>
      </section>
    </div>
  );
};

export default CareersPage;
