import MyPhoto from "../imgs/profile-picture.jpeg";
import aboutData from "../data/aboutData";
import Pin from "../imgs/pin.png";
const About = () => {
  return (
    <section
      id="about"
      className="section d-flex flex-column flex-sm-row align-items-center w-100 gap-5 custom-big-y-padding"
    >
      <div className="img-div w-100 w-lg-50">
        <div className="img-inner-div">
          <img src={MyPhoto} className="img" />
        </div>
      </div>
      <div className="d-flex flex-column w-100 ">
        <h4 className="almost-white fs-3 mb-1">
          <span className="text-white">Hey, I'm Gabriel.</span>
        </h4>
        <h4 className="almost-white mb-4">
          I'm Bacc. Ing. Techn. Inf. & Full-Stack Developer.
        </h4>
        <div className="d-flex justify-content-between w-100">
          <div className="w-50">
            <div className="d-flex align-items-center gap-2">
              <img src={Pin} className="icons" />
              <p className=" p-0 m-0 almost-white">Zagreb, Croatia</p>
            </div>
          </div>
          <div className="d-flex gap-2 gap-md-4">
            {aboutData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center gap-2 "
                >
                  <img src={item.path} className="icons" />
                  <a
                    href={item.link}
                    target="_blank"
                    className="p-0 m-0 link almost-white about-links"
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
