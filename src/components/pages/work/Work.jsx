import { Alert, Box } from "@mui/material";
import CardProyect from "../../common/cardProyect/CardProyect";
import "./Work.css";
import Skeleton from "@mui/material/Skeleton";
import GoUp from "../../common/goUp/GoUp";

const Work = ({ items }) => {
    let arr = [1, 2];
    return (
        <Box
            className="container-works"
            sx={{ backgroundColor: "secondary.dark" }}
        >
            <h1 style={{ marginTop: "2rem", fontSize: "3rem" }}>Proyects</h1>
            {items.length > 0
                ? items.map((item) => <CardProyect key={item.id} item={item} />)
                : arr.map((element) => (
                      <Box
                          className="info-skeleton-work"
                          sx={{ width: "100%", height: "30rem" }}
                          key={element}
                      >
                          <div className="primeraParte-skeleton-work">
                              <Skeleton
                                  variant="rectangular"
                                  sx={{ width: "20%", height: "2rem" }}
                              />
                          </div>
                          <div className="segundaParte-skeleton-work">
                              <div style={{ width: "50%" }}>
                                  <Skeleton
                                      variant="rectangular"
                                      sx={{ width: "100%", height: "10rem" }}
                                  />
                              </div>
                              <div className="container-description-skeleton">
                                  <Skeleton
                                      variant="rounded"
                                      sx={{ width: "70%", height: "15rem" }}
                                  />
                                  <Skeleton
                                      variant="rounded"
                                      sx={{ width: "50%", height: "3rem" }}
                                  />
                              </div>
                          </div>
                      </Box>
                  ))}
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

export default Work;
