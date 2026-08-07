import { Player } from './player.js';

export const player1 = new Player("Player1");
export const player2 = new Player("Player2");

const state = {
    currentPlayer: player1,
    shipName: null,
    opponent: player2,
    turnFinished: false,
};

export const previewCells = [];

export function getCurrentPlayer() {
    return state.currentPlayer;
}

export function changePlayer() {
    state.currentPlayer = state.currentPlayer === player1 ? player2 : player1;
    state.opponent = state.opponent === player1 ? player2 : player1;
}

export function getOpponent() {
    return state.opponent;
   
}

export function getShipName() {
    return state.shipName;
}

export function setShipName(name) {
    state.shipName = name;
}

export function getTurnFinished() {
    return state.turnFinished;
}

export function setTurnFinished(boolean) {
    state.turnFinished = boolean;
}