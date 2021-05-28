"use strict"

class Player {

    constructor() {
        this.score = 0;
        this.gestureArray = ["rock","paper","scissors","lizard", "spock"];
        this.gesturePick;
    }

}

module.exports.Player = Player;