import { Alert, Box, Typography } from "@mui/material";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import GoUp from "../../common/goUp/GoUp";
import { t } from "i18next";

const AboutMe = ({ idioma }) => {
    return (
        <Box
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            sx={{ backgroundColor: "secondary.dark" }}
        >
            <h1 style={{ marginTop: "5rem" }}>{t("aboutMe")}</h1>

            <div className="container-info-aboutMe">
                <div className="text-aboutMe">
                    <Typography
                        sx={{ fontSize: { xs: "0.9rem", sm: "1.2rem" } }}
                    >
                        {t("descriptionAbout")}
                    </Typography>
                    <div>
                        <h3>Extras:</h3>
                        <div className="extra-aboutMe">
                            <li>
                                <a
                                    href="./../../../assets/curriculumNico.pdf"
                                    download
                                    style={{
                                        color: "black",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    <strong>Curriculum Vitae</strong>
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/work"
                                    style={{
                                        color: "black",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    <strong>{t("proyects")}</strong>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Rusoo37"
                                    style={{ color: "black" }}
                                >
                                    <strong>GitHub</strong>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <Box
                    className="separator-intro"
                    sx={{ backgroundColor: "primary.dark" }}
                ></Box>
                <div className="container-fotoMia-aboutMe">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691966346/Perfil_kwdhgb.jpg"
                        alt="Yo"
                        className="fotoMia-aboutMe"
                    />
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
        </Box>
    );
};

export default AboutMe;
