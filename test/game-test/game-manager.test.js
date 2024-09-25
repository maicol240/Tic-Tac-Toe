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
    player1 = new Player('Maicol');
    player2 = new Player('Rigo');
    game = new GameManager(player1, player2, board);
  });

  it('should set markers for both players', () => {
    game.setMarkers();

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
    player1 = new Player('Maicol');
    player2 = new Player('Rigo');
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

  todo('check winning conndtions diagonally');
});
