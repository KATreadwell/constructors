//depends on word.js
//randomly selects a word and uses Word constructor to store it
//prompts user for each guess and keeps track of user's remaining guesses

const Word = require("./word");
const inquirer = require("inquirer");



let incorrectLetters = [];
let correctLetters = [];
let guessesLeft = 5;
isDinoGuessed = false;
let needNewWord = false;


let letterArray = "abcdefghijklmnopqrstuvwxyz";


//logic of the game
function jeopardy() {
    if (needNewWord = true) {
        function generateNewWord() {
            let dinosaurs = ["triceratops", "tyrannosaurus rex", "velociraptor", "stegasaurus", "diplodocus", "allosaurus"];
            let randomDinoIndex = Math.floor(Math.random() * dinosaurs.length);
            let randomDinosaur = dinosaurs[randomDinoIndex];
            computerGeneratedWord = new Word(randomDinosaur);
        }
        generateNewWord();
    }

    else{
        inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter.",
                name: "userinput"
            }
    
        ])
        .then(function (input) {
                    if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput)) {
                        console.log("Letter already guessed.");
                    } else {
                        let wordCheckArray = [];
                        computerGeneratedWord.userGuess(input.userInput);
                        computerGeneratedWord.objArray.forEach(wordCheckArray);
                        if (computerGeneratedWord.join('') === isDinoGuessed.join('')) {
                            console.log("Wrong");
                            incorrectLetters.push(input.userInput);
                            guessesLeft--;
                        } else {
                            console.log("Correct");
                            correctLetters.push(input.userInput);
                        }
                        computerGeneratedWord.log();
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
    
                })
        } 
    }else {
            console.log("You know your dinosaurs!");
            restartGame();
        }
    
        function completeCheck(key) {
            isWordComplete.push(key.guessed);
        }
    }
}

function restartGame() {
    incorrectLetters = [];
    correctLetters = [];
    guessesLeft = 5;
    jeopardy();
}
