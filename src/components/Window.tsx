import React, { useState, useRef, useEffect, ReactNode } from "react";
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

  const componentRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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

  useEffect(() => {
    const getBounds = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setBounds({
          top: -rect.top,
          left: -rect.left,
          right: dimensions.width - rect.right,
          bottom: dimensions.height - rect.bottom,
        });
      }
    };

    getBounds();
    console.log(bounds);
  }, [dimensions]); // Run after initial render

  const renderContent = () => {
    if (size === "s") {
      return (
        <MiniContainer ref={componentRef}>
          <MiniSquareContainer>
            <WindowBar />
            <TextContainer>{children}</TextContainer>
          </MiniSquareContainer>
        </MiniContainer>
      );
    } else if (size === "m") {
      return (
        <Container ref={componentRef}>
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
      wrapper={(children) => <Draggable bounds={bounds}>{children}</Draggable>}
    >
      {renderContent()}
    </ConditionalWrapper>
  );
};

export default Window;
