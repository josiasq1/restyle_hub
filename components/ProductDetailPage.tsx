
import React, { useState } from 'react';

interface ProductDetailPageProps {
  product: any;
  onBack: () => void;
  onAddToCart: (product: any, size: string) => void;
  onToggleFavorite: (productId: number) => void;
  isFavorite: boolean;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ 
  product, 
  onBack, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite 
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAddToCartClick = () => {
    if (!selectedSize) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
      return;
    }
    
    setIsAdding(true);
    onAddToCart(product, selectedSize);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
      {/* Navegación y Volver */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-10 group"
      >
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver al catálogo
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Columna Izquierda: Imagen Única Principal */}
        <div className="lg:col-span-8">
          <div className="aspect-[4/5] bg-[#F6F6F6] rounded-3xl overflow-hidden relative group shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {product.tag && (
              <span className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl z-10">
                ★ {product.tag}
              </span>
            )}
          </div>
        </div>

        {/* Columna Derecha: Información y Compra */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-2">
            <span className="text-[#FB6303] text-[10px] font-black uppercase tracking-[0.2em]">Materiales Circulares</span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">{product.marca} <br /> {product.name}</h1>
            <p className="text-gray-400 font-medium text-sm uppercase tracking-wide">{product.category} • {product.sexo}</p>
            <p className="text-2xl font-black pt-4">{product.price}</p>
          </div>

          {/* Selector de Tallas */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <p className={`text-xs font-black uppercase tracking-widest transition-colors ${showError ? 'text-red-500' : 'text-gray-800'}`}>
                {showError ? 'Debes seleccionar una talla' : 'Selecciona tu talla'}
              </p>
              <button className="text-[10px] font-black text-gray-400 hover:text-black underline uppercase tracking-widest">
                Guía de tallas
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button 
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setShowError(false);
                  }}
                  className={`py-4 rounded-xl text-xs font-black transition-all border ${
                    selectedSize === size 
                      ? 'bg-black text-white border-black shadow-lg scale-105' 
                      : 'bg-white border-gray-100 text-gray-400 hover:border-black hover:text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Acciones principales */}
          <div className="space-y-3 pt-6">
            <button 
              onClick={handleAddToCartClick}
              disabled={isAdding}
              className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-2 ${
                isAdding ? 'bg-[#84A98C] text-white' : 'bg-black text-white hover:opacity-90'
              }`}
            >
              {isAdding ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  Añadido
                </>
              ) : 'Añadir a la cesta'}
            </button>
            <button 
              onClick={() => onToggleFavorite(product.id)}
              className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border ${
                isFavorite 
                  ? 'bg-white border-red-500 text-red-500' 
                  : 'bg-white border-gray-100 text-black hover:border-black'
              }`}
            >
              {isFavorite ? 'En favoritos' : 'Añadir a favoritos'}
              <svg 
                width="18" height="18" viewBox="0 0 24 24" 
                fill={isFavorite ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          {/* Sostenibilidad y Detalle */}
          <div className="bg-[#F9F9F7] border border-gray-50 p-8 rounded-[2rem] space-y-4">
            <p className="text-xs font-bold text-gray-800 leading-relaxed text-center italic">
              "Esta pieza ha sido recuperada y autenticada para garantizar su calidad premium y reducir el impacto ambiental."
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Calidad impecable garantizada por el equipo de **Re-Style Hub**. Esta prenda de {product.marca} representa la cúspide del diseño circular.
            </p>
            <div className="pt-4 space-y-1">
               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Modelo: RS-H-{product.id}-2025</p>
               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Envío: 24-48h (Hub Express)</p>
            </div>
          </div>

          {/* Acordeones de información */}
          <div className="border-t border-gray-100 pt-6">
            {['Logística Circular', 'Autenticación', 'Devoluciones'].map((title) => (
              <div key={title} className="border-b border-gray-100">
                <button 
                  onClick={() => toggleAccordion(title)}
                  className="w-full py-5 flex justify-between items-center text-left hover:opacity-60 transition-opacity"
                >
                  <span className="text-xs font-black uppercase tracking-widest">{title}</span>
                  <svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    className={`transition-transform duration-500 ${openAccordion === title ? 'rotate-180 text-black' : 'text-gray-300'}`}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === title && (
                  <div className="pb-6 text-xs text-gray-400 leading-relaxed animate-fade-in font-medium">
                    Procesamos cada artículo con estándares de lujo. En Re-Style Hub, la transparencia es nuestro valor fundamental para asegurar que tu experiencia de moda circular sea excepcional.
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
