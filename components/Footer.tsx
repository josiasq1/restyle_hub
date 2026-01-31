
import React from 'react';

interface FooterProps {
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
  onAboutClick?: () => void;
  onCareersClick?: () => void;
  onPressClick?: () => void;
  onSustainabilityClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onTermsClick, 
  onPrivacyClick, 
  onAboutClick, 
  onCareersClick, 
  onPressClick,
  onSustainabilityClick
}) => {
  return (
    <footer className="bg-[#F9F9F7] py-20 px-6 border-t border-[#2D2D2D]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold tracking-tighter uppercase mb-6">
            Re-Style <span className="text-[#84A98C]">Hub</span>
          </div>
          <p className="text-[#2D2D2D]/50 max-w-sm leading-relaxed mb-8">
            Convertimos tu ropa de segunda mano a una experiencia de lujo sin fricciones. 
            Moda circular, logística inteligente y vida consciente.
          </p>
          <div className="flex space-x-4">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-[#2D2D2D]/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* X */}
            <a href="#" className="w-10 h-10 rounded-full border border-[#2D2D2D]/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group" aria-label="X">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Compañía</h4>
          <ul className="space-y-4 text-sm text-[#2D2D2D]/60">
            <li><button onClick={onAboutClick} className="hover:text-[#2D2D2D] transition-colors">Sobre nosotros</button></li>
            <li><button onClick={onSustainabilityClick} className="hover:text-[#2D2D2D] transition-colors">Sostenibilidad</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
          <ul className="space-y-4 text-sm text-[#2D2D2D]/60">
            <li>hello@restylehub.com</li>
            <li>+34 623232750</li>
            <li>Calle Serrano 44,</li>
            <li>28001 Madrid</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#2D2D2D]/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#2D2D2D]/30">
        <p>© 2025 Re-Style Hub. Todos los derechos reservados.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <button onClick={onPrivacyClick} className="hover:text-[#2D2D2D] transition-colors">Privacidad</button>
          <button onClick={onTermsClick} className="hover:text-[#2D2D2D] transition-colors">Términos</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
