import ReactLogo from "../imgs/react.png";
import BootstrapLogo from "../imgs/bootstrap.png";
import TailwindLogo from "../imgs/tailwind.png";
import CssLogo from "../imgs/css.png";
import HtmlLogo from "../imgs/html.png";
import JavaScriptLogo from "../imgs/javascript.png";
import TypeScriptLogo from "../imgs/typescript.png";
import MongoDbLogo from "../imgs/mongo-db.png";
import MySqlLogo from "../imgs/my-sql.png";
import NodeJsLogo from "../imgs/node-js.png";

type TechStackItem = {
  id: number;
  path: string;
  name: string;
};

const techStackData: TechStackItem[] = [
  {
    id: 1,
    name: "HTML",
    path: HtmlLogo,
  },
  {
    id: 2,
    name: "CSS",
    path: CssLogo,
  },
  {
    id: 3,
    name: "JavaScript",
    path: JavaScriptLogo,
  },
  {
    id: 4,
    name: "React",
    path: ReactLogo,
  },
  {
    id: 5,
    name: "TypeScript",
    path: TypeScriptLogo,
  },
  {
    id: 6,
    name: "Bootstrap.js",
    path: BootstrapLogo,
  },
  {
    id: 7,
    name: "Tailwind",
    path: TailwindLogo,
  },
  {
    id: 8,
    name: "Node.js",
    path: NodeJsLogo,
  },
  {
    id: 9,
    name: "MySQL",
    path: MySqlLogo,
  },
  {
    id: 10,
    name: "MongoDB",
    path: MongoDbLogo,
  },
];

export default techStackData;
