import { Gameboard } from './gameboard.js';

export function draggingOver(e) {
        e.preventDefault();
    }

export function clearPreviewCells(previewCells) {
    previewCells.forEach(cell => {
        cell.classList.remove('preview');
        cell.style.backgroundColor = '';
    });
    previewCells.length = 0;
}

export function previewShipPlacement(e, ship, horizontal, previewCells, color) {
    clearPreviewCells(previewCells);    
    const row = parseInt(e.target.dataset.row, 10);
    const col = parseInt(e.target.dataset.col, 10);

    for (let i = 0; i < ship.length; i++) {
        const targetRow = horizontal ? row : row + i;
        const targetCol = horizontal ? col + i : col;

        if (targetRow > 9 || targetCol > 9) break;

        const cell = document.querySelector(`[data-row='${targetRow}'][data-col='${targetCol}']`);
        if (cell && !cell.classList.contains('highlight')) {
            cell.classList.add('preview');
            cell.style.backgroundColor = color;
            previewCells.push(cell);
        }
    }
}

export function removePreview(e) {
    const row = parseInt(e.target.dataset.row, 10);
    const col = parseInt(e.target.dataset.col, 10);
    const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    if (cell === null) {
        e.target.classList.remove('preview');
        e.target.style.backgroundColor = '';
    }
        
    }

export function setDragObject(e, object) {
    object = e.target
}



