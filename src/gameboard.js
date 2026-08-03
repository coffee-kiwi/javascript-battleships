import { Ship } from './ship.js'

export class Gameboard {

    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.horizontalPlacement = true;
        this.patrol = new Ship("patrol", 2);
        this.cruiser = new Ship("cruiser", 3);
        this.destroyer = new Ship("destroyer", 3);
        this.battleship = new Ship("battleship", 4);
        this.carrier = new Ship("carrier", 5);
    }

    switchDirection() {
        if (this.horizontalPlacement == true) {
            this.horizontalPlacement = false;
        } else {
            this.horizontalPlacement = true;
        }
    }

    placeShip(ship, start) {
        let row = start[0];
        let col = start[1];


        if (this.horizontalPlacement) {
            for (let i=0; i < ship.length; i++) {
                this.board[row][col] = ship
                col ++;
            }
        } else {
            for (let i=0; i < ship.length; i++) {
                this.board[row][col] = ship
                row ++;
            }
        }
    }

    receiveAttack(coordinates) {
        const row = coordinates[0];
        const col = coordinates[1];
        let square = this.board[row][col]

        if (square instanceof Ship) {
            square.hit();
            this.board[row][col] = 1;
        } else if (square == 1) {
            console.log('Square has already been hit');
            // Throw error or ask to rerun function?
        } else {
            this.board[row][col] = 0;
            // It's a miss. Show message ans switch to next player?
        }
            
    }
}