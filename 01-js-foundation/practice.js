// 01-js-foundations/practice.js

const numbers = [1, 2, 3, 4, 22];

// Array Functions
const doubleNumbers = numbers => numbers.map(num => num * 2);
const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);
const getNumbersGreaterThanThree = numbers => numbers.filter(num => num > 3);
const multiply = (a, b) => a * b;

// Outputs
console.log('Doubled:', doubleNumbers(numbers));             // [2, 4, 6, 8, 44]
console.log('Even Numbers:', getEvenNumbers(numbers));       // [2, 4, 22]
console.log('>3 Numbers:', getNumbersGreaterThanThree(numbers)); // [4, 22]
console.log('Multiply 3x4:', multiply(3, 4));                // 12

// Student Object
const student = {
  name: 'StudentName',
  id: 22,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

student.sayHello();  // Hello, my name is StudentName