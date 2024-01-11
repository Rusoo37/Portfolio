import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Secciones.css";

const Secciones = ({ scrollToSection }) => {
    return (
        <>
            <Link to="./work">
                <Typography className="ty" color="secondary.main">
                    Work
                </Typography>
            </Link>
            <Link to="./about-me">
                <Typography
                    className="ty"
                    sx={{ fontFamily: "Rubik" }}
                    color="secondary.main"
                >
                    About me
                </Typography>
            </Link>
            <button
                onClick={() => scrollToSection("contact")}
                style={{ background: "none", border: "none" }}
            >
                <Typography className="ty" color="secondary.main">
                    Contact
                </Typography>
            </button>
        </>
    );
};

export default Secciones;
