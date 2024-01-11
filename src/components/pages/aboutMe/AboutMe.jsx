import { Alert, Box, Typography } from "@mui/material";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import GoUp from "../../common/goUp/GoUp";

const AboutMe = () => {
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
            <h1 style={{ marginTop: "5rem" }}>About Me</h1>

            <div className="container-info-aboutMe">
                <div className="text-aboutMe">
                    <Typography
                        sx={{ fontSize: { xs: "0.9rem", sm: "1.2rem" } }}
                    >
                        I'm a System Engineering student, who is 20 years old,
                        at University of Tandil, Buenos Aires, Argentina.
                        Although, I'm a productive Front End Developer working
                        as a freelancer. My skills are JavaScript and ReactJs.
                        I'm interested on working in short proyects in order to
                        continue my university studies.
                    </Typography>
                    <h3>Extras:</h3>
                    <div className="extra-aboutMe">
                        <li>
                            <a
                                href="./../../../assets/curriculumNico.pdf"
                                download
                                style={{ color: "black", fontSize: "1.1rem" }}
                            >
                                <strong>Curriculum Vitae</strong>
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/work"
                                style={{ color: "black", fontSize: "1.1rem" }}
                            >
                                <strong>Proyects</strong>
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
                <Box
                    className="separator-intro"
                    sx={{ backgroundColor: "primary.dark" }}
                ></Box>
                <div
                    style={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691966346/Perfil_kwdhgb.jpg"
                        alt="Yo"
                        className="fotoMia-aboutMe"
                    />
                </div>
            </div>
            <div className="container-btn-discord">
                <Alert color="success">Inquiries by Discord!</Alert>
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
