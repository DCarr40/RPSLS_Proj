"use strict";

const prompt = require('prompt-sync')();
const Game = require("./classes/Game");

let game1 = new Game();
game1.runGame();


function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}