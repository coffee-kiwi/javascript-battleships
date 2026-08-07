import { Player } from './player.js'
import { isGameFinished } from './gameplay.js'
import { getTurnFinished, getCurrentPlayer, changePlayer } from './gameState.js';

describe('When the game is finished', () => {
    let player1;
    let player2;
    beforeEach(() => {
        player1 = new Player('Player1');
        player2 = new Player('Player2');
        if (getCurrentPlayer() === player2) {
            changePlayer();
        }
    })
    it('Reports when the game is finished', () => {
        const player = getCurrentPlayer();
        player.points = 5;
        expect(isGameFinished()).toBe(true);
    })
    it('Returns false when game is not finished', () => {
        const player = getCurrentPlayer();
        player.points = 4;
        expect(isGameFinished()).toBe(false);
    })
})