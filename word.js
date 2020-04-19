//contains a constructor, Word that depends on Letter constructor
//create an object representing current word user is trying to guess
//define an array of "new" Letter objects representing the letters of underlying word
//function that return string representing word and calls the 1st function defined in Letter.js on each letter object that displays character/underscore
//function that takes a character as an argument and calls guess function (2nd functionin Letter.js) on each letter object
//only requires letter.js

const Letter = require("./letter")

function Word(answer){
    this.objArray = [];

    for (let i = 0; i < answer.length; i++){
        let letter = new Letter (answer[i]);
        this.objAnswerArray.push(letter);
    }

    this.strWord = function (){
        strWord = "";
        for (let i = 0; i < this.objAnswerArray.length; i++){
            strWord += this.objAnswerArray[i] + " ";
        }
        console.log(strWord + "\n");
    }

    this.userGuess = function (input){
        for (let i = 0; i < this.objAnswerArray.lenth; i++){
            this.objAnswerArray[i].guess(input);
        }
    }
}

module.exports = Word;

