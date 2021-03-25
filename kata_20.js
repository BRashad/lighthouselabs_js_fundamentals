const blocksAway = function(arr) {
  // Put your solution here
let output = {
  east: 0, 
  north: 0
};
const left = 'left';
const right = 'right';
let currDir;

if(arr[0] === left){
  currDir = 'north';
  output.north = arr[1];
} else if(arr[0] === right) {
  currDir = 'east';
  output.east = arr[1];
  
}

for (i = 2; i <= arr.length - 2; i += 2) {

  if(currDir === 'north'  && arr[i] === right) {
    currDir = "east";
    output.east += arr[i+1];
    continue;
  } else if(currDir === 'north'  && arr[i] === left) {
      currDir = "west";
      output.east -= arr[i+1];
      continue;
  } 
  
  if (currDir === 'west' && arr[i] === right) {
    currDir = "south";
    output.north -= arr[i+1];
    continue;
  } else if (currDir === 'west' && arr[i] === left ) {
    currDir = "north";
    output.north += arr[i+1];
    continue;
  }

  if (currDir === 'east' && arr[i] === right) {
    currDir = "south";
    output.north -= arr[i+1];
    continue;
  } else if (currDir === 'east' && arr[i] === left ) {
    currDir = "north";
    output.north += arr[i+1];
    continue;
  }

  if (currDir === 'south' && arr[i] === right) {
    currDir = "west";
    output.east -= arr[i+1];
    continue;
  } else if (currDir === 'south' && arr[i] === left ) {
    currDir = "east";
    output.east += arr[i+1];

  }

}

  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));