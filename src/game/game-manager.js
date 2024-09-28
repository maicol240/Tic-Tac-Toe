import { Player } from './player';
import { Board } from './board';

export class GameManager {
  #turn;

  constructor(player1, player2, board) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = this.player1;
    this.#turn = 1;
    this.gameBoard = board;
  }

  //check if player Won
  checkWin() {
    //check if the current player owns the center to check diagonally
    if (this.currentPlayer.marker === this.gameBoard.cell[4]) {
      if (
        (this.gameBoard.cell[0] === this.gameBoard.cell[8] &&
          this.gameBoard.cell[4] === this.gameBoard.cell[0]) ||
        (this.gameBoard.cell[6] === this.gameBoard.cell[2] &&
          this.gameBoard.cell[6] === this.gameBoard.cell[4])
      ) {
        return true;
      }
    }

    //will check rows and colums wins
    for (let i = 0; i < 3; i++) {
      let rowPointer = i * 3;

      //check horizontally win

      if (
        this.gameBoard.cell[rowPointer] ===
          this.gameBoard.cell[rowPointer + 1] &&
        this.gameBoard.cell[rowPointer] ===
          this.gameBoard.cell[rowPointer + 2] &&
        this.gameBoard.cell[rowPointer] !== null
      ) {
        return true;
      }

      //check verticall wins
      else if (
        this.gameBoard.cell[i] === this.gameBoard.cell[i + 3] &&
        this.gameBoard.cell[i] === this.gameBoard.cell[i + 6] &&
        this.gameBoard.cell[i] !== null
      ) {
        return true;
      }
    }
    return false;
  }

  play(index) {
    const isvalid = this.gameBoard.setMark(this.currentPlayer.marker, index);

    const gameOver = this.checkWin();

    if (gameOver) {
      //display message
      return `${this.currentPlayer.name} Won`;
    }

    ///if the play is valid is going to switch players // if turn is equal to 10 will become a draw
    else if (isvalid) {
      this.currentPlayer =
        this.currentPlayer === this.player1 ? this.player2 : this.player1;
      //increase turn value
      this.#turn++;

      if (this.#turn === 10) {
        return `Draw`;
      }

      return true;
    } else return false;
  }

  startNewGame() {
    this.gameBoard.clearBoard();
    this.currentPlayer = this.player1;
    this.#turn = 1;
  }
}
