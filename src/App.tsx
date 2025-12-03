import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <TechStack />
      <WorkExperience />
      <Projects />
    </main>
  );
}

export default App;
