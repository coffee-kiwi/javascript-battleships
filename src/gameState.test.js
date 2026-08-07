import { Player } from './player.js';
import { getCurrentPlayer, changePlayer, getOpponent, getShipName, setShipName } from './gameState.js';
describe('Returns getters for the players', () => {
    let player1;
    let player2;
    beforeEach(() => {
        player1 = new Player('Player1');
        player2 = new Player('Player2');
        if (getCurrentPlayer() === player2) {
            changePlayer();
        }
    })

    it('Returns current player correctly', () => {
        expect(getCurrentPlayer()).toEqual(player1);
    })

    it('Changes player and returns current player correctly', () => {
        changePlayer();
        expect(getCurrentPlayer()).toEqual(player2);
        expect(getOpponent()).toEqual(player1);
        // changePlayer(); // reset state to player1
    })

    it('Returns the opponent correctly', () => {
        // changePlayer();
        expect(getOpponent()).toEqual(player1);
    })
})