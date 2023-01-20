import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #444;
  & > span:nth-child(1) {
    color: #ff9c1a;
  }
  & > span:nth-child(2) {
    color: gold;
  }
`;
