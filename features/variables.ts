let apples = 5;
let speed = 'fast';
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// built in objects
let now = new Date();

// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3, 4, 5];
let truths = [true, true, false];

// Classes
class Car {}
let car = new Car();

// Object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Functiont hat returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number; } = JSON.parse(json);
console.log(coordinates); // {"x": 10, "y": 20};

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // better to write this as let foundWord = false;

for (let i =0; i < words.length; i++) {
    if( words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}