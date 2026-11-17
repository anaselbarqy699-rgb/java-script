// ==========================
// A. Part 1: Coding Questions
// ==========================

// 1
const answer1 = Number("123") + 7;
console.log(answer1);


// 2
function checkFalsy(value) {
    return value ? value : "Invalid";
}
console.log(checkFalsy(0));


// 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// 4
const numbers4 = [1, 2, 3, 4, 5];
const answer4 = numbers4.filter(num => num % 2 === 0);
console.log(answer4);


// 5
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const answer5 = [...array1, ...array2];
console.log(answer5);


// 6
function getDay(dayNumber) {
    switch (dayNumber) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDay(2));


// 7
const words7 = ["a", "ab", "abc"];
const answer7 = words7.map(word => word.length);
console.log(answer7);


// 8
function checkDivisibility(number) {
    return number % 3 === 0 && number % 5 === 0
        ? "Divisible by both"
        : "Not divisible by both";
}
console.log(checkDivisibility(15));


// 9
const square = number => number ** 2;
console.log(square(5));


// 10
function formatPerson({ name, age }) {
    return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log(formatPerson(person));


// 11
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5));


// 12
function delayedSuccess() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Success"), 3000);
    });
}

delayedSuccess().then(message => console.log(message));


// 13
function findLargest(numbers) {
    return Math.max(...numbers);
}
console.log(findLargest([1, 3, 7, 2, 4]));


// 14
function getObjectKeys(object) {
    return Object.keys(object);
}
console.log(getObjectKeys({ name: "John", age: 30 }));


// 15
function splitWords(sentence) {
    return sentence.split(" ");
}
console.log(splitWords("The quick brown fox"));


// ==========================
// B. Part 2: Essay Questions
// ==========================

// 1. forEach vs for...of

// forEach() executes a callback for each array element.
// for...of loops over iterable values and supports break and continue.
// Use forEach for simple array operations, and for...of when you need
// more control over the loop.


// 2. Hoisting and Temporal Dead Zone (TDZ)

// Hoisting means declarations are processed before code execution.
// Function declarations can be used before their definition.
// Variables declared with var are hoisted and initialized with undefined.
// let and const are hoisted too, but cannot be accessed before their
// declaration line. This period is called the Temporal Dead Zone (TDZ).

// Example:
// console.log(x);
// let x = 10;
// ReferenceError


// 3. == vs ===

// == compares values after type conversion when needed.
// === compares both value and type without type conversion.

// Example:
// 5 == "5"  // true
// 5 === "5" // false


// 4. try...catch

// try contains code that may produce an error.
// catch handles the error so the program does not stop unexpectedly.
// With async/await, try...catch can handle rejected Promises.

// Example:
// try {
//     const result = await someAsyncFunction();
// } catch (error) {
//     console.log(error);
// }


// 5. Type Conversion vs Coercion

// Type conversion is changing a value's type explicitly.
// Example:
// Number("123") // 123

// Type coercion is JavaScript changing a value's type automatically.
// Example:
// "5" + 2 // "52"