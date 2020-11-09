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
        localStorage.setItem(`${this.name}`, stringedWinsCount);
    }
    retrieveWinsFromStorage() {
        var retrievedWinCount = localStorage.getItem(`${this.name}`);
        this.winCount = JSON.parse(retrievedWinCount);
        return this.winCount;
    }
}