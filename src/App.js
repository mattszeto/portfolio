import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/nav/navbar";
import WindowBar from "./components/window-bar/windowbar";
import {
  Container,
  SquareContainer,
  TextContainer,
} from "../src/components/containers";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="app">
      <header className="app-body">
        <Navbar />
        <Container>
          <SquareContainer>
            <WindowBar />
            <TextContainer>
              {" "}
              &lt;error&gt; <span className="text-not-red">
                come soon...
              </span>{" "}
              &lt;/error&gt;
            </TextContainer>
          </SquareContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
