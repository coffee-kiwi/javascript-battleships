

export function createPlayersGrid() {
    const playersBoard = document.querySelector('.players-board');

    for (let r = 0; r < 10; r++) {

        for (let c = 0; c < 10; c++) {
            const button = document.createElement('button');
            button.classList.add("grid-button");
            button.dataset.row = r;
            button.dataset.col = c;

            button.addEventListener('click', cellClickHandler);
            playersBoard.appendChild(button);
        }
    }

    function cellClickHandler(event) {
        let clickedRow = parseInt(event.target.dataset.row, 10);
        let clickedCol = parseInt(event.target.dataset.col, 10);
        console.log(`Button at [${clickedRow}, ${clickedCol}] was clicked!`)
    }
}

