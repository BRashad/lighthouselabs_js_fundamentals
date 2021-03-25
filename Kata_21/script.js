let answer;
let guessedNum = [];
let attempts = 0;
const randomNum = Math.floor(Math.random() * 10) + 1; 

  while (answer !== randomNum) { //loop runs while answer is not equal random number
    let prompt = require("prompt-sync")();
    answer = Number(prompt("Guess a number: "));
      if(!answer) {
        return console.log("No number. Please enter a number")
      } else if (answer === randomNum) {
        guessedNum.push(answer);
        console.log('You guessed it right!');
        
      } else if (answer < randomNum) {
        guessedNum.push(answer);
        console.log('Too small');
        
      } else if (answer > randomNum) {
        guessedNum.push(answer);
        console.log('Too large'); 
      }
    }

  for(i = 0; i < guessedNum.length; i++){
    //console.log('Guessed number array:' + guessedNum);
    if(guessedNum.indexOf(guessedNum[i]) === guessedNum.lastIndexOf(guessedNum[i])){
      attempts++;
    } 
  }


console.log(randomNum);
console.log(attempts);
console.log("You answered: " + answer);


/*
 - After every guess the program tells the user whether their number was too large or too small. DONE
 - At the end, the number of tries needed should be printed. Done
 - Inputting the same number multiple times should only count as one try. 
 - If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/
