import stringsEn from '@/resources/strings/en.json';
import stringsAr from '@/resources/strings/ar.json';
import companyInfo from '@/resources/company-info.json';
import socialLinks from '@/resources/social-links.json';
import aboutUsEn from '@/resources/content/about-us-en.json';
import aboutUsAr from '@/resources/content/about-us-ar.json';
import theme from '@/resources/theme.json';

export type Language = 'en' | 'ar';

export interface Resources {
  strings: typeof stringsEn;
  companyInfo: typeof companyInfo;
  socialLinks: typeof socialLinks;
  aboutUs: typeof aboutUsEn;
  theme: typeof theme;
}

export const loadResources = (lang: Language): Resources => {
  return {
    strings: lang === 'ar' ? stringsAr : stringsEn,
    companyInfo,
    socialLinks,
    aboutUs: lang === 'ar' ? aboutUsAr : aboutUsEn,
    theme,
  };
};

export const getString = (resources: Resources, path: string): string => {
  const keys = path.split('.');
  let value: any = resources.strings;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Return path if not found
    }
  }
  
  return typeof value === 'string' ? value : path;
};

