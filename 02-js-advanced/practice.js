// 1
const person = {
  name: 'ownName',
  age: 20,
  greet: function () { //or     greet: ()=>{
    console.log(`Hello, I am ${this.name}`);
  }
}
person.greet();

// 2
function introduce() {
  console.log(`Hello, I am ${this.name}`);
}
introduce.call(person)

// 3
const add = (...nums) => {
  return nums.reduce((a, b) => a + b);
}
// singleline arrow function
const addition = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(addition(2, 4, 6, 7,1));

//4
const person2 = {
  school: 'x school',
  roll: 10
}

// 5
const {name, age}=person;
console.log(name, age);
// 6
const mergeObj = { ...person, ...person2 }


// 7
function hoisting() {
  var x = 5; //x is hoisted by 10 --> functional Scope
  if (true) {
    var x = 10;
    let y = 20;     // this x and y are in block scope
    console.log(x);
    console.log(y);
  }
  console.log(x); // 10
}


