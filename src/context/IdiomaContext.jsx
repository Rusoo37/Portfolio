import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const IdiomaContext = createContext();

const IdiomaContextComponent = ({ children }) => {
    const [idioma, setIdioma] = useState(false);
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "es" : "en";
        i18n.changeLanguage(newLanguage);
        setIdioma(!idioma);
    };
    const data = {
        idioma,
        toggleLanguage,
    };

    return (
        <IdiomaContext.Provider value={data}>{children}</IdiomaContext.Provider>
    );
};

export default IdiomaContextComponent;
