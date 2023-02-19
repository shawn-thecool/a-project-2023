import { Matrix } from './Matrix.class'
import * as UI from './Matrix.styled'

export const MatrixRender = (data: any) => {
  const m = new Matrix(16, 6)
  m.generate(() => ({
    status: 1,
    msg: '->',
    onClick: (m) => () => console.log(m),
  }))
  console.log(m)
  return (
    <UI.Wrap x={m.row} y={m.col} size={44}>
      {m.matrix.map((rows, idx) =>
        rows.map(({ seq, pos: [x, y], data }) => (
          <UI.Cell key={seq} style={{ background: Math.round(Math.random()) > 0 ? 'white' : 'gold' }} onClick={data.onClick(x + y)}>
            {/* {x},{y} */}
            {data.status === 1 && data.msg}
          </UI.Cell>
        ))
      )}
    </UI.Wrap>
  )
}
