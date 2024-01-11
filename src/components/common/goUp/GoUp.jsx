import { useState, useEffect } from "react";
import "./GoUp.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const GoUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 100); // Muestra el botón cuando el scroll es mayor a 100px
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon />
        </div>
    );
};

export default GoUp;
