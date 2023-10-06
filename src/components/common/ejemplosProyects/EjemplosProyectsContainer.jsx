import EjemplosProyects from "./EjemplosProyects";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebaseConfig";

const EjemplosProyectsContainer = () => {
    const [items, setItems] = useState([]);
    let proyectsCollection = collection(db, "Proyects");
    useEffect(() => {
        getDocs(proyectsCollection).then((res) => {
            let newArr = res.docs.map((proyect) => {
                return { ...proyect.data(), id: proyect.id };
            });
            setItems(newArr);
        });
    }, []);
    return (
        <div style={{ width: "90%" }}>
            <EjemplosProyects items={items} />
        </div>
    );
};

export default EjemplosProyectsContainer;
