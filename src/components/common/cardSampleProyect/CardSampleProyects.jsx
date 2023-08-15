import "./CardSample.css";
const CardSampleProyects = ({ item }) => {
    return (
        <div className="container-sample-proyect">
            <h2 className="nombre-sample-poryect">{item.nombre}</h2>
            <img
                src={item.img}
                alt={item.nombre}
                className="img-sample-proyect"
            />
        </div>
    );
};

export default CardSampleProyects;
