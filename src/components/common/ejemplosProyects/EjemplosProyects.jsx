import { Skeleton } from "@mui/material";
import CardSampleProyects from "../cardSampleProyect/CardSampleProyects";
import "./Ejemplos.css";

const EjemplosProyects = ({ items }) => {
    let newArr = [1, 2];
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
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
                              width={300}
                              height={60}
                          ></Skeleton>
                          <Skeleton
                              variant="rectangular"
                              width={300}
                              height={300}
                          ></Skeleton>
                      </div>
                  ))}
        </div>
    );
};

export default EjemplosProyects;
