import styled from "styled-components";

export const Box = styled.div``;
export const Doc = styled(Box)`
  position: relative;
  grid-template-areas:
    "head"
    "main";
`;
export const Head = styled(Box)`
  grid-area: head;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  height: var(--head-h);
  padding: 0 16px;
  background-color: white;
  border-bottom: 1px solid #efefef;
`;
export const Main = styled(Box)`
  grid-area: main;
`;
export const ScrollCont = styled(Box)`
  overflow: overlay;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: calc(100vh - var(--head-h));
  margin-top: var(--head-h);
`;
export const Foot = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #efefef;
`;
export const Nav = styled(Box)``;
export const Side = styled(Box)``;
