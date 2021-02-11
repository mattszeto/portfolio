import React from "react";
import styled from "styled-components";
import colors from "../common/colors.js";
import { TextContainer, WindowBar } from "./TextContainers.jsx";



const ProjectContainer = (props) => {
    return (
            <Container>
                <SquareContainer>
                    <WindowBar/>
                    <TextContainer>
                        Hello there KJSHDFLIKJSDHFLSIDGHSDLIUGF HSIUDF HSIDUGH SILUDHGSLDI
                    </TextContainer>
                </SquareContainer>
            </Container>
    )
}
export const Container = styled.div`
  padding: 5px 5px;
  margin: 10px;
  width: 90%;
  max-width: 600px;
`;
export const SquareContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.darkGrey};
  border-radius: 5px;
  width: 100%;
  min-height: 300px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.01) translate(calc(0 / 50 * 1px), calc(0 / 50 * 1px));
    filter: brightness(110%);
  }
`;

export default ProjectContainer
