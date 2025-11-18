'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={language === 'ar' ? 'active' : ''}
        aria-label="Switch to Arabic"
      >
        AR
      </button>
      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          background: var(--color-background-alt);
          padding: 0.25rem;
          border-radius: var(--border-radius-md);
        }
        .language-switcher button {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: var(--color-text);
          cursor: pointer;
          border-radius: var(--border-radius-sm);
          font-weight: 500;
          transition: all var(--transition-fast);
          font-size: 0.875rem;
        }
        .language-switcher button:hover {
          background: var(--color-background);
        }
        .language-switcher button.active {
          background: var(--color-primary);
          color: white;
        }
      `}</style>
    </div>
  );
};

