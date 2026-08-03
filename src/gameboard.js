
export class Gameboard {

    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
        this.horizontalPlacement = true;
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
                this.board[row][col] = ship.name
                col ++;
            }
        } else {
            for (let i=0; i < ship.length; i++) {
                this.board[row][col] = ship.name
                row ++;
            }
        }


    }
}