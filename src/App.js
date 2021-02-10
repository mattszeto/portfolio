import React, { useState } from "react";
import "./style.css";
import Navbar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Window from "./components/Window.jsx";
import ViewOnGithub from "./components/ViewOnGithub.jsx";
import Projects from "./components/Projects.jsx";

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
        <div className="app-body">
          <Window draggable size="m">
            <AboutMe />
          </Window>

          <Window draggable size="s">
            <div>
              <span className="green">swe-projects@MATT </span>
              <span className="orange">~/mattszeto/projects</span>
            </div>
            <span className="yellow">$</span> run ./load-projects
            <Projects />
          </Window>
        </div>
      ) : (
        <div className="app-body">
          <Window size="m">
            <AboutMe />
          </Window>

          <Window size="s">
            <div>
              <span className="green">swe-projects@MATT </span>
              <span className="orange">~/mattszeto/projects</span>
            </div>
            <span className="yellow">$</span> run ./load-projects
            <Projects />
          </Window>
        </div>
      )}
      <ViewOnGithub />
    </div>
  );
};

export default App;
