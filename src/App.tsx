import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <main className="mx-auto max-w-6xl px-4 xs:px-6 sm:px-8 md:px-20 py-4 min-h-screen">
      <Navbar />
      <About />
      <TechStack />
      <WorkExperience />
      <Projects />
    </main>
  );
}

export default App;
