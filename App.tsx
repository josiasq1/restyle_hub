
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProcessTimeline from './components/ProcessTimeline';
import MapSection from './components/MapSection';
import HubVideo from './components/HubVideo';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import AuthModal from './components/AuthModal';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';
import PressPage from './components/PressPage';
import SustainabilityPage from './components/SustainabilityPage';
import DiscoverPage, { FilterState } from './components/DiscoverPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  const [view, setView] = useState<'home' | 'cart' | 'terms' | 'privacy' | 'about' | 'careers' | 'press' | 'sustainability' | 'discover' | 'product-detail'>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [catalogProps, setCatalogProps] = useState<{ category: string, filters?: Partial<FilterState> }>({ category: 'Todos' });
  
  // New States for Cart and Favorites
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedProduct]);

  const handleNavigateToCatalog = (category: string, filter?: { group: string, option: string }) => {
    const filters: Partial<FilterState> = {};
    if (filter) {
      filters[filter.group as keyof FilterState] = [filter.option];
    }
    setCatalogProps({ category, filters });
    setView('discover');
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setView('product-detail');
  };

  const handleAddToCart = (product: any, size: string) => {
    setCartItems(prev => [...prev, { ...product, selectedSize: size, cartId: Date.now() }]);
  };

  const handleRemoveFromCart = (cartId: number) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleToggleFavorite = (productId: number) => {
    setFavoriteIds(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#F9F9F7]">
      <Navbar 
        onCartClick={() => setView('cart')} 
        onHomeClick={() => setView('home')} 
        onStartClick={() => setIsAuthModalOpen(true)}
        onNavigateToCatalog={handleNavigateToCatalog}
        cartCount={cartItems.length}
        favoritesCount={favoriteIds.length}
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-fade-in">
            <Hero onDiscoverClick={() => handleNavigateToCatalog('Todos')} />
            <SocialProof />
            <ProcessTimeline />
            <HubVideo />
            <MapSection />
          </div>
        )}
        {view === 'discover' && (
          <DiscoverPage 
            onBack={() => setView('home')} 
            initialCategory={catalogProps.category}
            initialFilters={catalogProps.filters}
            onProductClick={handleProductClick}
          />
        )}
        {view === 'product-detail' && selectedProduct && (
          <ProductDetailPage 
            product={selectedProduct} 
            onBack={() => setView('discover')} 
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favoriteIds.includes(selectedProduct.id)}
          />
        )}
        {view === 'cart' && (
          <CartPage 
            onJoinClick={() => setIsAuthModalOpen(true)} 
            cartItems={cartItems}
            onRemoveItem={handleRemoveFromCart}
          />
        )}
        {view === 'terms' && <TermsPage onBack={() => setView('home')} />}
        {view === 'privacy' && <PrivacyPage onBack={() => setView('home')} />}
        {view === 'about' && <AboutPage onBack={() => setView('home')} />}
        {view === 'careers' && <CareersPage onBack={() => setView('home')} />}
        {view === 'press' && <PressPage onBack={() => setView('home')} />}
        {view === 'sustainability' && <SustainabilityPage onBack={() => setView('home')} />}
      </main>

      <Footer 
        onTermsClick={() => setView('terms')} 
        onPrivacyClick={() => setView('privacy')}
        onAboutClick={() => setView('about')}
        onCareersClick={() => setView('careers')}
        onPressClick={() => setView('press')}
        onSustainabilityClick={() => setView('sustainability')}
      />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onTermsClick={() => setView('terms')}
        onPrivacyClick={() => setView('privacy')}
      />
    </div>
  );
}

export default App;
