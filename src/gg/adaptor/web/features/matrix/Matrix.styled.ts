import styled from 'styled-components'

export const Wrap = styled.div<{ x: number; y: number; size: number }>`
  display: grid;
  grid-template-rows: ${({ y, size }) => `repeat(${y}, ${size}px)`};
  grid-template-columns: ${({ x, size }) => `repeat(${x}, ${size}px)`};
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 24px;
`
export const Cell = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Row = styled.div``
export const Col = styled.div``
