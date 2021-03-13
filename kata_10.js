const multiplicationTable = function(maxValue) {
  // Your code here
  let min = 1;
  let max = maxValue;
  
  //generate arrays
  let range = [];
  for(let i = min; i <= max; i++){
    range.push(i);
  }

  //generating array tables
  let table = [];
  for (j = 0; j < range.length; j++){
    table.push(range.map(x => x * range[j]));
  }
  
  //generating expected output as per the assignment requirements
  const test = () => {
    for (a = 0; a < table.length; a++){
      var temp = "";
      for (b = 0; b < table[a].length; b++){
        temp=temp+" "+table[a][b];
      }
      console.log(temp);
    }
  };
  
  test();
  return ' ';
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


