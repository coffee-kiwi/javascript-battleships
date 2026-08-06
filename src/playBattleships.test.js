import { Player } from './player.js'
import { checkSetupFinished } from './playBattleships.js';

// Remove below test as the function is no longer used. 
// describe('Checks whether the setup of ships for player is complete', () => {
//     let player1;
//     beforeEach(() => {
//         player1 = new Player("player1");
//     })

//     it('Returns true when complete', () => {
//         player1.setupShips += 5;
//         expect(checkSetupFinished(player1)).toBe(true);
//     })

//         it('Returns false if not finished', () => {
//         player1.setupShips += 4;
//         expect(checkSetupFinished(player1)).toBe(false);
//     })
// })
