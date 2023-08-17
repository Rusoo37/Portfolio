import { Box, Typography } from "@mui/material";
import "./CardProyect.css";

const CardProyect = ({ item }) => {
    return (
        <Box
            className="info-cardProyect"
            sx={{ backgroundColor: "secondary.light", color: "primary.main" }}
        >
            <div className="primeraParte-cardProyect">
                <Typography variant="h4">{item.nombre}</Typography>
            </div>
            <div className="segundaParte-cardProyect">
                <div style={{ width: "50%" }}>
                    <video
                        controls
                        muted
                        width="500"
                        height="300"
                        autoPlay
                        loop
                    >
                        <source src={item.video} type="video/mp4" />
                    </video>
                </div>
                <div className="container-description-cardProyect">
                    <div>{item.descripcion}</div>
                    <div>
                        <a href={item.url} target="_blank">
                            <Typography variant="h5" color="primary.main">
                                {item.url}
                            </Typography>
                        </a>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CardProyect;
