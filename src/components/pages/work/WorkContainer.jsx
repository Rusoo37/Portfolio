import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Work from "./Work";
import { useEffect, useState } from "react";

const WorkContainer = () => {
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
        <div>
            <Work items={items} />
        </div>
    );
};

export default WorkContainer;
