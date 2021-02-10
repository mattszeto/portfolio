import React, { useState } from "react";
import Draggable from "react-draggable";
import {
  Container,
  SquareContainer,
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
} from "./Containers.jsx";
import ConditionalWrapper from "../utils/ConditionalWrapper.jsx";

const Window = (props) => {
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
  if (props.size === "s") {
    return (
      <ConditionalWrapper
        condition={props.draggable}
        wrapper={(children) => (
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
            {children}
          </Draggable>
        )}
      >
        <MiniContainer>
          <MiniSquareContainer>
            <WindowBar />
            <TextContainer>{props.children}</TextContainer>
          </MiniSquareContainer>
        </MiniContainer>
      </ConditionalWrapper>
    );
  }
  if (props.size === "m") {
    return (
      <ConditionalWrapper
        condition={props.draggable}
        wrapper={(children) => (
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
            {children}
          </Draggable>
        )}
      ><Container>
          <SquareContainer>
            <WindowBar />
            <TextContainer>{props.children}</TextContainer>
          </SquareContainer>
        </Container></ConditionalWrapper>

        
    );
  }
};

export default Window;
