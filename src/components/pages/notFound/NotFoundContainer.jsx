import { Button } from "@mui/material";
import { Link } from "react-router-dom/dist";

const NotFoundContainer = () => {
    return (
        <div>
            <h3>Esta pagina no existe</h3>
            <Link to="/">
                <Button>Volver al inicio</Button>
            </Link>
        </div>
    );
};

export default NotFoundContainer;
