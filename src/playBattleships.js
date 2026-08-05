
export function newGame() {
        createPlayersGrid();
        createOppGrid();
}

// export function changePlayer(player1, player2) {
//     currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
// }

export function createPlayersGrid() {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {

        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.dataset.row = r;
            cell.dataset.col = c;

            // cell.addEventListener('click', cellClickHandler);
            playersBoard.appendChild(cell);
        }
    }

    // function cellClickHandler(event) {
    //     let clickedRow = parseInt(event.target.dataset.row, 10);
    //     let clickedCol = parseInt(event.target.dataset.col, 10);
    //     console.log(`Button at [${clickedRow}, ${clickedCol}] was clicked!`)
    // }
}




export function createOppGrid() {
    const oppBoard = document.querySelector('.opp-board');

    for (let r = 0; r < 10; r++) {

        for (let c = 0; c < 10; c++) {
            const button = document.createElement('button');
            button.classList.add("grid-button");
            button.dataset.row = r;
            button.dataset.col = c;

            button.addEventListener('click', cellClickHandler);
            oppBoard.appendChild(button);
        }
    }

    function cellClickHandler(event) {
        let clickedRow = parseInt(event.target.dataset.row, 10);
        let clickedCol = parseInt(event.target.dataset.col, 10);
        console.log(`Button at [${clickedRow}, ${clickedCol}] was clicked!`)
    }
}

export function checkSetupFinished(player) {
    return player.setupShips == 5;
}

