import { Gameboard } from './gameboard.js';

export class Player {

    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.setupShips = 0;
    }

    resetBoard() {
    this.gameboard = new Gameboard();
    this.setupShips = 0;
    }
}

