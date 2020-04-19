//contains a constructor, Letter which should be able to display underlying character or blank placeholder (underscore)
//define string value to store underlying character for letter
//boolean value that stores whether letter has been guessed
//function that returns underlying character if letter has been guessed, or placeholder if letter hasn't been guessed
//function that takes character as an argument and checks against underlying character, updating stored boolean value to true if correct
//doesn't require any other files

const inquirer = require("inquirer");
const prompt = require("prompt");

let Letter = function(character){
    this.letter = character;
    this.guess = false;
    this.toString = function(){
        if (this.letter === " "){
            this.guess = true;
            return " ";
        } else {
            if (this.guess === false){
                return "_";
            } else {
                return this.letter;
            }
        }
    };

    this.guessTrue = function (guessTrue){
        if (guessTrue === this.letter){
            this.guess = true;
        }
    }
}

module.exports = Letter;




module.exports = Letter;