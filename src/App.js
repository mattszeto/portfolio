import React, { useState } from "react";
import "./App.css";
import "aos/dist/aos.css";
import Navbar from "./components/nav/NavBar";
import HomeContents from "./components/window/HomeContent";
import {
  Container,
  SquareContainer,
  TextContainer,
  WindowBar,
} from "./components/window/Window";
import Repos from "./components/github/Repos";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // do something with the mouse cordinates like changing based on where the cursor is
  const _onMouseMove = (e) => {
    setX(e.screenX);
    setY(e.screenY);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="app-body">
        <Carousel>
          <Container>
            <SquareContainer onMouseMove={_onMouseMove}>
              <WindowBar />
              <TextContainer>
                <HomeContents />
              </TextContainer>
            </SquareContainer>
          </Container>
          <Container>
            <SquareContainer>
              <WindowBar />
              <TextContainer>
                <Repos />
              </TextContainer>
            </SquareContainer>
          </Container>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
