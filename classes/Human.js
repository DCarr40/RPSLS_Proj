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
            case "lizard":
                this.gesturePick = 3;
                break;
            case "spock":
                this.gesturePick = 3;
                break;
        }

        this.gesturePick = this.gestureArray[this.gesturePick];

        console.log(`The player chose: ${this.gesturePick}`);

        return this.gesturePick;
    }
    

}

module.exports.Human = Human;