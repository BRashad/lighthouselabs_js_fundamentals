const conditionalSum = function(values, condition) {
  // Your code here

  let num = [];
  let sum = 0;

  for (let i = 0; i <= values.length; i++) {
    if(condition === 'even' && values[i] % 2 === 0) {
      num.push(values[i]);
      sum = num.reduce((a,b) => {
        return a+b;
      });
    } else if(condition === 'odd' && values[i] % 2 === 1){
      num.push(values[i]);
      sum = num.reduce((a,b) => {
        return a+b;
      });
    } 
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));