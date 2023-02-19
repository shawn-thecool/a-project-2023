import styled, { keyframes } from 'styled-components'

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
`
export const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
export const Inner = styled.div`
  overflow: hidden;
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #222;
  color: #fff;
  border: 1px solid #000;
  border-radius: 12px;
`
export const ImgFrame = styled.span`
  flex: 0 0 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
  border: 1px solid #fff;
  border-radius: 16px;
`
export const MsgFrame = styled.span`
  overflow: hidden;
  flex: 1;
  height: 82px;
`
export const Name = styled.strong`
  display: block;
  border-bottom: 1px solid #444;
  padding-bottom: 4px;
  margin-bottom: 8px;
`
export const Text = styled.p`
  overflow: auto;
  height: calc(82px - 34px);
`
export const ActionFrame = styled.span`
  flex: 0 0 24px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 82px;
`

export const CloseAction = styled.span`
  width: 24px;
  height: 24px;
  ::before {
    content: '+';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    line-height: 24px;
    color: #777;
    transform: rotate(45deg);
  }
`

export const blink = keyframes`
  0% {background-color: gold;}
  50% {background-color: #fff;}
  100% {background-color: gold;}
`
export const MouseClickAction = styled.span`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 22px;
  border: 1px solid #fff;
  border-radius: 6px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 7px;
    background-color: gold;
    animation: ${blink} 1s infinite;
  }
  :active {
    height: 18px;
  }
`
