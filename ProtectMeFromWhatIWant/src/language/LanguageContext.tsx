import React, { createContext, useContext, useState } from 'react';
import translationsData from './language.json';

type LanguageContextType = {
  language: string;
  translations: Record<string, string>;
  changeLanguage: (newLanguage: string) => void;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

type TranslationsType = {
  [key: string]: {
    [key: string]: string;
  };
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('de'); 

  const translations: TranslationsType = translationsData;

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    console.log('Language changed to ' + newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};