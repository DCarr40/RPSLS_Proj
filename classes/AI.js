"use strict"

const Player = require ('./Player');

class AI extends Player {



    chooseGesture() {
        let aiChoice = Math.random();

        if (aiChoice < 0.2) {
            aiChoice = "rock";
        } else if (aiChoice <= 0.4) {
            aiChoice = "paper";
        } else if (aiChoice <= 0.6) {
            aiChoice = "scissors";
        } else if (aiChoice <= 0.8) {
            aiChoice = "lizard";
        } else {
            aiChoice = "spock";
        }
        alert("The computer chose " + aiChoice);
        var compare = function (choice1, choice2) {
            if (choice1 === choice2) {
                alert("And... It's a tie!");
            }
            //If the user chose rock...
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    alert("Rock wins!");
                } else if (choice2 === "paper") {
                    alert("Paper wins!");
                } else if (choice2 === "lizard") {
                    alert("Rock wins!");
                } else {
                    alert("Spock wins!");
                }
            }
            //If the user chose paper...
            else if (choice1 === "paper") {
                if (choice2 === "scissors") {
                    alert("Scissors wins!");
                } else if (choice2 === "rock") {
                    alert("Paper wins!");
                } else if (choice2 === "lizard") {
                    alert("Lizard wins!");
                } else {
                    alert("Paper wins!");
                }
            }
            //If the user chose scissors...
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {
                    alert("Scissors wins!");
                } else if (choice2 === "rock") {
                    alert("Rock wins!");
                } else if (choice2 === "lizard") {
                    alert("Scissors wins!");
                } else {
                    alert("Spock wins!");
                }
            }
            //If the user chose lizard...
            else if (choice1 === "lizard") {
                if (choice2 === "scissors") {
                    alert("Scissors wins!");
                } else if (choice2 === "rock") {
                    alert("Rock wins!");
                } else if (choice2 === "paper") {
                    alert("Lizard wins!");
                } else {
                    alert("Lizard wins!");
                }
            }
            //If the user chose spock...
            else if (choice1 === "spock") {
                if (choice2 === "scissors") {
                    alert("Spock wins!");
                } else if (choice2 === "rock") {
                    alert("Spock wins!");
                } else if (choice2 === "lizard") {
                    alert("Lizard wins!");
                } else {
                    alert("Paper wins!");
                }
            }
        };
        compare(userChoice, aiChoice);
        Collapse










        return aiChoice;
    }
}