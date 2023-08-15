import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Secciones.css";

const Secciones = () => {
    return (
        <>
            <Link to="./work" style={{ color: "black" }}>
                <Typography className="ty">Work</Typography>
            </Link>
            <Link to="./about-me" style={{ color: "black" }}>
                <Typography className="ty" sx={{ fontFamily: "Rubik" }}>
                    About me
                </Typography>
            </Link>
            <a href="#contact" style={{ color: "black" }}>
                <Typography className="ty">Contact</Typography>
            </a>
        </>
    );
};

export default Secciones;
