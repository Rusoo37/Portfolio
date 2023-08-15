import { Alert, Typography } from "@mui/material";
import "./Home.css";
import EjemplosProyectsContainer from "../../common/ejemplosProyects/EjemplosProyectsContainer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="container-home">
            <div className="introduccion-home">
                <div style={{ width: "50%" }}>
                    <div className="container-nombre-home">
                        <h2>Hi, I'm</h2>
                        <Typography
                            sx={{
                                fontSize: {
                                    sx: "2rem",
                                    md: "4rem",
                                    sm: "3rem",
                                },
                                fontFamily: "Oswald",
                            }}
                        >
                            Nicolás Angladette,
                        </Typography>
                        <h3> a productive Front End Developer.</h3>
                    </div>
                </div>
                <div className="separator-intro-home"></div>
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
                    <div className="separator-home"></div>
                </div>
                <div className="ejemplos-home">
                    <EjemplosProyectsContainer />
                </div>
            </div>
            <div className="aboutMe-home" id="about-me">
                <div className="name-home">
                    <Typography variant="h4">About me</Typography>
                    <div className="separator-home"></div>
                </div>
                <div className="container-info-aboutMe-home">
                    <div className="text-aboutMe-home">
                        <Typography>
                            I'm a student of System Engineering at University of
                            Tandil, Buenos Aires, Argentina. Although, I'm a
                            productive Front End Developer working as a
                            freelancer. My skills are JavaScript and ReactJs.
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
            <div className="container-btn-whatsapp">
                <Alert color="success">Consultas al WhatsApp!</Alert>
                <a href="https://wa.link/neljfb" className="btn-whatsapp">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691860314/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png_arus4e.png"
                        alt="WhatsApp"
                        style={{ height: "100%", width: "100%" }}
                    />
                </a>
            </div>
        </div>
    );
};

export default Home;
