import { Gameboard } from './gameboard.js';

export function draggingOver(e) {
        e.preventDefault();
    }

export function addHighlight(e, ship) {
        e.target.classList.add('slight-scale');
        // Target all according to ship length
        let cellRow = e.target.dataset.row;
        let cellCol = e.target.dataset.col;
        console.log(e);
        console.log(shipName);
    }


export function removeHighlight(e) {
        e.target.classList.remove('slight-scale');
    }

export function setDragObject(e, object) {
    object = e.target
}


