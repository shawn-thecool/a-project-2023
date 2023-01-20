import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;

export const WrapCard = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 16px;
  gap: 16px;
  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    color: #000;
  }
`;
export const CardPlatform = styled.div<{ color: string }>`
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
export const CardCont = styled.div`
  flex: 1;
`;
export const CardOption = styled.div`
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
