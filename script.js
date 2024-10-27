const add = (a, b) => a + b;

console.log(add(3, 5));

const anon = function (a, b) {
  return a - b;
};

console.log(anon(3, 1));

const isEven = (num) => num % 2 === 0;

console.log(isEven(6));

function numberMultiply(num1, num2, callback) {
  return callback(num1, num2);
}

function Multiplication(num1, num2) {
  return num1 * num2;
}

console.log(numberMultiply(3, 5, Multiplication));

const isPositive = (num) => num > 0;

console.log(isPositive(-3));

const double = function (number) {
  return number * 2;
};

console.log(double(4));

function doubleParams(num3, callback) {
  return callback(num3);
}

function double_func(num3) {
  return num3 * 2;
}

console.log(doubleParams(6, double_func));

const isDivisibleByThree = (num4) => num4 % 3 === 0;

console.log(isDivisibleByThree(9));

function isEvenOrNot(number1, callback) {
  return callback(number1);
}

function EvenOrOdd(number1) {
  return number1 % 2 === 0;
}

console.log(isEvenOrNot(5, EvenOrOdd));

const cube = (num11) => num11 * num11 * num11;

console.log(cube(3));

function MultipliedNumberTowTimes(num14, num15, callback) {
  return callback(num14, num15);
}

function MultipliedNumberOn(num14, num15) {
  return num14 * num15;
}

console.log(MultipliedNumberTowTimes(22, 14, MultipliedNumberOn));

const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(3));

const half = function (number2) {
  return number2 / 2;
};

console.log(half(7));

function sum(number3, number4, callback) {
  return callback(number3, number4);
}

function additionNumber(number3, number4) {
  return number3 + number4;
}

console.log(sum(14, 45, additionNumber));

const square = (number10) => number10 * number10;
console.log(square(12, 17));
