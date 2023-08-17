import { useState } from "react";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { customTheme, customThemeDark } from "./themContext/ThemContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
    const [isDark, setIsDark] = useState(false);
    const changeMode = () => {
        setIsDark(!isDark);
    };
    return (
        <ThemeProvider theme={isDark ? customThemeDark : customTheme}>
            <>
                <AppRouter />
                <button onClick={changeMode}>
                    {isDark ? <DarkModeIcon /> : <LightModeIcon />}
                </button>
            </>
        </ThemeProvider>
    );
}

export default App;
