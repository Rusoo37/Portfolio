import { Skeleton } from "@mui/material";
import CardSampleProyects from "../cardSampleProyect/CardSampleProyects";
import "./Ejemplos.css";
import { Link } from "react-router-dom";

const EjemplosProyects = ({ items }) => {
    let newArr = [1, 2];
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {items.length > 0
                ? items.map((item) => (
                      <CardSampleProyects key={item.id} item={item} />
                  ))
                : newArr.map((element) => (
                      <div className="container-sample-proyect" key={element}>
                          <Skeleton
                              variant="rectangular"
                              sx={{ width: "100%", height: "20%" }}
                          ></Skeleton>
                          <Skeleton
                              variant="rectangular"
                              sx={{ width: "100%", height: "70%" }}
                          ></Skeleton>
                      </div>
                  ))}
        </div>
    );
};

export default EjemplosProyects;
