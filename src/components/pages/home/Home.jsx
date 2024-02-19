import { Alert, Box, Typography } from "@mui/material";
import "./Home.css";
import EjemplosProyectsContainer from "../../common/ejemplosProyects/EjemplosProyectsContainer";
import { Link } from "react-router-dom";
import GoUp from "../../common/goUp/GoUp";
import { t } from "i18next";
const Home = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Box sx={{ backgroundColor: "secondary.dark" }}>
            <div className="container-home">
                <div className="introduccion-home">
                    <div style={{ width: "50%" }}>
                        <div className="container-nombre-home">
                            <h2>{t("hi")}</h2>
                            <Typography
                                sx={{
                                    fontSize: {
                                        sx: "2rem",
                                        sm: "3rem",
                                        md: "4rem",
                                    },
                                    fontFamily: "Oswald",
                                }}
                            >
                                Nicolás Angladette,
                            </Typography>
                            <h3>{t("productive")}.</h3>
                        </div>
                    </div>
                    <Box
                        className="separator-intro-home"
                        sx={{ backgroundColor: "primary.dark" }}
                    ></Box>
                    <div className="container-foto-mia">
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691966346/Perfil_kwdhgb.jpg"
                            alt="Yo"
                            className="fotoMia-home"
                        />
                    </div>
                </div>
                <div className="proyects-home">
                    <div className="name-home">
                        <Typography variant="h4">{t("proyects")}</Typography>
                        <Box
                            className="separator-home"
                            sx={{ backgroundColor: "primary.dark" }}
                        ></Box>
                    </div>
                    <div className="ejemplos-home">
                        <EjemplosProyectsContainer />
                    </div>
                </div>
                <div className="aboutMe-home" id="about-me">
                    <div className="name-home">
                        <Typography variant="h4">{t("aboutMe")}</Typography>
                        <Box
                            className="separator-home"
                            sx={{ backgroundColor: "primary.dark" }}
                        ></Box>
                    </div>
                    <div className="container-info-aboutMe-home">
                        <div className="text-aboutMe-home">
                            <Typography>{t("description")}</Typography>
                        </div>
                        <div className="extra-aboutMe-home">
                            <a
                                href="./../../../assets/curriculumNico.pdf"
                                download
                                style={{ color: "black", fontSize: "1.1rem" }}
                            >
                                <strong>Curriculum Vitae</strong>
                            </a>
                            <Link to="/work" style={{ color: "black" }}>
                                <h3>{t("proyects")}</h3>
                            </Link>
                            <a
                                href="https://github.com/Rusoo37"
                                target="_blank"
                                style={{ color: "black" }}
                            >
                                <strong>GitHub</strong>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-btn-discord">
                    <Alert color="success">{t("inquiries")}</Alert>
                    <a
                        href="https://discord.com/channels/@me"
                        className="btn-discord"
                        target="_blank"
                    >
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1696605205/discord-logo-0_yyskdx.png"
                            alt="Discord"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </a>
                </div>
                <GoUp />
            </div>
        </Box>
    );
};

export default Home;
