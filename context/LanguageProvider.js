import { createContext, useEffect, useState } from "react";
import languageConfig from "config/language.json";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleThemeChange = () => {
      let defaultLanguage = navigator.language || navigator.userLanguage;
      defaultLanguage = defaultLanguage.split("-");
      defaultLanguage = defaultLanguage[0];
      if (
        ![languageConfig.defaultLanguage, ...languageConfig.translations].some(
          (x) => x.language === defaultLanguage
        )
      ) {
        setLanguage("en");
        return;
      }
      const storageLanguage = localStorage.getItem("language");
      if (!storageLanguage) {
        setLanguage(defaultLanguage);
        return;
      }
      setLanguage(storageLanguage);
    };

    window.addEventListener("languagechange", handleThemeChange());

    return () => {
      window.removeEventListener("languagechange", () => handleThemeChange());
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
