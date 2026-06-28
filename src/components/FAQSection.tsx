import { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('f1'); // Default open the first custom cake question

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-cream-light relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 left-[-10%] w-80 h-80 bg-brand-pink/55 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Curious Minds
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Have questions about customized cake orders, delivery, ingredients, or dietary choices? We have compiled the answers below.
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-brand-cream rounded-2xl border border-brand-brown/5 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Button Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 group"
                >
                  <div className="flex gap-3.5 items-center">
                    <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-serif text-sm sm:text-base font-bold text-brand-brown group-hover:text-brand-gold transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-brand-cream-light border border-brand-brown/5 group-hover:border-brand-gold/30 transition-colors shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-gold" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-brown-light" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      id={`faq-panel-${faq.id}`}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-brand-brown/5">
                        <p className="font-sans text-xs sm:text-sm text-brand-brown-light leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Callout box under FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-brown/5 border border-brand-brown/10 text-center">
          <p className="font-sans text-xs text-brand-brown-light">
            Still have a custom design question? We are happy to help. Feel free to reach out via our{' '}
            <a href="#contact" className="text-brand-gold font-semibold underline hover:text-brand-gold-hover">
              Contact Section
            </a>{' '}
            or write directly on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
