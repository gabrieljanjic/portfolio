import workExperienceData from "../data/workExperience";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="w-full flex flex-col py-10 xs:py-12"
    >
      <h5 className="text-white text-xl font-bold mb-2 sm:mb-6 tracking-wide">
        WORK EXPERIENCE
      </h5>

      {workExperienceData.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="hidden md:block min-w-40 md:mr-4">
            <p className="text-[#a8adb2] text-sm xs:text-base">
              {item.start} - {item.end}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-base font-semibold">
              {item.position}
            </h3>
            <p className="text-[#a8adb2] text-sm xs:text-base ">
              {item.company} • {item.workType}
            </p>
            <p className="md:hidden text-[#afb4b9] text-sm mt-1 mb-4">
              {item.start} - {item.end}
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
