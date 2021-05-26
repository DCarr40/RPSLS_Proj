"use strict"

class Player {

    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gestureArray = ["rock","paper","scissors","lizard", "spock"];
        this.gesturePick;
    }

}

module.exports.Player = Player;