import ReactLogo from "../assets/imgs/tech-imgs/react.png";
import PostgreSql from "../assets/imgs/tech-imgs/postgresql.png";
import TypeScriptLogo from "../assets/imgs/tech-imgs/typescript.png";
import MongoDbLogo from "../assets/imgs/tech-imgs/mongo-db.png";
import NodeJsLogo from "../assets/imgs/tech-imgs/node-js.png";
import TailwindLogo from "../assets/imgs/tech-imgs/tailwind.png";
import NextJsLogo from "../assets/imgs/tech-imgs/next-js.png";
import ReactTestingLibraryLogo from "../assets/imgs/tech-imgs/react-testing-logo.png";
import VitestLogo from "../assets/imgs/tech-imgs/vitest.png";

import FoodieMobileImg from "../assets/imgs/project-imgs/foodie-mobile-img.png";
import MovioTabletImg from "../assets/imgs/project-imgs/movio-app-tablet-img.jpg";
import TalklyTabletImg from "../assets/imgs/project-imgs/talkly-tablet-img.png";

type TechnologyItem = {
  id: number;
  name: string;
  logo: string;
  backgroundColor: string;
};

type ProjectItem = {
  id: number;
  name: string;
  description: string;
  technology: TechnologyItem[];
  githubLink: string;
  pageLink: string;
  img: string;
};

const ReactTechnology: TechnologyItem = {
  id: 1,
  name: "React",
  logo: ReactLogo,
  backgroundColor: "#0d6efd",
};
const ReactNativeTechnology: TechnologyItem = {
  id: 2,
  name: "React Native",
  logo: ReactLogo,
  backgroundColor: "#0d6efd",
};

const TailwindTechnology: TechnologyItem = {
  id: 3,
  name: "Tailwind CSS",
  logo: TailwindLogo,
  backgroundColor: "#1e40af",
};

const ReactTestingLibraryTechnology: TechnologyItem = {
  id: 5,
  name: "React Testing",
  logo: ReactTestingLibraryLogo,
  backgroundColor: "#871303",
};

const VitestTechnology: TechnologyItem = {
  id: 6,
  name: "Vitest",
  logo: VitestLogo,
  backgroundColor: "#909902",
};

const TypeScriptTechnology: TechnologyItem = {
  id: 7,
  name: "TypeScript",
  logo: TypeScriptLogo,
  backgroundColor: "#0600af",
};

const MongoDbTechnology: TechnologyItem = {
  id: 8,
  name: "MongoDB",
  logo: MongoDbLogo,
  backgroundColor: "#065f46",
};

const NodeJsTechnology: TechnologyItem = {
  id: 10,
  name: "Node.js",
  logo: NodeJsLogo,
  backgroundColor: "#14532d",
};

const NextJsTechnology: TechnologyItem = {
  id: 11,
  name: "Next.js",
  logo: NextJsLogo,
  backgroundColor: "#363636",
};

const PostgreSQL: TechnologyItem = {
  id: 12,
  name: "PostgreSQL",
  logo: PostgreSql,
  backgroundColor: "#42428c",
};
const projectData: ProjectItem[] = [
  {
    id: 1,
    name: "Movio",
    description:
      "A full-stack social platform for movie and TV series enthusiasts. Discover trending content, connect with other film lovers, and share your thoughts through a personalized feed.",
    technology: [
      NextJsTechnology,
      ReactTechnology,
      TypeScriptTechnology,
      MongoDbTechnology,
      TailwindTechnology,
      VitestTechnology,
      ReactTestingLibraryTechnology,
    ],
    githubLink: "https://github.com/gabrieljanjic/movio",
    pageLink: "https://movio-delta.vercel.app/",
    img: MovioTabletImg,
  },
  {
    id: 2,
    name: "Foodie",
    description:
      "Foodie is a mobile recipe sharing app built with React Native. Users can discover, create, and save their favourite recipes. Browse hundreds of dishes, add your own creations, and share them with the community.",
    technology: [
      ReactNativeTechnology,
      TypeScriptTechnology,
      TailwindTechnology,
      NodeJsTechnology,
      PostgreSQL,
    ],
    githubLink: "https://github.com/gabrieljanjic/foodie",
    pageLink:
      "https://github.com/gabrieljanjic/foodie/blob/main/mobile/assets/images/qr_code.PNG",
    img: FoodieMobileImg,
  },
  {
    id: 3,
    name: "Talkly",
    description:
      "A modern, real-time chat application built with React, Node.js, and Socket.IO, featuring secure authentication, live messaging, and online presence tracking.",
    technology: [
      ReactTechnology,
      TypeScriptTechnology,
      NodeJsTechnology,
      MongoDbTechnology,
      TailwindTechnology,
      VitestTechnology,
      ReactTestingLibraryTechnology,
    ],
    githubLink: "https://github.com/gabrieljanjic/talkly",
    pageLink: "https://talkly-bay.vercel.app/",
    img: TalklyTabletImg,
  },
];

export default projectData;
