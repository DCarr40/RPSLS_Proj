"use strict"

const prompt = require('prompt-sync')();
const { Player } = require("./Player");

class Human extends Player {

    constructor(name) {
        super(name);
    }


    displayCurrentScore() {
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    chooseGesture() {
        this.gesturePick = prompt("Please choose either rock, paper, scissors, lizard, or spock?");
        console.log(`The player chose: ${this.gesturePick}`);
        switch (this.gesturePick) { 
            case "rock":
                this.gesturePick = 0;
                break;
            case "paper":
                this.gesturePick = 1;
                break;
            case "scissors":
                this.gesturePick = 2;
                break;
            case "rock":
                this.gesturePick = 3;
                break;
            case "rock":
                this.gesturePick = 3;
                break;
        }
        return this.gesturePick;
    }
    

}

module.exports.Human = Human;