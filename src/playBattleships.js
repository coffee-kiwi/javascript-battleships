
export function newGame() {
        createPlayersGrid();
}

export function resetDraggableShips(allShips) {
            allShips.forEach(ship => {
                ship.setAttribute('draggable', 'true');
                ship.classList.remove('less-opacity');
        });
    }


export function createPlayersGrid() {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {

        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.dataset.row = r;
            cell.dataset.col = c;
            playersBoard.appendChild(cell);
        }
    }
}

export function updatePlayersGrid(gameboard) {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            if (gameboard.board[r][c] != null) {
                cell.classList.add('highlight');
            }
            playersBoard.appendChild(cell);
        }
    }
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