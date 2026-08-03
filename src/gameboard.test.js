import { Gameboard } from './gameboard.js';
import { Ship } from './ships.js';

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
                const patrol = new Ship('Patrol', 2);
                gameboard.placeShip(patrol, [0,0]);
                expect(gameboard.board[0][0]).toBe("Patrol");
                expect(gameboard.board[0][1]).toBe("Patrol");
            })

        })

        describe('Vertical placement', () => {
            it('places ship by filling in squares on the board with the ships name', () => {
                gameboard.switchDirection();
                const battleship = new Ship('Battleship', 4);
                gameboard.placeShip(battleship, [0,0]);
                expect(gameboard.board[0][0]).toBe("Battleship");
                expect(gameboard.board[1][0]).toBe("Battleship");
                expect(gameboard.board[2][0]).toBe("Battleship");
                expect(gameboard.board[3][0]).toBe("Battleship");
            })
        })
    })
})

describe('Gameplay', () => {
    let gameboard;
    let patrol;
    let battleship;
    beforeEach(() => {
        gameboard = new Gameboard();
        patrol = new Ship('Patrol', 2);
        battleship = new Ship("battleship", 4);
    })
    describe('During players attacking phase', () => {
        it('The ship receives an attack and adds 1 to the hit count', () => {
            
        })
        // it('Reports on a sinking ship if the ship sinks', () => {

        // })
    })
})