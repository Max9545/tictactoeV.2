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

window.addEventListener('load', displayWinsCounts())

function takeTurnForPlayer(event) {
    var returnToken = newGame.playTurn(event.target.id);
    if (returnToken === 'X') {
        event.target.innerHTML = '<img src="./assets/ximage.png" alt="green drippy image of the letter X">';

    } else if (returnToken === 'O') {
        event.target.innerHTML = '<img src="./assets/oimage.png" alt="green drippy image of the letter O">';

    }
    displayWinsCounts();
    upDateTurnStatus(returnToken);
};

function displayWinsCounts() {
    var oneWinCount = newGame.playerOne.retrieveWinsFromStorage();
    var twoWinCount = newGame.playerTwo.retrieveWinsFromStorage();
    playerOneWins.innerText = oneWinCount === null ? '0 Wins' : `${oneWinCount} Wins`;
    playerTwoWins.innerText = twoWinCount === null ? '0 Wins' : `${twoWinCount} Wins`;
};

function upDateTurnStatus(symbol) {
    if (symbol === 'X') {
        turnDisplay.innerText = 'Time for O to go!'
    } else {
        turnDisplay.innerText = 'Time for X to go!'
    }
}