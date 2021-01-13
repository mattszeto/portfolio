import React, { useEffect, useState } from "react";
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

const App = () => {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // do something with the mouse cordinates like changing based on where the cursor is
  // const _onMouseMove = (e) => {
  //   setX(e.screenX);
  //   setY(e.screenY);
  // };
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
            bounds={{
              top: -25,
              left: -(dimensions.width / 2 - 700 / 2 - 30),
              right: dimensions.width / 2 - 700 / 2 - 30,
              bottom: dimensions.height - 109 - 495 - 30,
            }}
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
            bounds={{
              top: -540,
              left: -(dimensions.width / 2 - 400 / 2 - 30),
              right: dimensions.width / 2 - 400 / 2 - 30,
              bottom: dimensions.height - 100 - 638 - 30,
            }}
          >
            <MiniContainer>
              <MiniSquareContainer>
                <WindowBar />
                <TextContainer>
                  <div>
                    <span className="blue">swe-projects@MATT </span>
                    <span className="orange">~/mattszeto/projects</span>
                  </div>
                  <span className="yellow">$</span> coming soon... (DRAG ME)
                </TextContainer>
              </MiniSquareContainer>
            </MiniContainer>
          </Draggable>
        </div>
      ) : (
        <div className="app-body">
          <Container>
            <SquareContainer /*onMouseMove={_onMouseMove}*/>
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
                  <span className="blue">swe-projects@MATT </span>
                  <span className="orange">~/mattszeto/projects</span>
                </div>
                <span className="yellow">$</span> coming soon...
              </TextContainer>
            </MiniSquareContainer>
          </MiniContainer>
        </div>
      )}
    </div>
  );
};

export default App;
