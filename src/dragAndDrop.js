import * as listeners from './eventListeners.js';
import { playersMessage } from './domElements.js';
import { getCurrentPlayer, getShipName, setShipName, getShipColor, setShipColor, previewCells } from './gameState.js';

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

        cell.addEventListener("dragleave", listeners.removePreview);

        cell.addEventListener("drop", (e) => {
            listeners.removePreview(e);
            listeners.clearPreviewCells(previewCells);

            const currentPlayer = getCurrentPlayer();
            const shipName = getShipName();
            const shipColor = getShipColor();
            let cellRow = e.target.dataset.row;
            let cellCol = e.target.dataset.col;
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
                    thisCell.classList.add("highlight");
                    thisCell.style.backgroundColor = shipColor;
                    cellCol++;
                }
            } else {
                for (let i = 0; i < myShip.length; i++ ) {
                    const thisCell = document.querySelector(`[data-row='${cellRow}'][data-col='${cellCol}']`);
                    thisCell.classList.add("highlight");
                    thisCell.style.backgroundColor = shipColor;
                    cellRow++;
                }
            }
            currentPlayer.setupShips++;
            checkSetupProgress(); // Rename this passed in function?
        });
    });
}

export function addShipDragListeners(allShips) {
    allShips.forEach(ship => {
        ship.addEventListener('dragstart', (e) => {
            setShipName(e.target.id);
            setShipColor(getComputedStyle(e.target).backgroundColor)
        });
    })
}