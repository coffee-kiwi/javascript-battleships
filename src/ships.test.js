
import { Ship } from './ships.js'

describe ('Ships creation', () => {

    it('Can create a ship of length 5', () => {
        const carrier = new Ship('Carrier', 5);
        expect(carrier.length).toBe(5); 
    })

    it('Can create a ship with a name of Patrol', () => {
        const patrol = new Ship('Patrol', 2);
        expect(patrol.name).toBe('Patrol');
    })
})

describe ('Ship functions', () => {

    describe ('Hit function', () => {
        it('Running hit function will increase the number of hits by 1 for that ship', () => {
            const destroyer = new Ship('Destroyer', 3);
            destroyer.hit();
            expect(destroyer.numOfHits).toBe(1);
        })
        
        it('Will not be hit more than the length of the ship', () => {
            const destroyer = new Ship('Destroyer', 3);
            destroyer.hit();
            destroyer.hit();
            destroyer.hit();
            destroyer.hit();
            expect(destroyer.numOfHits).toBe(3);
        })
    })

    describe('Sink function', () => {
        it('Ship will sink once the number of hits equals its length', () => {
            const carrier = new Ship('Carrier', 5);
            carrier.hit();
            carrier.hit();
            carrier.hit();
            carrier.hit();
            carrier.hit();
            carrier.isSunk();
            expect(carrier.sunk).toBe(true);
        })

        it('Ship will not sink early', () => {
            const battleship = new Ship('Battleship', 4);
            battleship.hit();
            battleship.hit();
            battleship.hit();
            battleship.isSunk();
            expect(battleship.sunk).toBe(false);
        })
    })
})
