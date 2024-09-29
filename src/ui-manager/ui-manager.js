import { GameManager } from '../game/game-manager';

//will create my ui
function createUI(board) {
  let main = document.querySelector('main');
  let boardContainer = document.createElement('div');

  boardContainer.classList = 'board-container';
  main.appendChild(boardContainer);

  for (let i = 0; i < 9; i++) {
    let createCell = document.createElement('button');
    createCell.classList = `${i}`;
    createCell.classList.add('cell');
    boardContainer.appendChild(createCell);
  }

  //create reset btn after board
  const resetButton = document.createElement('button');
  resetButton.classList = 'reset';
  resetButton.textContent = 'Start New Game';
  main.appendChild(resetButton);
}

//render new game
function restartGame(buttons, gameManager) {
  //this will clear UI 
  buttons.forEach((button) => {
    button.disabled = false;
    button.textContent = '';

    
  });

  gameManager.startNewGame();
}

/// WILL ADD EVENT LISTENER TO BTNS AND place the mark if valid
export function startGame(gameManager) {
  renderNames(gameManager.player1, gameManager.player2);
  createUI(gameManager.gameBoard);
  const buttons = document.querySelectorAll('.cell');
  const resetButton = document.querySelector('.reset');
  resetButton.addEventListener('click', () => {
    restartGame(buttons, gameManager);
  });

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      ///display will display content if the return is valid
      //will check for boolean or string
      const displayController = gameManager.play(index);

      if (displayController) {
        button.textContent = gameManager.gameBoard.cell[index];
        button.disabled = true; //prevent playing in the same cell twice
      }

      if (typeof displayController === 'string') {
        buttons.disabled;
        button.textContent = gameManager.gameBoard.cell[index];
        //disable buttons after winning or getting the draw
        buttons.forEach((button) => {
          button.disabled = true;
        });
        setTimeout(() => {
          alert(displayController);
        }, 500);
      }
    });
  });
}

//load names for players
function renderNames(player1, player2) {
  const playerX = document.querySelector('.player-x');
  const playerO = document.querySelector('.player-o');
  playerX.textContent = player1.name;
  playerO.textContent = player2.name;
}
