const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return a / b;
};

const multiply = function (a, b) {
  return a * b;
};

const sum = function (arrs) {
  if (arrs.length === 0) {
    return 0;
  }

  let sum = arrs.reduce(function (total, current) {
    return total + current;
  });

  return sum;
};

const multiply_arr = function (arrs) {
  if (arrs.length === 0) {
    return 0;
  }

  let multiply = arrs.reduce((a, b) => {
    return a * b;
  }, 0);

  return multiply;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
//calling test
// // console.log(factorial(3));
// console.log(divide(12, 4));
// console.log(multiply(3, 4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  divide,
  sum,
  multiply,
  power,
  factorial,
};
