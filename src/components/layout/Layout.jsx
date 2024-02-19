import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import { useContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { customTheme, customThemeDark } from "../../themContext/ThemContext";
import { useTranslation } from "react-i18next";
import { IdiomaContext } from "../../context/IdiomaContext";

const Layout = () => {
    const [isDark, setIsDark] = useState(false);
    const { toggleLanguage } = useContext(IdiomaContext);
    const changeMode = () => {
        setIsDark(!isDark);
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <ThemeProvider theme={isDark ? customThemeDark : customTheme}>
            <>
                <Navbar
                    scrollToSection={scrollToSection}
                    toggleLanguage={toggleLanguage}
                />
                <Outlet />
                <Footer isDark={isDark} changeMode={changeMode} />
            </>
        </ThemeProvider>
    );
};

export default Layout;
