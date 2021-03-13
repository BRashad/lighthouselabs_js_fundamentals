const sumLargestNumbers = (arr) => {

  let largestNum1 = 0;
  let largestNum2 = 0;

  for(let i = 0; i < arr.length; i++){
    if (arr[i] >=  largestNum1) {
      largestNum1 = arr[i];
      }
    }

  largestNum2 = arr.sort(function(a, b) { return b - a; })[1];
  
  return largestNum1 + largestNum2

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));