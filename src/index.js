import './styles.css'
import * as setup from './setup.js';
import * as listeners from './eventListeners.js'
import { newGameBtn, resetBtn, toggleBtn, nextPlayerSetupBtn, startGameBtn, mainElement,
        playersBoard, playersMessage, oppBoard, allShips, nextTurnBtn, passingBtn, bottomTitle } from './domElements.js';
import { player1, player2, getCurrentPlayer, changePlayer, setTurnFinished, previewCells } from './gameState.js';
import { addCellListeners, addShipDragListeners, attachAllCellListeners } from './dragAndDrop.js';
import { playGame, nextTurn, waitingScreen } from './gameplay.js';
import { addShipClickListeners, addCellClickListeners } from './shipPlacement.js';

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
        nextPlayerSetupBtn.classList.remove('gone');
    } else {
        playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    }
}

function startNewGame() {
    mainElement.classList.remove('game-phase');
    oppBoard.classList.add('gone');
    toggleBtn.classList.remove('gone');
    resetBtn.classList.remove('gone');
    
    if (getCurrentPlayer().name === "Player2") {
        changePlayer();
    }
    const currentPlayer = getCurrentPlayer();
    playersBoard.textContent = '';
    playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    oppBoard.textContent = '';
    bottomTitle.classList.add('gone');
    player1.resetBoard();
    player2.resetBoard();

    setup.newGame();
    addCellListeners(checkSetupProgress);
    addCellClickListeners(checkSetupProgress);
    setup.resetDraggableShips(allShips);

    document.querySelectorAll('.betweenBtn').forEach(btn => btn.classList.add('gone'));
}

startNewGame();
addShipDragListeners(allShips);
addShipClickListeners(allShips);

playersBoard.addEventListener('dragleave', (e) => {
    if (e.target === playersBoard) {
        listeners.clearPreviewCells(previewCells);
    }
});

playersBoard.addEventListener('mouseleave', () => {
    listeners.clearPreviewCells(previewCells);
});

newGameBtn.addEventListener('click', startNewGame);

resetBtn.addEventListener('click', () => {
    const currentPlayer = getCurrentPlayer();
    currentPlayer.resetBoard();
    playersBoard.textContent = '';
    setup.resetDraggableShips(allShips);
    setup.updatePlayersGrid(currentPlayer.gameboard);
    attachAllCellListeners(checkSetupProgress);
    // addCellListeners(checkSetupProgress);
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
    nextPlayerSetupBtn.classList.add('gone');
    playersMessage.textContent = `${currentPlayer.name} please place your ships`;
    toggleBtn.textContent = 'Horizontal Placement';
    setup.updatePlayersGrid(currentPlayer.gameboard);
    setup.resetDraggableShips(allShips);
    attachAllCellListeners(checkSetupProgress);
    // addCellListeners(checkSetupProgress);
    // addCellClickListeners(checkSetupProgress);
});

passingBtn.addEventListener('click', () => {
    waitingScreen();

})

nextTurnBtn.addEventListener('click', () => {
    nextTurn();
})

