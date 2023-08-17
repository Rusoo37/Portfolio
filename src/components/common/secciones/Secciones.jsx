import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Secciones.css";

const Secciones = () => {
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
            <a href="#contact">
                <Typography className="ty" color="secondary.main">
                    Contact
                </Typography>
            </a>
        </>
    );
};

export default Secciones;
