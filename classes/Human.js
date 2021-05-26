"use strict"

class Human extends Player{

    constructor(name, score){
        super(name, score);
        this.playerChoice = "";
    }


    displayCurrentScore(){
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    chooseGesture(){
        playerChoice = this.promptFor("Please choose either rock, paper, scissors, lizard, or spock?", this.chars);
        console.log(`The player chose: ${playerChoice}`);
        return this.playerChoice = playerChoice;
    }
    

}

module.exports.Human = Human;;