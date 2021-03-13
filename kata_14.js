const calculateChange = function (total, cash) {
  // Your code here

  let dollars = {
    twentyDollars: 2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  let total_cng = cash - total;
  let dollar_split = {}

  for (let key in dollars) {
    let i = 0;
    while (true) {
      let zero = total_cng - dollars[key];
      if (zero >= 0) {
        total_cng = zero
        dollar_split[key] = ++i;
      }else{
        break;
      }
    }
  }
  return dollar_split;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));