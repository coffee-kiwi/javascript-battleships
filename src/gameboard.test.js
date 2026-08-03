import { Gameboard } from './gameboard.js';
import { Ship } from './ship.js';

describe('Gameboard setup', () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
    })
    it('Board is setup with 10 rows (as a nested array)', () => {
        expect(gameboard.board.length).toBe(10)
    })
    it('Board is setup with 10 columns (as a nested array)', () => {
        expect(gameboard.board[0].length).toBe(10);
    })

    describe('When placing ships', () => {
        describe('Horizontal placement', () => {
            it('places ship by filling in squares on the board with the ships name', () => {
                // const patrol = new Ship('Patrol', 2);
                gameboard.placeShip(gameboard.patrol, [0,0]);
                expect(gameboard.board[0][0]).toBe(gameboard.patrol);
                expect(gameboard.board[0][1]).toBe(gameboard.patrol);
            })

        })

        describe('Vertical placement', () => {
            it('places ship by filling in squares on the board with the ships name', () => {
                gameboard.switchDirection();
                // const battleship = new Ship('Battleship', 4);
                gameboard.placeShip(gameboard.battleship, [0,0]);
                expect(gameboard.board[0][0]).toBe(gameboard.battleship);
                expect(gameboard.board[1][0]).toBe(gameboard.battleship);
                expect(gameboard.board[2][0]).toBe(gameboard.battleship);
                expect(gameboard.board[3][0]).toBe(gameboard.battleship);
            })
        })
    })
})

describe('Gameplay', () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
        // patrol = new Ship('Patrol', 2);
        // battleship = new Ship("battleship", 4);
    })
    describe('During players attacking phase', () => {
        it('The ship receives an attack and adds 1 to the hit count', () => {
            gameboard.placeShip(gameboard.patrol, [0,0]);
            gameboard.receiveAttack([0,0]);
            expect(gameboard.patrol.numOfHits).toBe(1);
        })

        it('Does not increase hits upon miss', () => {
            gameboard.placeShip(gameboard.patrol, [0,1])
            gameboard.receiveAttack([0,0]);
            expect(gameboard.patrol.numOfHits).toBe(0);
            console.log(gameboard.board)
        })
    })
})