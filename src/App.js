import React, { useState } from "react";
import "./style.css";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import {
  Container,
  SquareContainer,
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
} from "./components/Containers";
import Window from "./components/Window";
import Draggable from "react-draggable";
import ViewOnGithub from "./components/ViewOnGithub";
import Projects from "./components/Projects";

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
          <Draggable
            bounds={
              dimensions.width >= 1010
                ? {
                    top: -25,
                    left: -(dimensions.width / 2 - 1000 / 2 - 30),
                    right: dimensions.width / 2 - 145 / 2 - 30,
                    bottom: dimensions.height - 109 - 540 - 30,
                  }
                : {
                    top: -25,
                    left: -(dimensions.width / 2 - 700 / 2 - 30),
                    right: dimensions.width / 2 - 700 / 2 - 30,
                    bottom: dimensions.height - 109 - 475 - 30,
                  }
            }
          >
            <Window size="m">
              <AboutMe />
            </Window>
          </Draggable>

          <Draggable
            bounds={
              dimensions.width >= 1010
                ? {
                    top: -25,
                    left: -(dimensions.width / 2 + 100),
                    right: dimensions.width / 2 - 1005 / 2 - 30,
                    bottom: dimensions.height - 109 - 600 - 30,
                  }
                : {
                    top: -540,
                    left: -(dimensions.width / 2 - 400 / 2 - 30),
                    right: dimensions.width / 2 - 400 / 2 - 30,
                    bottom: dimensions.height - 100 - 1300 - 30,
                  }
            }
          >
            <Window size="s">
              <div>
                <span className="green">swe-projects@MATT </span>
                <span className="orange">~/mattszeto/projects</span>
              </div>
              <span className="yellow">$</span> run ./load-projects
              <Projects />
            </Window>
          </Draggable>
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
