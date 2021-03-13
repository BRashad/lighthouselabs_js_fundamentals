const repeatNumbers = function(data) {
  // Put your solution here
let numbers = '';

  for(let i = 0; i < data.length; i++){
    while(data[i][1] > 0){
      numbers += data[i][0];
      data[i][1]--;
    }
    if(i < (data.length - 1)){
      numbers += ", ";
    }
  }
return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));