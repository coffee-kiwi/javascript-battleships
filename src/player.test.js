import { Player } from './player.js';
import { Gameboard } from './gameboard.js';

describe('Player setup', () => {
    let player1;
    beforeEach(() => {
        player1 = new Player("player1");
    })
    it('Can create player of type player1', () => {
        expect(player1.name).toBe('player1');
    })
    
    it('Player starts with their own empty gameboard', () => {
        expect(player1.gameboard).toBeDefined();
    })

    it('Resets gameboard', () => {
        player1.gameboard.placeShip(player1.gameboard.carrier, [0,0]);
        expect(player1.gameboard.board[0][0]).toBe(player1.gameboard.carrier);
        player1.resetBoard();
        expect(player1.gameboard.board[0][0]).toBe(null);
    })

    
})