import * as listeners from './eventListeners.js';
import { playersMessage } from './domElements.js';
import { getCurrentPlayer, getShipName, setShipName, getShipColor, setShipColor, previewCells } from './gameState.js';
import { placeSelectedShip, addCellClickListeners } from './shipPlacement.js';

export function addCellListeners(checkSetupProgress) {
    const playercells = document.querySelectorAll('.grid-cell');
    playercells.forEach(cell => {
        cell.addEventListener("dragover", listeners.draggingOver);
        
        cell.addEventListener("dragenter", (e) => {
            const shipName = getShipName();
            if (!shipName) return;
            const currentPlayer = getCurrentPlayer();
            const myShip = currentPlayer.gameboard[shipName];
            const color = getShipColor();
            listeners.previewShipPlacement(e, myShip, currentPlayer.gameboard.horizontalPlacement, previewCells, color);
        });

        cell.addEventListener("drop", (e) => {
            listeners.clearPreviewCells(previewCells);
            placeSelectedShip(e.target.dataset.row, e.target.dataset.col, checkSetupProgress);
    });
});
}

export function addShipDragListeners(allShips) {
    allShips.forEach(ship => {
        ship.addEventListener('dragstart', (e) => {
            setShipName(e.target.id);
            setShipColor(getComputedStyle(e.target).backgroundColor);
        });
    })
}

export function attachAllCellListeners(checkSetupProgress) {
    addCellListeners(checkSetupProgress);
    addCellClickListeners(checkSetupProgress);
}