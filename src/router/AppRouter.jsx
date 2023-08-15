import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Layout from "../components/layout/Layout";
import NotFoundContainer from "../components/pages/notFound/NotFoundContainer";
import { routes } from "./menuRoutes.js";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {routes.map(({ id, path, Element }) => (
                        <Route key={id} path={path} element={<Element />} />
                    ))}
                </Route>
                <Route path="*" element={<NotFoundContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
