import { useLanguage } from './useLanguage';
import { getString } from '@/lib/utils/resource-loader';

export const useTranslation = () => {
  const { resources } = useLanguage();

  const t = (path: string): string => {
    return getString(resources, path);
  };

  return { t, resources };
};

