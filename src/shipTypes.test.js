// import * as shipType from './shipTypes.js';
import { Ship } from './ships.js'

describe ('Ships creation', () => {

    it('Can create a ship of length 5 with name Carrier', () => {
        const carrier = new Ship('Carrier', 5);
        expect(carrier.length).toBe(5) 
    })
})

// describe('Ships module', () => {

//     describe('Ship Types module', () => {

//         describe('When creating ships', () => {

//             it('Can create Carrier ship objects', () => {
//                 const carrier = new shipType.Carrier()
//                 expect(carrier).toBeInstanceOf(shipType.Carrier)
//             })

//             it('Can create Battleship objects', () => {
//                 const battleship = new shipType.Battleship()
//                 expect(battleship).toBeInstanceOf(shipType.Battleship)
//             })

//             it('Can create Cruiser ship objects', () => {
//                 const cruiser = new shipType.Cruiser()
//                 expect(cruiser).toBeInstanceOf(shipType.Cruiser)
//             })

//             it('Can create Destroyer ship objects', () => {
//                 const destroyer = new shipType.Destroyer()
//                 expect(destroyer).toBeInstanceOf(shipType.Destroyer)
//             })

//             it('Can create Patrol ship objects', () => {
//                 const patrol = new shipType.Patrol()
//                 expect(patrol).toBeInstanceOf(shipType.Patrol)
//             })

//             it('Extends Ships', () => {
//                 const extension = ships.Ship.isPrototypeOf(shipType.Patrol);
//                 expect(extension).toBe(true)
//             })
//         })


//     })


// })