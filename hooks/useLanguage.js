import { useContext } from "react";
import LanguageContext from "../context/LanguageProvider";

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const translate = (textObj, maxLength) => {
    if (!textObj) {
      return;
    }
    const result = textObj.find((o) => o.language === language);
    if (!result?.content) {
      return "";
    }
    if (result.content.length >= maxLength) {
      return result.content.substr(0, maxLength) + "...";
    }
    return result.content;
  };
  return {
    language,
    setLanguage,
    translate,
  };
};

export default useLanguage;
