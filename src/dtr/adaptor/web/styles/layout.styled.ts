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
`;
export const AppMain = styled.main`
  flex: 1;
  overflow: overlay;
  display: flex;
  flex-flow: column;
  background-color: var(--brand_black_300);
`;
export const AppFooter = styled.footer`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  background-color: gold;
`;
export const AppNav = styled.nav<{ open: boolean }>`
  position: fixed;
  z-index: 100;
  overflow: overlay;
  display: flex;
  flex-flow: row;
  height: 100vh;
  background-color: skyblue;
  transition: all 0.2s var(--ease-in);
  ${({ open }) =>
    open
      ? css`
          width: 240px;
          &::before {
            content: "";
            position: fixed;
            z-index: 99;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: 0.5;
            background-color: #000;
          }
        `
      : css`
          width: 0;
        `};
`;
export const AppAside = styled.aside``;
