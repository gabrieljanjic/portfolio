import workExperienceData from "../data/workExperience";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="w-full flex flex-col py-12 xs:py-16"
    >
      <h5 className="text-white text-xl font-bold mb-2 sm:mb-6 tracking-wide">
        WORK EXPERIENCE
      </h5>
      {workExperienceData.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="shrink-0 md:mr-4">
            <p className="text-[#a8adb2] text-sm xs:text-base">
              {item.start} - {item.end}
            </p>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold">
              {item.position}
            </h3>
            <p className="text-[#a8adb2] text-sm xs:text-base mb-3">
              {item.company} • {item.workType}
            </p>
            <p className="text-[#a8adb2] text-sm xs:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
