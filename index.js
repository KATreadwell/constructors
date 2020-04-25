//depends on word.js
//randomly selects a word and uses Word constructor to store it
//prompts user for each guess and keeps track of user's remaining guesses

const Word = require("./word");
const inquirer = require("inquirer");

let incorrectLetters = [];
let correctLetters = [];
let guessesLeft = 5;
let isDinoGuessed = false;
let wordComplete = [];

//logic of the game
jeopardy();
function jeopardy() {
    //need to generate new word
    if (needNewWord = true) {
        function generateNewWord() {
            let dinosaurs = ["triceratops", "tyrannosaurus rex", "velociraptor", "stegasaurus", "diplodocus", "allosaurus"];
            let randomDinoIndex = Math.floor(Math.random() * dinosaurs.length);
            let randomDinosaur = dinosaurs[randomDinoIndex];
            computerGeneratedWord = new Word(randomDinosaur);
            console.log(computerGeneratedWord)
        }
        generateNewWord();
        needNewWord = false;
    }

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter.",
                name: "userinput"
            }
        ])
        //check if userinput already guessed
        .then(function (input) {
            if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput)) {
                console.log("Letter already guessed.");
            } else {
                //need to check userGuess against computerGeneratedWord
                let wordCheckArray = [];
                computerGeneratedWord.userGuess(input.userinput);
                computerGeneratedWord.objArray.forEach(wordCheck);
                
                if (wordCheckArray.join('') === wordComplete.join('')) {
                    console.log("Wrong");
                    incorrectLetters.push(input.userinput);
                    guessesLeft--;
                } else {
                    console.log("Correct");
                    correctLetters.push(input.userinput);
                }

                console.log("Guesses Left: " + guessesLeft);
                console.log("Letters Guesses: " + incorrectLetters.join(" ,"));

                if (guessesLeft > 0) {
                    jeopardy();
                } else {
                    console.log("Try again!");
                    restartGame();
                }
                function wordCheck(key) {
                    wordCheckArray.push(key.guessed);
                }
            }
            if (isDinoGuessed === true) {
                console.log("You know your dinosaurs!");
                needNewWord = true;
                restartGame();
            }

        })
};



function restartGame() {
    incorrectLetters = [];
    correctLetters = [];
    guessesLeft = 5;
    jeopardy();
};