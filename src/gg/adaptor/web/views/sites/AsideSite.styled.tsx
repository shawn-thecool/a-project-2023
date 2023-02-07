import styled from "styled-components";

export const WrapCont = styled.form`
  display: flex;
  flex-flow: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;

  .readonly {
    cursor: none;
    color: #888;
    border: 0 none;
  }

  & > fieldset {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label {
    width: 100px;
    font-weight: 700;
  }
  label + * {
    flex: 1;
    outline: 0 none;
    border: 0 none;
    border-bottom: 1px solid #444;
    padding: 8px;
  }
  & > *:last-child {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 16px;
    > button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background-color: #efefef;
      :hover {
        background-color: #444;
        color: #fff;
      }
    }
  }
`;
