"use strict"

class Player {

    constructor(name) {
        this.score = 0;
        this.gestureArray = ["rock","paper","scissors","lizard", "spock"];
        this.gesturePick;
        //this.choice = gesturePick;
    }

}

module.exports.Player = Player;