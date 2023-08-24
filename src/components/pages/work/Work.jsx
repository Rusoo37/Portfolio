import { Alert, Box } from "@mui/material";
import CardProyect from "../../common/cardProyect/CardProyect";
import "./Work.css";
import Skeleton from "@mui/material/Skeleton";

const Work = ({ items }) => {
    let arr = [1, 2];
    return (
        <Box
            className="container-works"
            sx={{ backgroundColor: "secondary.dark" }}
        >
            <h1 style={{ marginTop: "2rem" }}>Proyects</h1>
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
            <div className="container-btn-whatsapp">
                <Alert color="success">Inquiries by WhatsApp!</Alert>
                <a href="https://wa.link/neljfb" className="btn-whatsapp">
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1691860314/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png_arus4e.png"
                        alt="WhatsApp"
                        style={{ height: "100%", width: "100%" }}
                    />
                </a>
            </div>
        </Box>
    );
};

export default Work;
