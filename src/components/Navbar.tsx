import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomCake: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenCustomCake }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'menu', 'custom-cakes', 'gallery', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Custom Cakes', href: '#custom-cakes', id: 'custom-cakes' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-md py-3 border-b border-brand-brown/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-brand-brown group-hover:text-brand-gold transition-colors">
                Cakoo
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-brown-light font-medium -mt-1">
                Handcrafted Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={`nav-link-${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                      activeSection === link.id
                        ? 'text-brand-gold font-semibold'
                        : 'text-brand-brown hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Custom Cake Button */}
            <button
              onClick={onOpenCustomCake}
              id="nav-custom-cake-btn"
              className="flex items-center gap-2 bg-brand-brown hover:bg-brand-brown-dark text-brand-cream hover:text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Cake className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>Custom Cake</span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              id="nav-cart-btn"
              className="relative p-2.5 rounded-full bg-brand-cream hover:bg-brand-pink text-brand-brown hover:text-brand-gold transition-all duration-200 shadow-sm border border-brand-brown/5 group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-brown-dark font-sans text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-cream animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Navigation controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Custom Cake mobile shortcut */}
            <button
              onClick={onOpenCustomCake}
              id="mobile-nav-custom-cake-btn"
              className="p-2 rounded-full bg-brand-brown text-brand-cream hover:bg-brand-brown-dark transition-all duration-150"
              aria-label="Request custom cake"
            >
              <Cake className="w-4 h-4 text-brand-gold" />
            </button>

            {/* Cart mobile shortcut */}
            <button
              onClick={onOpenCart}
              id="mobile-nav-cart-btn"
              className="relative p-2 rounded-full bg-brand-cream text-brand-brown hover:bg-brand-pink transition-all duration-150 border border-brand-brown/5"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-brown-dark text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburguer button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="nav-hamburger-btn"
              className="p-2 rounded-full bg-brand-cream text-brand-brown hover:bg-brand-pink transition-colors border border-brand-brown/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-cream border-t border-brand-brown/10 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-brand-gold/10 text-brand-gold'
                      : 'text-brand-brown hover:bg-brand-pink/50 hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-brand-brown/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCustomCake();
                  }}
                  id="mobile-menu-custom-cake-btn"
                  className="w-full flex items-center justify-center gap-2 bg-brand-brown hover:bg-brand-brown-dark text-white py-3 rounded-xl text-sm font-semibold shadow-sm"
                >
                  <Cake className="w-4 h-4 text-brand-gold" />
                  <span>Request Custom Cake</span>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCart();
                  }}
                  id="mobile-menu-view-cart-btn"
                  className="w-full flex items-center justify-center gap-2 bg-brand-cream hover:bg-brand-pink text-brand-brown border border-brand-brown/10 py-3 rounded-xl text-sm font-semibold shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <span>View Cart ({cartCount} items)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
