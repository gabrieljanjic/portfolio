import workExperienceData from "../data/workExperience";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="d-flex flex-column custom-big-y-padding section"
    >
      <h5 className="text-white fs-5 fw-bold mb-4">WORK EXPERIENCE</h5>
      {workExperienceData.map((item) => (
        <div
          key={item.id}
          className="d-flex flex-column flex-md-row gap-3 mb-4"
        >
          <div className="flex-shrink-0 me-md-3">
            <p className="almost-white">
              {item.start} - {item.end}
            </p>
          </div>
          <div>
            <h3 className="text-white fs-6">{item.position}</h3>
            <p className="almost-white fs-6">
              {item.company} • {item.workType}
            </p>
            <p className="almost-white">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
