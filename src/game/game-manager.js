import { Player } from './player';
import { Board } from './board';

export class GameManager {
  #turn;

  constructor(player1, player2, board) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.#turn = 1;
    this.gameBoard = board;
  }

  //Add  set Market to players
  setMarkers() {
    this.player1.marker = 'X';
    this.player2.marker = 'O';
  }

  //check if player Won
  checkWin() {
    //check if the current player owns the center to check diagonally
    if (this.currentPlayer.marker === this.gameBoard.cell[4]) {
      if (
        this.gameBoard.cell[0] === this.gameBoard[8] ||
        this.gameBoard[6] === this.gameBoard[2]
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
}
