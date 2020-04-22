//contains a constructor, Word that depends on Letter constructor
//create an object representing current word user is trying to guess
//define an array of "new" Letter objects representing the letters of underlying word
//function that return string representing word and calls the 1st function defined in Letter.js on each letter object that displays character/underscore
//function that takes a character as an argument and calls guess function (2nd functionin Letter.js) on each letter object
//only requires letter.js

const Letter = require("./letter")

//Word constructor that creates object that represents word user is trying to guess
function Word(answer){
    //stores word to guess in objArray
    this.objArray = [];

    //for length of answer, push letter
    for (let i = 0; i < answer.length; i++){
        let letter = new Letter (answer[i]);
        this.objArray.push(letter);
    }

    //calls function from letter.js and displays characters
    this.strWord = function () {
        strWord = "";
        for (let i = 0; i < this.objArray.length; i++) {
            strWord += this.objrArray[i] + " ";
        }
        console.log(strWord + "\n");
    }

    //store userGuess in objArray as userguess
    this.userGuess = function (input) {
        for (let i = 0; i < this.objArray.lenth; i++){
            this.objArray[i].guess(input);
        }
    }
}

module.exports = Word;

