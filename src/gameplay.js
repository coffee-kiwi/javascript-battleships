import * as setup from './setup.js';
import { newGameBtn, resetBtn, toggleBtn, nextPlayerSetupBtn, startGameBtn,
        playersBoard, playersMessage, oppBoard, allShips, nextTurnBtn, passingBtn } from './domElements.js';
import { getTurnFinished, getCurrentPlayer, changePlayer, getOpponent, setTurnFinished } from './gameState.js';
import { addCellListeners, addShipDragListeners } from './dragAndDrop.js';

export function playGame() {
    changePlayer();
    const currentPlayer = getCurrentPlayer();
    setup.createOppGrid();
    setup.updatePlayersGrid(currentPlayer.gameboard);
    playersMessage.textContent = `${currentPlayer.name} choose a square`;
    startGameBtn.classList.add('invisible', 'gone');
    oppBoard.classList.remove('invisible');
}

export function waitingScreen() {
    playersBoard.textContent = '';
    oppBoard.textContent = '';
    playersMessage.textContent = 'Pass to the next player. Click the button below to start your turn.';
    passingBtn.classList.add('invisible', 'gone');
    nextTurnBtn.classList.remove('invisible', 'gone')
}

export function nextTurn() {
    changePlayer();
    setTurnFinished(false);
    console.log(getTurnFinished());
    const currentPlayer = getCurrentPlayer();
    const opponent = getOpponent();
    playersBoard.textContent = '';
    oppBoard.textContent = '';
    nextTurnBtn.classList.add('invisible', 'gone');
    setup.updateOppGrid(opponent.gameboard);
    setup.updatePlayersGrid(currentPlayer.gameboard);
    playersMessage.textContent = `${currentPlayer.name} choose a square`
}

export function isGameFinished () {
    const currentPlayer = getCurrentPlayer();
    console.log(currentPlayer);
    return currentPlayer.points == 5;
}