import { HERO_IMAGE } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export default function Hero({ onOrderNowClick, onViewMenuClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-brown-dark overflow-hidden pt-16"
    >
      {/* Expansive Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Cakoo Bakery display"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_6s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark via-brand-brown-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown-dark via-transparent to-brand-brown-dark/30" />
      </div>

      {/* Decorative floating flour/baking sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-brand-gold/30 rounded-full blur-xs animate-bounce duration-5000" />
        <div className="absolute top-[60%] right-[15%] w-4 h-4 bg-brand-gold/20 rounded-full blur-xs animate-pulse duration-3000" />
        <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-brand-gold/40 rounded-full blur-none animate-ping duration-4000" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Sparkle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/30 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-brand-gold animate-spin duration-3000" />
          <span className="font-sans text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Premium Handcrafted Delights
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="hero-headline"
          className="font-serif text-5xl sm:text-6xl md:text-7.5xl text-brand-cream leading-[1.1] tracking-tight font-extrabold max-w-4xl"
        >
          Freshly Baked <br className="sm:hidden" />
          <span className="text-brand-gold font-serif italic font-normal">Happiness</span> Every Day
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          id="hero-subheading"
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-brand-cream/80 max-w-2xl leading-relaxed font-light"
        >
          Handcrafted cakes, pastries, breads, and desserts made with premium ingredients for every celebration.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          id="hero-actions"
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOrderNowClick}
            id="hero-order-now-btn"
            className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-brown-dark font-sans font-semibold tracking-wide px-8 py-4 rounded-full shadow-lg hover:shadow-brand-gold/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onViewMenuClick}
            id="hero-view-menu-btn"
            className="flex items-center justify-center bg-transparent hover:bg-brand-cream/10 text-brand-cream font-sans font-medium tracking-wide px-8 py-4 rounded-full border border-brand-cream/30 transition-all duration-200 hover:border-brand-cream"
          >
            <span>View Menu</span>
          </button>
        </motion.div>

        {/* Mini Trust Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-brand-cream/10 pt-8 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">100%</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-cream/60 mt-1 font-medium">Organic Flour</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">Fresh</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-cream/60 mt-1 font-medium">Baked Daily</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">Award</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-cream/60 mt-1 font-medium">Winning Master Bakers</span>
          </div>
        </motion.div>
      </div>

      {/* Soft Wave Transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
    </section>
  );
}
