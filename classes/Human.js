"use strict"

const prompt = require('prompt-sync')();
const { Player } = require("./Player");

class Human extends Player{

    constructor(name){
        super(name);
    }


    displayCurrentScore(){
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    chooseGesture(){
        this.gesturePick = prompt("Please choose either rock, paper, scissors, lizard, or spock?");
        console.log(`The player chose: ${this.gesturePick}`);
        return this.gesturePick;
    }
    

}

module.exports.Human = Human;