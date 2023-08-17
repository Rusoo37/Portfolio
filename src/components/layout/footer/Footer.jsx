import { Box, Typography } from "@mui/material";
import Redes from "../../common/redes/Redes";
import "./Footer.css";
import ContactoFooterContainer from "../../common/contactoFooter/ContactoFooterContainer";

const Footer = () => {
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
                        Contacto
                    </Typography>
                    <Redes />
                </div>
            </div>
            <div className="desarrollado-footer">
                <Typography
                    variant="h6"
                    sx={{ fontSize: "0.9rem" }}
                    color="secondary.main"
                >
                    @ Developed by Angladette
                </Typography>
            </div>
        </Box>
    );
};

export default Footer;
