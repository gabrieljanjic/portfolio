type NavbarItem = {
  id: number;
  path: string;
  name: string;
};

const navbarData: NavbarItem[] = [
  { id: 1, path: "#about", name: "About" },
  { id: 2, path: "#tech-stack", name: "Tech Stack" },
  { id: 3, path: "#work-experience", name: "Work Experience" },
  { id: 4, path: "#projects", name: "Projects" },
];

export default navbarData;
