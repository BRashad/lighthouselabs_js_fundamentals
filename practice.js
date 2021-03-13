let prompt = require("prompt-sync")();
// code below (replace this example)
let randomNum = Math.floor(Math.random() * 100) + 1; // 1 is to avoid 0 and have all 10 numbers randomly generated
let answer = Number(prompt("Guess a number: "));
let attempts = 0;


// output number of attempts
// then zero down counter to start over
if(!answer) {
  console.log("No number")
} else if (answer === randomNum) {
  console.log('You guessed it right!');
  attempts ++;
} else if(answer > randomNum  ) {
  console.log('Your number is too large');
  attempts ++;
}else if(answer < randomNum) {
  console.log('Your number is too small');
  attempts ++;
}

//console.log("You answered: " + answer);
console.log("Random number: " + randomNum);
console.log("# of Attempts: " + attempts)