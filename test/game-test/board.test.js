import { Board } from '../../src/game/board';

describe('this will create and return our board', () => {
  const gameBoard = new Board();

  it('checks if board  cell is empty', () => {
    gameBoard.board[2] = 'x';
    expect(gameBoard.isEmpty(1)).toBe(true);
    expect(gameBoard.isEmpty(2)).toBe(false);
  });
});
