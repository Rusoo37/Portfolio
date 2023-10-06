import { Link } from "react-router-dom";
import "./CardSample.css";
const CardSampleProyects = ({ item }) => {
    return (
        <Link to="/work" className="container-sample-proyect">
            <h2 className="nombre-sample-poryect">{item.nombre}</h2>
            <img
                src={item.img}
                alt={item.nombre}
                className="img-sample-proyect"
            />
        </Link>
    );
};

export default CardSampleProyects;
