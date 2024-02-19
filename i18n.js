// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            /* NAVBAR */
            work: "Work",
            aboutMe: "About Me",
            contact: "Contact",
            /* HOME */
            hi: "Hi, I'm",
            productive: "a productive Front End Developer.",
            proyects: "Proyects",
            description:
                "I'm a student of System Engineering at University of Tandil, Buenos Aires, Argentina. Although, I'm a productive Front End Developer working as a freelancer. My skills are JavaScript, ReactJs, TypeScript, Firebase and Css.",
            inquiries: "Inquiries by Discord!",
            nonExistent: "This page does not exist",
            volverInicio: "Back Home",
            /* ABOUT - ME */
            descriptionAbout:
                "I'm a System Engineering student, who is 20 years old, at University of Tandil, Buenos Aires, Argentina. Although, I'm a productive Front End Developer working as a freelancer. My skills are JavaScript, ReactJs, TypeScript, Firebase and Css. I'm interested on working in short proyects in order to continue my university studies.",
            /* FOOTER */
            askMe: "Ask me by Mail!",
            name: "Name..",
            email: "Email...",
            message: "Message..",
            send: "Send Email",
            skills: "Skills",
            developed: "Developed by Angladette",
            liveCode: "Live Code",
        },
    },
    es: {
        translation: {
            /* NAVBAR */
            work: "Proyectos",
            aboutMe: "Sobre Mi",
            contact: "Contacto",
            /* HOME */
            hi: "Hola, yo soy",
            productive: "un productivo desarrollador Front End",
            proyects: "Proyectos",
            description:
                "Soy estudiante de Ingeniería de Sistemas en la Universidad de Tandil, Buenos Aires, Argentina. Aunque soy un desarrollador front-end productivo que trabaja como autónomo. Mis habilidades son JavaScript, ReactJs, TypeScript, Firebase and Css.",
            inquiries: "Consultas por Discord!",
            nonExistent: "Esta pagina no existe",
            volverInicio: "Volver al inicio",
            /* ABOUT - ME */
            descriptionAbout:
                "Soy estudiante de Ingeniería de Sistemas, tengo 20 años, en la Universidad de Tandil, Buenos Aires, Argentina. Aunque soy un desarrollador front-end productivo que trabaja como autónomo. Mis habilidades son JavaScript, ReactJs, TypeScript, Firebase y Css. Estoy interesado en trabajar en proyectos cortos para continuar mis estudios universitarios.",
            /* FOOTER */
            askMe: "¡Pregúntame por correo!",
            name: "Nombre..",
            email: "Email...",
            message: "Mensaje..",
            send: "Enviar Email",
            skills: "Habilidades",
            developed: "Desarrollado por Angladette",
            liveCode: "Código en vivo",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es", // idioma por defecto
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
