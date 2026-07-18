import ReactLogo from "../assets/imgs/tech-imgs/react.png";
import BootstrapLogo from "../assets/imgs/tech-imgs/bootstrap.png";
import TailwindLogo from "../assets/imgs/tech-imgs/tailwind.png";
import Csharp from "../assets/imgs/tech-imgs/c-sharp.png";
import AspNetCore from "../assets/imgs/tech-imgs/asp-net-core.png";
import MicrosoftSqlServer from "../assets/imgs/tech-imgs/microsoft-sql-server.png";
import TypeScriptLogo from "../assets/imgs/tech-imgs/typescript.png";
import MongoDbLogo from "../assets/imgs/tech-imgs/mongo-db.png";
import PostgreSqlLogo from "../assets/imgs/tech-imgs/postgresql.png";
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
    name: "C#",
    path: Csharp,
  },
  {
    id: 5,
    name: "ASP.NET Core",
    path: AspNetCore,
  },
  {
    id: 6,
    name: "React Native",
    path: ReactLogo,
  },
  {
    id: 7,
    name: "Node.js",
    path: NodeJsLogo,
  },
  {
    id: 8,
    name: "SQL Server",
    path: MicrosoftSqlServer,
  },
  {
    id: 9,
    name: "PostgreSQL",
    path: PostgreSqlLogo,
  },
  {
    id: 10,
    name: "MongoDB",
    path: MongoDbLogo,
  },
  {
    id: 11,
    name: "Vitest",
    path: VitestLogo,
  },
  {
    id: 12,
    name: "React Testing",
    path: ReactTestingLibraryLogo,
  },
  {
    id: 13,
    name: "Tailwind",
    path: TailwindLogo,
  },
  {
    id: 14,
    name: "Bootstrap.js",
    path: BootstrapLogo,
  },
];

export default techStackData;
