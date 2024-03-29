import { Button, TextField, TextareaAutosize, Typography } from "@mui/material";
import "./ContactoFooter.css";
import { t } from "i18next";

const ContactoFooter = ({
    handleSubmit,
    handleChange,
    errors,
    nombre,
    correo,
    mensaje,
}) => {
    return (
        <form className="info-footer" onSubmit={handleSubmit}>
            <div className="inputs-footer">
                <Typography
                    variant="h5"
                    color="secondary.main"
                    sx={{ fontSize: "1.1rem" }}
                >
                    {t("askMe")}
                </Typography>
                <TextField
                    name="name"
                    placeholder={t("name")}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        width: { xs: "10rem", md: "15rem", sm: "10rem" },
                    }}
                    error={errors.name ? true : false}
                    helperText={errors.name}
                />
                <TextField
                    name="email"
                    placeholder={t("email")}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        width: { xs: "10rem", md: "15rem", sm: "10rem" },
                    }}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextareaAutosize
                    name="message"
                    placeholder={t("message")}
                    variant="outlined"
                    onChange={handleChange}
                    style={{
                        minHeight: "5rem",
                        maxHeight: "10rem",
                        minWidth: "5rem",
                        width: "100%",
                        maxWidth: "15rem",
                        padding: "0.5rem",
                    }}
                />
            </div>
            <Button
                type="submit"
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
            >
                {t("send")}
            </Button>
        </form>
    );
};

export default ContactoFooter;
