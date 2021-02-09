import React from "react";
import {
  Container,
  SquareContainer,
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
} from "./Containers";

const Window = (props) => {
  if (props.size === "s") {
    return (
      <MiniContainer>
        <MiniSquareContainer>
          <WindowBar />
          <TextContainer>{props.children}</TextContainer>
        </MiniSquareContainer>
      </MiniContainer>
    );
  }
  if (props.size === "m") {
    return (
      <Container>
        <SquareContainer>
          <WindowBar />
          <TextContainer>{props.children}</TextContainer>
        </SquareContainer>
      </Container>
    );
  }
};

export default Window;
