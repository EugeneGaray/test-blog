import { useEffect } from 'react';
// hooks
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
// config
import { allLangs, defaultLang } from './config';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t: translate } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const langStorage = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

  const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (nextLocale) => {
    i18n.changeLanguage(nextLocale);
    localStorage.setItem('i18nextLng', nextLocale);
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  useEffect(() => {
    if (langStorage !== locale) handleChangeLanguage(locale);
  }, []);

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text, options) => translate(text, options),
    currentLang,
    allLangs,
  };
}
