import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Share2, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    
    // Mocking contact submission with high fidelity
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Cakoo! I'd like to ask about your gourmet bakery products and custom cakes.");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Get In Touch
            </span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown font-bold tracking-tight">
            Visit Us or Say Hello
          </h2>
          <p className="font-sans text-brand-brown-light font-light text-sm sm:text-base leading-relaxed">
            Have a custom order idea, feedback, or general bakery question? Reach out to our sweet team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Maps (5/12 grid span) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="bg-brand-cream-light p-8 rounded-3xl border border-brand-brown/5 space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-brand-brown mb-4 border-b border-brand-brown/5 pb-4">
                Bakery Details
              </h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">Bakery Address</h4>
                  <p className="font-sans text-xs sm:text-sm text-brand-brown-light mt-1">
                    128 Gourmet Avenue, Sugar District, Pastry Hills, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">Call Us Directly</h4>
                  <p className="font-sans text-xs sm:text-sm text-brand-brown mt-1 font-semibold">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">Email Support</h4>
                  <p className="font-sans text-xs sm:text-sm text-brand-brown-light mt-1 hover:text-brand-gold transition-colors">
                    hello@cakoo-bakery.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">Business Hours</h4>
                  <p className="font-sans text-xs text-brand-brown-light mt-1 space-y-1">
                    <span className="block">Mon – Fri: 7:00 AM – 7:00 PM</span>
                    <span className="block font-medium text-brand-brown">Sat – Sun: 8:00 AM – 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder with luxurious card design */}
            <div className="bg-brand-cream-light rounded-3xl overflow-hidden border border-brand-brown/5 shadow-xs relative aspect-video">
              <div className="absolute inset-0 bg-brand-cream flex flex-col items-center justify-center p-6 text-center z-10">
                {/* Visual grid representing streets */}
                <div className="absolute inset-0 bg-[radial-gradient(#e6ded6_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-brand-gold/15" />
                <div className="absolute inset-y-0 left-1/3 w-0.5 bg-brand-gold/15" />
                
                <div className="relative z-20 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-brand-brown">Cakoo Google Map</h4>
                  <p className="font-sans text-[10px] text-brand-brown-light leading-normal max-w-xs">
                    Located near the corner of Sweet Street & Flour Road, opposite Sugar Park.
                  </p>
                  <button
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    className="inline-flex items-center gap-1.5 bg-brand-brown hover:bg-brand-gold hover:text-brand-brown-dark text-brand-cream text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-full mt-2 transition-all shadow-sm"
                  >
                    Open In Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links & WhatsApp Chat trigger */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* WhatsApp Button with green pulse */}
              <button
                onClick={openWhatsApp}
                id="contact-whatsapp-btn"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase shadow-md transition-all duration-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 pointer-events-none" />
                {/* Pulsing ring indicator */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="pl-4">Chat on WhatsApp</span>
              </button>

              {/* Social Icons row */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-cream-light border border-brand-brown/10 text-brand-brown hover:text-brand-gold hover:border-brand-gold transition-all"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-cream-light border border-brand-brown/10 text-brand-brown hover:text-brand-gold hover:border-brand-gold transition-all"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-cream-light border border-brand-brown/10 text-brand-brown hover:text-brand-gold hover:border-brand-gold transition-all"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7/12 grid span) */}
          <div className="lg:col-span-7 bg-brand-cream-light p-8 sm:p-10 rounded-3xl border border-brand-brown/5 shadow-xs">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-brown mb-6">
              Send Us a Message
            </h3>

            {formStatus === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto border border-green-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-brown">Message Sent Successfully!</h4>
                <p className="font-sans text-xs sm:text-sm text-brand-brown-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Cakoo Bakery. Our team has received your message and we will respond within 24 hours. We look forward to talking sweet!
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2.5 rounded-full bg-brand-brown text-white text-xs font-semibold hover:bg-brand-brown-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/15 rounded-xl text-xs font-medium text-brand-brown focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder:text-brand-brown-light/45 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/15 rounded-xl text-xs font-medium text-brand-brown focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder:text-brand-brown-light/45 transition-all"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-brown">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/15 rounded-xl text-xs font-medium text-brand-brown focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder:text-brand-brown-light/45 transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-brown">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event, feedback, or any custom pastry queries you have..."
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/15 rounded-xl text-xs font-medium text-brand-brown focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder:text-brand-brown-light/45 transition-all resize-y min-h-[100px]"
                  />
                </div>

                {/* Form feedback warnings */}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 text-xs border border-red-200">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Please fill in all required fields marked with * before submitting.</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-brand-brown hover:bg-brand-brown-dark disabled:bg-brand-brown-light text-white font-sans font-semibold tracking-wide py-4 rounded-xl shadow-md transition-colors"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-gold" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
