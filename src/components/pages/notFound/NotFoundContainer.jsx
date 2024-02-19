import { Button } from "@mui/material";
import { t } from "i18next";
import { Link } from "react-router-dom/dist";

const NotFoundContainer = () => {
    return (
        <div>
            <h3>{t("nonExistent")}</h3>
            <Link to="/">
                <Button>{t("volverInicio")}</Button>
            </Link>
        </div>
    );
};

export default NotFoundContainer;
