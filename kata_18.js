const squareCode = function(message) {
  // Put your solution here
  let noSpaceStr = message.replace(/\s/g, '');
  let strLen = Math.ceil(Math.sqrt(noSpaceStr.length));
  let temp = []
  let result = [];
  let count = 0;
  /*crisp double for-loop to go over my string. 
  outer loop is so i can add to the iterator 
  below after each loop. that way i can do pretty 
  much the whole code in just a nested for loop*/
  for (let i = 0; i < strLen; i++){
    /*iterate over the loop, jumping ahead however much
    is dictated by my sqrt that i pulled earlier, with an
    increasing starting position based on how many times 
    i've finished iterating over this string so far.*/
    for (let i = 0 + count; i < noSpaceStr.length; i+= strLen) {
      temp.push(noSpaceStr[i])
    }
       /*after it's done iterating, add to a counter that's used
    to track my starting position, push my holderArr to my
    returnArr, and clear my holderArr.*/
    count++; 
    result.push(temp.join(''));
    temp = [];
  }

  return result.join('\n');
};
  

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


