'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h1>AL-MANEEF CO.</h1>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            {t('nav.home')}
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            {t('nav.about')}
          </a>
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
            {t('nav.products')}
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .navigation.scrolled {
          box-shadow: var(--shadow-md);
        }
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-brand h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin: 0;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-menu a {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
        }
        .nav-menu a:hover {
          color: var(--color-primary);
        }
        .nav-menu a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width var(--transition-normal);
        }
        .nav-menu a:hover::after {
          width: 100%;
        }
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--color-primary);
          transition: all var(--transition-fast);
        }
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all var(--transition-normal);
          }
          .nav-menu.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        }
      `}</style>
    </nav>
  );
};

