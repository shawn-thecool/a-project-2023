import styled from "styled-components";

//AppNav
export const Wrap = styled.nav<{ open: boolean }>`
  overflow: hidden;
  position: ${({ open }) => (open ? "fixed" : "inherit")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  transition: background-color 0.2s var(--linear);
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Inner = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  transition: all 0.2s var(--ease-in-out-quad);
  width: 240px;
  height: 100vh;
  background-color: white;
  width: ${({ open }) => (open ? "240px" : "0")};
`;
export const Head = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 56px;
  padding: 0 16px;
`;
export const Cont = styled.div`
  flex: 1;
  overflow: overlay;
  display: flex;
  flex-flow: column;
`;
export const Foot = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
`;
export const WrapBtn = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & > button {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--brand_black_1200);
  }
`;
