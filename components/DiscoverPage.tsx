
import React, { useState, useMemo, useEffect, useRef } from 'react';

// Tipos para el filtrado
export interface FilterState {
  sexo: string[];
  precio: string[];
  color: string[];
  marca: string[];
}

const CATEGORIES = [
  'Todos',
  'Zapatillas', 
  'Camisetas y partes de arriba', 
  'Sudaderas con y sin capucha',
  'Chaquetas y chalecos', 
  'Pantalones y mallas', 
  'Pantalones cortos',
  'Accesorios y equipamiento',
  'Niño/a'
];

const FILTER_GROUPS = [
  { id: 'sexo', label: 'Sexo', options: ['Hombre', 'Mujer', 'Unisex'] },
  { id: 'precio', label: 'Filtrar por precio', options: ['0 € - 50 €', '50 € - 100 €', '100 € - 150 €', 'Más de 150 €'] },
  { id: 'color', label: 'Color', options: ['Negro', 'Blanco', 'Azul', 'Verde', 'Gris', 'Multicolor'] },
  { id: 'marca', label: 'Marca', options: ['Adidas', 'Nike', 'Canada Goose', 'Re-Style Select', 'Jordan'] },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Novedades' },
  { id: 'price-asc', label: 'Precio: de menor a mayor' },
  { id: 'price-desc', label: 'Precio: de mayor a menor' },
  { id: 'name-asc', label: 'Nombre: A-Z' },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Adidas Cloudfoam Street Forest',
    desc: 'Zapatillas de piel blanca premium con detalles en verde bosque sobre caja - Unisex',
    price: '89,99 €',
    priceNum: 89.99,
    colors: ['#FFFFFF', '#1B4D3E'],
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
    tag: 'Nueva llegada',
    tagColor: 'text-black',
    colorsCount: 2,
    category: 'Zapatillas',
    sexo: 'Unisex',
    marca: 'Adidas'
  },
  {
    id: 2,
    name: 'Parka Técnica Ártica Premium',
    desc: 'Chaqueta de invierno con aislamiento térmico en percha - Color Borgoña',
    price: '249,99 €',
    priceNum: 249.99,
    colors: ['#800020'],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800', 
    tag: 'Estatus Premium',
    tagColor: 'text-[#84A98C]',
    colorsCount: 1,
    category: 'Chaquetas y chalecos',
    sexo: 'Hombre',
    marca: 'Canada Goose'
  },
  {
    id: 3,
    name: 'Adidas Forum Low Navy Blue',
    desc: 'Clásico reinventado en piel blanca y franjas azul marino sobre caja original',
    price: '94,99 €',
    priceNum: 94.99,
    colors: ['#FFFFFF', '#000080'],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    tag: null,
    colorsCount: 3,
    category: 'Zapatillas',
    sexo: 'Unisex',
    marca: 'Adidas'
  },
  {
    id: 4,
    name: 'Jersey Knit Dark Grey',
    desc: 'Jersey de lana merino de punto grueso en percha de madera - Gris Antracita',
    price: '64,99 €',
    priceNum: 64.99,
    colors: ['#4A4A4A'],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    tag: 'Materiales nobles',
    tagColor: 'text-[#FB6303]',
    colorsCount: 1,
    category: 'Sudaderas con y sin capucha',
    sexo: 'Unisex',
    marca: 'Re-Style Select'
  },
  {
    id: 5,
    name: 'Crewneck Essential Black',
    desc: 'Sudadera básica de algodón orgánico en busto expositor - Negro Intenso',
    price: '49,99 €',
    priceNum: 49.99,
    colors: ['#000000'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    tag: null,
    colorsCount: 4,
    category: 'Sudaderas con y sin capucha',
    sexo: 'Unisex',
    marca: 'Nike'
  },
  {
    id: 6,
    name: 'Jersey Entrenamiento Sporty',
    desc: 'Camiseta técnica transpirable de alta gama - Blanco y Gris',
    price: '42,00 €',
    priceNum: 42.00,
    colors: ['#FFFFFF', '#808080'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    tag: 'Circular',
    tagColor: 'text-[#84A98C]',
    colorsCount: 1,
    category: 'Camisetas y partes de arriba',
    sexo: 'Hombre',
    marca: 'Re-Style Select'
  }
];

interface DiscoverPageProps {
  onBack: () => void;
  initialCategory?: string;
  initialFilters?: Partial<FilterState>;
  onProductClick?: (product: any) => void;
}

const DiscoverPage: React.FC<DiscoverPageProps> = ({ onBack, initialCategory, initialFilters, onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'Todos');
  const [showFilters, setShowFilters] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['sexo', 'precio', 'marca']);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    sexo: initialFilters?.sexo || [],
    precio: initialFilters?.precio || [],
    color: initialFilters?.color || [],
    marca: initialFilters?.marca || []
  });
  
  // Sort State
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCategory) setActiveCategory(initialCategory);
    if (initialFilters) {
      setActiveFilters(prev => ({
        ...prev,
        ...initialFilters
      }));
    }
  }, [initialCategory, initialFilters]);

  // Close sort dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const handleFilterChange = (group: keyof FilterState, option: string) => {
    setActiveFilters(prev => {
      const current = prev[group] || [];
      const next = current.includes(option) 
        ? current.filter(o => o !== option) 
        : [...current, option];
      return { ...prev, [group]: next };
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = MOCK_PRODUCTS.filter(product => {
      const categoryMatch = activeCategory === 'Todos' || product.category === activeCategory;
      if (!categoryMatch) return false;

      if (activeFilters.sexo && activeFilters.sexo.length > 0) {
        if (!activeFilters.sexo.includes(product.sexo)) return false;
      }

      if (activeFilters.marca && activeFilters.marca.length > 0) {
        if (!activeFilters.marca.includes(product.marca)) return false;
      }

      if (activeFilters.precio && activeFilters.precio.length > 0) {
        const matchesPrice = activeFilters.precio.some(range => {
          if (range === '0 € - 50 €') return product.priceNum <= 50;
          if (range === '50 € - 100 €') return product.priceNum > 50 && product.priceNum <= 100;
          if (range === '100 € - 150 €') return product.priceNum > 100 && product.priceNum <= 150;
          if (range === 'Más de 150 €') return product.priceNum > 150;
          return false;
        });
        if (!matchesPrice) return false;
      }

      return true;
    });

    const sorted = [...result];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [activeCategory, activeFilters, sortBy]);

  const activeSortLabel = SORT_OPTIONS.find(o => o.id === sortBy)?.label || 'Novedades';

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Bar */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-start md:items-center sticky top-20 bg-white z-40 border-b border-gray-50 md:border-none">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="hover:scale-110 transition-transform p-1"
            title="Volver"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl md:text-2xl font-medium font-['Inter']">
            {activeCategory === 'Todos' ? 'Catálogo Completo' : activeCategory} ({filteredAndSortedProducts.length})
          </h1>
        </div>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm font-medium">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <span>{showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="relative" ref={sortRef}>
            <button 
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 hover:opacity-50 transition-opacity group"
            >
              <span>Ordenar: <span className="text-gray-400 font-normal">{activeSortLabel}</span></span>
              <svg 
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-300 ${showSortDropdown ? 'rotate-180' : ''}`}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-4 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 z-50 animate-fade-in overflow-hidden">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors hover:bg-gray-50 ${
                      sortBy === option.id ? 'font-bold text-black bg-gray-50/50' : 'text-gray-500'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto flex px-6 md:px-12 gap-12 pb-20">
        <aside className={`${showFilters ? 'lg:block' : 'hidden'} hidden w-[240px] shrink-0 overflow-y-auto max-h-[calc(100vh-160px)] sticky top-36 pr-4 custom-scrollbar transition-all duration-300`}>
          <div className="space-y-3 mb-12">
            {CATEGORIES.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`block text-left text-sm font-bold leading-tight transition-all duration-200 w-full py-0.5 ${
                  activeCategory === cat 
                    ? 'text-black translate-x-1' 
                    : 'text-gray-400 hover:text-black hover:translate-x-1'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100">
            {FILTER_GROUPS.map((group) => {
              const isExpanded = expandedGroups.includes(group.id);
              return (
                <div key={group.id} className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleGroup(group.id)}
                    className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-sm font-bold text-gray-800">{group.label}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}><path d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-3">
                      {group.options.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="appearance-none w-5 h-5 border border-gray-300 rounded-sm checked:bg-black transition-colors" checked={(activeFilters[group.id as keyof FilterState] || []).includes(option)} onChange={() => handleFilterChange(group.id as keyof FilterState, option)} />
                          <span className="text-[15px] font-medium text-gray-700 group-hover:text-black transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <main className="flex-grow">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12 animate-fade-in">
              {filteredAndSortedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group cursor-pointer"
                  onClick={() => onProductClick?.(product)}
                >
                  <div className="aspect-[4/5] bg-[#F6F6F6] overflow-hidden relative mb-4 rounded-xl">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-1 space-y-0.5">
                    {product.tag && <p className={`text-[13px] font-bold ${product.tagColor} mb-0.5 uppercase tracking-tighter`}>{product.tag}</p>}
                    <h3 className="text-sm font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{product.desc}</p>
                    <p className="text-sm text-gray-500">{product.marca} • {product.sexo}</p>
                    <p className="text-sm font-bold pt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-lg font-bold text-gray-400">Sin resultados</h3>
              <button onClick={() => { setActiveCategory('Todos'); setActiveFilters({ sexo: [], precio: [], color: [], marca: [] }); setSortBy('featured'); }} className="mt-6 text-sm font-bold underline hover:text-[#007782]">Limpiar todos los filtros</button>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E5E5; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default DiscoverPage;
