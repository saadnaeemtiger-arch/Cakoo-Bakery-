import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, ShoppingBag, Sparkles, AlertCircle } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cakes' | 'pastries' | 'breads' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Delights' },
    { value: 'cakes', label: 'Celebration Cakes' },
    { value: 'pastries', label: 'French Pastries' },
    { value: 'breads', label: 'Artisan Breads' },
    { value: 'desserts', label: 'Gourmet Desserts' },
  ] as const;

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const handleOrder = (product: Product) => {
    onAddToCart(product);
    setToastMessage(`Added ${product.name} to your basket!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-brand-cream-light relative">
      {/* Dynamic Pop-up Toast for Add to Cart Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-brand-brown text-white border border-brand-gold/30 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">Added to Order</p>
              <p className="text-sm font-sans font-medium text-brand-cream">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Fresh From Our Ovens
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Explore Our Sweet Collections
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            Every slice of cake, warm roll of sourdough, and delicate macaron is crafted by hand using award-winning formulas, organic flours, and pure farm butter.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-brand-brown/10 pb-8">
          
          {/* Categories Tab Pill List */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                id={`menu-filter-btn-${cat.value}`}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-brand-brown text-brand-cream shadow-md'
                    : 'bg-brand-cream border border-brand-brown/10 text-brand-brown-light hover:border-brand-brown/30 hover:text-brand-brown'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search chocolate, pastries, bread..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="menu-search-input"
              className="w-full pl-10 pr-4 py-3 bg-brand-cream border border-brand-brown/15 rounded-full text-xs font-medium text-brand-brown focus:outline-hidden focus:border-brand-gold placeholder:text-brand-brown-light/60 transition-colors"
            />
            <Search className="w-4 h-4 text-brand-brown-light/50 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-brown/5 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-4/3 overflow-hidden bg-brand-cream">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top floating controls */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    {product.isPopular ? (
                      <span className="bg-brand-gold/90 backdrop-blur-xs text-brand-brown-dark font-sans text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Best Seller</span>
                      </span>
                    ) : <span />}

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full backdrop-blur-xs shadow-sm transition-all duration-200 ${
                        favorites.includes(product.id)
                          ? 'bg-brand-pink text-red-500'
                          : 'bg-white/80 hover:bg-white text-brand-brown'
                      }`}
                      aria-label="Add to Favorites"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Details & Action Button */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category Label */}
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                      {product.category}
                    </span>
                    
                    {/* Product Name */}
                    <h3 className="font-serif text-lg font-bold text-brand-brown line-clamp-1 group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-xs text-brand-brown-light leading-relaxed font-light line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action Row */}
                  <div className="pt-5 mt-4 border-t border-brand-brown/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-brand-brown-light block uppercase font-medium">Price</span>
                      <span className="font-serif text-lg font-bold text-brand-brown">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrder(product)}
                      id={`menu-order-btn-${product.id}`}
                      className="flex items-center gap-1.5 bg-brand-brown hover:bg-brand-gold hover:text-brand-brown-dark text-brand-cream text-xs font-semibold px-4 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-brand-cream rounded-3xl border border-dashed border-brand-brown/20 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-brand-brown-light/40 mx-auto mb-4" />
            <h3 className="font-serif text-lg font-bold text-brand-brown mb-1">No Sweet Treats Found</h3>
            <p className="font-sans text-xs text-brand-brown-light">
              We couldn't find any products matching "{searchQuery}". Try selecting another category or typing another keyword.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
