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
        let playerChoice = prompt(`Do you choose rock, paper, scissors, lizard, or spock?`);
        return playerChoice;
    }
  
    

}

module.exports = Player