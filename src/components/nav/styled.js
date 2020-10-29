import styled from "styled-components";
import colors from "../../common/colors";

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 4px;
  margin-bottom: 8px;
  margin-top: 8px;
  .svg-inline--fa:hover > * {
    fill: ${colors.white};
  }
  font-size: 12px;
`;
