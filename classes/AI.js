"use strict"

const { Player } = require("./Player");


class Ai extends Player {

    constructor(name, score) {
        super(name, score);
    }


    chooseGesture() {
        let random = Math.floor(Math.random() * 5);

        this.gesturePick = this.gestureArray[random];

        console.log(`The computer chose: ${this.gesturePick}`);
        return this.gesturePick;
    }


}

module.exports.Ai = Ai;