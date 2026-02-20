import ReactLogo from "../assets/imgs/tech-imgs/react.png";
import BootstrapLogo from "../assets/imgs/tech-imgs/bootstrap.png";
import TailwindLogo from "../assets/imgs/tech-imgs/tailwind.png";
import CssLogo from "../assets/imgs/tech-imgs/css.png";
import HtmlLogo from "../assets/imgs/tech-imgs/html.png";
import JavaScriptLogo from "../assets/imgs/tech-imgs/javascript.png";
import TypeScriptLogo from "../assets/imgs/tech-imgs/typescript.png";
import MongoDbLogo from "../assets/imgs/tech-imgs/mongo-db.png";
import MySqlLogo from "../assets/imgs/tech-imgs/my-sql.png";
import NodeJsLogo from "../assets/imgs/tech-imgs/node-js.png";
import NextJsLogo from "../assets/imgs/tech-imgs/next-js.png";
import ReactTestingLibraryLogo from "../assets/imgs/tech-imgs/react-testing-logo.png";
import VitestLogo from "../assets/imgs/tech-imgs/vitest.png";

type TechStackItem = {
  id: number;
  path: string;
  name: string;
};

const techStackData: TechStackItem[] = [
  {
    id: 1,
    name: "React",
    path: ReactLogo,
  },
  {
    id: 2,
    name: "Next.js",
    path: NextJsLogo,
  },
  {
    id: 3,
    name: "TypeScript",
    path: TypeScriptLogo,
  },
  {
    id: 4,
    name: "JavaScript",
    path: JavaScriptLogo,
  },
  {
    id: 5,
    name: "React Native",
    path: ReactLogo,
  },

  {
    id: 6,
    name: "Tailwind",
    path: TailwindLogo,
  },
  {
    id: 7,
    name: "Node.js",
    path: NodeJsLogo,
  },

  {
    id: 8,
    name: "Vitest",
    path: VitestLogo,
  },
  {
    id: 9,
    name: "React Testing",
    path: ReactTestingLibraryLogo,
  },
  {
    id: 10,
    name: "MySQL",
    path: MySqlLogo,
  },

  {
    id: 11,
    name: "MongoDB",
    path: MongoDbLogo,
  },
  {
    id: 12,
    name: "Bootstrap.js",
    path: BootstrapLogo,
  },
  {
    id: 13,
    name: "HTML",
    path: HtmlLogo,
  },
  {
    id: 14,
    name: "CSS",
    path: CssLogo,
  },
];

export default techStackData;
