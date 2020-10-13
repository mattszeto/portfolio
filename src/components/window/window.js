import React from "react";
import styled from "styled-components";
import colors from "../../common/colors";

export const Container = styled.div`
  margin: 0 auto;
  padding: 5px 5px;
  margin-bottom: 16px;
  width: 90%;
  max-width: 800px;
`;

export const SquareContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.darkGrey};
  border-radius: 4px;
  margin-top: 1.2rem;
  width: 100%;
  height: 40rem;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.01) translate(calc(0 / 50 * 1px), calc(0 / 50 * 1px));
    filter: brightness(120%);
  }
`;

export const TextContainer = styled.div`
  padding: 16px;
  color: ${colors.red};
  font-size: 1.2rem;
  transition: all 0.1s ease;
`;

const TopBar = styled.div`
  height: ${(props) => props.scale * 22}px;
  background: -webkit-linear-gradient(top, #252526, #252526);
  border-radius: ${(props) => props.scale * 4}px ${(props) => props.scale * 4}px
    0 0;
  width: 100%;
`;

const CirclesContainer = styled.div`
  display: flex;
  padding-left: ${(props) => props.scale * 3}px;
`;

const Circle = styled.div`
  border-radius: ${(props) => props.scale * 50}px;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.scale * 12}px;
  height: ${(props) => props.scale * 12}px;
  margin: ${1.3 * 5}px ${(props) => 0.75 * 4}px;
  opacity: 0.3;
  filter: saturate(10%);

  ${SquareContainer}:hover & {
    opacity: 1;
    filter: saturate(1);
  }
`;

export const WindowBar = ({ scale, circle, circleColors }) => (
  <TopBar scale={scale}>
    <CirclesContainer scale={scale}>
      <Circle scale={circle} bgColor={circleColors[0]} />
      <Circle scale={circle} bgColor={circleColors[1]} />
      <Circle scale={circle} bgColor={circleColors[2]} />
    </CirclesContainer>
  </TopBar>
);

WindowBar.defaultProps = {
  scale: 1,
  circle: 0.75,
  circleColors: [colors.red, colors.yellow, colors.green],
};
