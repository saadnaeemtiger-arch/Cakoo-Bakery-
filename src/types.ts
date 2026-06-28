export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cakes' | 'pastries' | 'breads' | 'desserts';
  image: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  badge: string;
  expiryDate: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cakes' | 'Cupcakes' | 'Cookies' | 'Bread' | 'Desserts' | 'Interior' | 'Wedding Cakes' | 'Birthday Cakes';
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomCakeRequest {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  servings: number;
  flavor: string;
  designDescription: string;
  deliveryOption: 'pickup' | 'delivery';
}
