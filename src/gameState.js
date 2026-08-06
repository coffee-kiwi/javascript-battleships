import { Player } from './player.js';

export const player1 = new Player("Player1");
export const player2 = new Player("Player2");

const state = {
    currentPlayer: player1,
    shipName: null,
};

export const previewCells = [];

export function getCurrentPlayer() {
    return state.currentPlayer;
}

export function changePlayer() {
    state.currentPlayer = state.currentPlayer === player1 ? player2 : player1;
}

export function getShipName() {
    return state.shipName;
}

export function setShipName(name) {
    state.shipName = name;
}