export class Matrix {
  _seq: number = 0
  row: number = 0
  col: number = 0
  matrix: any[][] = []
  constructor(row: number, col: number) {
    this.row = row
    this.col = col
  }
  _generateMatrix(fn = () => ({})) {
    this.matrix = Array.from({ length: this.col }, (_, y) => {
      return Array.from({ length: this.row }, (_, x) => {
        return { seq: this._seq++, pos: [x, y], data: fn() }
      })
    })
  }
  generate(data) {
    this._generateMatrix(data)
  }
}
