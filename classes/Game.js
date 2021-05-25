"use strict"

class Game {

    constructor(game) {
        this.game = game
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


    }
}