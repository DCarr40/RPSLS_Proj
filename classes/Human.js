"use strict"

const prompt = require('prompt-sync')();
const { Player } = require("./Player");

class Human extends Player {

    constructor(name) {
        super(name);
    }


    chooseGesture() {

        let isValid = false;

        do {
            this.gesturePick = prompt("Please choose either rock, paper, scissors, lizard, or spock?").toLowerCase();
            for (let i of this.gestureArray){  
                if(this.gesturePick === i ){isValid = true; return this.gesturePick;}
                else { isValid = false;}
            } 
            console.log("That is an invalid input. Please Try again.");
        }

        while (
            !isValid
        )

    }
    

}

module.exports.Human = Human;