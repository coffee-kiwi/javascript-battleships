
export class Ship {

    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.numOfHits = 0;
        this.sunk = false;
    }

    hit() {
        if (this.numOfHits < this.length) {
            this.numOfHits += 1;
        }
    }

    isSunk() {
        if (this.numOfHits == this.length) {
            this.sunk = true;
        }
    }

}