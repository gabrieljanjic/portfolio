import ReactLogo from "../imgs/tech-imgs/react.png";
import CssLogo from "../imgs/tech-imgs/css.png";
import JavaScriptLogo from "../imgs/tech-imgs/javascript.png";
import TypeScriptLogo from "../imgs/tech-imgs/typescript.png";
import MongoDbLogo from "../imgs/tech-imgs/mongo-db.png";
import NodeJsLogo from "../imgs/tech-imgs/node-js.png";
import TailwindLogo from "../imgs/tech-imgs/tailwind.png";
import NextJsLogo from "../imgs/tech-imgs/next-js.png";
import ReactTestingLibraryLogo from "../imgs/tech-imgs/react-testing-logo.png";
import VitestLogo from "../imgs/tech-imgs/vitest.png";

import TravelHubTabletImg from "../imgs/project-imgs/travel-hub-tablet-img.webp";
import MovioTabletImg from "../imgs/project-imgs/movio-app-tablet-img.webp";
import TalklyTabletImg from "../imgs/project-imgs/talkly-tablet-img.webp";

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

const TailwindTechnology: TechnologyItem = {
  id: 3,
  name: "Tailwind CSS",
  logo: TailwindLogo,
  backgroundColor: "#1e40af",
};
const CssTechnology: TechnologyItem = {
  id: 4,
  name: "CSS",
  logo: CssLogo,
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

const JavaScriptTechnology: TechnologyItem = {
  id: 6,
  name: "JavaScript",
  logo: JavaScriptLogo,
  backgroundColor: "#f59e0b",
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
  {
    id: 3,
    name: "Travel Hub",
    description:
      "Travel Hub is a full-stack web application for managing airlines, airports, routes, and countries with an interactive map. It features real-time dashboards, CRUD operations, route distance calculations, and secure user authentication.",
    technology: [
      ReactTechnology,
      JavaScriptTechnology,
      CssTechnology,
      NodeJsTechnology,
      MongoDbTechnology,
    ],
    githubLink: "https://github.com/gabrieljanjic/travel-hub",
    pageLink: "https://travel-hub-indol.vercel.app/dashboard",
    img: TravelHubTabletImg,
  },
];

export default projectData;
