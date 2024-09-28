import { Board } from '../../src/game/board';
import { Player } from '../../src/game/player';
import { GameManager } from '../../src/game/game-manager';

describe('Game flow tests', () => {
  let board;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    board = new Board();
    player1 = new Player('Maicol', 'X');
    player2 = new Player('Rigo', 'O');
    game = new GameManager(player1, player2, board);
  });

  it('should set markers for both players', () => {
    expect(game.player1.marker).toBe('X');
    expect(game.player2.marker).toBe('O');
  });
});

describe('Check winning Condtions', () => {
  let board;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    board = new Board();
    player1 = new Player('Maicol', 'X');
    player2 = new Player('Rigo', 'O');
    game = new GameManager(player1, player2, board);
  });

  it('check winning conditions horizontally', () => {
    for (let i = 3; i < 6; i++) {
      game.gameBoard.cell[i] = 'X';
    }

    let itwon = game.checkWin();
    expect(itwon).toBe(true);
  });

  it('check winning conditions vertically', () => {
    for (let i = 0; i < 7; i += 3) {
      game.gameBoard.cell[i] = 'X';
    }

    let itwon = game.checkWin();
    expect(itwon).toBe(true);
  });

  it('check winning conndtions diagonally', () => {
    for (let i = 0; i < 9; i += 4) {
      game.gameBoard.cell[i] = 'X';
    }

    expect(game.gameBoard.cell[4] === game.currentPlayer.marker).toBe(true);
    let itwon = game.checkWin();
  });
});

describe('Moves functionality', () => {
  let board;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    board = new Board();
    player1 = new Player('Maicol', 'X');
    player2 = new Player('Rigo', 'O');
    game = new GameManager(player1, player2, board);
  });
  it('switch player after each play if the play is valid', () => {
    expect(game.currentPlayer.marker).toBe('X');
    game.play(1);

    expect(game.currentPlayer.marker).toBe('O');
    expect(game.play(1)).toBe(false);
    expect(game.gameBoard.cell[1]).toBe('X');
  });
});
