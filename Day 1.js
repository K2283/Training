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
