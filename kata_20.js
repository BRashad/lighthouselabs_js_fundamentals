const blocksAway = function(arr) {
  // Put your solution here
let output = {east: 0, north: 0};
const left = 'left';
const right = 'right';
 
for (let i = 0; i < arr.length; i += 2) {
  
 if(arr[i] === right)  output.east += arr[i + 1];
 if(arr[i] === left)  output.north += arr[i + 1];

}
  
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));