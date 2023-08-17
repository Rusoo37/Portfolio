import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { customTheme, customThemeDark } from "../../themContext/ThemContext";

const Layout = () => {
    const [isDark, setIsDark] = useState(false);
    const changeMode = () => {
        setIsDark(!isDark);
    };
    return (
        <ThemeProvider theme={isDark ? customThemeDark : customTheme}>
            <>
                <Navbar />
                <Outlet />
                <Footer isDark={isDark} changeMode={changeMode} />
            </>
        </ThemeProvider>
    );
};

export default Layout;
