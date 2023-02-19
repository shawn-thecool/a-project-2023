import styled from 'styled-components'

export const Wrap = styled.div``
export const Flow = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    left: 0;
    width: 100%;
    height: 12px;
    background-color: #efefef;
    z-index: -1;
  }
`
export const Box = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: gold;
  border-radius: 12px;
  border: 1px solid #444;
`
export const Report = styled(Box)``
export const Idea = styled(Box)``
export const Campaign = styled(Box)``
export const Channel = styled(Box)``
export const Creative = styled(Box)``
export const Target = styled(Box)``
