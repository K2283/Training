"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Functions - Types
//Named Func - defined and called by their name => function functionName([args: type]): type { }
function addition(a, b) {
    return a + b;
}
console.log(addition("Venkata", "Gopinadh"));
//=>Anonymous Function - function call can be made using the variable to which it is assigned
const userSalary = function (a, b) {
    return a * b;
};
console.log(userSalary(87, 7158));
//Arrow Func - concise function expressions using the => syntax
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));
//Optional Func - specify function parameters that may be omitted when calling the function
//Default Func - default values if no argument is passed
function greet(firstName, lastName = "Kothapalli") {
    return `Hello, ${firstName} ${lastName}`;
}
console.log(greet("Venkata"));
console.log(greet("Venkata", "Gopinadh"));
function my(person, age) {
    if (age !== undefined) {
        return `Hello, ${person},${age} years old!`;
    }
    return `Hello, ${person}!`;
}
console.log(my("Venkata"));
console.log(my("Gopinadh", 24));
//Callback Func()
function operation(a, b, callback) {
    let result = a + b;
    callback(result);
}
operation(3478125, 1588593154844, (result) => {
    console.log(result);
});
const add = (a, b) => a + b;
add.operation = "Addition";
const mul = (a, b) => a * b;
mul.operation = "Multiplication";
console.log(`${add.operation}: ${add(7, 82)}`);
console.log(`${mul.operation}: ${mul(7, 82)}`);
//REST param  -- Must declare at Last ...
//enable functions to handle an unlimited number of arguments by grouping them into an array
function average(...marks) {
    let total = 0;
    for (let num of marks) {
        total += num;
    }
    return marks.length === 0 ? 0 : total / marks.length;
}
console.log("Average of numbers: ", average(42, 78, 76, 55, 60));
function join(...strings) {
    return strings.join(', ');
}
console.log(join("rachel", "john", "peter") + " are mathematicians");
console.log(join("sarah", "joseph") + " are coders");
//Arrow Func
const num = [4, 85, 6, 7, 22, 66];
const cubic = num.map(n => n * n);
console.log(cubic);
function login(email, password) {
    if (password) {
        return `Logged with email and password`;
    }
    return `Logged with username`;
}
console.log(login("kvgn22"));
console.log(login("a@gmail.com", "Kvgn123"));
console.log(login("a@gmail.com"));
//# sourceMappingURL=Funcs.js.map