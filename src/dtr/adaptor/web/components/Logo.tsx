import styled from "styled-components";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: var(--white);
  & > span:nth-child(1) {
    color: var(--brand_green_1200);
  }
  & > span:nth-child(2) {
    color: var(--brand_yellow_1200);
  }
`;

export const AppLogo = () => {
  return (
    <H1>
      <span>L</span>O<span>G</span>O
    </H1>
  );
};
