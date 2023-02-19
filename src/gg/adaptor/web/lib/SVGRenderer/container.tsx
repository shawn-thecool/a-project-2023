import { ReactNode } from 'react'

export interface IContainer {
  w: string
  h: string
  bg?: string
  children?: ReactNode
}

export const SVGContainer = (props: IContainer) => {
  const xmlns = 'http://www.w3.org/2000/svg'
  const x = 0
  const y = 0
  const w = props.w
  const h = props.h
  const vb = [0, 0, w, h].join(' ')
  const bg = props.bg || '#ffffff'
  const children = props.children || <></>

  return (
    <svg xmlns={xmlns} width={w} height={h} viewBox={vb}>
      <rect x={x} y={y} width={w} height={h} fill={bg}>
        {children}
      </rect>
    </svg>
  )
}
