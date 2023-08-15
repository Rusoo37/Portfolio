import { Alert } from "@mui/material";
import CardProyect from "../../common/cardProyect/CardProyect";
import "./Work.css";
import Skeleton from "@mui/material/Skeleton";

const Work = ({ items }) => {
    let arr = [1, 2];
    return (
        <div className="container-works">
            <h1 style={{ marginTop: "2rem" }}>Proyects</h1>
            {items.length > 0
                ? items.map((item) => <CardProyect key={item.id} item={item} />)
                : arr.map((element) => (
                      <div className="info-skeleton-work" key={element}>
                          <div className="primeraParte-skeleton-work">
                              <Skeleton
                                  variant="rectangular"
                                  width={300}
                                  height={50}
                              />
                          </div>
                          <div className="segundaParte-skeleton-work">
                              <div style={{ width: "50%" }}>
                                  <Skeleton
                                      variant="rectangular"
                                      width={500}
                                      height={290}
                                  />
                              </div>
                              <div className="container-description-skeleton">
                                  <Skeleton
                                      variant="rounded"
                                      width={500}
                                      height={150}
                                  />
                                  <div>
                                      <Skeleton
                                          variant="rounded"
                                          width={400}
                                          height={30}
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
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

export default Work;
