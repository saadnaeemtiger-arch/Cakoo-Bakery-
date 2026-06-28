import { motion } from 'motion/react';
import { Sparkles, Heart, ChefHat, Medal } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ChefHat className="w-5 h-5 text-brand-gold" />,
      title: 'Artisan Craftsmanship',
      description: 'Every pastry and cake is shaped by hand with meticulous care by our master chefs.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
      title: 'Guaranteed Freshness',
      description: 'We bake in small batches throughout the day to ensure premium texture and flavor.'
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-gold" />,
      title: 'Memorable Celebrations',
      description: 'We design cakes that elevate birthdays, weddings, and anniversaries into core memories.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-[10%] right-[-5%] w-64 h-64 bg-brand-pink/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-72 h-72 bg-brand-pink/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Back card */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-gold/40 rounded-3xl -z-10" />
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="Artisan baker kneading flour"
                className="rounded-3xl shadow-xl w-full object-cover aspect-4/3 relative z-10 hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80"
                alt="Inside the bakery"
                className="rounded-2xl shadow-md h-40 w-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="bg-brand-brown p-6 rounded-2xl flex flex-col justify-center text-center text-brand-cream relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/15 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                <Medal className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <span className="font-serif text-3xl font-bold text-brand-gold">100%</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Welcoming Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-brand-gold" />
                <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
                  Welcome to Cakoo Bakery
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight leading-tight">
                Crafting Joy, One Sweet Bite <br />
                At A Time
              </h2>
              <p className="font-sans text-brand-brown-light leading-relaxed text-base sm:text-lg font-light">
                At Cakoo, we believe baking is more than just combining ingredients—it is a passionate form of storytelling. From the early hours of the morning, our ovens are warm, and our master bakers are hard at work kneading organic flour, melting premium chocolate, and whipping up gourmet buttercream.
              </p>
              <p className="font-sans text-brand-brown-light leading-relaxed text-sm sm:text-base font-light">
                We use strictly natural, fresh, and hand-selected ingredients. No artificial preservatives, no shortcuts. Whether you are stopping by for a warm butter croissant to pair with your morning coffee, or custom-designing a luxury three-tiered cake for your wedding, our goal remains exactly the same: absolute freshness, unmatched craftsmanship, and smiles of pure happiness with every single slice.
              </p>
            </div>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-brand-brown/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="w-10 h-10 rounded-full bg-brand-pink border border-brand-pink-dark/20 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/45 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-base font-bold text-brand-brown">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-brown-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
