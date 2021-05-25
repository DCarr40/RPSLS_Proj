"use strict"

const Player = require('./Player');

class AI extends Player {

    constructor(name, score){
        super(name, score);
        this.AiChoice = aiChoice;
    }



    chooseGesture() {
        let aiChoice = Math.random();

        if (aiChoice < 0.2) { aiChoice = "rock"; }
        else if (aiChoice <= 0.4) { aiChoice = "paper"; }
        else if (aiChoice <= 0.6) { aiChoice = "scissors"; }
        else if (aiChoice <= 0.8) { aiChoice = "lizard"; }
        else { aiChoice = "spock"; }

        console.log("The computer chose " + aiChoice);
        return this.AiChoice = aiChoice;
    }

    
}