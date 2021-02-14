const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function (moves) {
  // Your code in here ...

  let location = [0,0];

  for(let move of moves) {
    switch(move) {
    case 'north':
      location[1] += 1;
      break;
    case 'south':
      location[1] -= 1;
      break;
    case 'east':
      location[0] += 1;
      break;
    case 'west':
      location[0] -= 1;
      break;
    }
  }
  return location;
}

console.log(finalPosition(moves));

