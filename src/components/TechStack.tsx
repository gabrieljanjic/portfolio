import techStackData from "../data/techStackData";

const TechStack = () => {
  return (
    <section className="custom-big-y-padding section" id="tech-stack">
      <h5 className="text-white fs-5 fw-bold mb-4 h5">TECH STACK</h5>
      <div className="custom-grid">
        {techStackData.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex flex-column justify-content-center align-items-center gap-2 p-3"
              style={{ border: "1px solid #a8adb2", borderRadius: "5px" }}
            >
              <img src={item.path} className="techLogo" />
              <p className="almost-white p-0 m-0">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
