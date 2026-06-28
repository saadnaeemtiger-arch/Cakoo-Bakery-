import { Flame, Wheat, Cake, Coins, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Flame className="w-6 h-6 text-brand-gold" />,
      title: 'Freshly Baked Daily',
      description: 'Our doors open with hot, steaming bread and freshly decorated cakes, straight from the ovens every single morning.'
    },
    {
      icon: <Wheat className="w-6 h-6 text-brand-gold" />,
      title: 'Premium Ingredients',
      description: 'We source only premium organic flour, pure Madagascar vanilla, Belgian chocolate, and fresh farm butter.'
    },
    {
      icon: <Cake className="w-6 h-6 text-brand-gold" />,
      title: 'Custom Cake Designs',
      description: 'Collaborate directly with our master bakers to bring your unique design and artistic visions to life.'
    },
    {
      icon: <Coins className="w-6 h-6 text-brand-gold" />,
      title: 'Affordable Prices',
      description: 'Gourmet experience without the gourmet cost. We believe high-quality handcrafted treats should be accessible.'
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-gold" />,
      title: 'Fast Order Service',
      description: 'Easy, intuitive online pre-ordering and rapid local delivery. We keep our processes organized and on schedule.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />,
      title: 'Friendly Customer Support',
      description: 'Whether it is a tiny cupcake question or detailed wedding timeline consulting, our staff is always happy to help.'
    }
  ];

  return (
    <section className="py-24 bg-brand-cream-light relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              The Cakoo Standard
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Why Choose Our Bakery?
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            We are dedicated to elevating your everyday moments and special celebrations with baking done the right way.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-brand-cream p-8 rounded-3xl border border-brand-brown/5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-brand-cream-light border border-brand-brown/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-brand-brown-light leading-relaxed font-light">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
