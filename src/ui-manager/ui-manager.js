import { GameManager } from '../game/game-manager';

//will create my ui
function createUI(board, player) {
  const main = document.querySelector('main');

  const gameStatus = document.createElement('h2');
  gameStatus.textContent = player + "'s Turn";
  gameStatus.classList.add('game-status');

  const boardContainer = document.createElement('div');
  boardContainer.classList = 'board-container';

  main.appendChild(gameStatus);

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
<<<<<<< HEAD
function restartGame(buttons, gameManager, gameStatus) {
=======
function restartGame(buttons, gameManager) {
  //this will clear UI 
>>>>>>> 2b335b8236dcf1cb7170f653a0e9c63f813a9268
  buttons.forEach((button) => {
    button.disabled = false;
    button.textContent = '';

    
  });
  gameManager.startNewGame();
  gameStatus.textContent = gameManager.currentPlayer.name + "'s Turn";
}

export function startGame(gameManager) {
  // render player names if user enter names
  renderNames(gameManager.player1, gameManager.player2);
  createUI(gameManager.gameBoard, gameManager.currentPlayer.name);

  const gameStatus = document.querySelector('.game-status');
  const buttons = document.querySelectorAll('.cell');
  const resetButton = document.querySelector('.reset');

  resetButton.addEventListener('click', () => {
    restartGame(buttons, gameManager, gameStatus);
  });

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      ///display will display content if the return is valid
      const displayController = gameManager.play(index);

      //if displayController is boolean it will disable the button  and update the board cell with the current player's marker
      if (displayController) {
        button.textContent = gameManager.gameBoard.cell[index];

        //prevent playing in the same cell twice
        button.disabled = true;
        gameStatus.textContent = gameManager.currentPlayer.name + "'s Turn";
      }

      // if displayController is string it will display the result after winning or getting the draw
      if (typeof displayController === 'string') {
        buttons.disabled;
        button.textContent = gameManager.gameBoard.cell[index];
        //disable buttons after winning or getting the draw
        buttons.forEach((button) => {
          button.disabled = true;
        });
        setTimeout(() => {
          gameStatus.textContent = displayController;
        }, 100);
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
