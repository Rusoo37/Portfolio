import "./Redes.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Tooltip } from "@mui/material";

const Redes = () => {
    return (
        <Box
            className="container-redes"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
            <a
                href="https://www.facebook.com/nicolas.angladette.7"
                style={{ color: "#385898" }}
            >
                <FacebookIcon />
            </a>
            <Tooltip title="Necochea" sx={{ color: "secondary.main" }}>
                <LocationOnIcon />
            </Tooltip>
            <a href="https://wa.link/neljfb" style={{ color: "#25D366" }}>
                <WhatsAppIcon />
            </a>
            <Tooltip title="2262486975" sx={{ color: "secondary.main" }}>
                <PhoneIcon />
            </Tooltip>
            <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-angladette-59040827a/"
                style={{ color: "#0a66c2" }}
            >
                <LinkedInIcon />
            </a>
            <a href="https://github.com/Rusoo37" style={{ color: "black" }}>
                <GitHubIcon />
            </a>
        </Box>
    );
};

export default Redes;
