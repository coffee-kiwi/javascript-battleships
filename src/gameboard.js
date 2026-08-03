import { Ship } from './ship.js'

export class Gameboard {

    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
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
        row = coordinates[0];
        col = coordinates[1];
        // RUN Check to see if this place has been hit yet or not
        const square = this.board[row][col] == 0

        if (square == 0) {
            console.log(square);
        } else if (square == 1) {
            console.log(square);
        } else {

        }
            
    }
}