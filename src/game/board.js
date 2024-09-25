export class Board {
  constructor() {
    this.cell = new Array(9).fill(null);
  }

  clearBoard() {
    this.cell.fill(null);
  }

  //marks the board if cell is empty
  setMark(mark, index) {
    if (this.cell[index] === null) {
      this.cell[index] = mark;
      return true;
    } else return false;
  }
}
