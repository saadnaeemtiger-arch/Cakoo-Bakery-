import { useState, ChangeEvent, FormEvent } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Cake, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomCakeModal({ isOpen, onClose }: CustomCakeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    servings: 25,
    flavor: 'Chocolate Fudge',
    designDescription: '',
    deliveryOption: 'pickup' as 'pickup' | 'delivery'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.designDescription) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    
    // Simulate high-fidelity submit
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: 'Wedding',
      eventDate: '',
      servings: 25,
      flavor: 'Chocolate Fudge',
      designDescription: '',
      deliveryOption: 'pickup'
    });
    onClose();
  };

  const eventOptions = [
    'Wedding',
    'Birthday Celebration',
    'Anniversary',
    'Baby Shower',
    'Graduation Party',
    'Corporate Event',
    'Other Special Event'
  ];

  const flavorOptions = [
    'Belgian Chocolate Fudge',
    'Classic Red Velvet Cream Cheese',
    'Madagascar Vanilla Custard',
    'Zesty Lemon Elderflower',
    'Salted Caramel Pecan',
    'Fresh Strawberry Chiffon',
    'Vegan Chocolate Avocado'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-brown-dark/70 z-50 backdrop-blur-xs"
          />

          {/* Centered Modal Card Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-brand-cream rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-brand-brown/5 flex flex-col my-8"
            >
              {/* Header */}
              <div className="p-6 border-b border-brand-brown/10 flex justify-between items-center bg-brand-cream-light shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <Cake className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-brown">Custom Cake Consultation</h3>
                    <p className="text-[10px] uppercase font-sans tracking-widest text-brand-brown-light font-semibold -mt-0.5">
                      Design Your Dream Centerpiece
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-brand-brown/5 text-brand-brown-light hover:text-brand-brown"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Scroll Container */}
              <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6">
                
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto border border-green-200 shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-brown">Request Logged!</h3>
                    
                    <div className="p-5 bg-brand-cream-light rounded-2xl border border-brand-brown/15 text-left space-y-3 max-w-md mx-auto">
                      <div className="flex justify-between text-xs border-b border-brand-brown/5 pb-2">
                        <span className="font-bold text-brand-brown uppercase">Design Reference</span>
                        <span className="text-brand-gold font-bold">#CAKE-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <p className="font-sans text-xs text-brand-brown-light leading-relaxed">
                        Hi <strong>{formData.name}</strong>, we have received your custom design sheet for a <strong>{formData.eventType}</strong> cake scheduled on <strong>{formData.eventDate}</strong>.
                      </p>
                      <div className="bg-brand-cream p-3 rounded-xl flex gap-2 text-[10px] text-brand-brown-light leading-relaxed">
                        <Compass className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-bold text-brand-brown">What happens next:</span>
                          <span>Our head pastry chef will review your design notes, servings size ({formData.servings} guests), and flavor selection. We will contact you at <strong>{formData.phone}</strong> within 48 hours to confirm structural pricing.</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-[10px] text-brand-brown-light max-w-sm mx-auto leading-relaxed pt-2">
                      A copy of your design details was sent to {formData.email}. Thank you for trusting Cakoo with your celebration!
                    </p>
                  </div>
                ) : (
                  <form id="custom-cake-req-form" onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* Contact Details Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +1 (555) 123-4567"
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                        />
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. elena@example.com"
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                      />
                    </div>

                    {/* Event particulars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Event Type Dropdown */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                        >
                          {eventOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Event Date Picker */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                        />
                      </div>
                    </div>

                    {/* Servings and Flavors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Servings count */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Estimated Servings ({formData.servings} guests)
                        </label>
                        <input
                          type="range"
                          name="servings"
                          min={10}
                          max={250}
                          step={5}
                          value={formData.servings}
                          onChange={handleInputChange}
                          className="w-full h-2 bg-brand-brown/10 rounded-lg appearance-none cursor-pointer accent-brand-gold mt-3"
                        />
                        <div className="flex justify-between text-[10px] text-brand-brown-light font-medium pt-1">
                          <span>10 guests</span>
                          <span>250+ guests</span>
                        </div>
                      </div>

                      {/* Flavor Choice Dropdown */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                          Preferred Cake Flavor
                        </label>
                        <select
                          name="flavor"
                          value={formData.flavor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold"
                        >
                          {flavorOptions.map((flav) => (
                            <option key={flav} value={flav}>{flav}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Custom Design Sheet */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                        Design Description & Notes *
                      </label>
                      <textarea
                        name="designDescription"
                        required
                        rows={4}
                        value={formData.designDescription}
                        onChange={handleInputChange}
                        placeholder="Please describe your dream cake layout: themes, color palette, tier count, floral preferences, inscriptions, or any inspiration guidelines..."
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold resize-y min-h-[90px]"
                      />
                    </div>

                    {/* Order Method Option */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-brown block">
                        Collection Option
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.deliveryOption === 'pickup'
                            ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                            : 'border-brand-brown/15 hover:border-brand-brown/30 text-brand-brown-light'
                        }`}>
                          <input
                            type="radio"
                            name="deliveryOption"
                            value="pickup"
                            checked={formData.deliveryOption === 'pickup'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>Bakery Collection</span>
                        </label>
                        <label className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.deliveryOption === 'delivery'
                            ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                            : 'border-brand-brown/15 hover:border-brand-brown/30 text-brand-brown-light'
                        }`}>
                          <input
                            type="radio"
                            name="deliveryOption"
                            value="delivery"
                            checked={formData.deliveryOption === 'delivery'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>Local Temperature Delivery</span>
                        </label>
                      </div>
                    </div>

                  </form>
                )}

              </div>

              {/* Footer controls */}
              <div className="p-6 border-t border-brand-brown/10 bg-brand-cream-light flex justify-between gap-4 shrink-0">
                {isSubmitted ? (
                  <button
                    onClick={handleReset}
                    id="custom-cake-done-btn"
                    className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white text-xs font-semibold py-3.5 rounded-xl"
                  >
                    Close Sheet
                  </button>
                ) : (
                  <>
                    <button
                      onClick={onClose}
                      className="px-6 py-3.5 border border-brand-brown/10 text-brand-brown hover:bg-brand-pink text-xs font-semibold rounded-xl transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="custom-cake-submit-btn"
                      form="custom-cake-req-form"
                      disabled={submitting}
                      className="flex-1 bg-brand-gold hover:bg-brand-gold-hover text-brand-brown-dark text-xs font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-brand-brown-dark/40 border-t-brand-brown-dark animate-spin" />
                          <span>Filing Request...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Request Consultation</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
