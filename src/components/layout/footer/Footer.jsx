import { Typography } from "@mui/material";
import Redes from "../../common/redes/Redes";
import "./Footer.css";
import ContactoFooterContainer from "../../common/contactoFooter/ContactoFooterContainer";

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="container-footer">
                <div className="contacto-footer">
                    <ContactoFooterContainer />
                </div>
                <div className="redes-footer">
                    <Typography variant="h4">Contacto</Typography>
                    <Redes />
                </div>
            </div>
            <div className="desarrollado-footer">
                <h4>@ Developed by Angladette</h4>
            </div>
        </div>
    );
};

export default Footer;
