
// guessing game
let guessNumber ;
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (guessNumber !== randomNumber) {
    guessNumber = parseInt(prompt("guess number between 1 and 10"))
    if (guessNumber < randomNumber){
    }
    console.log = ("Wrong! Try again");
}

console.log("Congratulations! You guessed the correct number");