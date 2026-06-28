import { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Cakes', 'Cupcakes', 'Cookies', 'Wedding Cakes', 'Birthday Cakes', 'Interior', 'Bread', 'Desserts'];

  // Filter products based on selected category
  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase() || 
                           (selectedCategory === 'Wedding Cakes' && item.category === 'Wedding Cakes') || 
                           (selectedCategory === 'Birthday Cakes' && item.category === 'Birthday Cakes'));

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Visual Sweetness
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Our Bakery Gallery
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            Feast your eyes on some of our favorite creations, wedding masterpieces, and our cozy, flour-dusted kitchen.
          </p>
        </div>

        {/* Gallery category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-brown text-white shadow-xs'
                  : 'bg-brand-cream border border-brand-brown/10 text-brand-brown-light hover:border-brand-brown/30 hover:text-brand-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // We need to calculate the actual index in GALLERY_ITEMS to maintain consistency or map it to filteredItems index
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-brand-cream border border-brand-brown/5 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating category tag */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-brand-brown-dark font-sans text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-10 shadow-sm border border-brand-brown/5">
                    {item.category}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-brown-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                      <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white mb-2 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[10px] text-brand-cream/80 uppercase tracking-widest font-semibold">
                        View Fullscreen
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Effect Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-brown-dark/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 sm:p-8"
            >
              {/* Top Controls Bar */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                  <span className="font-serif text-sm font-semibold text-brand-cream">
                    {filteredItems[lightboxIndex].title}
                  </span>
                  <span className="text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-brand-gold font-bold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-brand-cream hover:text-white"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central Lightbox Slider Wrapper */}
              <div className="relative max-w-5xl w-full flex items-center justify-center px-12 py-16">
                
                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 p-3 rounded-full bg-white/5 hover:bg-white/15 transition-colors text-brand-cream hover:text-white z-10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Active Image Render */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-video max-h-[75vh] w-full rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/5"
                >
                  <img
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-0 p-3 rounded-full bg-white/5 hover:bg-white/15 transition-colors text-brand-cream hover:text-white z-10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Index counter bottom */}
              <div className="absolute bottom-6 font-sans text-xs text-brand-cream/60">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
