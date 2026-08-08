import { getCurrentPlayer, getOpponent, getTurnFinished, setTurnFinished } from './gameState.js';
import { receiveAttack, isSunk } from './gameboard.js';
// import { oppBoard, nextTurnBtn } from './domElements.js';
import { newGameBtn, resetBtn, toggleBtn, nextPlayerSetupBtn, startGameBtn,
        playersBoard, playersMessage, oppBoard, allShips, nextTurnBtn, passingBtn } from './domElements.js';
import { isGameFinished } from './gameplay.js';

export function newGame() {
        createPlayersGrid();
}

export function resetDraggableShips(allShips) {
            allShips.forEach(ship => {
                ship.setAttribute('draggable', 'true');
                ship.classList.remove('less-opacity');
        });
    }


export function createPlayersGrid() {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {

        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.dataset.row = r;
            cell.dataset.col = c;
            playersBoard.appendChild(cell);
        }
    }
}

export function updatePlayersGrid(gameboard) {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            if (gameboard.board[r][c] === 0) {
                cell.textContent = "X";
            } else if (gameboard.board[r][c] === 1) {
                cell.textContent = "O";
                cell.classList.add('highlight');
            } else if (gameboard.board[r][c] !== null) {
                cell.classList.add('highlight');
            }

            playersBoard.appendChild(cell);
        }
    }
}


export function createOppGrid() {
    const oppBoard = document.querySelector('.opp-board');

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const button = document.createElement('button');
            button.classList.add("grid-button");
            button.dataset.row = r;
            button.dataset.col = c;

            button.addEventListener('click', cellClickHandler);
            oppBoard.appendChild(button);
        }
    }
}

function cellClickHandler(event) {
    const opponent = getOpponent();
    const currentPlayer = getCurrentPlayer();
    let clickedRow = parseInt(event.target.dataset.row, 10);
    let clickedCol = parseInt(event.target.dataset.col, 10);
    opponent.gameboard.receiveAttack([clickedRow, clickedCol]);
    oppBoard.textContent = '';

    //     if (opponent.gameboard[clickedRow, clickedCol].isSunk()) {
    //     const player = getCurrentPlayer();
    //     player.points++;
    //     playersBoard.textContent = 'The ship has been sunk!';
    // }
    if (opponent.gameboard.board[clickedRow][clickedCol] === 1) {
        if (playersMessage.textContent !== 'The ship has been sunk!') {
            playersMessage.textContent = 'Its a hit!';
        }
    } else {
        playersMessage.textContent = 'Nothing there but fish';
    }
    // playersMessage.textContent = 'Click the button below when you are ready';
    setTurnFinished(true);
    updateOppGrid(opponent.gameboard);
    passingBtn.classList.remove('invisible', 'gone');

    if (isGameFinished()) {
        playersMessage.textContent = `${currentPlayer.name} is the winner!`
        playersBoard.textContent = '';
        passingBtn.classList.add('gone');
        updatePlayersGrid(opponent.gameboard);
        const space = document.createElement('br');
        playersBoard.appendChild(space);
        updatePlayersGrid(currentPlayer.gameboard);      
    }

}

export function updateOppGrid(gameboard) {
    const playersBoard = document.querySelector('.opp-board');
    console.log(getTurnFinished());

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.dataset.row = r;
            button.dataset.col = c;
            if (gameboard.board[r][c] === 0) {
                button.textContent = 'X'
            } else if (gameboard.board[r][c] === 1) {
                button.textContent = 'O';
            } else if (!getTurnFinished()) {
                button.addEventListener('click', cellClickHandler);
            }
            // Only add cellClick if the square has not already been targeted.
            // if (!getTurnFinished()) {
            //     button.addEventListener('click', cellClickHandler);
            // }

            playersBoard.appendChild(button);
        }
    }

}