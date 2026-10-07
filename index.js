console.log("Welcome to XpressGoShare..!")

//Day 1 - JS
//Leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !==0) || year % 400 ===0 ){
    console.log(`${year} is a leap year`);
}else {
    console.log(`${year} is not a leap year`);
}

//FizzBuzz
for(let i = 1; i <= 10; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0 ){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//Prime Numbers
let number = 12;
let isPrime = true;
if(number <= 1){
    isPrime=false;
}
for (let i = 2; i < number; i++){
    if(number % i === 0 ){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(`${number} is a prime number `);
}else{
    console.log(`${number} is not a prime number`);
}

//Reverse String
let txt = "Impossible";
let r = "";
for(let i = txt.length - 1; i>=0; i--){
    r = r + txt[i];
}
console.log(r);

// vowels
let word = "Gamify Learning"
let vowelCount = 0;
for(let i = 0; i < word.length; i++){
    let character = word[i].toLowerCase();
    if(
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ){
        vowelCount++;
    }
}
console.log("Vowels:", vowelCount );

//Largest Number
let numbers = [10, 25, 7, 45, 18];
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i]> largest){
        largest = numbers[i];
    }
}
console.log(`largest number: ${largest}`);

//Calculator
let marks = 85;
if (marks >= 90){
    console.log("It is Garde: A");
}else if(marks >= 75){
    console.log("It is Grade: B ");
}else if(marks >= 60){
    console.log("It is Grade: C")
}else if(marks >= 40){
    console.log("It is Grade: D");
}else{
    console.log("Fail")
}

//-----------------------------------------------------------------------------------------------------

//Day 2 - Functions
function greet(name){             //A parameter is a variable defined in a func declaration that receives a value when the func is called
    console.log("Hello"+name);        //name - parameter
}
greet();
greet("Arjun");                      // Arjun - argument 


const data = function(){
    console .log("Welcome to XpressGoShare..!")
}
data();


function calSalary(salary,bonus){
    return(salary + bonus)
}
const tot = calSalary(35500,5784.50);
console.log(tot);


//Arrow Func
const num = [897,85,9641,789715];
const cubic = num.map(num=>num*3);
console.log(cubic);


//Default Param - default parameter provides a fallback value when an argument is not provided.
function totalPrice(price,tax=15){
    return price+(price*tax/100)
}
const price = totalPrice(5555,18);
console.log(price);


//Closures - occurs when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.
function outer(){
    let msg = "Simplify Learning"
    function inner(){
        console.log(msg);
    }
    return inner;
}
const greet1 = outer();
greet1();


function counter(){
    let count = 0;
     return function(){
        count ++;
        return count;
     };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());


//Object
const employee = {
    id: 101,
    name: "Ravi",
    department: "IT",
    salary: 50000,
    active: true
};
console.log(employee.name);
console.log(employee.salary);


//Spread - spread operator expands the values.
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const number3 = [...numbers1, ...numbers2];
console.log(number3);

//map()
const emp = [
    {name: "Prabhas", role: "Testing", salary: 100000},
    {name: "Arjun", role: "Developer", salary:80000}
];
const res = emp.map(emp=>({
    ...emp,
    CTC: emp.salary*12
}))
console.log(res);



const employees = [
    {id: 1,name: "Ravi",department: "IT",salary: 50000},
    {id: 2,name: "Priya",department: "HR",salary: 45000},
    {id: 3,name: "Anil",department: "IT",salary: 60000}
];

const employee1 = employees.find(
    employee1 => employee1.name === "Gopi"
);
console.log(employee1);

const topEarners = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3);
console.log(topEarners);

const itEmployees = employees.filter(
    employee => employee.department === "IT"
);
console.log(itEmployees);

const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log(totalSalary);
