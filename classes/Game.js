"use strict"

const prompt = require('prompt-sync')();
const { Human } = require('./Human');
const { Ai } = require('./Ai');


class Game {

    constructor() {
        this.player1;
        this.player2;
        this.roundWinner = "";
        this.roundArray = [1,2,3];
        this.playAgain = true; 
        this.scoreCounter = 0;
    }

    runGame() {
       
        this.displayRules();
        
        do{
            
            this.player1Selection();
            this.player2Selection();

            while(this.scoreCounter < 2){
                this.player1.chooseGesture();
                this.player2.chooseGesture();
                this.roundGestureComparison();
                this.scoreDisplay();
                this.displayCurrentScore();
                this.scoreCounter += this.endGameAtScoreOf2();
                
            }

            this.displayWinner();
            this.askToPlayAgain();
            this.resetBothPlayersScores();
        }

        while(this.playAgain)
    }

    displayRules() {
        
        console.log(
        `Welcome to Rock,Paper,Scissors,Lizard,Spock!
        Two players will chose either rock, paper, scissors, lizard, or Spock.
        A player will win a round depending on whether the gesture they chose beats the other players gesture.
        Scissors cuts Paper
        Scissors decapitates Lizard
        Rock crushes Lizard
        Rock crushes Scissors
        Paper covers Rock
        Paper disproves Spock
        Lizard poisons Spock
        Lizard eats Paper
        Spock vaporizes Rock
        Spock smashes Scissors
        The player that wins a round will have a point added to their score
        The first player to score 2 points will win the game!"`);

    }

    player1Selection(){

        let isValid = false;

        do {
            this.player1 = (parseInt(prompt("Do you want player 1 to be Human or AI? Please type '1' for Human or '2' for AI")));
            if (!isNaN(this.player1)) {
                if (this.player1 === 1 || this.player1 === 2) {isValid = true; }
                else {console.log("That is an invalid input. Please Try again.");}
            }
            else {console.log("That is an invalid input. Please Try again.");}
        }

        while (!isValid)
        

        switch(this.player1){
            case 1: this.player1 = new Human("Player 1"); console.log("Welcome Human Player 1"); break;
            case 2: this.player1 = new Ai("Player 1"); console.log("Welcome AI Player 1");break;
        }

        return this.player1;

    }

    player2Selection(){

        let isValid = false;

        do{
            this.player2 = parseInt(prompt("Do you want player 2 to be Human or AI? Please type 1 for Human or 2 for AI"));
            if (!isNaN(this.player2)) {
                if (this.player2 === 1 || this.player2 === 2) {isValid = true}
                else {console.log("That is an invalid input. Please Try again.");}
            }
            else {console.log("That is an invalid input. Please Try again.");}
        }

        while (
            !isValid
        )

        switch(this.player2){
            case 1: this.player2 = new Human("Player 2"); console.log("Welcome Human Player 2"); break;
            case 2: this.player2 = new Ai("Player 2"); console.log("Welcome AI Player 2");
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
                //console.log(this);
                //console.log(Object.keys(this));
                this.justCompare("scissors","lizard");
            case "paper":
                this.justCompare("rock","spock");
            case "scissors":
                this.justCompare("paper","lizard");
            case "lizard":
                this.justCompare("paper","spock");
            case "spock":
                this.justCompare("rock","scissors");       
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

    displayCurrentScore() {
        console.log(`Player 1's current score is: ${this.player1.score}`)
        console.log(`Player 2's current score is: ${this.player2.score}`)
    }

    askToPlayAgain(){
        let exitThisLoop = true;
        do{
            
            let response = prompt("Would you like to play again? Please type either 'yes' or 'no'").toLowerCase().trim();
            if(response === "yes" || response === "no"){
                switch(response){
                    case "no": this.playAgain = false; exitThisLoop = false; console.log("Thanks for playing!!!");break;
                    case "yes": exitThisLoop = false; console.log("Awesome! Lets Play Again!");break;
                    default: console.log("That is an invalid input. Please Try again."); break;
                }
            }
            else{console.log("That is an invalid input. Please Try again.");}
        }
        while(exitThisLoop)
    }

    resetBothPlayersScores(){
        this.player1.score = 0;
        this.player2.score = 0;
        this.scoreCounter = 0;
    }

    endGameAtScoreOf2(){
        let i = 0;
        if(this.player1.score == 2 || this.player2.score == 2){return i = 3;}
        else{return i = 0;}
    }

    justCompare(gesture1, gesture2){
        if(this.player2.gesturePick == gesture1 || gesture2 ){this.roundWinner = "player 1 wins this round"}
        else{ this.roundWinner = "player 2 wins this round";}
        return this.roundWinner;
    }
}

module.exports.Game = Game;




