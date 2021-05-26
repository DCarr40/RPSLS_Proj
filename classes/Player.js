"use strict"
const Human = require('./Human');
const Ai = require('./AI');

class Player {

    constructor(name, score) {
        this.name = name;
        this.score = score;
    }


    displayScore() {
        console.log(`${this.name}'s score is: ${this.score}`)
    }

    promptFor(question, valid) {
        do {
            var response = prompt(question).trim();
        } while (!response || !valid(response));
        return response;
    }

    chars(input) {
        return true; // default validation only
    }

    gestureComparison() {

        let compare = function (choice1, choice2) {
            if (choice1 === choice2) {
                alert("And... It's a tie!");
            }


            //If the user chose rock...
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {alert("Rock wins!");} 
                else if (choice2 === "paper") {alert("Paper wins!");}
                else if (choice2 === "lizard") {alert("Rock wins!");} 
                else {alert("Spock wins!");}
            }


            //If the user chose paper...
            else if (choice1 === "paper") {
                if (choice2 === "scissors") {alert("Scissors wins!");}
                else if (choice2 === "rock") {alert("Paper wins!");}
                else if (choice2 === "lizard") {alert("Lizard wins!");} 
                else {alert("Paper wins!");}
            }


            //If the user chose scissors...
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {alert("Scissors wins!");} 
                else if (choice2 === "rock") {alert("Rock wins!");}
                else if (choice2 === "lizard") {alert("Scissors wins!");} 
                else {alert("Spock wins!");}
            }


            //If the user chose lizard...
            else if (choice1 === "lizard") {
                if (choice2 === "scissors") {alert("Scissors wins!");} 
                else if (choice2 === "rock") {alert("Rock wins!");}
                else if (choice2 === "paper") {alert("Lizard wins!");} 
                else {alert("Lizard wins!");}
            }


            //If the user chose spock...
            else if (choice1 === "spock") {
                if (choice2 === "scissors") {alert("Spock wins!");} 
                else if (choice2 === "rock") {alert("Spock wins!");} 
                else if (choice2 === "lizard") {alert("Lizard wins!");}
                else {alert("Paper wins!");}
            }
        };
        compare(userChoice, computerChoice);
    }
}

module.exports = Player