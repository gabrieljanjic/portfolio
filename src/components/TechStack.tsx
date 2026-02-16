import techStackData from "../data/techStackData";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-2 xs:py-16">
      <h5 className="text-white text-xl font-bold mb-5 tracking-wide">
        TECH STACK
      </h5>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-4">
        {techStackData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-2 p-1 xs:p-3 border border-gray-400 rounded-md"
          >
            <img
              src={item.path}
              className="w-7 h-7 xs:w-8 xs:h-8 object-contain"
              alt={item.name}
            />
            <p className="text-gray-200 text-sm xs:text-base">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
