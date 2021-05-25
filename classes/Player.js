"use strict"

class Player {

    constructor(name, score){
        this.name = name;
        this.score = score;
    }


    displayScore(){
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    chooseGesture(){
        let userChoice = prompt(`Do you choose rock, paper, scissors, lizard, or spock?`);
        return userChoice;
    }



}