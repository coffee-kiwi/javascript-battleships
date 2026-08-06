import './styles.css'
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import * as play from './playBattleships.js';
import * as listeners from './eventListeners.js';

    const newGameBtn = document.getElementById('new-game');
    const resetBtn = document.getElementById('reset');
    const nxtPlayerSetupBtn = document.getElementById('nextPlayerSetup');
    const startGameBtn = document.getElementById('startGame');
    const nxtPlayerGameBtn = document.getElementById('nextPLayerGame');
    const toggleBtn = document.getElementById('toggleDir');
    const player1 = new Player("Player1");
    const player2 = new Player("Player2");
    const playersBoard = document.querySelector('.players-board');
    const playersMessage = document.getElementById('players-message');
    const oppBoard = document.querySelector('.opp-board');
    const oppMessage = document.getElementById('opps-message');
    const allShips = document.querySelectorAll('[draggable="true"]');

    let playercells;
    let currentPlayer = player1;
    let shipName;
    let previewCells = [];


    startNewGame();
    // After each drop, check if player finished setup. 
    // If finished, show next player button.
    
    // After it's clicked, player changes
    //














    

    function startNewGame() {
        currentPlayer = player1;
        playersBoard.textContent = '';
        playersMessage.textContent = `${currentPlayer.name} please place your ships`;
        oppBoard.textContent = '';
        oppMessage.textContent = '';
        player1.resetBoard();
        player2.resetBoard();

        play.newGame();
        addCellListeners();
        play.resetDraggableShips(allShips);

        let nextBtns = document.querySelectorAll('.betweenBtn');
        nextBtns.forEach(btn => btn.classList.add('invisible'));
    }



    function changePlayer() {
       currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
    }

    newGameBtn.addEventListener('click', startNewGame);

    resetBtn.addEventListener('click', (e) => {
        currentPlayer.resetBoard();
        startNewGame();
    });

    toggleBtn.addEventListener('click', (e) => {
        currentPlayer.gameboard.switchDirection();
        if (currentPlayer.gameboard.horizontalPlacement == false) {
            toggleBtn.textContent = "Vertical Placement";
        } else {
            toggleBtn.textContent = "Horizontal Placement";
        }
    })

    



    function addCellListeners() {
        playercells = document.querySelectorAll(".grid-cell");

        playercells.forEach(cell => {
        cell.addEventListener("dragover", listeners.draggingOver);
        cell.addEventListener("dragenter", (e) => {
            if (!shipName) return;
            const myShip = currentPlayer.gameboard[shipName];
            listeners.previewShipPlacement(e, myShip, currentPlayer.gameboard.horizontalPlacement, previewCells);
        });

        cell.addEventListener("dragleave", listeners.removePreview);


        cell.addEventListener("drop", (e) => {
            listeners.removePreview(e);
            listeners.clearPreviewCells(previewCells);
            let cellRow = e.target.dataset.row;
            let cellCol = e.target.dataset.col;
            let myShip = currentPlayer.gameboard[shipName];

            try {
                currentPlayer.gameboard.placeShip(myShip, [cellRow, cellCol]);    
            } catch (error) {
                playersMessage.textContent = error.message;
                return;
            }
            playersMessage.textContent = `${currentPlayer.name} please place your ships`;

            const item = document.getElementById(myShip.name);
            item.removeAttribute('draggable');
            item.classList.add('less-opacity');
            
            if (currentPlayer.gameboard.horizontalPlacement == true) {
                for (let i = 0; i < myShip.length; i++ ) {
                    const thisCell = document.querySelector(`[data-row='${cellRow}'][data-col='${cellCol}']`);
                    thisCell.classList.add("highlight");
                    cellCol++;
                }
            } else {
                for (let i = 0; i < myShip.length; i++ ) {
                    const thisCell = document.querySelector(`[data-row='${cellRow}'][data-col='${cellCol}']`);
                    thisCell.classList.add("highlight");
                    cellRow++;
                }
            }
            currentPlayer.setupShips++;
            // Run check to see if setup finished
            if ((player1.setupShips == true) && (player2.setupShips == 5)) {
                // nxtPlayerBtn.classList.add('invisible');
                startGameBtn.classList.remove('invisible');
                player1.setupShips = true;
            } else if (player1.setupShips == 5) {
                // Make screen blank or with message
                playersBoard.textContent = '';
                playersMessage.textContent = 'Pass to the next player and let them click the button below' 
                nxtPlayerSetupBtn.classList.remove('invisible');
                player1.setupShips = true;
            }
        });  
    })
    }
    // Need to set all the drag elements again on draggable ships
    nxtPlayerSetupBtn.addEventListener('click', (e) => {
        changePlayer();
        nxtPlayerSetupBtn.classList.add('invisible');
        playersMessage.textContent = `${currentPlayer.name} please place your ships`;
        play.updatePlayersGrid(currentPlayer.gameboard);
        play.resetDraggableShips(allShips);
        addCellListeners();
    });

    allShips.forEach(ship => {
        ship.addEventListener('dragstart', (e) => {
            shipName = e.target.id;
        });
    })


  