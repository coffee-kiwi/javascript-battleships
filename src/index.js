import './styles.css'
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import * as play from './playBattleships.js';

// play.createPlayersGrid();

// play.createOppGrid();
    const newGameBtn = document.getElementById('new-game');

    newGameBtn.addEventListener("click", (e) => {
        const playersBoard = document.querySelector('.players-board');
        const playersMessage = document.getElementById('players-message');
        const oppBoard = document.querySelector('.opp-board');
        const oppMessage = document.getElementById('opps-message');
        playersBoard.textContent = playersMessage.textContent = '';
        oppBoard.textContent = oppMessage.textContent = '';
        console.log('Newbutton clicked!');
        play.newGame();
    });