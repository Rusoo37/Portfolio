import { useState } from "react";
import ContactoFooter from "./ContactoFooter";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactoFooterContainer = () => {
    const [contact, setContact] = useState({});
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
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
                    console.log("Correo enviado con éxito:", response);
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                });
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
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
            />
        </div>
    );
};

export default ContactoFooterContainer;
