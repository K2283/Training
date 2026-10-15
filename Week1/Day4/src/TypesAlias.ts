
//TA in TypeScript are used to explicitly specify the type of a variable, function parameter or object property.
const name : string = "Venkata";               
const age : number = 24;
const info: (number | string)[] = ["Hi", "TypeScript", 2003];
console.log(name);
console.log(age);
console.log(info);


//Func() Type Annotation
function user(email:string):string{
    return `New user emailId is ${email}`
}
console.log(user("v@gmailcom"))


//Object with TA
const person: { name: string; age: number } = {
    name: "Virat",
    age: 30
};
console.log(person);


//Class with TA
class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect); 
console.log(rect.area());


//----Special Types------

let a : any =true;                                 // 'any' - compiler to skip type checking for a particular variable.
a="hi";
console.log(a);

function personData(data:unknown){                //unknown - a value whose type is not known yet
    if(typeof data==="object" && data!==null){
        console.log("Stored Successfully")
    }else{
        console.log("No data passed")
    }
}
personData({});

function sendEmail(email?: string) {             //undefined - no value has been assigned or a value is missing
    if (email === undefined) {
        console.log("Email not provided");
        return;
    }
    console.log("Sending email to", email);
}
sendEmail();


//Enums  is a special "class" that represents a group of constants (unchangeable variables) and come in two flavors string and numeric.
enum Student{            //numeric
    Venkata = 1,
    Gopinadh,
    Arjun,
    Sravanthi
}
let inf:Student = Student.Arjun;
console.log(inf)

enum User{                //String enums allow you to assign string values to each member
    User1 = "Venkata",
    User2 = "Gopinadh",
    User3 = "Arjun",
    User4 = "Sravanthi"
}
let deatils: User = User.User4
console.log(deatils)


//Literal Types -- restricts a variable to one specific value or a fixed set of values, instead of allowing any value

type Direction = "Up" | "Down" | "Left" | "Right";  //String literal types allow a variable to accept only a specific set of string values
let move: Direction;
move = "Up";
console.log(move)

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;          //Numeric literal types restrict a variable to a specific set of numeric values
function rollDice(): DiceRoll {
  return 1;
}
console.log(rollDice());

type Success = true;           //Boolean literal types restrict a variable to a specific set of boolean values
function operation(): Success {
    return true;
}
console.log(operation());


//Union type allows a variable, parameter, or property to hold one of several possible types ... OR operator is used
type ApiResponse = string | number| boolean;
let response: ApiResponse;
response = true;
console.log(response)

//Intersection type type combines multiple types into one.... AND operator is used
type Login = {
    email: string;
};
type Profile = {
    name: string;
    mob : number;
};
type User123 = Login & Profile;
const data: User123 = {
    email: "abc@gmail.com",
    name: "Rahul",
    mob : 1234567890
};
console.log(data)


//Type Alias creates a new name (alias) for a type
type Employee = {
    id:number,
    name:string,
    dept:string
}
const emp: Employee = {
    id:123,
    name:"Rishi",
    dept:"IT"
}
console.log(emp);

//Interface - structure of an object or class/similar to type aliases, except they only apply to object types.
interface City{
    name:string,
    code:number
}
const d : City = {
    name:"Hyderabad",
    code:500072
}
console.log(d)

