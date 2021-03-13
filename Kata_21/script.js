let prompt = require("prompt-sync")();
//accumulating attempts qty
//let guessedNum = [];
let attempts = 0;
const randomNum = Math.floor(Math.random() * 10) + 1; 
let answer = Number(prompt("Guess a number: "));

const generator = () => {
  while (answer !== randomNum) { //loop runs while answer is not equal random number

      if(!answer) {
        return console.log("No number")
      } else if (answer === randomNum) {
        attempts++;// does not accumulate 
        console.log('You gussed it right!');
        
      } else if (answer < randomNum) {
        attempts++;
        console.log('Too small');
        
      } else if (answer > randomNum) {
        attempts++;
        console.log('Too large');
        
      }
    }
  }


generator();
console.log(randomNum);
console.log(attempts);
console.log("You answered: " + answer);


/*
 - After every guess the program tells the user whether their number was too large or too small. DONE
 - At the end, the number of tries needed should be printed.
 - Inputting the same number multiple times should only count as one try. 
 - If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/
