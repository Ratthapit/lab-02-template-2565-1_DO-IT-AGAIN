const arrayStringify = (input) => {
  let y = "";
  input.map((a) => (y = y + a));
  return y * 1;
};

//Test cases
const input1 = [1, 2, 3];
const input2 = [10, 9, 8, 7, 6, 5];
const input3 = [];

console.log(arrayStringify(input1));
console.log(arrayStringify(input2));
console.log(arrayStringify(input3));

module.exports = arrayStringify;
