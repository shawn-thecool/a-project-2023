import styled, { css } from "styled-components";
import { Z_INDEX } from "../../config/constants";

export const NavWrap = styled.nav<{ isOpen: boolean; isMove: boolean }>`
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${Z_INDEX.NAV_WRAP};
  position: ${({ isOpen, isMove }) =>
    isOpen ? "fixed" : !isMove ? "inherit" : "fixed"};
`;
export const NavDimmed = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: var(--black);
  transition: all 0.2s var(--ease-nav);
  opacity: ${({ isOpen }) => (isOpen ? "0.3" : "0")};
`;
export const NavInner = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  width: 240px;
  height: 100vh;
  background-color: var(--white);
  z-index: ${Z_INDEX.NAV_INNER};
  transition: all 0.2s var(--ease-nav);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;
export const NavHead = styled.div`
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid var(--brand_black_300);
`;
export const NavCont = styled.div`
  flex: 1;
  overflow: overlay;
  display: flex;
  flex-flow: column;
  padding: 0 16px;
`;
export const NavFoot = styled.div`
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: var(--brand_black_300);
`;
export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--black);
  & + * {
    margin-left: 8px;
  }
`;
