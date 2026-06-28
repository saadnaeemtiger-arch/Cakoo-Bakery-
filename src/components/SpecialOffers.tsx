import { useState } from 'react';
import { SPECIAL_OFFERS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Ticket, Clock } from 'lucide-react';

export default function SpecialOffers() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Limited-Time Delights
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Special Promotions & Packages
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            Sweeten your celebrations even further with our popular value deals, seasonal packages, and pastry bundles.
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-brand-cream-light rounded-3xl border border-brand-brown/5 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Product Card Visual Image Left */}
              <div className="sm:w-2/5 relative min-h-48 sm:min-h-auto bg-brand-cream">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                <span className="absolute top-4 left-4 bg-brand-brown text-white font-sans text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {offer.badge}
                </span>
              </div>

              {/* Offer Details Right */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-brown leading-snug">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-brown-light leading-relaxed font-light">
                    {offer.description}
                  </p>
                </div>

                {/* Code Voucher Footer Row */}
                <div className="pt-4 border-t border-brand-brown/5 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{offer.expiryDate}</span>
                    </span>
                  </div>

                  {/* Coupon Copy Button */}
                  <button
                    onClick={() => copyToClipboard(offer.discountCode, offer.id)}
                    id={`promo-copy-btn-${offer.id}`}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      copiedId === offer.id
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-brand-cream border border-brand-brown/10 text-brand-brown hover:bg-brand-pink'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {copiedId === offer.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Ticket className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Code: {offer.discountCode}</span>
                        </>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
