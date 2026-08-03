import { Player } from './player.js';
import { Gameboard } from './gameboard.js';

describe('Player setup', () => {
    
    it('Can create player of type human', () => {
        const player = new Player('human');
        expect(player.type).toBe('human');
    })
    
    it('Player starts with their own empty gameboard', () => {
        const player = new Player('human');
        expect(player.gameboard).toBeDefined();
    })
})