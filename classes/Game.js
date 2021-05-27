"use strict"

const prompt = require('prompt-sync')();
const { Human } = require('./Human');
const { Ai } = require('./Ai');

class Game {

    constructor() {
        this.player1;
        this.player2;
        this.roundWinner = "";
        this.player1Choice;
        this.player2Choice;
        //this.roundArray = [1,2,3];  
    }

    runGame() {
        this.displayRules();
        this.player1Selection();
        this.player2Selection();
        this.player1.chooseGesture();
        this.player2.chooseGesture();
        this.roundGestureComparison();
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
                this.player2 = new Ai("Player 2");
                console.log("Welcome AI Player 2");
        }
        return this.player2;
    }

    roundGestureComparison() {

    
       if(this.player1.gesturePick === this.player2.gesturePick){
            while(this.player1.gesturePick === this.player2.gesturePick){
                console.log("And... It's a tie!");
                this.player1.chooseGesture();
                this.player2.chooseGesture();
            }
        }
        

        switch(this.player1.gesturePick){
            case "rock":
                if(this.player2.gesturePick === "scissors" || this.player2.gesturePick === "lizard"){this.roundWinner = "player 1 wins this round"}
                else{roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "paper":
                if(this.player2.gesturePick === "rock" || this.player2.gesturePick === "spock"){this.roundWinner = "player 1 wins this round"}
                else{roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "scissors":
                if(this.player2.gesturePick === "paper" || this.player2.gesturePick === "lizard"){ this.roundWinner = "player 1 wins this round"}
                else{roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "lizard":
                if(this.player2.gesturePick === "paper" || this.player2.gesturePick === "spock"){this.roundWinner = "player 1 wins this round"}
                else{roundWinner = "player 2 wins this round"; }
                return this.roundWinner;
            case "spock":
                if(this.player2.gesturePick === "rock" || this.player2.gesturePick === "scissors"){this.roundWinner = "player 1 wins this round"}
                else{roundWinner = "player 2 wins this round"}
                return this.roundWinner;       
        }

        if(this.roundWinner === "player 1 wins this round"){this.player1.score++; console.log(this.player1.score);}
        else{this.player2.score++;console.log(this.player2.score);}

        console.log(this.roundWinner);

    }
 
}

module.exports.Game = Game;


/*     displayGameWinner() {
        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} wins this game!`);
        }
        else {
            console.log(`${this.player2.name} wins this game!`);
        }
        console.log("test");
    } */



/*     displayScore() {
        console.log(`${this.player1.g}'s score is: ${this.player1.score}`)
    } */

   
    
    /*

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

    /*     bothPlayerGestureSelection(){
        this.player1.chooseGesture();
        this.player2.chooseGesture();
    }

   bothPlayerHumanAiSelection(){
        this.player1Selection();
        this.player2Selection();
    } */

