import { TESTIMONIALS } from '../data';
import { Star, Quote, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-cream-light relative overflow-hidden">
      {/* Visual flourishes */}
      <div className="absolute top-[10%] left-[5%] w-48 h-48 bg-brand-pink/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-brand-pink/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Flour-Dusted Stories
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Loved By Our Customers
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            Don't just take our word for it—read reviews from cake lovers, coffee sippers, and bread enthusiasts.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-brand-cream p-8 rounded-3xl border border-brand-brown/5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Decorative quotation icon */}
              <div className="absolute top-6 right-6 text-brand-gold/15 group-hover:text-brand-gold/25 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              {/* Review Content */}
              <div className="space-y-4">
                {/* 5 Stars Rating Row */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="font-sans text-xs sm:text-sm text-brand-brown-light leading-relaxed font-light italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta Row */}
              <div className="pt-6 mt-6 border-t border-brand-brown/5 flex items-center gap-4">
                {/* Avatar */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/25 shadow-xs"
                  referrerPolicy="no-referrer"
                />

                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-brand-brown-light font-medium mt-0.5">
                    <span className="uppercase tracking-wider">{review.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-brand-gold">
                      <Heart className="w-2.5 h-2.5 fill-current" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
