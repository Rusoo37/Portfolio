import { Alert, Box, Typography } from "@mui/material";
import "./Home.css";
import EjemplosProyectsContainer from "../../common/ejemplosProyects/EjemplosProyectsContainer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <Box sx={{ backgroundColor: "secondary.dark" }}>
            <div className="container-home">
                <div className="introduccion-home">
                    <div style={{ width: "50%" }}>
                        <div className="container-nombre-home">
                            <h2>Hi, I'm</h2>
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
                            <h3> a productive Front End Developer.</h3>
                        </div>
                    </div>
                    <Box
                        className="separator-intro-home"
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
                            className="fotoMia-home"
                        />
                    </div>
                </div>
                <div className="proyects-home">
                    <div className="name-home">
                        <Typography variant="h4">Proyects</Typography>
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
                        <Typography variant="h4">About me</Typography>
                        <Box
                            className="separator-home"
                            sx={{ backgroundColor: "primary.dark" }}
                        ></Box>
                    </div>
                    <div className="container-info-aboutMe-home">
                        <div className="text-aboutMe-home">
                            <Typography>
                                I'm a student of System Engineering at
                                University of Tandil, Buenos Aires, Argentina.
                                Although, I'm a productive Front End Developer
                                working as a freelancer. My skills are
                                JavaScript and ReactJs.
                            </Typography>
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
                                <h3>Proyects</h3>
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
            </div>
        </Box>
    );
};

export default Home;
