import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // 1. Set Page Title & Meta Description
    document.title = 'Cakoo Bakery | Handcrafted Cakes, Pastries & Artisan Breads';
    
    // Manage Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Freshly baked happiness every day. Handcrafted cakes, pastries, breads, and desserts made with premium ingredients for weddings, birthdays, and anniversaries.');

    // 2. Open Graph Tags
    const ogTags = {
      'og:title': 'Cakoo Bakery | Freshly Baked Happiness Every Day',
      'og:description': 'Handcrafted cakes, pastries, breads, and desserts made with premium ingredients for every celebration.',
      'og:type': 'website',
      'og:url': window.location.href,
      'og:image': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&h=630&q=80',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 3. Twitter Card Tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Cakoo Bakery | Handcrafted Cakes & Desserts',
      'twitter:description': 'Premium handcrafted artisan cakes, breads, and pastries made with fresh ingredients.',
      'twitter:image': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&h=630&q=80',
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 4. Structured Schema Markup (JSON-LD) for a Bakery
    const schemaId = 'cakoo-bakery-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const bakerySchema = {
      '@context': 'https://schema.org',
      '@type': 'Bakery',
      'name': 'Cakoo Bakery',
      'alternateName': 'Cakoo Handcrafted Bakery',
      'description': 'Handcrafted artisan cakes, pastries, sourdough breads, and elegant desserts made with organic, premium ingredients.',
      'image': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      'url': window.location.origin,
      'telephone': '+1 (555) 123-4567',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '128 Gourmet Avenue, Sugar District',
        'addressLocality': 'Pastry Hills',
        'addressRegion': 'CA',
        'postalCode': '90210',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '34.0736',
        'longitude': '-118.4004'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '19:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday', 'Sunday'],
          'opens': '08:00',
          'closes': '18:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/cakoo.bakery',
        'https://www.instagram.com/cakoo.bakery',
        'https://www.twitter.com/cakoo_bakery'
      ]
    };

    scriptTag.textContent = JSON.stringify(bakerySchema);

    return () => {
      // Clean up dynamic elements if needed, but keeping schemas on SPA is fine.
    };
  }, []);

  return null;
}
