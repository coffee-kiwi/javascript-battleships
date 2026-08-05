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
        let row = parseInt(start[0], 10);
        let col = parseInt(start[1], 10);

        if (this.horizontalPlacement) {
            if ((col + ship.length) > 10 ) {
                throw new Error('Ship cannot be placed outside of the board');
            }
            for (let i=0; i < ship.length; i++) {
                if (this.board[row][col + i] != null) {
                    throw new Error('Ship cannot be placed on another ship')
                }
            }

            for (let i=0; i < ship.length; i++) {
                this.board[row][col] = ship
                col ++;
            }
        } else {
            if ((row + ship.length) > 10 ) {
             throw new Error('Ship cannot be placed outside of the board');
            }
            for (let i=0; i < ship.length; i++) {
                if (this.board[row + i][col] != null) {
                    throw new Error('Ship cannot be placed on another ship')
                }
            }

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
            if (square.isSunk()) {
                console.log("Opponent's ship has been sunk!")
                // Add any other necessary message
            }
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