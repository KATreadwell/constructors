//depends on word.js
//randomly selects a word and uses Word constructor to store it
//prompts user for each guess and keeps track of user's remaining guesses

const Word = require("./word");
const inquirer = require("inquirer");


//logic of the game
function initializeGame() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let incorrectLetters = [];
    let correctLetters = [];
    let guessesLeft = 5;
    let dinosaurs = ["triceratops", "tyrannosaurus rex", "velociraptor", "stegasaurus", "diplodocus", "allosaurus"];
    generateWord = false;
    isWordComplete = false;
    jeopardy();

    function jeopardy() {
        let randomDinosaur = Math.floor(Math.random() * dinosaurs.length);
        let wordToGuess = dinosaurs[randomDinosaur];
        computerGeneratedWord = new Word(wordToGuess);

        if (isWordComplete.includes(false)) {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Guess a letter.",
                        name: "userinput"
                    }
                ])
                .then(function (input) {
                    if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.user)) {
                        console.log("Letter already guessed.");
                    } else {
                        let letterCheck = [];
                        computerGeneratedWord.userGuess(input.userInput);
                        computerGeneratedWord.objArray.forEach(completeCheck);
                        if (computerGeneratedWord.join('') === isWordComplete.join('')) {
                            console.log("Wrong");
                            incorrectLetters.push(input.userInput);
                            guessesLeft--;
                        } else {
                            console.log("Correct");
                            correctLetters.push(input.userInput);
                        }
                        console.log("Guesses Left: " + guessesLeft);
                        console.log("Letters Guesses: " + incorrectLetters.join(" ,"));

                        if (guessesLeft > 0) {
                            jeopardy();
                        } else {
                            console.log("Try again!");
                            initializeGame();
                        }
                    }
                    function completeCheck(key) {
                        wordToGuess.push(key.guessed);
                    }
                })

        } else {
            console.log("You know your dinosaurs!");
            initializeGame()
        }

    }
}







