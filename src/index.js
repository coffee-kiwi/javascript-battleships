import './styles.css'
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import * as play from './playBattleships.js';
import * as listeners from './eventListeners.js';

    const newGameBtn = document.getElementById('new-game');
    const resetBtn = document.getElementById('reset');
    const toggleBtn = document.getElementById('toggleDir');
    const player1 = new Player("player1");
    const player2 = new Player("player2");
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

    function startNewGame() {
        playersBoard.textContent = '';
        playersMessage.textContent = '';
        oppBoard.textContent = '';
        oppMessage.textContent = '';
        player1.resetBoard();
        player2.resetBoard();

        play.newGame();
        addCellListeners();

        allShips.forEach(ship => {
            ship.setAttribute('draggable', 'true');
            ship.classList.remove('less-opacity');
        });
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
            playersMessage.textContent = '';

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
            console.log(currentPlayer.gameboard.board)
        });  
    })
    }
    

    allShips.forEach(ship => {
        ship.addEventListener('dragstart', (e) => {
            shipName = e.target.id;
        });
    })


  