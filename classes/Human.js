"use strict"
const Player = require ('./Player');

class Human extends Player{

    constructor(name, score){
        super(name, score);
        this.playerChoice = "";
    }


    displayCurrentScore(){
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    chooseGesture(){
        playerChoice = this.promptFor("Do you choose rock, paper, scissors, lizard, or spock?", this.chars);
        console.log("The computer chose " + playerChoice);
        return this.playerChoice = playerChoice;
    }
    

}