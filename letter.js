//contains a constructor, Letter which should be able to display underlying character or blank placeholder (underscore)
//define string value to store underlying character for letter
//boolean value that stores whether letter has been guessed
//function that returns underlying character if letter has been guessed, or placeholder if letter hasn't been guessed
//function that takes character as an argument and checks against underlying character, updating stored boolean value to true if correct
//doesn't require any other files


//constructor Letter which shows either " " or "_"
class Letter {
    constructor(letter) {
        this.letter = letter;
        this.guess = false;
    }
    toString() {
        //this is to insert spaces between _ to be guessed
        if (this.letter === " ") {
            return " ";
        } else {
            //incorrect guess, return _ 
            if (this.guess === false) {
                return "_";
            } else {
            //correct guess, return letter passed in as parameter
                return this.letter;
            }
        }
    };
    //if letter guessed is correct, assign this.guess to true
    guessTrue(correctLetter) {
        if (correctLetter === this.letter) {
            this.guess = true;
        }
    }
}

module.exports = Letter;

