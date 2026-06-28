import { useState, ChangeEvent, FormEvent } from 'react';
import { CartItem, Product } from '../types';
import { X, Trash2, ShoppingBag, Plus, Minus, CheckCircle, AlertCircle, Sparkles, MapPin, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function OrderDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: OrderDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [orderId, setOrderId] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    method: 'pickup' as 'pickup' | 'delivery'
  });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const deliveryFee = customerInfo.method === 'delivery' ? 5.00 : 0;
  const tax = subtotal * 0.08; // 8% local food tax
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const generateOrderId = () => {
    const num = Math.floor(100000 + Math.random() * 900000);
    return `CK-${num}`;
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill out all required contact fields.');
      return;
    }
    if (customerInfo.method === 'delivery' && !customerInfo.address) {
      alert('Please specify your delivery address.');
      return;
    }

    setOrderId(generateOrderId());
    setCheckoutStep('success');
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutStep('cart');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      method: 'pickup'
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-brand-cream shadow-2xl z-50 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-brown/10 flex justify-between items-center bg-brand-cream-light">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-brand-gold">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span className="font-serif text-lg font-bold text-brand-brown">
                  {checkoutStep === 'success' ? 'Order Complete' : 'Your Order Basket'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-brand-brown/5 text-brand-brown-light hover:text-brand-brown"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body based on step */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {checkoutStep === 'cart' && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="text-center py-20 space-y-4">
                      <ShoppingBag className="w-16 h-16 text-brand-brown-light/20 mx-auto" />
                      <h3 className="font-serif text-lg font-bold text-brand-brown">Basket is Empty</h3>
                      <p className="font-sans text-xs text-brand-brown-light max-w-xs mx-auto">
                        Add some signature artisan cakes, sweet pastries, or fresh bread from our menu to start your order!
                      </p>
                      <button
                        onClick={onClose}
                        className="mt-4 px-6 py-2.5 bg-brand-brown hover:bg-brand-brown-dark text-white rounded-full text-xs font-semibold"
                      >
                        Browse Menu
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Cart Items List */}
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-4 p-4 bg-brand-cream-light rounded-2xl border border-brand-brown/5"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-serif text-sm font-bold text-brand-brown line-clamp-1">
                                  {item.product.name}
                                </h4>
                                <button
                                  onClick={() => onRemoveItem(item.product.id)}
                                  className="text-brand-brown-light hover:text-red-500 transition-colors shrink-0"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="text-[10px] text-brand-gold uppercase font-bold tracking-wider mt-0.5">
                                {item.product.category}
                              </p>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 border border-brand-brown/15 rounded-full px-2 py-0.5 bg-brand-cream">
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                  className="text-brand-brown-light hover:text-brand-brown p-1"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-sans text-xs font-semibold w-4 text-center text-brand-brown">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                  className="text-brand-brown-light hover:text-brand-brown p-1"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              {/* Price */}
                              <span className="font-serif text-sm font-bold text-brand-brown">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'details' && (
                <form id="checkout-details-form" onSubmit={handlePlaceOrder} className="space-y-6">
                  <h3 className="font-serif text-base font-bold text-brand-brown border-b border-brand-brown/5 pb-2">
                    Billing & Delivery Details
                  </h3>

                  <div className="space-y-4">
                    {/* Customer Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-brand-brown block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sophia Loren"
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-brand-brown block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sophia@example.com"
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-brand-brown block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 123-4567"
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    {/* Choice of Collection */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-brand-brown block">
                        Order Method
                      </label>
                      <select
                        name="method"
                        value={customerInfo.method}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      >
                        <option value="pickup">In-Store Pickup (Free)</option>
                        <option value="delivery">Local Home Delivery (+$5.00)</option>
                      </select>
                    </div>

                    {/* Delivery Address (Conditional) */}
                    {customerInfo.method === 'delivery' && (
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-brand-brown block">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required={customerInfo.method === 'delivery'}
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          placeholder="Street, Apartment, Zip Code"
                          className="w-full px-4 py-2.5 bg-brand-cream-light border border-brand-brown/15 rounded-xl text-xs font-medium focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                        />
                      </div>
                    )}
                  </div>
                </form>
              )}

              {checkoutStep === 'success' && (
                <div className="text-center py-4 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto border border-green-200 shadow-sm animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-brand-brown">Fresh Delights Ordered!</h3>
                    <p className="font-sans text-xs text-brand-brown-light leading-relaxed">
                      Congratulations {customerInfo.name}, your preorder has been registered in our baking queue.
                    </p>
                  </div>

                  {/* High fidelity invoice sheet mockup */}
                  <div className="bg-brand-cream-light p-6 rounded-2xl border-2 border-dashed border-brand-brown/10 text-left space-y-4">
                    <div className="flex justify-between items-center text-xs border-b border-brand-brown/5 pb-3">
                      <div>
                        <span className="block font-bold text-brand-brown">INVOICE #{orderId}</span>
                        <span className="text-[10px] text-brand-brown-light">Date: {new Date().toLocaleDateString()}</span>
                      </div>
                      <span className="bg-brand-gold/15 text-brand-gold px-2 py-0.5 rounded-full font-bold uppercase text-[9px] tracking-wider">
                        QUEUED
                      </span>
                    </div>

                    {/* Order summary listing */}
                    <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <div key={item.product.id} className="flex justify-between text-xs font-light">
                          <span className="text-brand-brown-light min-w-0 truncate pr-4">
                            {item.quantity}x {item.product.name}
                          </span>
                          <span className="font-semibold text-brand-brown font-serif">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tax and Total details */}
                    <div className="border-t border-brand-brown/5 pt-3 space-y-1.5 text-xs">
                      <div className="flex justify-between text-brand-brown-light">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-brand-brown-light">
                        <span>Est. Taxes (8%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      {customerInfo.method === 'delivery' && (
                        <div className="flex justify-between text-brand-brown-light">
                          <span>Delivery Fee:</span>
                          <span>$5.00</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-brand-brown text-sm border-t border-brand-brown/5 pt-2">
                        <span>Total Paid (Mock):</span>
                        <span className="font-serif text-brand-gold">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="bg-brand-cream p-3 rounded-xl flex gap-2 items-start text-[10px] text-brand-brown-light border border-brand-brown/5">
                      <ClipboardList className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-brand-brown">
                          {customerInfo.method === 'pickup' ? 'Collection Instructions:' : 'Delivery Instructions:'}
                        </span>
                        <span>
                          {customerInfo.method === 'pickup'
                            ? 'Collect fresh tomorrow anytime between 9:00 AM & 6:00 PM at 128 Gourmet Avenue. Bring this receipt ID.'
                            : `Fresh pastries will be delivered to ${customerInfo.address} tomorrow by our driver.`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-[10px] text-brand-brown-light font-light max-w-xs mx-auto">
                    We've sent a mock confirmation slip to your registered email {customerInfo.email}. See you tomorrow!
                  </p>
                </div>
              )}

            </div>

            {/* Footer Summary & Checkout Trigger buttons */}
            {checkoutStep !== 'success' && cartItems.length > 0 && (
              <div className="p-6 border-t border-brand-brown/10 bg-brand-cream-light space-y-4">
                
                {/* Invoice calculations summary */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-brand-brown-light font-light">
                    <span>Subtotal</span>
                    <span className="font-medium text-brand-brown">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-brand-brown-light font-light">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-medium text-brand-brown">${tax.toFixed(2)}</span>
                  </div>
                  {checkoutStep === 'details' && customerInfo.method === 'delivery' && (
                    <div className="flex justify-between text-brand-brown-light font-light">
                      <span>Delivery Fee</span>
                      <span className="font-medium text-brand-brown">$5.00</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-brand-brown text-base border-t border-brand-brown/5 pt-2">
                    <span>Total Cost</span>
                    <span className="font-serif text-brand-gold">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Navigation CTA controls */}
                <div className="flex flex-col gap-2">
                  {checkoutStep === 'cart' ? (
                    <button
                      onClick={() => setCheckoutStep('details')}
                      id="cart-proceed-checkout-btn"
                      className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-colors text-center block"
                    >
                      Proceed to Checkout
                    </button>
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setCheckoutStep('cart')}
                        className="bg-brand-cream border border-brand-brown/10 text-brand-brown hover:bg-brand-pink text-xs font-semibold py-3 rounded-xl transition-colors text-center"
                      >
                        Back
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        id="checkout-confirm-btn"
                        form="checkout-details-form"
                        className="col-span-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-brown-dark text-xs font-bold py-3 rounded-xl shadow-md transition-colors text-center"
                      >
                        Confirm & Place Order
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Success state reset button */}
            {checkoutStep === 'success' && (
              <div className="p-6 border-t border-brand-brown/10 bg-brand-cream-light">
                <button
                  onClick={handleReset}
                  id="checkout-reset-close-btn"
                  className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-colors"
                >
                  Done & Close Basket
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
