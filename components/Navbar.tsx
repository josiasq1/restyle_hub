
import React from 'react';

interface NavbarProps {
  onCartClick?: () => void;
  onHomeClick?: () => void;
  onStartClick?: () => void;
  onNavigateToCatalog?: (category: string, filter?: { group: string, option: string }) => void;
  cartCount?: number;
  favoritesCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onCartClick, 
  onHomeClick, 
  onStartClick, 
  onNavigateToCatalog,
  cartCount = 0,
  favoritesCount = 0
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F9F9F7]/80 backdrop-blur-md border-b border-[#2D2D2D]/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={onHomeClick}
          className="text-xl font-bold tracking-tighter uppercase font-['Montserrat'] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          Re-Style <span className="text-[#84A98C]">Hub</span>
        </div>
        
        {/* Center Links - Functional Navigation */}
        <div className="hidden lg:flex space-x-8 text-[12px] font-bold uppercase tracking-tight text-[#2D2D2D]">
          <button 
            onClick={() => onNavigateToCatalog?.('Todos')}
            className="hover:text-[#2D2D2D]/60 transition-colors uppercase"
          >
            Novedades
          </button>
          <button 
            onClick={() => onNavigateToCatalog?.('Todos', { group: 'sexo', option: 'Hombre' })}
            className="hover:text-[#2D2D2D]/60 transition-colors uppercase"
          >
            Hombre
          </button>
          <button 
            onClick={() => onNavigateToCatalog?.('Todos', { group: 'sexo', option: 'Mujer' })}
            className="hover:text-[#2D2D2D]/60 transition-colors uppercase"
          >
            Mujer
          </button>
          <button 
            onClick={() => onNavigateToCatalog?.('Niño/a')}
            className="hover:text-[#2D2D2D]/60 transition-colors uppercase"
          >
            Niño/a
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2 hover:bg-[#E5E5E5] transition-colors w-40 md:w-56 group">
            <svg 
              className="w-5 h-5 text-[#2D2D2D] group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Buscar" 
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none placeholder-[#2D2D2D]/40 font-medium" 
            />
          </div>

          {/* Favorites (Heart) Icon */}
          <button className="relative p-1.5 hover:scale-110 transition-transform hidden xs:block">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-[#2D2D2D]"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#84A98C] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button 
            onClick={onStartClick}
            className="bg-black text-white px-6 py-2 text-sm font-bold rounded-full hover:bg-black/80 transition-all transform active:scale-95 shrink-0"
          >
            Empezar
          </button>

          {/* Shopping Bag Icon */}
          <button 
            onClick={onCartClick}
            className="relative p-1.5 hover:scale-110 transition-transform cursor-pointer"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-[#2D2D2D]"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
