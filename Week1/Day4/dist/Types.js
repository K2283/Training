"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TA in TypeScript are used to explicitly specify the type of a variable, function parameter or object property.
const name = "Venkata";
const age = 24;
const info = ["Hi", "TypeScript", 2003];
console.log(name);
console.log(age);
console.log(info);
//Func() Type Annotation
function user(email) {
    return `New user emailId is ${email}`;
}
console.log(user("v@gmailcom"));
//Object with TA
const person = {
    name: "Alice",
    age: 30
};
console.log(person);
//Class with TA
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect);
console.log(rect.area());
//----Special Types------
let a = true; // 'any' - compiler to skip type checking for a particular variable.
a = "hi";
console.log(a);
function personData(data) {
    if (typeof data === "object" && data !== null) {
        console.log("Stored Successfully");
    }
    else {
        console.log("No data passed");
    }
}
personData({});
function sendEmail(email) {
    if (email === undefined) {
        console.log("Email not provided");
        return;
    }
    console.log("Sending email to", email);
}
sendEmail();
//Enums  is a special "class" that represents a group of constants (unchangeable variables) and come in two flavors string and numeric.
var Student;
(function (Student) {
    Student[Student["Venkata"] = 1] = "Venkata";
    Student[Student["Gopinadh"] = 2] = "Gopinadh";
    Student[Student["Arjun"] = 3] = "Arjun";
    Student[Student["Sravanthi"] = 4] = "Sravanthi";
})(Student || (Student = {}));
let inf = Student.Arjun;
console.log(inf);
var User;
(function (User) {
    User["User1"] = "Venkata";
    User["User2"] = "Gopinadh";
    User["User3"] = "Arjun";
    User["User4"] = "Sravanthi";
})(User || (User = {}));
let deatils = User.User4;
console.log(deatils);
let move;
move = "Up";
console.log(move);
function rollDice() {
    return 6;
}
console.log(rollDice());
function operation() {
    return true;
}
console.log(operation());
let response;
response = true;
console.log(response);
const data = {
    email: "abc@gmail.com",
    name: "Rahul",
    mob: 1234567890
};
console.log(data);
const emp = {
    id: 123,
    name: "Rishi",
    dept: "IT"
};
console.log(emp);
const d = {
    name: "Hyderabad",
    code: 500072
};
console.log(d);
//# sourceMappingURL=Types.js.map