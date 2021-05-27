"use strict"
const {Math} = require("Math")();
const { Player } = require("./Player");


class Ai extends Player {

    constructor(name ) {
        super(name);
    }


    chooseGesture() {
        let random = Math.floor(Math.random() * 5);

        this.gesturePick = this.gestureArray[random];

        console.log(`The computer chose: ${this.gesturePick}`);
        return this.gesturePick;
    }


}

module.exports.Ai = Ai;