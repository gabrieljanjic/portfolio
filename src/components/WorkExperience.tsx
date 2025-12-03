import workExperienceData from "../data/workExperience";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="d-flex flex-column custom-big-y-padding section"
    >
      <h5 className="text-white fs-5 fw-bold mb-4 h5">WORK EXPERIENCE</h5>
      {workExperienceData.map((item) => {
        return (
          <div key={item.id} className="d-flex gap-5">
            <div style={{ flex: "0 0 auto" }}>
              <p className="almost-white">
                {item.start} - {item.end}
              </p>
            </div>
            <div>
              <h3 className="text-white" style={{ fontSize: "1.125rem" }}>
                {item.position}
              </h3>
              <p className="almost-white fsf-6">
                {item.company} • {item.workType}
              </p>
              <p className="almost-white">{item.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WorkExperience;
