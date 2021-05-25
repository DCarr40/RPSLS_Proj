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
        playerChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
        return playerChoice;
    }
    

}