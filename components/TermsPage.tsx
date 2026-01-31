
import React from 'react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#84A98C] mb-12 hover:translate-x-[-4px] transition-transform"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-[#2D2D2D]">
        Términos y <br /><span className="text-[#84A98C]">Condiciones</span>
      </h1>

      <div className="space-y-12 text-[#2D2D2D]/80 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">1. Objeto del Servicio</h2>
          <p>
            Re-Style Hub ofrece una plataforma premium de gestión de moda circular. Nuestro servicio incluye la recogida de prendas en puntos autorizados (Hubs), la autenticación profesional, fotografía de alta calidad, listado en plataformas de terceros y la gestión logística integral de la venta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">2. Depósito en Hubs</h2>
          <p>
            Al depositar prendas en nuestra red de recogida (gimnasios, cafés y estudios de yoga), el usuario garantiza que los artículos son de su propiedad y que se encuentran en el estado descrito en el pre-registro digital. Re-Style Hub se reserva el derecho de rechazar artículos que no cumplan con los estándares de calidad "Premium" de la plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">3. Autenticación y Valoración</h2>
          <p>
            Todas las prendas pasan por un proceso de verificación. Si un artículo es identificado como no original o falsificado, será devuelto al usuario (con costes de gestión a su cargo) o donado, según la elección previa. La valoración de mercado es realizada por expertos utilizando algoritmos de precios en tiempo real para maximizar el beneficio del usuario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">4. Comisiones y Pagos</h2>
          <p>
            Re-Style Hub aplica una estructura de comisión transparente basada en el valor final de venta. Los beneficios se transfieren automáticamente a la cuenta del usuario una vez que el comprador final confirma la recepción y el período de devolución de la plataforma de venta ha expirado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">5. Privacidad y Datos</h2>
          <p>
            Sus datos personales se procesan de acuerdo con nuestra Política de Privacidad y el RGPD. No compartimos información con terceros más allá de lo estrictamente necesario para la ejecución logística y la venta de los productos.
          </p>
        </section>

        <div className="pt-12 border-t border-[#2D2D2D]/5">
          <p className="text-[10px] uppercase tracking-widest text-[#2D2D2D]/40">
            Última actualización: 24 de Mayo, 2025. Madrid, España.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
