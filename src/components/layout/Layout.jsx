import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
