import React, { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/nav/navbar";
import {
  Container,
  SquareContainer,
  TextContainer,
  WindowBar,
} from "./components/window/window";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;

    return (
      <div className="app">
        <header className="app-body">
          <Navbar />
          <Container>
            <SquareContainer onMouseMove={this._onMouseMove.bind(this)}>
              <WindowBar />
              <TextContainer>
                <span className="text-not-red">
                  Github: projects im working on! <br />
                  Linkedin: resume and experiences!
                </span>
                <br />
                <br />
                &lt;error&gt; <span className="text-not-red">come soon...</span>
                &lt;/error&gt;
                <br />
                <br />
                <span className="text-not-red">
                  Looking for New Grad Software Engineer Roles
                </span>
                <h1>
                  {x}
                  {y}
                </h1>
              </TextContainer>
            </SquareContainer>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
