import { CUSTOM_CAKE_IMAGE } from '../data';
import { motion } from 'motion/react';
import { Calendar, Cake, ShieldCheck, Mail, Heart, Award } from 'lucide-react';

interface CustomCakesProps {
  onOpenRequestModal: () => void;
}

export default function CustomCakes({ onOpenRequestModal }: CustomCakesProps) {
  const occasions = [
    { name: 'Luxury Weddings', desc: 'Elegant layered designs matching your colors and floral setups.' },
    { name: 'Joyous Birthdays', desc: 'Whimsical themes, colorful piping, and customized cartoon or name figures.' },
    { name: 'Elegant Anniversaries', desc: 'Sophisticated romantic touches and clean modern styling.' },
    { name: 'Sweet Baby Showers', desc: 'Cute pastel creations, gender reveals, and edible toys.' },
    { name: 'Graduation Parties', desc: 'Scholarly caps, congratulatory plaques, and academic highlights.' },
    { name: 'Corporate Events', desc: 'Clean corporate color gradients, branding logos, and clean lines.' }
  ];

  return (
    <section id="custom-cakes" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-32 h-64 bg-brand-gold/5 rounded-r-full blur-2xl" />
      <div className="absolute bottom-1/4 right-0 w-32 h-64 bg-brand-pink-dark/5 rounded-l-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Highlight Occasions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-brand-gold" />
                <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
                  Tailored To Your Celebration
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
                Exquisite Custom-Made Cakes
              </h2>
              <p className="font-sans text-brand-brown-light leading-relaxed text-sm sm:text-base font-light">
                Your special moments deserve a centerpiece that is as spectacular as they are memorable. At Cakoo, we design custom-made luxury cakes customized to your exact requirements, events, and flavor profiles. No dream is too large or detailing too small.
              </p>
            </div>

            {/* Occasions Bento-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {occasions.map((occ, idx) => (
                <div
                  key={idx}
                  className="bg-brand-cream-light p-5 rounded-2xl border border-brand-brown/5 hover:border-brand-gold/30 hover:shadow-xs transition-all duration-300 group"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-110 transition-transform">
                      <Cake className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-brand-brown group-hover:text-brand-gold transition-colors">
                        {occ.name}
                      </h4>
                      <p className="font-sans text-xs text-brand-brown-light leading-relaxed mt-1">
                        {occ.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps & Call To Action */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={onOpenRequestModal}
                id="custom-cakes-request-btn"
                className="bg-brand-brown hover:bg-brand-brown-dark text-white font-sans font-semibold tracking-wide px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Request a Custom Cake
              </button>
              <div className="flex items-center gap-2 text-xs text-brand-brown-light font-medium px-2">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>Consultation booking is free of charge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Image & Quick Trust Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Back card decoration */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-pink border border-brand-pink-dark/20 rounded-3xl -z-10" />
              
              {/* Generated Luxury Custom Cake Image */}
              <img
                src={CUSTOM_CAKE_IMAGE}
                alt="Exquisite custom tier cake"
                className="rounded-3xl shadow-2xl w-full aspect-3/4 object-cover relative z-10 hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Float Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-cream/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-sm font-bold text-brand-brown">
                    100% Customized
                  </h5>
                  <p className="text-[10px] font-sans text-brand-brown-light leading-normal">
                    Designed to match your invitations, favors, and color palettes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
