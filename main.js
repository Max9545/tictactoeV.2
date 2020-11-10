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
var squaresForJava = document.get

var newGame = new Game();

poundSign.addEventListener('click', takeTurnForPlayer);
// window.setTimeout(resetGameBoard, 3000);
window.addEventListener('load', displayWinsCounts())

function takeTurnForPlayer(event) {
    var returnToken = newGame.playTurn(event.target.id);
    displayWinsCounts();
    upDateTurnStatusDisplay(returnToken);
    upDateOctoThorpe();
};

function displayWinsCounts() {
    var oneWinCount = newGame.playerOne.retrieveWinsFromStorage();
    var twoWinCount = newGame.playerTwo.retrieveWinsFromStorage();
    playerOneWins.innerText = oneWinCount === null ? '0 Wins' : `${oneWinCount} Wins`;
    playerTwoWins.innerText = twoWinCount === null ? '0 Wins' : `${twoWinCount} Wins`;
};

function upDateTurnStatusDisplay(symbol) {
    if (symbol === 'X') {
        turnDisplay.innerText = 'Time for O to go!'
    } else {
        turnDisplay.innerText = 'Time for X to go!'
    }
}

function upDateOctoThorpe() {
    console.log(newGame.gameBoard);
    for (var i = 0; i < newGame.gameBoard.length; i++) {
        if (newGame.gameBoard[i] !== '') {
            document.getElementById(`${i}`).innerHTML = `<img src="./assets/${newGame.gameBoard[i]}image.png" id="X" alt="green drippy image of the letter ${newGame.gameBoard[i]}">`;
        }

    }
}


function resetGameBoard() {
    newGame.resetGame();
    upDateOctoThorpe();
}