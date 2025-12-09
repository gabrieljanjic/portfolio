import ReactLogo from "../imgs/react.png";
import BootstrapLogo from "../imgs/bootstrap.png";
import CssLogo from "../imgs/css.png";
import HtmlLogo from "../imgs/html.png";
import JavaScriptLogo from "../imgs/javascript.png";
import MongoDbLogo from "../imgs/mongo-db.png";
import NodeJsLogo from "../imgs/node-js.png";
import TravelHubTabletImg from "../imgs/project-imgs/travel-hub-tablet-img.webp";
import BookingAppTabletImg from "../imgs/project-imgs/booking-app-tablet-img.webp";

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
const BootstrapTechnology: TechnologyItem = {
  id: 2,
  name: "Bootstrap",
  logo: BootstrapLogo,
  backgroundColor: "#6610f2",
};

const CssTechnology: TechnologyItem = {
  id: 4,
  name: "CSS",
  logo: CssLogo,
  backgroundColor: "#1e40af",
};
const HtmlTechnology: TechnologyItem = {
  id: 5,
  name: "HTML",
  logo: HtmlLogo,
  backgroundColor: "#b45309",
};
const JavaScriptTechnology: TechnologyItem = {
  id: 6,
  name: "JavaScript",
  logo: JavaScriptLogo,
  backgroundColor: "#f59e0b",
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

const projectData: ProjectItem[] = [
  {
    id: 1,
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
  {
    id: 2,
    name: "Booking App",
    description:
      "Booking App is a full-stack web application for managing hotels and reservations, allowing users to browse hotels, create and manage bookings, search and filter listings, and securely authenticate with JWT tokens and HTTP-only cookies, with geolocation provided by Google Maps API.",
    technology: [
      HtmlTechnology,
      CssTechnology,
      BootstrapTechnology,
      JavaScriptTechnology,
      NodeJsTechnology,
      MongoDbTechnology,
    ],
    githubLink: "https://github.com/gabrieljanjic/booking-app",
    pageLink: "https://booking-app-bmps.onrender.com/",
    img: BookingAppTabletImg,
  },
];

export default projectData;
