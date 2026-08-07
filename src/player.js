import { Gameboard } from './gameboard.js';

export class Player {

    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.setupShips = 0;
        // this.turnFinished = false;
    }

    resetBoard() {
    this.gameboard = new Gameboard();
    this.setupShips = 0;
    }

    // resetTurn() {
    //     this.turnFinished = false;
    // }
}

