

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

    })
})