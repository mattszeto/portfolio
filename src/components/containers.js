import styled from "styled-components";

import colors from "../common/colors";

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px 16px;
  margin-bottom: 16px;
  width: 90%;
  max-width: 800px;
`;

export const SquareContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.darkGrey};
  border-radius: 4px;
  width: 100%;
  height: 40rem;
`;

export const TextContainer = styled.div`
  padding: 16px;
  color: #c86c81;
  font-size: 1.2rem;
`;
