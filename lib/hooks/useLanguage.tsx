'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, loadResources, Resources } from '@/lib/utils/resource-loader';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resources: Resources;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [resources, setResources] = useState<Resources>(loadResources('en'));

  useEffect(() => {
    // Load saved language preference or detect from browser
    const savedLang = localStorage.getItem('language') as Language | null;
    const detectedLang = savedLang || (typeof window !== 'undefined' && navigator.language.startsWith('ar') ? 'ar' : 'en');
    setLanguageState(detectedLang);
    setResources(loadResources(detectedLang));
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setResources(loadResources(lang));
    localStorage.setItem('language', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resources, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

