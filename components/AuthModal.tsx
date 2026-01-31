
import React, { useState } from 'react';

type AuthView = 'register_social' | 'register_email' | 'login_social' | 'login_email' | 'reset_password';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onTermsClick, onPrivacyClick }) => {
  const [view, setView] = useState<AuthView>('register_social');

  if (!isOpen) return null;

  const handleTermsNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onTermsClick) {
      onTermsClick();
      onClose();
    }
  };

  const handlePrivacyNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrivacyClick) {
      onPrivacyClick();
      onClose();
    }
  };

  const renderSocialButtons = () => (
    <div className="space-y-3 mb-8">
      <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3.5 rounded-full hover:bg-gray-50 transition-colors group">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">Continuar con Google</span>
      </button>
      <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3.5 rounded-full hover:bg-gray-50 transition-colors group">
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
        <span className="text-sm font-medium">Continuar con Apple</span>
      </button>
      <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3.5 rounded-full hover:bg-gray-50 transition-colors group">
        <svg className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        <span className="text-sm font-medium">Continuar con Facebook</span>
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-[480px] rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-fade-in p-8 md:p-14">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors p-2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* REGISTER SOCIAL VIEW */}
        {view === 'register_social' && (
          <div className="text-center">
            <h2 className="text-[26px] font-bold leading-tight mb-10 px-2 tracking-tight">
              Únete y vende la ropa que no te pones sin pagar comisión
            </h2>
            {renderSocialButtons()}
            <div className="text-sm text-gray-400 mt-10 space-y-3">
              <p>O regístrate con <button onClick={() => setView('register_email')} className="underline font-bold text-[#007fb8] hover:text-[#005f8a] transition-colors">e-mail</button></p>
              <p>¿Ya tienes una cuenta? <button onClick={() => setView('login_social')} className="underline font-bold text-[#007fb8] hover:text-[#005f8a] transition-colors">Iniciar sesión</button></p>
            </div>
          </div>
        )}

        {/* REGISTER EMAIL VIEW */}
        {view === 'register_email' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold leading-tight mb-4 pr-10">
              Introduce tu dirección de correo electrónico para unirte o iniciar sesión.
            </h2>
            <div className="flex items-center gap-2 text-sm mb-8">
              <span className="font-bold">España</span>
              <button className="underline text-gray-300 hover:text-black">Cambiar</button>
            </div>
            <div className="space-y-6">
              <input type="email" placeholder="Correo electrónico*" className="w-full border border-gray-200 rounded-2xl py-4 px-6 focus:border-black focus:ring-0 outline-none transition-colors placeholder:text-gray-300" />
              <p className="text-[11px] text-gray-400 leading-relaxed px-2">
                Al continuar, aceptas los <button onClick={handleTermsNavigation} className="underline hover:text-black transition-colors">Términos de uso</button> y confirmas que has leído la <button onClick={handlePrivacyNavigation} className="underline hover:text-black transition-colors">Política de privacidad</button>.
              </p>
              <div className="flex justify-between items-center pt-4">
                <button onClick={() => setView('register_social')} className="text-sm text-gray-400 hover:text-black transition-colors underline font-medium">Volver</button>
                <button className="bg-black text-white px-10 py-3.5 rounded-full font-bold text-sm hover:bg-black/80 transition-all active:scale-95 shadow-md">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LOGIN SOCIAL VIEW */}
        {view === 'login_social' && (
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight mb-10">
              ¡Hola de nuevo!
            </h2>
            {renderSocialButtons()}
            <div className="text-sm text-gray-400 mt-10 space-y-3">
              <p>O inicia sesión con <button onClick={() => setView('login_email')} className="underline font-bold text-[#007fb8] hover:text-[#005f8a]">e-mail</button></p>
              <p>¿Todavía no tienes una cuenta? <button onClick={() => setView('register_social')} className="underline font-bold text-[#007fb8] hover:text-[#005f8a]">Registrarse</button></p>
            </div>
          </div>
        )}

        {/* LOGIN EMAIL VIEW */}
        {view === 'login_email' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold leading-tight mb-10 text-center">
              Iniciar sesión
            </h2>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Nombre de usuario o e-mail" 
                className="w-full border-b border-gray-200 py-3 px-1 focus:border-[#008080] outline-none transition-colors placeholder-gray-300 text-sm"
              />
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  className="w-full border-b border-gray-200 py-3 px-1 focus:border-[#008080] outline-none transition-colors placeholder-gray-300 text-sm"
                />
              </div>

              <button className="w-full bg-[#008080] text-white py-4 mt-4 rounded-full font-bold text-sm hover:bg-[#006666] transition-colors shadow-lg">
                Continuar
              </button>

              <div className="text-center space-y-4 pt-4">
                <button onClick={() => setView('reset_password')} className="text-sm text-[#007fb8] hover:underline block w-full font-medium">¿Olvidaste tu contraseña?</button>
                <button onClick={() => setView('login_social')} className="text-sm text-gray-400 hover:text-black transition-colors underline block w-full font-medium">Volver</button>
              </div>
            </div>
          </div>
        )}

        {/* RESET PASSWORD VIEW */}
        {view === 'reset_password' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold leading-tight mb-8 text-center">
              Restablece tu contraseña
            </h2>
            <div className="space-y-8">
              <input 
                type="email" 
                placeholder="Introduce tu e-mail" 
                className="w-full border-b border-gray-200 py-3 px-1 focus:border-[#008080] outline-none transition-colors placeholder-gray-300 text-sm"
              />
              <button className="w-full bg-[#008080] text-white py-4 rounded-full font-bold text-sm hover:bg-[#006666] transition-colors shadow-lg">
                Enviar enlace
              </button>
              <div className="pt-4 text-center">
                <button onClick={() => setView('login_email')} className="text-sm text-gray-400 hover:text-black transition-colors underline font-medium">Volver</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
