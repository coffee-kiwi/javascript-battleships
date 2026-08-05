import { Gameboard } from './gameboard.js';

export function draggingOver(e) {
        e.preventDefault();
    }

export function clearPreviewCells(previewCells) {
    previewCells.forEach(cell => cell.classList.remove('preview'));
    previewCells.length = 0;
}

export function previewShipPlacement(e, ship, horizontal, previewCells) {
    clearPreviewCells(previewCells);    
    const row = parseInt(e.target.dataset.row, 10);
    const col = parseInt(e.target.dataset.col, 10);

    for (let i = 0; i < ship.length; i++) {
        const targetRow = horizontal ? row : row + i;
        const targetCol = horizontal ? col + i : col;

        if (targetRow > 9 || targetCol > 9) break;

        const cell = document.querySelector(`[data-row='${targetRow}'][data-col='${targetCol}']`);
        if (cell) {
            cell.classList.add('preview');
            previewCells.push(cell);
        }
    }
}

export function removePreview(e) {
        e.target.classList.remove('preview');
    }

export function setDragObject(e, object) {
    object = e.target
}



