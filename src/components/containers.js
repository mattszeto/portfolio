import styled from "styled-components";

import colors from "../common/colors";

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px 16px;
  max-width: 800px;
  margin-bottom: 16px;
  width: 80%;
  min-width: 465px;
`;

export const SquareContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.black};
  border-radius: 4px;
  width: 100%;
  height: 500px;
`;

export const TextContainer = styled.div`
  padding: 16px;
  color: #c86c81;
`;
