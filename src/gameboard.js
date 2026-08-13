import { Ship } from './ship.js'
import { getCurrentPlayer } from './gameState.js';
import { playersMessage } from './domElements.js';

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
            square.isSunk();
            if (square.sunk) {
                const player = getCurrentPlayer();
                player.points++;
                playersMessage.textContent = 'The ship has been sunk!';
            }
            this.board[row][col] = { hit: true, shipName: square.name};
        } else {
            this.board[row][col] = 0;
        }
            
    }
}