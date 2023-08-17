import { Box, Typography } from "@mui/material";
import Redes from "../../common/redes/Redes";
import "./Footer.css";
import ContactoFooterContainer from "../../common/contactoFooter/ContactoFooterContainer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = ({ isDark, changeMode }) => {
    return (
        <Box
            className="footer"
            id="contact"
            sx={{ backgroundColor: "primary.dark" }}
        >
            <div className="container-footer">
                <div className="contacto-footer">
                    <ContactoFooterContainer />
                </div>
                <div className="redes-footer">
                    <Typography variant="h4" color="secondary.main">
                        Contact
                    </Typography>
                    <Redes />
                </div>
            </div>
            <div className="desarrollado-footer">
                <a
                    href="#navbar"
                    style={{
                        width: "5%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            color: "secondary.main",
                            display: "flex",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <ArrowUpwardIcon />
                        <p>Go up</p>
                    </Box>
                </a>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "0.9rem",
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: "5%",
                    }}
                    color="secondary.main"
                >
                    @ Developed by Angladette
                </Typography>
            </div>
            <button onClick={changeMode} style={{ cursor: "pointer" }}>
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
        </Box>
    );
};

export default Footer;
