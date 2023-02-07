import styled from "styled-components";

export const Wrap = styled.aside<{ open: boolean }>`
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ open }) => (open ? "100vw" : "0")};
  height: 100vh;
`;
export const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--ex-ba);
`;
export const Inner = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 600px;
  background-color: white;
  transition: all 0.3s var(--motion-ease);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: var(--head-h);
  padding: 16px;
  border-bottom: 1px solid #efefef;
`;
export const Cont = styled.div`
  overflow: overlay;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: calc(100vh - var(--head-h));
  gap: 4px;
`;
export const Foot = styled.div``;
