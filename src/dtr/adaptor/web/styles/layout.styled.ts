import styled, { css } from "styled-components";

export const AppDocument = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
`;
export const AppHeader = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid var(--brand_black_300);
`;
export const AppMain = styled.main`
  flex: 1;
  overflow: overlay;
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid var(--brand_black_100);
`;
export const AppFooter = styled.footer`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  background-color: var(--brand_black_300);
`;
