const showIfSumIsEven = (input) => {
  /*return input
    .map((a) => a.reduce((num, sum) => num + sum, 0))
    .filter((b) => b % 2 === 0);*/

  let x = [];
  let sum = 0;
  for (let i of input) {
    for (let j of i) sum += j;

    if (sum % 2 === 0) x.push(sum);

    sum = 0;
  }

  return x;
};

//Test cases
const input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const input2 = [
  [2, 4, 8],
  [10, 12, 14],
  [6, -4],
];
const input3 = [[1], [2], [3], [4], [0]];
const input4 = [];

console.log(showIfSumIsEven(input1));
console.log(showIfSumIsEven(input2));
console.log(showIfSumIsEven(input3));
console.log(showIfSumIsEven(input4));

module.exports = showIfSumIsEven;
