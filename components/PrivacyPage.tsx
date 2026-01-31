
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
        Política de <br /><span className="text-[#84A98C]">Privacidad</span>
      </h1>

      <div className="space-y-12 text-[#2D2D2D]/80 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">1. Responsable del Tratamiento</h2>
          <p>
            Re-Style Hub S.L., con domicilio en Calle Serrano 44, Madrid, es el responsable del tratamiento de sus datos personales recogidos a través de esta plataforma. Nos comprometemos a proteger su privacidad con los más altos estándares de seguridad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">2. Datos que Recopilamos</h2>
          <p>
            Recopilamos información necesaria para la gestión de la moda circular: datos identificativos (nombre, email), datos de contacto, información sobre las prendas depositadas y preferencias de estilo. No almacenamos datos bancarios directamente; estos son gestionados por proveedores de pago certificados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">3. Finalidad del Tratamiento</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gestión de la recogida y venta de prendas en nuestra red de Hubs.</li>
            <li>Autenticación y valoración profesional de artículos de moda.</li>
            <li>Comunicación de estados de venta y transferencias de beneficios.</li>
            <li>Envío de comunicaciones comerciales personalizadas (solo bajo consentimiento previo).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">4. Conservación de Datos</h2>
          <p>
            Sus datos se conservarán mientras se mantenga la relación comercial y durante los plazos legales exigidos para atender posibles responsabilidades derivadas del tratamiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 uppercase tracking-tight">5. Sus Derechos</h2>
          <p>
            De acuerdo con el RGPD, usted tiene derecho a acceder, rectificar o suprimir sus datos, así como a la portabilidad de los mismos y a la limitación u oposición de su tratamiento contactando con nuestro DPO en <strong>privacy@restylehub.com</strong>.
          </p>
        </section>

        <div className="pt-12 border-t border-[#2D2D2D]/5">
          <p className="text-[10px] uppercase tracking-widest text-[#2D2D2D]/40">
            Última revisión: 24 de Mayo, 2025. Cumplimiento íntegro con el RGPD (EU).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
