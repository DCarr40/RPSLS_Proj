"use strict"

const prompt = require('prompt-sync')();
const { Human } = require('./Human');
const { Ai } = require('./Ai');

class Game {

    constructor() {
        this.player1;
        this.player2;
        this.roundArray = [1,2,3];  
    }

    player1Selection(){
        this.player1 = parseInt(prompt("Do you want player 1 to be Human or AI? Please type 1 for Human or 2 for AI"));
        switch(this.player1){
            case 1:
                this.player1 = new Human("Player 1");
                console.log("Welcome Human Player 1");
                break;
            case 2:
                this.player1 = new Ai("Player 1");
                console.log("Welcome AI Player 1");
                break;
        }
        return this.player1;
    }

    player2Selection(){
        this.player2 = parseInt(prompt("Do you want player 2 to be Human or AI? Please type 1 for Human or 2 for AI"));
        switch(this.player2){
            case 1:
                this.player2 = new Human("Player 2");
                console.log("Welcome Human Player 2");
                break;
            case 2:
                this.player1 = new Ai("Player 2");
                console.log("Welcome AI Player 2");
        }
        return this.player2;
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
        //this.displayGameWinner();
        this.player1Selection();
        this.player2Selection();
        

    }

/*     displayScore() {
        console.log(`${this.player1.g}'s score is: ${this.player1.score}`)
    } */

/*     gestureComparison() {

        
            if (this.player1.choice === this.player2.choice) {
                console.log("And... It's a tie!");
            }


            //If the user chose rock...
            else if (this.player1.choice === "rock") {
                switch(){

                }
                if (this.player2.choice === "scissors") { console.log("Rock wins!"); this.player1.score++; }
                else if (this.player2.choice === "paper") { console.log("Paper wins!"); this.player2.score++;}
                else if (this.player2.choice === "lizard") { console.log("Rock wins!"); this.player1.score++;}
                else { console.log("Spock wins!"); this.player2.score++;}
            }


            //If the user chose paper...
            else if (this.player1.choice === "paper") {
                if (this.player2.choice === "scissors") { console.log("Scissors wins!"); this.player2.score++; }
                else if (this.player2.choice === "rock") { console.log("Paper wins!"); this.player1.score++;}
                else if (this.player2.choice === "lizard") { console.log("Lizard wins!"); this.player2.score++;}
                else { console.log("Paper wins!"); this.player1.score++; }
            }


            //If the user chose scissors...
            else if (this.player1.choice === "scissors") {
                if (this.player2.choice === "paper") { console.log("Scissors wins!"); this.player1.score++; }
                else if (this.player2.choice === "rock") { console.log("Rock wins!"); this.player2.score++; }
                else if (this.player2.choice === "lizard") { console.log("Scissors wins!"); this.player1.score++; }
                else { console.log("Spock wins!"); this.player2.score++;}
            }


            //If the user chose lizard...
            else if (this.player1.choice === "lizard") {
                if (this.player2.choice === "scissors") { console.log("Scissors wins!"); }
                else if (this.player2.choice === "rock") { console.log("Rock wins!"); }
                else if (this.player2.choice === "paper") { console.log("Lizard wins!"); }
                else { console.log("Lizard wins!"); }
            }


            //If the user chose spock...
            else if (this.player1.choice === "spock") {
                if (this.player2.choice === "scissors") { console.log("Spock wins!"); }
                else if (this.player2.choice === "rock") { console.log("Spock wins!"); }
                else if (this.player2.choice === "lizard") { console.log("Lizard wins!"); }
                else { console.log("Paper wins!"); }
            }
        }
        compare(userChoice, computerChoice);
    }

    increaseScore(){
        while(this.player1.score < 3 && this.player2.score < 3) {
            let playerOneTotal = this.playerOne.rollAllDice(this.dice);
            let playerTwoTotal = this.playerTwo.rollAllDice(this.dice);
      
            if(playerOneTotal > playerTwoTotal) {
              console.log(this.playerOne.name + " wins this round!");
              this.playerOne.score++;
            }
            else if(playerTwoTotal > playerOneTotal) {
              console.log(this.playerTwo.name + " wins this round!");
              this.playerTwo.score++;
            }
            else {
              console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
            }
          }
    }

    playRound(roundArray) {

        let runningTotal = 0;
    
        for(let i = 0; i < roundArray.length; i++) {
          let result = this.rollDie(diceArray[i]);
          runningTotal += result;
        }
    
        return runningTotal;
    } */
}
module.exports.Game = Game;