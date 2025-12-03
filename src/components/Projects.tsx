import projectData from "../data/projectsData";
import Web from "../imgs/web.png";
import Github from "../imgs/github.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="d-flex flex-column custom-big-y-padding pt-3 section"
    >
      <h5 className="text-white fs-5 fw-bold mb-4 h5">PROJECTS</h5>
      {projectData.map((item) => {
        return (
          <div key={item.id} className="project-div d-flex flex-column mb-4">
            <img src={item.img} className="project-img" />
            <h5 className="mt-3 text-white fw-bold">{item.name}</h5>
            <p className="almost-white">{item.description}</p>
            <div className="project-grid">
              {item.technology.map((tech) => {
                return (
                  <div
                    key={tech.id}
                    className="d-flex justify-content-center align-items-center gap-2"
                  >
                    <div
                      className="project-pill d-flex justify-content-center align-items-center gap-2"
                      style={{ backgroundColor: tech.backgroundColor }}
                    >
                      <img
                        src={tech.logo}
                        className="project-icons"
                        style={{ flex: "0 0 auto" }}
                      />
                      <p
                        className="p-0 m-0 text-white fs-6"
                        style={{
                          fontSize: "0.8rem",
                        }}
                      >
                        {tech.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-100 d-flex justify-content-between gap-3 mt-4">
              <div className="d-flex justify-content-center align-items-center gap-2 source-live-link-div">
                <img src={Web} className="link-icons" />
                <a
                  href={item.pageLink}
                  className="link text-white cursor"
                  style={{ fontSize: "0.8rem" }}
                  target="_blank"
                >
                  LIVE DEMO
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-2 source-live-link-div">
                <img src={Github} className="link-icons" />
                <a
                  href={item.githubLink}
                  className="link text-white cursor"
                  style={{ fontSize: "0.8rem" }}
                  target="_blank"
                >
                  SOURCE CODE
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
