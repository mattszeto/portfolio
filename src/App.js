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
      <div>
        <header className="app-body">
          <Navbar />
          <Container>
            <SquareContainer onMouseMove={this._onMouseMove.bind(this)}>
              <WindowBar />
              <TextContainer>
                Computer Science Student 1.4.0 <br />
                Copyright (c) Matt Szeto Corporation. All rights reserved.
                <br />
                <br />
                <br />
                https://matthewszeto.com
                <br />
                Click 'github' or 'linkedin' for more information.
                <br />
                <br />
                software-engineer@MATT ~\mattszeto\brain\tech$ run skills --hire
                -me
                <br />
                <br />
                Loading languages...
                <br />
                >>> Javascript / Typescript
                ........................................................ 100%
                <br />
                >>> Java
                ...........................................................................
                100%
                <br />
                >>> Python
                .........................................................................
                90%
                <br />
                >>> Swift
                ..........................................................................
                75%
                <br />
                >>> SQL
                ............................................................................
                70%
                <br />
                <br />
                Loading technologies...
                <br />
                >>> React.js / Next.js
                .............................................................
                100%
                <br />
                >>> Node.js
                ........................................................................
                100%
                <br />
                >>> Git
                ............................................................................
                100%
                <br />
                >>> PostgreSQL
                .....................................................................
                50%
                <br />
                <br />
                currently looking for software engineering roles...
                {/*Displays mouse cordinates when hovering over SquareContainer (will be used later for parallax effect)*/}
                {/* <h1>
                  {x}
                  {y}
                </h1> */}
              </TextContainer>
            </SquareContainer>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
