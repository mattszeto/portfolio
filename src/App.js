import React, { useState } from "react";
import "./style.css";
import Navbar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Window from "./components/Window.jsx";
import ViewOnGithub from "./components/ViewOnGithub.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience";
// import ProjectContainers from "./components/ProjectContainers";

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>

      {dimensions.width >= 800 ? (
        <div>
          <div className="app-about-me">
            <Window size="m">
              <AboutMe />
            </Window>
          </div>
          <div className="app-details">
            <Window size="m">
              <Experience />
            </Window>
            <Window size="s">
              <Projects />
            </Window>
          </div>
        </div>
      ) : (
        <div>
          <div className="app-about-me">
            <Window size="m">
              <AboutMe />
            </Window>
          </div>

          <div className="app-details">
            <Window size="s">
              <Experience />
            </Window>
            <Window className="app-window" size="s">
              <Projects />
            </Window>
          </div>
        </div>
      )}

      <ViewOnGithub />
    </div>
  );
};

export default App;
