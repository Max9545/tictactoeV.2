class Player {
    constructor(id, token, turn) {
        this.id = id;
        this.token = token;
        this.turn = turn;
        this.winCount = 0;
        this.wins = [];
    }
    saveWinsToStorage() {
        var stringedWinsCount = JSON.stringify(this.winCount);
        localStorage.setItem(`${this.id}`, stringedWinsCount);
    }
    retrieveWinsFromStorage() {
        var retrievedWinCount = localStorage.getItem(`${this.id}`);
        this.winCount = JSON.parse(retrievedWinCount);
        return this.winCount;
    }
}