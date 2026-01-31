
import React from 'react';

interface CartPageProps {
  onJoinClick?: () => void;
  cartItems?: any[];
  onRemoveItem?: (cartId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ onJoinClick, cartItems = [], onRemoveItem }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.priceNum, 0);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
      {/* Promotion Banner */}
      <div className="bg-white border border-gray-100 p-6 md:p-10 rounded-sm mb-12 transition-all duration-500 shadow-sm">
        <h2 className="text-[#FB6303] text-xl md:text-2xl font-bold mb-3">
          Entrega rápida y gratuita para Miembros de Re-Style
        </h2>
        <p className="text-sm text-[#2D2D2D]/70 max-w-2xl leading-relaxed">
          Aquellas personas que sean Miembros de Re-Style cuya compra supere los 50 € tienen el envío gratuito. 
          <button 
            onClick={onJoinClick}
            className="ml-2 font-bold underline hover:text-black transition-colors"
          >
            Únete a nosotros
          </button>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Section: Cart Content */}
        <div className="flex-grow">
          <h1 className="text-2xl font-medium mb-12">Cesta ({cartItems.length})</h1>
          
          {cartItems.length === 0 ? (
            <div className="py-20 text-center border-y border-gray-50">
              <p className="text-sm text-[#2D2D2D]/40 uppercase tracking-widest font-medium">No tienes productos en tu cesta.</p>
            </div>
          ) : (
            <div className="space-y-10 border-t border-gray-50 pt-10">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-6 animate-fade-in">
                  <div className="w-32 h-40 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="font-bold">{item.price}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.marca} • {item.category}</p>
                    <p className="text-sm text-gray-500">Talla: <span className="text-black font-bold uppercase">{item.selectedSize}</span></p>
                    
                    <div className="pt-4 flex gap-4">
                      <button 
                        onClick={() => onRemoveItem?.(item.cartId)}
                        className="text-xs font-black uppercase tracking-widest text-red-500 hover:opacity-70 transition-opacity"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-24">
            <h2 className="text-2xl font-medium mb-6">Favoritos</h2>
            <p className="text-sm text-[#2D2D2D]/60 mb-4">
              ¿Quieres ver tus favoritos? <button onClick={onJoinClick} className="font-bold underline hover:text-black transition-colors">Únete a nosotros</button> o <button onClick={onJoinClick} className="font-bold underline hover:text-black transition-colors">Iniciar sesión</button>
            </p>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="w-full lg:w-[350px] shrink-0">
          <h2 className="text-2xl font-medium mb-8">Resumen</h2>
          
          <div className="space-y-5 mb-10">
            <div className="flex justify-between items-center group cursor-pointer border-b border-[#2D2D2D]/5 pb-4">
              <span className="text-sm font-medium">¿Tienes un código promocional?</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>

            <div className="flex justify-between text-sm py-1">
              <div className="flex items-center gap-1">
                <span>Subtotal</span>
              </div>
              <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between text-sm py-1 border-b border-[#2D2D2D]/5 pb-6">
              <span>Gastos de envío y gestión estimados</span>
              <span className={subtotal > 50 ? "text-[#84A98C] font-bold" : "text-black"}>
                {subtotal > 50 ? 'Gratuito' : '5.99 €'}
              </span>
            </div>

            <div className="flex justify-between font-bold py-6">
              <span className="text-lg">Total</span>
              <span className="text-lg">
                {(subtotal > 50 ? subtotal : (subtotal > 0 ? subtotal + 5.99 : 0)).toFixed(2)} €
              </span>
            </div>
          </div>

          <button 
            disabled={cartItems.length === 0}
            className={`w-full py-5 font-bold rounded-full transition-all uppercase text-[10px] tracking-widest ${
              cartItems.length === 0 
                ? 'bg-[#F5F5F5] text-[#2D2D2D]/30 cursor-not-allowed' 
                : 'bg-black text-white hover:opacity-80 active:scale-95 shadow-xl'
            }`}
          >
            Pasar por caja
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
