import React, { useState, useEffect, ReactNode } from "react";
import Draggable from "react-draggable";
import {
  MiniContainer,
  MiniSquareContainer,
  TextContainer,
  WindowBar,
  Container,
  SquareContainer,
} from "./TextContainers";
import ConditionalWrapper from "../utils/ConditionalWrapper";

interface WindowProps {
  size: "s" | "m";
  draggable: boolean;
  children: ReactNode;
}

const Window: React.FC<WindowProps> = ({ size, draggable, children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBounds = () => {
    if (dimensions.width >= 1010) {
      return {
        top: -25,
        left: -(dimensions.width / 2 + 100),
        right: dimensions.width / 2 - 1005 / 2 - 30,
        bottom: dimensions.height - 109 - 600 - 30,
      };
    } else {
      return {
        top: -540,
        left: -(dimensions.width / 2 - 400 / 2 - 30),
        right: dimensions.width / 2 - 400 / 2 - 30,
        bottom: dimensions.height - 100 - 1300 - 30,
      };
    }
  };

  const renderContent = () => {
    if (size === "s") {
      return (
        <MiniContainer>
          <MiniSquareContainer>
            <WindowBar />
            <TextContainer>{children}</TextContainer>
          </MiniSquareContainer>
        </MiniContainer>
      );
    } else if (size === "m") {
      return (
        <Container>
          <SquareContainer>
            <WindowBar />
            <TextContainer>{children}</TextContainer>
          </SquareContainer>
        </Container>
      );
    }
    return null;
  };

  return (
    <ConditionalWrapper
      condition={draggable}
      wrapper={(children) => (
        <Draggable bounds={getBounds()}>{children}</Draggable>
      )}
    >
      {renderContent()}
    </ConditionalWrapper>
  );
};

export default Window;
