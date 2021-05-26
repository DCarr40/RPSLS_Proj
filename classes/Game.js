"use strict"

const { Player } = require('./Player');

class Game {

    constructor() {
        this.player1 = new Player("Player 1");
        this.player2 = new Player("Player 2");
    }

    displayRules() {
        console.log("Welcome to Rock,Paper,Scissors,Lizard,Spock!");
        console.log("Two players will chose either rock, paper, scissors, lizard, or Spock.");
        console.log("A player will win a round depending on wheter the gesture they chose beats the other players gesture.");
        console.log("Scissors cuts Paper");
        console.log("Scissors decapitates Lizard");
        console.log("Rock crushes Lizard");
        console.log("Rock crushes Scissors");
        console.log("Paper covers Rock");
        console.log("Paper disproves Spock");
        console.log("Lizard poisons Spock");
        console.log("Lizard eats Paper");
        console.log("Spock vaporizes Rock");
        console.log("Spock smashes Scissors");
        console.log("The player that wins a round will have a point added to their score");
        console.log("The first player to score 2 points will win the game!");
    }

    displayGameWinner() {
        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} wins this game!`);
        }
        else {
            console.log(`${this.player2.name} wins this game!`);
        }
        console.log("test");
    }

    runGame() {
        this.displayRules();
        this.displayGameWinner();
        //console.log(Player.score);
    }

    displayScore() {
        console.log(`${this.player1}'s score is: ${this.player1.score}`)
    }

    gestureComparison() {

        let compare = function (choice1, choice2) {
            if (choice1 === choice2) {
                console.log("And... It's a tie!");
            }


            //If the user chose rock...
            else if (choice1 === "rock") {
                if (choice2 === "scissors") { console.log("Rock wins!"); }
                else if (choice2 === "paper") { console.log("Paper wins!"); }
                else if (choice2 === "lizard") { console.log("Rock wins!"); }
                else { console.log("Spock wins!"); }
            }


            //If the user chose paper...
            else if (choice1 === "paper") {
                if (choice2 === "scissors") { console.log("Scissors wins!"); }
                else if (choice2 === "rock") { console.log("Paper wins!"); }
                else if (choice2 === "lizard") { console.log("Lizard wins!"); }
                else { console.log("Paper wins!"); }
            }


            //If the user chose scissors...
            else if (choice1 === "scissors") {
                if (choice2 === "paper") { console.log("Scissors wins!"); }
                else if (choice2 === "rock") { console.log("Rock wins!"); }
                else if (choice2 === "lizard") { console.log("Scissors wins!"); }
                else { console.log("Spock wins!"); }
            }


            //If the user chose lizard...
            else if (choice1 === "lizard") {
                if (choice2 === "scissors") { console.log("Scissors wins!"); }
                else if (choice2 === "rock") { console.log("Rock wins!"); }
                else if (choice2 === "paper") { console.log("Lizard wins!"); }
                else { console.log("Lizard wins!"); }
            }


            //If the user chose spock...
            else if (choice1 === "spock") {
                if (choice2 === "scissors") { console.log("Spock wins!"); }
                else if (choice2 === "rock") { console.log("Spock wins!"); }
                else if (choice2 === "lizard") { console.log("Lizard wins!"); }
                else { console.log("Paper wins!"); }
            }
        };
        compare(userChoice, computerChoice);
    }
}
module.exports.Game = Game;