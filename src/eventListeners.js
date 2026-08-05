import { Gameboard } from './gameboard.js';

export function draggingOver(e) {
        e.preventDefault();
    }

export function addHighlight(e) {
        e.target.classList.add('slight-scale');
    }


export function removeHighlight(e) {
        e.target.classList.remove('slight-scale');
    }

export function setDragObject(e, object) {
    object = e.target
}

// export function preCheck(board, row, col, length) {

// }

