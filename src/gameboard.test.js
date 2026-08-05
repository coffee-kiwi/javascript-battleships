import { Player } from './player.js';
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
        let player;
        beforeEach(() => {
            player = new Player("player1");
        })
        describe('Horizontal placement', () => {

            it('places ship by filling in squares on the board with the ships name', () => {
                player.gameboard.placeShip(player.gameboard.patrol, [0,0]);
                expect(player.gameboard.board[0][0]).toBe(player.gameboard.patrol);
                expect(player.gameboard.board[0][1]).toBe(player.gameboard.patrol);
            }) 

        })

        describe('Vertical placement', () => {
            it('places ship by filling in squares on the board with the ships name', () => {
                player.gameboard.switchDirection();
                // const battleship = new Ship('Battleship', 4);
                player.gameboard.placeShip(player.gameboard.battleship, [0,0]);
                expect(player.gameboard.board[0][0]).toBe(player.gameboard.battleship);
                expect(player.gameboard.board[1][0]).toBe(player.gameboard.battleship);
                expect(player.gameboard.board[2][0]).toBe(player.gameboard.battleship);
                expect(player.gameboard.board[3][0]).toBe(player.gameboard.battleship);
            })
        })
    })
})

describe('Gameplay', () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
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
        })
    })
})

describe('Ship placement on players gameboard', () => {
    let player1;
    beforeEach(() => {
        player1 = new Player("player1");
    })

    it('Ship cannot be placed outside of the board (horizontally)', () => {
        expect(() => player1.gameboard.placeShip(player1.gameboard.carrier, [8, 8])).toThrow('Ship cannot be placed outside of the board');        
    })

    it('Ship can be placed until the edge of the board (horizontally)', () => {
        expect(() => player1.gameboard.placeShip(player1.gameboard.patrol, [8,8])).not.toThrow('Ship cannot be placed outside of the board');
    })

    it('Ship cannot be placed outside of the board (vertically)', () => {
        player1.gameboard.switchDirection();
        expect(() => player1.gameboard.placeShip(player1.gameboard.carrier, [6, 8])).toThrow('Ship cannot be placed outside of the board');        
    })

    it('Ship can be placed along edges of the board (vertically)', () => {
        expect(() => player1.gameboard.placeShip(player1.gameboard.patrol, [9,2])).not.toThrow('Ship cannot be placed outside of the board');
    })
    
    it('Ship will not collide with other ships', () => {
        player1.gameboard.placeShip(player1.gameboard.cruiser, [3,3]);
        expect(() => player1.gameboard.placeShip(player1.gameboard.destroyer, [3, 2])).toThrow('Ship cannot be placed on another ship');
    })

    it('Does not place any ships on board if collision is found', () => {
        player1.gameboard.placeShip(player1.gameboard.cruiser, [3,3]);
        
        expect(() => {player1.gameboard.placeShip(player1.gameboard.battleship, [3,1]);
            }).toThrow('Ship cannot be placed on another ship');
        expect(player1.gameboard.board[3][1]).toBe(null);
        expect(player1.gameboard.board[3][2]).toBe(null);
    })
})