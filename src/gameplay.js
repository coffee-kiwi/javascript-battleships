import * as setup from './setup.js';
import { startGameBtn, playersBoard, playersMessage, oppBoard, nextTurnBtn, passingBtn, bottomTitle, mainElement, toggleBtn, resetBtn } from './domElements.js';
import { getTurnFinished, getCurrentPlayer, changePlayer, getOpponent, setTurnFinished } from './gameState.js';
import { addCellListeners, addShipDragListeners } from './dragAndDrop.js';

export function playGame() {
    changePlayer();
    const currentPlayer = getCurrentPlayer();
    const opponent = getOpponent();
    setup.updateOppGrid(opponent.gameboard);
    setup.updatePlayersGrid(currentPlayer.gameboard);
    playersMessage.textContent = `${currentPlayer.name} choose a square`;
    startGameBtn.classList.add('gone');
    toggleBtn.classList.add('gone');
    resetBtn.classList.add('gone');
    oppBoard.classList.remove('gone');
    bottomTitle.classList.remove('gone');
    mainElement.classList.add('game-phase');
}

export function waitingScreen() {
    playersBoard.textContent = '';
    oppBoard.textContent = '';
    playersMessage.textContent = 'Pass to the next player. Click the button below to start your turn.';
    passingBtn.classList.add('gone');
    bottomTitle.classList.add('gone');
    nextTurnBtn.classList.remove('gone')
}

export function nextTurn() {
    changePlayer();
    setTurnFinished(false);
    console.log(getTurnFinished());
    const currentPlayer = getCurrentPlayer();
    const opponent = getOpponent();
    playersBoard.textContent = '';
    oppBoard.textContent = '';
    nextTurnBtn.classList.add('gone');
    bottomTitle.classList.remove('gone');
    setup.updateOppGrid(opponent.gameboard);
    setup.updatePlayersGrid(currentPlayer.gameboard);
    playersMessage.textContent = `${currentPlayer.name} choose a square`
}

export function isGameFinished () {
    const currentPlayer = getCurrentPlayer();
    console.log(currentPlayer);
    return currentPlayer.points == 5;
}