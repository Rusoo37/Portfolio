import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: "#3c3c3c" /* Letra negra */,
            dark: "#8e8c88" /* Navbar y Footer */,
        },
        secondary: {
            main: "#0F0303" /* Letra para Navbar - footer */,
            dark: "#f5f5f5" /* main */,
            light: "#EBD3D3" /* cardProduct */,
        },
    },
});

export const customThemeDark = createTheme({
    palette: {
        primary: {
            main: "#EBD3D3" /* Letra blanca */,
            dark: "#3c3c3c" /* Navbar y Footer */,
        },
        secondary: {
            main: "#EBD3D3" /* Letra para Navbar - footer */,
            dark: "#818181" /* main */,
            light: "#3c3c3c" /* cardProduct */,
        },
    },
});
