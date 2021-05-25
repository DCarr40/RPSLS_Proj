"use strict"

class Player {

    constructor(name, score){
        this.name = name;
        this.score = score;
    }


    displayScore(){
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    promptFor(question, valid) {
        do {
            var response = prompt(question).trim();
        } while (!response || !valid(response));
        return response;
    }
  
    

}

module.exports = Player