import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Secciones.css";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";

const Secciones = ({ scrollToSection, toggleLanguage }) => {
    const { t } = useTranslation();
    return (
        <>
            <Link to="./work">
                <Typography className="ty" color="secondary.main">
                    {t("work")}
                </Typography>
            </Link>
            <Link to="./about-me">
                <Typography
                    className="ty"
                    sx={{ fontFamily: "Rubik" }}
                    color="secondary.main"
                >
                    {t("aboutMe")}
                </Typography>
            </Link>
            <button
                onClick={() => scrollToSection("contact")}
                style={{ background: "none", border: "none" }}
            >
                <Typography className="ty" color="secondary.main">
                    {t("contact")}
                </Typography>
            </button>
            <button onClick={toggleLanguage} className="cambiar-idioma">
                {i18n.language === "en" ? "Español" : "English"}
            </button>
        </>
    );
};

export default Secciones;
