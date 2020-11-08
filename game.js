class Game {
    constructor() {
        this.playerOne = new Player('Player One', 'X', true);
        this.playerTwo = new Player('Player Two', 'O', false);
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    }
    playTurn(player, tilePlayed) {
        if (player.turn === true) {
            this.gameBoard.splice(tilePlayed, 1, player.token);
            this.switchTurns();
        }
    }
    switchTurns() {
        this.playerOne.turn = !this.playerOne.turn;
        this.playerTwo.turn = !this.playerTwo.turn;
    }
}