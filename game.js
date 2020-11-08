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
        if (this.checkRows() || this.checkColumns()) {
            console.log(this.gameBoard[0], this.gameBoard[1], this.gameBoard[2]);
            player.winCount++;
        }
    }
    checkRows() {
        if ((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2] && this.gameBoard[2] !== '') || (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5] && this.gameBoard[5] !== '') || (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8] && this.gameBoard[8] !== '')) {
            return true;

        } else {
            return false;
        };
    }
    checkColumns() {
        if ((this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[0] === this.gameBoard[6] && this.gameBoard[6] !== '') || (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[1] === this.gameBoard[7] && this.gameBoard[7] !== '') || (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8] && this.gameBoard[8] !== '')) {
            return true;

        } else {
            return false;
        };
    }
}