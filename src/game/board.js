export class Board {
  constructor() {
    this.board = new Array(9);
  }
  //check if cell is empty
  isEmpty(index) {
    if (this.board[index] === undefined) {
      return true;
    } else return false;
  }
}
