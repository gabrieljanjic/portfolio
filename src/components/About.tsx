import MyPhoto from "../assets/imgs/profile-picture.jpg";
import aboutData from "../data/aboutData";
import Pin from "../assets/imgs/pin.png";
import Gmail from "../assets/imgs/gmail.png";

const About = () => {
  return (
    <section
      id="about"
      className="section flex flex-col sm:flex-row items-center w-full gap-6 sm:gap-12 py-8 sm:py-16"
    >
      <div className="min-w-44 min-h-44 p-1 rounded-full bg-linear-to-tr from-[#ffc000] to-[#d300c5] overflow-hidden flex justify-center items-center">
        <img
          src={MyPhoto}
          className="w-42 h-42 rounded-full border-[3px] border-white object-cover"
        />
      </div>
      <div className="flex flex-col w-full ">
        <h4 className="text-[#a8adb2] text-xl md:text-2xl font-semibold mb-1">
          <span className="text-white">Hey, I'm Gabriel.</span>
        </h4>
        <h4 className="text-[#a8adb2] text-xl md:text-2xl font-semibold mb-4">
          I'm Bacc. Ing. Techn. Inf. & Full-Stack Developer.
        </h4>
        <div className="flex gap-2  mb-3">
          <img src={Gmail} className="w-6" />
          <p className="text-[#a8adb2] p-0 m-0  text-sm xs:text-base">
            janjicgabriel1@gmail.com
          </p>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-1/2">
            <div className="flex items-center gap-2 ">
              <img src={Pin} className="w-6" />
              <p className=" p-0 m-0 text-[#a8adb2]  text-sm xs:text-base">
                Zagreb, Croatia
              </p>
            </div>
          </div>
          <div className="flex gap-4 gap-md-4">
            {aboutData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-2"
                >
                  <img src={item.path} className="w-6" />
                  <a
                    href={item.link}
                    target="_blank"
                    className="p-0 m-0 link text-[#a8adb2] transition-colors duration-200 hover:text-white text-sm xs:text-base"
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
