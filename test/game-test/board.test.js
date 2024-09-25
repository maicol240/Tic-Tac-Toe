import { Board } from '../../src/game/board';

describe('this will create and return our board', () => {
  const gameBoard = new Board();

  it('marks the board ', () => {
    expect(gameBoard.setMark('X', 0)).toBe(true);
  });

  it('wont do anything if board contains a mark', () => {
    expect(gameBoard.setMark('O', 0)).toBe(false);
    expect(gameBoard.cell[0]).toBe('X');
  });

  it('emptys the board', () => {
    gameBoard.clearBoard();
    expect(gameBoard.cell[0]).toBe(null);
  });
});
