class Game {
    constructor() {
        this.playerOne = new Player('Player One', 'X', true);
        this.playerTwo = new Player('Player Two', 'O', false);
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    }
    playTurn(player, tilePlayed) {
        if (player.turn === true && tilePlayed < 9 && this.gameBoard[tilePlayed] === '') {
            this.gameBoard.splice(tilePlayed, 1, player.token);
            this.switchTurns();
            this.checkFoWin(player);
        }
    }
    switchTurns() {
        this.playerOne.turn = !this.playerOne.turn;
        this.playerTwo.turn = !this.playerTwo.turn;
    }
    checkFoWin(player) {
        if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2] && this.gameBoard[1] === player.token) {
            console.log(this.gameBoard[0], this.gameBoard[1], this.gameBoard[2]);
            player.winCount++;
        }
    }
}