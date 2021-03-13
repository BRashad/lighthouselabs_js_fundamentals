const calculateChange = function(total, cash) {
  // Your code here
  let arr = [];
  let change = cash - total;
  //console.log(change);
  //creates an aaray of split numbers 
    var i = 1;
    while (change > 0) {
      arr.unshift((change % 10) * i);
      change = Math.floor(change / 10);
      i *= 10
    }
  let changeType = {tenDollar: 0, twoDollar: 0, oneDollar: 0, quarter: 0, dime: 0, penny: 0};
    
    for(i = 0; i < arr.length; i++) {

      if (arr[i] % 1000 === 0) {
        changeType.tenDollar = arr[i] / 1000;
      } else if (arr[i] % 200 === 0 && arr[i] >=200 ) {
        changeType.twoDollar = arr[i] / 200;
      } else if (arr[i] % 100 === 0) {
        changeType.oneDollar = arr[i] / 100;
      } else if (arr[i] % 25 === 0) {
        changeType.quarter = arr[i] / 25;
      } else if (arr[i] % 10 === 0) {
        changeType.dime = arr[i] / 10;
      } else if (arr[i] % 1 === 0) {
        changeType.penny = arr[i] / 1;
      }
    }
  return changeType;
};
//console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));






// for(i = 0; i < arr.length; i++) {
//   if (arr[i] % 1000 === 0) {
//     changeType.tenDollar = arr[i] / 1000;
//   } else if (arr[i] % 200 === 0) {
//     changeType.twoDollar = arr[i] / 200;
//   } else if (arr[i] % 100 === 0) {
//     changeType.oneDollar = arr[i] / 100;
//   } else if (arr[i] % 25 === 0) {
//     changeType.quarter = arr[i] / 25;
//   } else if (arr[i] % 10 === 0) {
//     changeType.dime = arr[i] / 10;
//   } else if (arr[i] % 1 === 0) {
//     changeType.penny = arr[i] / 1;
//   }
// }