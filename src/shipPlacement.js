import * as listeners from './eventListeners.js';
import { playersMessage } from './domElements.js';
import { getCurrentPlayer, getShipName, getShipColor, setShipName, setShipColor, previewCells } from './gameState.js';

export function placeSelectedShip(cellRow, cellCol, checkSetupProgress) {
    
    const shipName = getShipName();
    if (!shipName) return;

    const currentPlayer = getCurrentPlayer();
    const shipColor = getShipColor();
    let myShip = currentPlayer.gameboard[shipName];

    try {
        currentPlayer.gameboard.placeShip(myShip, [cellRow, cellCol]);    
    } catch (error) {
        playersMessage.textContent = error.message;
        return;
    }
    playersMessage.textContent = `${currentPlayer.name} please place your ships`;

    const item = document.getElementById(myShip.name);
    item.removeAttribute('draggable');
    item.classList.add('less-opacity');

    if (currentPlayer.gameboard.horizontalPlacement) {
        for (let i = 0; i < myShip.length; i++ ) {
            const thisCell = document.querySelector(`[data-row='${cellRow}'][data-col='${cellCol}']`);
            thisCell.classList.add("highlighted");
            thisCell.style.backgroundColor = shipColor;
            cellCol++;
        }
    } else {
        for (let i = 0; i < myShip.length; i++ ) {
            const thisCell = document.querySelector(`[data-row='${cellRow}'][data-col='${cellCol}']`);
            thisCell.classList.add("highlighted");
            thisCell.style.backgroundColor = shipColor;
            cellRow++;
        }
    }
    currentPlayer.setupShips++;
    setShipName(null);
    checkSetupProgress();
}

export function addShipClickListeners(allShips) {
    allShips.forEach(ship => {
        ship.addEventListener('click', () => {
            if (!ship.hasAttribute('draggable')) return;

            listeners.clearPreviewCells(previewCells);
            allShips.forEach(s => s.classList.remove('selected'));
            ship.classList.add('selected');
            setShipName(ship.id);
            setShipColor(getComputedStyle(ship).backgroundColor);
        });
    });
}

export function addCellClickListeners(checkSetupProgress) {
    const playercells = document.querySelectorAll('.grid-cell');
    playercells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            listeners.clearPreviewCells(previewCells);
            placeSelectedShip(e.target.dataset.row, e.target.dataset.col, checkSetupProgress);
        });
    

        cell.addEventListener('mouseenter', (e) => {
            const shipName = getShipName();
            if (!shipName) return;
            const currentPlayer = getCurrentPlayer();
            const myShip = currentPlayer.gameboard[shipName];
            const color = getShipColor();
            listeners.previewShipPlacement(e, myShip, currentPlayer.gameboard.horizontalPlacement, previewCells, color);
        });

        // cell.addEventListener('mouseleave', listeners.removePreview);
    });
}
