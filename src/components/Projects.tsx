import projectData from "../data/projectsData";
import Web from "../imgs/web.png";
import Github from "../imgs/github.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col pt-0 sm:pt-12 w-full mb-4 sm:mb-12"
    >
      <h5 className="text-white text-xl font-bold mb-6 tracking-wide">
        PROJECTS
      </h5>
      {projectData.map((item) => (
        <div
          key={item.id}
          className="border border-white rounded-lg p-4 sm:p-8 flex flex-col mb-6"
        >
          <img
            src={item.img}
            className="rounded-lg w-full object-cover"
            alt={item.name}
          />
          <h5 className="mt-4 text-white font-bold text-lg xs:text-xl">
            {item.name}
          </h5>
          <p className="text-[#a8adb2] text-sm sm:text-base mt-1 sm:mt-2">
            {item.description}
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2 mt-4">
            {item.technology.map((tech) => (
              <div key={tech.id} className="flex justify-center items-center">
                <div
                  className="flex justify-center items-center gap-2 rounded-full px-2 w-full"
                  style={{ backgroundColor: tech.backgroundColor }}
                >
                  <img
                    src={tech.logo}
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                    alt={tech.name}
                  />
                  <p className="text-white text-sm sm:text-base m-0">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-3 mt-4">
            <div className="flex justify-center items-center gap-2 bg-[#1c1e21] rounded-full p-0 sm:p-2 w-full">
              <a
                href={item.pageLink}
                className="text-[#e5e5e5] text-xs xs:text-sm no-underline cursor-pointer hover:text-white"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-2 px-4">
                  <img
                    src={Web}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    alt="Live Demo"
                  />
                  <p>LIVE DEMO</p>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center gap-2 bg-[#1c1e21] rounded-full p-2 w-full">
              <a
                href={item.githubLink}
                className="text-[#e5e5e5] text-xs xs:text-sm no-underline cursor-pointer hover:text-white"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-2 p-0 sm:px-4">
                  <img
                    src={Github}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    alt="Source Code"
                  />
                  <p>SOURCE CODE</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
