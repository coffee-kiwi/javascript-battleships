import { getCurrentPlayer, getOpponent, getTurnFinished, setTurnFinished } from './gameState.js';
import { receiveAttack, isSunk } from './gameboard.js';
import { playersBoard, playersMessage, oppBoard, passingBtn } from './domElements.js';
import { isGameFinished } from './gameplay.js';

export function newGame() {
    const currentPlayer = getCurrentPlayer();
    updatePlayersGrid(currentPlayer.gameboard);
}


function getShipColorByName(name) {
    const thisShip = document.getElementById(name);
    return thisShip ? getComputedStyle(thisShip).backgroundColor : '';
}

export function resetDraggableShips(allShips) {
            allShips.forEach(ship => {
                ship.setAttribute('draggable', 'true');
                ship.classList.remove('less-opacity');
        });
    }

export function updatePlayersGrid(gameboard) {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            const square = gameboard.board[r][c];
            if (square === 0) {
                cell.textContent = "X";
            } else if (square && square.isHit) {
                cell.textContent = "O";
                cell.classList.add('highlighted');
                cell.style.backgroundColor = getShipColorByName(gameboard.board[r][c].shipName);
            } else if (square !== null) {
                cell.classList.add('highlighted');
                cell.style.backgroundColor = getShipColorByName(gameboard.board[r][c].name);
            }

            playersBoard.appendChild(cell);
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

    if (opponent.gameboard.board[clickedRow][clickedCol].isHit) {
        if (playersMessage.textContent !== 'The ship has been sunk!') {
            playersMessage.textContent = 'Its a hit!';
        }
    } else {
        playersMessage.textContent = 'Nothing there but fish';
    }
    
    setTurnFinished(true);
    updateOppGrid(opponent.gameboard);
    passingBtn.classList.remove('gone');

    if (isGameFinished()) {
        playersMessage.textContent = `${currentPlayer.name} is the winner!`
        playersBoard.textContent = '';
        oppBoard.textContent = '';
        passingBtn.classList.add('gone');
        updatePlayersGrid(opponent.gameboard);
        updatePlayersGrid(currentPlayer.gameboard);      
    }

}

export function updateOppGrid(gameboard) {
    const oppBoard = document.querySelector('.opp-board');
    console.log(getTurnFinished());

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.dataset.row = r;
            button.dataset.col = c;
            const square = gameboard.board[r][c];
            if (square === 0) {
                button.textContent = 'X'
            } else if (square && square.isHit) {
                button.textContent = 'O';
            } else if (!getTurnFinished()) {
                button.addEventListener('click', cellClickHandler);
            }

            oppBoard.appendChild(button);
        }
    }


}