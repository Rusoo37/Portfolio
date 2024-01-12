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
        <Box className="container-redes" sx={{ flexDirection: { md: "row" } }}>
            <Tooltip title="Necochea" sx={{ color: "secondary.main" }}>
                <LocationOnIcon />
            </Tooltip>
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
