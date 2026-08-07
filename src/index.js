import './styles.css'
import * as setup from './setup.js';
import { newGameBtn, resetBtn, toggleBtn, nextPlayerSetupBtn, startGameBtn,
        playersBoard, playersMessage, oppBoard, allShips, nextTurnBtn, passingBtn } from './domElements.js';
import { player1, player2, getCurrentPlayer, changePlayer, setTurnFinished } from './gameState.js';
import { addCellListeners, addShipDragListeners } from './dragAndDrop.js';
import { playGame, nextTurn, waitingScreen } from './gameplay.js';

function checkSetupProgress() {
    const currentPlayer = getCurrentPlayer();

    if (player1.setupShips === 5 && player2.setupShips === 5) {
        nextPlayerSetupBtn.classList.add('gone');
        startGameBtn.classList.remove('invisible', 'gone');
        playersBoard.textContent = '';
        playersMessage.textContent = 'Pass to the next player and let them click the button below'; 
        startGameBtn.addEventListener('click', playGame);
    } else if (currentPlayer.setupShips === 5) {
        playersBoard.textContent = '';
        playersMessage.textContent = 'Pass to the next player and let them click the button below' 
        nextPlayerSetupBtn.classList.remove('invisible');
    } else {
        playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    }
}

function startNewGame() {
    const currentPlayer = getCurrentPlayer();

    playersBoard.textContent = '';
    playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    oppBoard.textContent = '';
    player1.resetBoard();
    player2.resetBoard();

    setup.newGame();
    addCellListeners(checkSetupProgress);
    setup.resetDraggableShips(allShips);

    document.querySelectorAll('.betweenBtn').forEach(btn => btn.classList.add('invisible'));
}

startNewGame();
addShipDragListeners(allShips);

newGameBtn.addEventListener('click', startNewGame);

resetBtn.addEventListener('click', () => {
    const currentPlayer = getCurrentPlayer();
    currentPlayer.resetBoard();
    playersBoard.textContent = '';
    setup.resetDraggableShips(allShips);
    setup.updatePlayersGrid(currentPlayer.gameboard);
    addCellListeners(checkSetupProgress);
    toggleBtn.textContent = 'Horizontal Placement';
});

toggleBtn.addEventListener('click', () => {
    const currentPlayer = getCurrentPlayer();
    currentPlayer.gameboard.switchDirection();
    toggleBtn.textContent = currentPlayer.gameboard.horizontalPlacement
        ? 'Horizontal Placement'
        : 'Vertical Placement';
})

nextPlayerSetupBtn.addEventListener('click', () => {
    changePlayer();
    const currentPlayer = getCurrentPlayer();
    nextPlayerSetupBtn.classList.add('invisible');
    playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    setup.updatePlayersGrid(currentPlayer.gameboard);
    setup.resetDraggableShips(allShips);
    addCellListeners(checkSetupProgress);
});

passingBtn.addEventListener('click', () => {
    waitingScreen();

})

nextTurnBtn.addEventListener('click', () => {
    nextTurn();
    // changePlayer();
    // setTurnFinished(false);
    // const currentPlayer = getCurrentPlayer();
    // const opponent = getOpponent();
    // setup.updateOppGrid(opponent.gameboard);
    // setup.updatePlayersGrid(currentPlayer.gameboard);
    // playersMessage.textContent = 'Choose a square'

})