var topLeft = document.querySelector('#top-left');
var middleLeft = document.querySelector('#middle-left');
var bottomLeft = document.querySelector('#bottom-left');
var topRight = document.querySelector('#top-right');
var middleRight = document.querySelector('#middle-right');
var bottomRight = document.querySelector('#bottom-right');
var topMiddle = document.querySelector('#top-middle');
var middleMiddle = document.querySelector('#middle-middle');
var bottomMiddle = document.querySelector('#bottom-middle');
var playerOneWins = document.querySelector('.x-wins')
var playerTwoWins = document.querySelector('.o-wins')
var turnDisplay = document.querySelector('.turn-display');
var poundSign = document.querySelector('.pound-sign');
var allSquares = document.getElementsByClassName('play-square');


var newGame = new Game();

poundSign.addEventListener('click', takeTurnForPlayer);
// window.setTimeout(resetGameBoard, 3000);
window.addEventListener('load', displayWinsCounts())

function takeTurnForPlayer(event) {
    if (newGame.isItOver) {
        return;
    }
    newGame.playTurn(event.target.id);
    // event.target.disabled = true;
    displayWinsCounts();
    upDateTurnStatusDisplay();
    resetOrUpdateGameBoard()
};

function displayWinsCounts() {
    var oneWinCount = newGame.playerOne.retrieveWinsFromStorage();
    var twoWinCount = newGame.playerTwo.retrieveWinsFromStorage();
    playerOneWins.innerText = oneWinCount === null ? '0 Wins' : `${oneWinCount} Wins`;
    playerTwoWins.innerText = twoWinCount === null ? '0 Wins' : `${twoWinCount} Wins`;
};

function upDateTurnStatusDisplay() {
    if (newGame.playerOne.turn && newGame.isItOver === false) {
        turnDisplay.innerText = 'Time for X to go!';
    } else if (newGame.playerTwo.turn && newGame.isItOver === false) {
        turnDisplay.innerText = 'Time for O to go!';
    }
}

function upDateOctoThorpe() {
    console.log(newGame.gameBoard);
    for (var i = 0; i < newGame.gameBoard.length; i++) {
        if (newGame.gameBoard[i] !== '') {
            document.getElementById(`${i}`).innerHTML = `<img src="./assets/${newGame.gameBoard[i]}image.png" alt="green drippy image of the letter ${newGame.gameBoard[i]}">`;
        } else {
            document.getElementById(`${i}`).innerHTML = '';
        }

    }
}


function resetOrUpdateGameBoard() {
    if (newGame.isItOver === true && newGame.winner === 'no one') {
        turnDisplay.innerText = 'Big Ole Tie';

        window.setTimeout(startOver, 2000);
    } else if (newGame.isItOver === true) {
        turnDisplay.innerText = `${newGame.winner.token} Wins!!`;
        window.setTimeout(startOver, 2000);

    }
    upDateOctoThorpe();
}

function startOver() {
    newGame.resetGame();
    turnDisplay.innerText = "It's X's Turn First";
    upDateOctoThorpe();
}