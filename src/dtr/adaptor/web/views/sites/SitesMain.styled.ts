import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
export const SectionCreate = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  & > button {
    height: 95px;
    width: 95px;
    border-radius: 8px;
    border: 2px dashed #444;
    font-size: 44px;
    :hover {
      cursor: pointer;
      background-color: #f7f7f7;
      color: #000;
    }
  }
`;
export const SectionList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;
export const SiteCard = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 16px;
  gap: 16px;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    color: #000;
  }
`;
export const SiteCardPlatform = styled.div<{ color: string }>`
  flex-shrink: 0;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  font-weight: 900;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #efefef;
  background-color: #fff;
  color: ${({ color }) => color};
`;
export const SiteCardCont = styled.div`
  flex: 1;
`;
export const SiteCardOption = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
  width: 80px;
  height: 100%;
  & > button {
    width: 100%;
    background-color: #fff;
    color: #444;
    text-align: right;
    border: 1px solid #fff;
    border-radius: 4px;
    &:hover {
      border: 1px solid #444;
    }
  }
`;
