//depends on word.js
//randomly selects a word and uses Word constructor to store it
//prompts user for each guess and keeps track of user's remaining guesses

const Word = require("./word");
const inquirer = require("inquirer");
const prompt = require("prompt");

function jeopardy() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let dinosaurs = ["triceratops", "tyrannosaurus rex", "velociraptor", "stegasaurus", "diplodocus", "allosaurus"];
    let incorrectLetters = [];
    let correctLetters = [];
    let guessesLeft = 5;
    let guessCorrect = [];
    requireNewWord =

    if (requireNewWord) {
        let randomIndex = Math.floor(Math.random() * dinosaurs.length);
        let answer = dinosaurs[randomIndex];
        computerGeneratedWord = new Word(answer);
        requireNewWord = false;
    }

    if (guessCorrect.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter from the alphabet."
                }
            ])
            .then(function (input) {
                if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput)) {
                    console.log("Already guessed.");
                    jeopardy();
                } else {
                    let characterCheck = [];
                    computerGeneratedWord.userGuess(input.userInput);
                    if (computerGeneratedWord.join('') === wordComplete.join('')) {
                        console.log("Wrong");
                        incorrectLetters.push(input.userInput);
                        guessesLeft--;
                    } else {
                        console.log("Correct");
                        correctLetters.push(input.userInput);
                    }

                    computerGeneratedWord.log();
                    console.log("Letters Guesses: " + incorrectLetters.join(" ") + "\n");

                    if (guessesLeft > 0) {
                        jeopardy();
                    } else {
                        console.log("Try again!")
                        restartGame();
                    }

                    function completeCheck(key) {
                        wordComplete.push(key.guessed);
                    }
                }

            })
    }
}

function restartGame() {
    requireNewWord = true;
    incorrectLetters = [];
    correctLetters = [];
    guessesLeft = [];
    jeopardy();
}

jeopardy();


