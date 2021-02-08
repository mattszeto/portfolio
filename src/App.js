import React, { useState } from "react";
import "./style.css";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar";
import Introduction from "./components/IntroductionContent";
import {
  Container,
  SquareContainer,
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
} from "./components/Window";
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
                    bottom: dimensions.height - 109 - 475 - 30,
                  }
                : {
                    top: -25,
                    left: -(dimensions.width / 2 - 700 / 2 - 30),
                    right: dimensions.width / 2 - 700 / 2 - 30,
                    bottom: dimensions.height - 109 - 475 - 30,
                  }
            }
          >
            <Container>
              <SquareContainer>
                <WindowBar />
                <TextContainer>
                  <Introduction />
                </TextContainer>
              </SquareContainer>
            </Container>
          </Draggable>

          <Draggable
            bounds={
              dimensions.width >= 1010
                ? {
                    top: -25,
                    left: -(dimensions.width / 2 + 100),
                    right: dimensions.width / 2 - 1005 / 2 - 30,
                    bottom: dimensions.height - 109 - 490 - 30,
                  }
                : {
                    top: -540,
                    left: -(dimensions.width / 2 - 400 / 2 - 30),
                    right: dimensions.width / 2 - 400 / 2 - 30,
                    bottom: dimensions.height - 100 - 1000 - 30,
                  }
            }
          >
            <MiniContainer>
              <MiniSquareContainer>
                <WindowBar />
                <TextContainer>
                  <div>
                    <span className="green">swe-projects@MATT </span>
                    <span className="orange">~/mattszeto/projects</span>
                  </div>
                  <span className="yellow">$</span> run ./load-projects
                  <Projects />
                </TextContainer>
              </MiniSquareContainer>
            </MiniContainer>
          </Draggable>
        </div>
      ) : (
        <div className="app-body">
          <Container>
            <SquareContainer>
              <WindowBar />
              <TextContainer>
                <Introduction />
              </TextContainer>
            </SquareContainer>
          </Container>

          <MiniContainer>
            <MiniSquareContainer>
              <WindowBar />
              <TextContainer>
                <div>
                  <span className="green">swe-projects@MATT </span>
                  <span className="orange">~/mattszeto/projects</span>
                </div>
                <span className="yellow">$</span> run ./load-projects
                <Projects />
              </TextContainer>
            </MiniSquareContainer>
          </MiniContainer>
        </div>
      )}
      <ViewOnGithub />
    </div>
  );
};

export default App;
