import { useState } from "react";
import ContactoFooter from "./ContactoFooter";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactoFooterContainer = () => {
    const [contact, setContact] = useState({});

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const clearInputs = () => {
        setNombre("");
        setCorreo("");
        setMensaje("");
    };

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
        },
        onSubmit: (data) => {
            let client = {
                name: data.name,
                email: data.email,
                message: data.message,
            };
            setContact(client);
            emailjs
                .send(
                    `service_qwmxoev`,
                    `template_so2ec7j`,
                    client,
                    `JKF_XSLZQa9-f46Lu`
                )
                .then((response) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Su mail fue enviado correctamente!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo salio mal!",
                    });
                });
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio"),
            email: Yup.string()
                .email("El email no es válido")
                .required("Este campo es obligatorio"),
            message: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });
    return (
        <div>
            <ContactoFooter
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                nombre={nombre}
                correo={correo}
                mensaje={mensaje}
                setNombre={setNombre}
                setCorreo={setCorreo}
                setMensaje={setMensaje}
            />
        </div>
    );
};

export default ContactoFooterContainer;
