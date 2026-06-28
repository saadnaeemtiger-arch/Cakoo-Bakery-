import { useState, FormEvent } from 'react';
import { Mail, Send, Check, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-brown-dark text-brand-cream border-t border-brand-brown pt-16 pb-8 relative overflow-hidden">
      {/* Decorative backing blend */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-brand-brown">
          
          {/* Column 1: Logo, description, and socials (4/12 grid span) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white font-serif font-bold text-sm">
                C
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-brand-cream">
                Cakoo
              </span>
            </div>
            
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed font-light">
              Freshly baked happiness every day. Handcrafting bespoke celebration cakes, French butter pastries, natural country sourdough breads, and organic gourmet desserts with love.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-brand-brown text-brand-cream hover:bg-brand-gold hover:text-brand-brown-dark transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-brand-brown text-brand-cream hover:bg-brand-gold hover:text-brand-brown-dark transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-brand-brown text-brand-cream hover:bg-brand-gold hover:text-brand-brown-dark transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2/12 grid span) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-xs font-light text-brand-cream/80">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }} className="hover:text-brand-gold transition-colors">
                  Home Banner
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} className="hover:text-brand-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); handleLinkClick('#menu'); }} className="hover:text-brand-gold transition-colors">
                  Artisan Menu
                </a>
              </li>
              <li>
                <a href="#custom-cakes" onClick={(e) => { e.preventDefault(); handleLinkClick('#custom-cakes'); }} className="hover:text-brand-gold transition-colors">
                  Custom Cakes
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLinkClick('#gallery'); }} className="hover:text-brand-gold transition-colors">
                  Bakery Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => { e.preventDefault(); handleLinkClick('#testimonials'); }} className="hover:text-brand-gold transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }} className="hover:text-brand-gold transition-colors">
                  FAQs Accordion
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} className="hover:text-brand-gold transition-colors">
                  Contact details
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Categories (2/12 grid span) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest">
              Menu Categories
            </h4>
            <ul className="space-y-2 font-sans text-xs font-light text-brand-cream/80">
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); handleLinkClick('#menu'); }} className="hover:text-brand-gold transition-colors">
                  Celebration Cakes
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); handleLinkClick('#menu'); }} className="hover:text-brand-gold transition-colors">
                  French Pastries
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); handleLinkClick('#menu'); }} className="hover:text-brand-gold transition-colors">
                  Artisan Breads
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); handleLinkClick('#menu'); }} className="hover:text-brand-gold transition-colors">
                  Gourmet Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup & Contact (4/12 grid span) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-widest font-semibold">
              Sweet Newsletters
            </h4>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed font-light">
              Subscribe to get sweet discounts, birthday gift vouchers, and first announcements of seasonal pastry releases.
            </p>

            {subscribed ? (
              <div className="p-3 bg-brand-gold/15 border border-brand-gold/30 rounded-xl flex items-center gap-2 text-xs text-brand-gold font-sans font-medium">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="newsletter-email-input"
                  className="w-full px-4 py-3 bg-brand-brown/60 border border-brand-brown rounded-xl text-xs text-brand-cream focus:outline-hidden focus:border-brand-gold placeholder:text-brand-cream/40"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="absolute right-1.5 top-1.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-brown-dark p-1.5 rounded-lg transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/60 font-sans font-light gap-4">
          <div>
            © {new Date().getFullYear()} Cakoo Bakery. All Rights Reserved. Handcrafted with Passion.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-brand-gold fill-current" />
            <span>for Memorable Celebrations</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
