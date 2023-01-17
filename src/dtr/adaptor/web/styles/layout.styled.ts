import styled from "styled-components";

export const AppDocument = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
`;
export const AppContent = styled.div`
  flex: 1;
  overflow: overlay;
  display: flex;
  flex-flow: column;
`;
export const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-shrink: 0;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid var(--black);
  background-color: var(--brand_black_1200);
`;
export const AppMain = styled.main`
  flex: 1;
  display: flex;
  flex-flow: column;
  padding: 112px 0 56px;
`;
export const AppFooter = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-shrink: 0;
  min-height: 56px;
  padding: 0 16px;
  border-top: 1px solid var(--black);
`;
