import * as shipType from './shipTypes.js';

describe('Ships module', () => {

    describe('Ship Types module', () => {

        describe('When creating ships', () => {

            it('Can create Carrier ship objects', () => {
                const carrier = new Carrier()
                expect(carrier).toBeInstanceOf(Carrier)
            })

        })


    })


})