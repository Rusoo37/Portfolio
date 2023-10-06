import GitHubIcon from "@mui/icons-material/GitHub";
import "./Skills.css";

const Skills = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
            }}
        >
            <h1>Skills</h1>
            <div className="container-skills">
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691109202/584830f5cef1014c0b5e4aa1_rssrqy.png"
                        alt="ReactJs"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691147249/lockup_fzalau.svg"
                        alt="Firebase"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691146922/vercel-logo-F748E39008-seeklogo.com_qsgayn.png"
                        alt="Vercel"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1696621715/js_m00tuj.webp"
                        alt="JavaScript"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <GitHubIcon style={{ fontSize: "4rem" }} />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1696621544/material-ui-logo-5BDCB9BA8F-seeklogo.com_fdvwzo.png"
                        alt="Material UI"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1696621478/bootstrap-logo_depig7.png"
                        alt="Boostrap"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="skill">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1696621633/ts_wi1gek.webp"
                        alt="TypeScript"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
