var turnDisplay = document.querySelector('.turn-display');

var newGame = new Game();

document.querySelector('.pound-sign').addEventListener('click', takeTurnForPlayer);

window.addEventListener('load', displayWinsCounts());

function takeTurnForPlayer(event) {
    if (newGame.isItOver) {
        return;
    }
    newGame.playTurn(event.target.id);
    displayWinsCounts();
    upDateTurnStatusDisplay();
    resetOrUpdateGameBoard()
};

function displayWinsCounts() {
    var oneWinCount = newGame.playerOne.retrieveWinsFromStorage();
    var twoWinCount = newGame.playerTwo.retrieveWinsFromStorage();
    document.querySelector('.x-wins').innerText = oneWinCount === null ? '0 Wins' : `${oneWinCount} Wins`;
    document.querySelector('.o-wins').innerText = twoWinCount === null ? '0 Wins' : `${twoWinCount} Wins`;
};

function upDateTurnStatusDisplay() {
    if (newGame.playerOne.turn && newGame.isItOver === false) {
        turnDisplay.innerText = 'Time for X to go!';
    } else if (newGame.playerTwo.turn && newGame.isItOver === false) {
        turnDisplay.innerText = 'Time for O to go!';
    }
}

function upDateOctoThorpe() {
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