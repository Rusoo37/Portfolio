import { Box, Typography } from "@mui/material";
import Redes from "../../common/redes/Redes";
import "./Footer.css";
import ContactoFooterContainer from "../../common/contactoFooter/ContactoFooterContainer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Skills from "../../common/skills/Skills";

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
                <div className="second-part-footer">
                    <div>
                        <Skills />
                    </div>
                    <div className="redes-footer">
                        <Typography variant="h4" color="secondary.main">
                            Contact me
                        </Typography>
                        <Redes />
                    </div>
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
                            transition: "all 0.5s ease",
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
                    © Developed by Angladette
                </Typography>
            </div>
            <button onClick={changeMode} style={{ cursor: "pointer" }}>
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
        </Box>
    );
};

export default Footer;
