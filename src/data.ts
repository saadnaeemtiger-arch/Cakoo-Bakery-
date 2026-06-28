import { Product, Testimonial, FAQItem, SpecialOffer, GalleryItem } from './types';

// Let's use the actual generated images as well as curated Unsplash URLs
export const HERO_IMAGE = '/src/assets/images/hero_bakery_display_1782614862778.jpg';
export const CUSTOM_CAKE_IMAGE = '/src/assets/images/custom_luxury_cake_1782614876405.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Belgian Chocolate Cake',
    description: 'Rich layers of moist dark chocolate sponge filled with velvety Belgian chocolate ganache.',
    price: 34.99,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Classic Red Velvet Cake',
    description: 'Traditional crimson cocoa layers with a hints of vanilla, stacked with rich vanilla cream cheese frosting.',
    price: 36.99,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p3',
    name: 'New York New-Style Cheesecake',
    description: 'Dense, smooth, and creamy cheesecake with a buttery graham cracker crust, topped with fresh strawberries.',
    price: 32.99,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p4',
    name: 'Artisan Birthday Cakes',
    description: 'Whimsical birthday designs decorated with gourmet buttercream piping and premium sprinkles. Customizable flavors.',
    price: 49.99,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p5',
    name: 'Luxury Wedding Cakes',
    description: 'Exquisite multi-tiered cakes customized with delicate lace designs, sugar florals, and elegant metallic accents.',
    price: 249.99,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p6',
    name: 'Gourmet Cupcake Selection',
    description: 'An assortment of moist cupcakes topped with high-swirl gourmet buttercream and elegant edible toppings.',
    price: 18.99,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p7',
    name: 'Giant Chocolate Chunk Cookies',
    description: 'Golden-brown, soft-baked cookies loaded with premium semi-sweet and dark Belgian chocolate chunks.',
    price: 12.49,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p8',
    name: 'Glazed Brioche Donuts',
    description: 'Fluffy brioche dough naturally raised, hand-glazed with Madagascar vanilla bean or rich glaze syrup.',
    price: 14.99,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p9',
    name: 'Butter Croissants (Box of 4)',
    description: 'Flaky, golden, and incredibly buttery layers made with imported French AOP butter, baked fresh daily.',
    price: 11.99,
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p10',
    name: 'Fudgy Walnut Brownies',
    description: 'Decadently dense, chewy dark chocolate brownies packed with premium toasted walnuts and sea salt sprinkle.',
    price: 15.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p11',
    name: 'Blueberry Streusel Muffins',
    description: 'Plump muffins bursting with fresh mountain blueberries, finished with a crunchy brown sugar crumble topping.',
    price: 13.99,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1587960786551-a20281b3749a?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'p12',
    name: 'Parisian Macarons (Box of 12)',
    description: 'Delicate, colorful almond shells with chewy centers, filled with gourmet ganache, buttercream, and fruit preserves.',
    price: 24.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p13',
    name: 'Artisan Country Sourdough',
    description: 'Naturally leavened sourdough bread with a blistered, crunchy deep caramelized crust and open-crumb interior.',
    price: 7.99,
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'p14',
    name: 'Danish Pastry Assortment',
    description: 'A selection of sweet, flaky pastries featuring apricot, mixed berry, and custard fillings.',
    price: 14.49,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophia Loren',
    role: 'Loyal Customer',
    rating: 5,
    text: 'Cakoo baked our wedding cake, and it was a masterpiece! Not only was the design incredibly detailed and beautiful, but the layers of red velvet and white chocolate were remarkably light and fresh. Absolutely outstanding service.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't2',
    name: 'Marcus Sterling',
    role: 'Food Blogger',
    rating: 5,
    text: 'The best croissants in town, hands down! Flaky, airy, and so rich with butter. You can tell they use premium ingredients and genuine French techniques. The chocolate fudge brownie is also legendary.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Event Coordinator',
    rating: 5,
    text: 'I hire Cakoo for all our corporate events and birthday celebrations. Their custom cakes are gorgeous and always the highlight of the event. They deliver on time, and the quality is incredibly consistent.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't4',
    name: 'Jonathan Vance',
    role: 'Local Resident',
    rating: 5,
    text: 'The artisan sourdough is a staple in my household. It has the perfect crust and amazing sour flavor. I also cannot resist grabbing a couple of macarons every time I visit. The staff is always warm and welcoming.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't5',
    name: 'Clara Jenkins',
    role: 'Mother of Two',
    rating: 5,
    text: 'Ordering custom birthday cakes from Cakoo is so simple and stress-free. They listened to exactly what my daughter wanted and created a beautiful, delicious unicorn cake that the kids absolutely adored!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't6',
    name: 'David Kim',
    role: 'Pastry Aficionado',
    rating: 5,
    text: 'Their Belgian chocolate cake is pure bliss. It has a beautiful rich cacao taste without being overly sweet. It is rare to find a bakery that balances texture, premium flavor, and service so flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'o1',
    title: '15% Off Birthday Cakes',
    description: 'Plan ahead! Get a sweet 15% discount on all custom and featured birthday cake designs when you order 7 days in advance.',
    discountCode: 'BIRTHDAY15',
    badge: 'Limited Time',
    expiryDate: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'o2',
    title: 'Buy 6 Cupcakes, Get 2 Free',
    description: 'Perfect for sharing. Mix and match your favorite flavors in a half-dozen box, and we will add two bonus cupcakes for free.',
    discountCode: 'SWEETBOX8',
    badge: 'Popular',
    expiryDate: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'o3',
    title: 'Weekend Pastry Special',
    description: 'Start your weekend right. Get a complimentary freshly-brewed coffee with any morning pastry purchase every Saturday and Sunday.',
    discountCode: 'WEEKENDVIBES',
    badge: 'Weekends Only',
    expiryDate: 'Weekly',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'o4',
    title: 'Wedding Cake Package Discounts',
    description: 'Book your wedding consultation with us and receive free wedding favor cookies, plus a 10% discount on the entire tiered cake setup.',
    discountCode: 'FOREVERLOVE',
    badge: 'Premium Pack',
    expiryDate: 'Dec 31, 2026',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=400&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Artisan Floral Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Assorted Swirl Cupcakes',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Perfect Chocolate Chip Cookies',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558961309-dbdf03b46a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    title: 'Four-Tier Elegant Wedding Cake',
    category: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Delicate Pastel Macarons',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Our Warm, Welcoming Interior',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g7',
    title: 'Freshly Baked Crusty Breads',
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g8',
    title: 'Colorful Sugar-Coated Fruit Tarts',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do you make custom cakes?',
    answer: 'Absolutely! Custom cakes are our specialty. We craft bespoke designs for weddings, birthdays, baby showers, anniversaries, and other corporate events. You can request a custom cake online through our "Custom Cake Request" section, or consult directly by scheduling an appointment with our master baker.'
  },
  {
    id: 'f2',
    question: 'How far in advance should I order?',
    answer: 'For standard menu items and pre-designed cakes, we appreciate orders placed 24 to 48 hours in advance. For elaborate custom cakes (including wedding and multi-tier designs), we require booking at least 7 to 14 days in advance so we can prepare specialized ingredients and curate the perfect design.'
  },
  {
    id: 'f3',
    question: 'Do you deliver?',
    answer: 'Yes! We offer professional, temperature-controlled delivery for all our cakes and pastries within a 15-mile radius of our bakery. Custom wedding cakes and high-tier cakes always include dedicated delivery and setup services to ensure they arrive in flawless condition.'
  },
  {
    id: 'f4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and bank transfers for custom events. For in-store purchases, we accept both cash and card payments.'
  },
  {
    id: 'f5',
    question: 'Can I order online?',
    answer: 'Yes, you can easily browse our menu, add artisan treats to your basket, and place a pre-order for either in-store collection or local home delivery directly through our website.'
  },
  {
    id: 'f6',
    question: 'Do you offer eggless or gluten-free options?',
    answer: 'Yes! We want everyone to enjoy freshly baked happiness. We offer a dedicated selection of delicious gluten-free, dairy-free, and eggless custom cakes, cupcakes, and cookies. Please specify your dietary requirements and allergy guidelines when placing your order.'
  }
];
