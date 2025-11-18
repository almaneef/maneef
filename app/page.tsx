'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <div id="main-content">
        <Hero />
        <About />
        <Products />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

