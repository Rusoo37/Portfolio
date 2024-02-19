import { Box, Button, Typography } from "@mui/material";
import "./CardProyect.css";
import { t } from "i18next";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const CardProyect = ({ item }) => {
    const { idioma } = useContext(IdiomaContext);
    return (
        <Box
            className="info-cardProyect"
            sx={{
                backgroundColor: "secondary.light",
                color: "primary.main",
                width: { xs: "90%" },
            }}
        >
            <div className="primeraParte-cardProyect">
                <Typography variant="h4">{item.nombre}</Typography>
            </div>
            <div className="segundaParte-cardProyect">
                <Box sx={{ width: { xs: "50%" } }}>
                    <video
                        controls
                        muted
                        style={{ width: "100%", height: "100%" }}
                        autoPlay
                        loop
                    >
                        <source src={item.video} type="video/mp4" />
                    </video>
                </Box>
                <div className="container-description-cardProyect">
                    <div>
                        <Typography
                            variant="h5"
                            sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
                        >
                            {" "}
                            {idioma ? item.description : item.descripcion}
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined">
                            <a href={item.url} target="_blank">
                                {t("liveCode")}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CardProyect;
