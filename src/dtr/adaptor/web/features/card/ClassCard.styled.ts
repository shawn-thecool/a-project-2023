import styled from "styled-components";

export const ClassCardWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid var(--black);
  background-color: var(--white);
  em {
    color: red;
  }
  span {
    color: green;
  }
  i {
    color: var(--primary_10);
  }
`;
export const ClassCardHead = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid var(--black);
  background-color: var(--brand_black_300);
`;
export const ClassCardAttrs = styled.ul`
  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 4px;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid var(--black);
`;
export const ClassCardMethods = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 4px;
  width: 100%;
  padding: 8px;
  strong {
    color: orange;
  }
`;
