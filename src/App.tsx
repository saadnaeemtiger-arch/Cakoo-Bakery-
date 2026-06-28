import { useState } from 'react';
import { CartItem, Product } from './types';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import CustomCakes from './components/CustomCakes';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import SpecialOffers from './components/SpecialOffers';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OrderDrawer from './components/OrderDrawer';
import CustomCakeModal from './components/CustomCakeModal';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomCakeOpen, setIsCustomCakeOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll to section triggers
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown font-sans selection:bg-brand-gold/30 selection:text-brand-brown-dark">
      {/* 1. Dynamic SEO Metadata & Schema Injections */}
      <SEOHead />

      {/* 2. Navigation bar header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomCake={() => setIsCustomCakeOpen(true)}
      />

      {/* 3. Main content blocks */}
      <main>
        {/* Hero Section */}
        <Hero
          onOrderNowClick={() => scrollToSection('menu')}
          onViewMenuClick={() => scrollToSection('menu')}
        />

        {/* About Section */}
        <About />

        {/* Featured Products / Menu Section */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Custom Cakes Highlight Section */}
        <CustomCakes onOpenRequestModal={() => setIsCustomCakeOpen(true)} />

        {/* Why Choose Cakoo Brand Pillars */}
        <WhyChooseUs />

        {/* Interactive Image Gallery & Lightbox */}
        <GallerySection />

        {/* Customer Testimonials reviews list */}
        <TestimonialsSection />

        {/* Special Promotions Discount Cards */}
        <SpecialOffers />

        {/* Frequently Asked Questions accordion */}
        <FAQSection />

        {/* Contact details and Feedback form */}
        <ContactSection />
      </main>

      {/* 4. Footer links and credentials */}
      <Footer />

      {/* 5. Utility action float triggers */}
      <ScrollToTop />

      {/* 6. Active Order details right slide drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 7. Custom Cake event details request modal */}
      <CustomCakeModal
        isOpen={isCustomCakeOpen}
        onClose={() => setIsCustomCakeOpen(false)}
      />
    </div>
  );
}
