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
        this.roundArray = [1,2,3];  
    }


    /* 
     Validation Input for numbers when choosing players: Complete
     Validation for choosing human gesture. Right now both values can be undefined or null and return And...It's a tie!
     Validate if the user would like to play again after the game runs
     */

    runGame() {

        this.displayRules();
        this.player1Selection();
        this.player2Selection();

        for(let i = 0; i < this.roundArray.length; i++){
            this.player1.chooseGesture();
            this.player2.chooseGesture();
            this.roundGestureComparison();
            this.scoreDisplay();
            this.scoreDisplay;
        }

        this.displayWinner();

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
        let isValid = false;
        do {
            this.player1 = (parseInt(prompt("Do you want player 1 to be Human or AI? Please type '1' for Human or '2' for AI")));
            if (!isNaN(this.player1)) {
                if (this.player1 === 1 || this.player1 === 2) {
                    isValid = true
                    
                }
                else {
                    console.log("That is an invalid input. Please Try again.");
                }
            }
        }
        while (
            !isValid
        )
        

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

        let isValid = false;

        do{
            this.player2 = parseInt(prompt("Do you want player 2 to be Human or AI? Please type 1 for Human or 2 for AI"));
            if (!isNaN(this.player2)) {
                if (this.player2 === 1 || this.player2 === 2) {
                    isValid = true
                
                }
                else {
                console.log("That is an invalid input. Please Try again.");
            }
        }
        while (
            !isValid
        )

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
                else{this.roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "paper":
                if(this.player2.gesturePick === "rock" || this.player2.gesturePick === "spock"){this.roundWinner = "player 1 wins this round"}
                else{this.roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "scissors":
                if(this.player2.gesturePick === "paper" || this.player2.gesturePick === "lizard"){ this.roundWinner = "player 1 wins this round"}
                else{this.roundWinner = "player 2 wins this round"; this.player2.score++;}
                return this.roundWinner;
            case "lizard":
                if(this.player2.gesturePick === "paper" || this.player2.gesturePick === "spock"){this.roundWinner = "player 1 wins this round"}
                else{this.roundWinner = "player 2 wins this round"; }
                return this.roundWinner;
            case "spock":
                if(this.player2.gesturePick === "rock" || this.player2.gesturePick === "scissors"){this.roundWinner = "player 1 wins this round"}
                else{this.roundWinner = "player 2 wins this round"}
                return this.roundWinner;       
        }
    }

    scoreDisplay(){
        if(this.roundWinner === "player 1 wins this round"){this.player1.score++; console.log("Player 1 scored 1 point and won this round!");return this.player1.score;}
        else{this.player2.score++;console.log("Player 2 scored 1 point and won this round!");return this.player2.score;}
    }

    displayWinner(){
        if(this.player1.score > this.player2.score){console.log("Player 1 Wins The Game!!!!");}
        else{console.log("Player 2 Wins The Game!!!!");}
    }

}

module.exports.Game = Game;




