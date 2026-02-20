import Linkedin from "../assets/imgs/linkedin.png";
import Github from "../assets/imgs/github.png";

type AboutItem = {
  id: number;
  name: string;
  path: string;
  link: string;
};

const aboutData: AboutItem[] = [
  {
    id: 1,
    name: "LinkedIn",
    path: Linkedin,
    link: "https://www.linkedin.com/in/gabriel-janjic/",
  },
  {
    id: 2,
    name: "Github",
    path: Github,
    link: "https://github.com/gabrieljanjic",
  },
];

export default aboutData;
