'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggler() {
  const { locale, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`cursor-pointer text-sm px-2 py-1 rounded transition-all ${
          locale === 'en' ? 'bg-cyan-500 text-black' : 'hover:underline'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('ka')}
        className={`cursor-pointer text-sm px-2 py-1 rounded transition-all ${
          locale === 'ka' ? 'bg-cyan-500 text-black' : 'hover:underline'
        }`}
      >
        ქარ
      </button>
    </div>
  );
}
