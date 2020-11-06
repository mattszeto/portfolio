import React from "react";
import "./App.css";
//import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/nav/navbar";
import HomeContents from "./components/window/home-contents";

import {
  Container,
  SquareContainer,
  TextContainer,
  WindowBar,
} from "./components/window/window";
import Repos from "./components/github/repos";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <Navbar />
        </header>
        <div className="app-body">
          <Carousel>
            <Container>
              <SquareContainer onMouseMove={this._onMouseMove.bind(this)}>
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
  }
}

export default App;
