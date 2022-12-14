const allInOrNot = (input) => {
  if (input.length === 0) return true;
  else {
    const x = typeof input[0];
    const y = input.filter((a) => x === typeof a);

    if (input.length === y.length) return true;
    else return false;
  }
};

//Test cases
const input1 = [1, 2, 3];
const input2 = ["hello", true, 0];
const input3 = ["Only", "string", "array"];
const input4 = [];

console.log(allInOrNot(input1));
console.log(allInOrNot(input2));
console.log(allInOrNot(input3));
console.log(allInOrNot(input4));

module.exports = allInOrNot;
