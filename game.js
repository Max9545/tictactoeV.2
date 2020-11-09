class Game {
    constructor() {
        this.playerOne = new Player('Player One', 'X', true);
        this.playerTwo = new Player('Player Two', 'O', false);
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    }
    playTurn(tilePlayed) {
        if (this.playerOne.turn === true && this.gameBoard[tilePlayed] === '') {
            this.gameBoard.splice(tilePlayed, 1, this.playerOne.token);
            this.switchTurns();
            var isItOver = this.checkFoWin(this.playerOne);
            return [this.playerOne.token, isItOver];
        }
        if (this.playerTwo.turn === true && this.gameBoard[tilePlayed] === '') {
            this.gameBoard.splice(tilePlayed, 1, this.playerTwo.token);
            this.switchTurns();
            var isItOver = this.checkFoWin(this.playerTwo);
            return [this.playerTwo.token, isItOver];
        }
    }
    switchTurns() {
        this.playerOne.turn = !this.playerOne.turn;
        this.playerTwo.turn = !this.playerTwo.turn;
    }
    checkFoWin(player) {
        if (this.checkRows() || this.checkColumns() || this.checkDiagonals()) {
            console.log(this.gameBoard[0], this.gameBoard[1], this.gameBoard[2]);
            player.winCount++;
            this.resetGame();

        }
    }
    checkRows() {
        if (this.checkRowOne() || this.checkRowTwo() || this.checkRowThree()) {
            return true;

        } else {
            return false;
        };
    }
    checkRowOne() {
        if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2] && this.gameBoard[2] !== '') {
            return true
        } else {
            return false
        }

    }
    checkRowTwo() {
        if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5] && this.gameBoard[5] !== '') {
            return true;
        } else {
            return false;
        }
    }
    checkRowThree() {
        if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8] && this.gameBoard[8] !== '') {
            return true;
        } else {
            return false;
        }

    }
    checkColumns() {
        if (this.checkColumnOne() || this.checkColumnTwo() || this.checkColumnThree()) {
            return true;

        } else {
            return false;
        };
    }
    checkColumnOne() {
        if (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[0] === this.gameBoard[6] && this.gameBoard[6] !== '') {
            return true;
        } else {
            return false;
        }

    }
    checkColumnTwo() {
        if (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[1] === this.gameBoard[7] && this.gameBoard[7] !== '') {
            return true;
        } else {
            return false;
        }

    }
    checkColumnThree() {
        if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8] && this.gameBoard[8] !== '') {
            return true;
        } else {
            return false;
        }

    }
    checkDiagonals() {
        if (this.checkTopLeftDiagonal() || this.checkTopRightDiagonal()) {
            return true;

        } else {
            return false;
        };
    }
    checkTopLeftDiagonal() {
        if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8] && this.gameBoard[8] !== '') {
            return true;
        } else {
            return false;
        }
    }
    checkTopRightDiagonal() {
        if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6] && this.gameBoard[6] !== '') {
            return true;
        } else {
            return false;
        }
    }
    resetGame() {
        this.playerOne.turn = true;
        this.playerTwo.turn = false;
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
        for (var i = 0; i < allSquares.length; i++) {
            allSquares[i].innerHTML = '';
        }
    }
}