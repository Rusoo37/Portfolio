import "./Navbar.css";
import Secciones from "../../common/secciones/Secciones";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Navbar = () => {
    return (
        <Box
            className="container-navbar"
            id="navbar"
            sx={{
                backgroundColor: "primary.dark",
            }}
        >
            <div className="logo-navbar">
                <h2 style={{ width: "5rem" }}>
                    <Link to="/" style={{ color: "white" }}>
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1692309985/gif_bprnil.webp"
                            alt="Logo"
                            style={{
                                width: "105%",
                                height: "105%",
                                marginLeft: "1rem",
                            }}
                        />
                    </Link>
                </h2>
            </div>
            <div className="secciones-navbar">
                <Secciones />
            </div>
        </Box>
    );
};

export default Navbar;
