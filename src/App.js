import React, { useState } from "react";
import "./App.css";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/IntroductionContent";
import {
  Container,
  SquareContainer,
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
} from "./components/Window/Window";

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
        <Container>
          <SquareContainer onMouseMove={_onMouseMove}>
            <WindowBar />
            <TextContainer>
              <Introduction />
            </TextContainer>
          </SquareContainer>
        </Container>
        <MiniContainer>
          <MiniSquareContainer>
            <WindowBar />
            <TextContainer>Coming Soon...</TextContainer>
          </MiniSquareContainer>
        </MiniContainer>
      </div>
    </div>
  );
};

export default App;
