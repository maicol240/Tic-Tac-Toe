import './index.css';

import { GameManager } from './game/game-manager';
import { Player } from './game/player';
import { Board } from './game/board';
import * as UI from './ui-manager/ui-manager';

const playerForm = document.querySelector('#game-form');

playerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  playerForm.style.display = 'none';

  // Assign defaul values to Player is form values are empty
  let player1Name = document.querySelector('#player-x').value;

  let player2Name = document.querySelector('#player-o').value;
  if (!player1Name) {
    player1Name = 'Player-X';
  }
  if (!player2Name) {
    player2Name = 'Player-O';
  }
  // asisgning defaul values or user choice
  const player1 = new Player(player1Name, 'X');
  const player2 = new Player(player2Name, 'O');
  //initiating game
  const board = new Board();
  const gameManager = new GameManager(player1, player2, board);

  UI.startGame(gameManager);
});
