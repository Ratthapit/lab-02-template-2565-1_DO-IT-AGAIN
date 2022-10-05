const func = require("../q4");

const input1 = [0, 0, 7];
const input2 = [999, 998, 997];
const input3 = [-5, -4, -1];
const input4 = [1];

console.log(func(input1));
console.log(func(input2));

const output1 = 7;
const output2 = 999;
const output3 = -1;
const output4 = 1;

test("outputs the correct number 1", () => {
  expect(func(input1)).toEqual(output1);
});

test("outputs the correct number 2", () => {
  expect(func(input2)).toEqual(output2);
});

test("outputs the correct number 3", () => {
  expect(func(input3)).toEqual(output3);
});

test("outputs the correct number 4", () => {
  expect(func(input4)).toEqual(output4);
});
