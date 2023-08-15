import { Button, TextField, TextareaAutosize } from "@mui/material";
import "./ContactoFooter.css";

const ContactoFooter = ({ handleSubmit, handleChange, errors }) => {
    return (
        <form className="info-footer" onSubmit={handleSubmit}>
            <div className="inputs-footer">
                <h3>Consultame por Mail!</h3>
                <TextField
                    name="name"
                    placeholder="Nombre.."
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        width: { xs: "5rem", md: "15rem", sm: "10rem" },
                    }}
                    error={errors.name ? true : false}
                    helperText={errors.name}
                />
                <TextField
                    name="email"
                    placeholder="Email.."
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        width: { xs: "5rem", md: "15rem", sm: "10rem" },
                    }}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextareaAutosize
                    name="message"
                    placeholder="Mensaje.."
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
                Enviar mensaje
            </Button>
        </form>
    );
};

export default ContactoFooter;
