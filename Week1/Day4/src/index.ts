
import { processValue } from "./processor.js";
import { sendNotification } from "./processor.js";
import { isEmployee } from "./guards.js";
import { Employee } from "./Employee.js";
import { SavingsAccount } from "./SavingsAccount.js";
import type {UpdateUserInput,UserSummary,CreateUserInput} from "./UtilityTypes.js";

const data: unknown = {
  id: 101,
  name: "Venkata",
  department: "IT"
};

if (isEmployee(data)) {
  console.log(data.name);
  console.log(data.department);
} else {
  console.log("Invalid employee data");
}

console.log(sendNotification({
    email: "venkata@gmail.com",
    subject: "Welcome to XpressGoShare..!"
  })
);

console.log(sendNotification({
    phone: "7849562103",
    message: "Your booking order is confirmed sir"
  })
);


const emp = new Employee(789, "Venkata", "IT");
const empData = new Employee(475, "Gopinadh", "HR");
console.log(emp.getDetails());
console.log(empData.getDetails());    

const savings = new SavingsAccount("10047859FVB02","Venkata",478529,5);
savings.deposit(1000);
console.log(savings.getBalance());
console.log(savings.getOwnerName());
console.log(savings.calculateInterest());

console.log(processValue("typescript"));
console.log(processValue(125.5));
console.log(processValue(true));


const update: UpdateUserInput = {
    name: "Narendra Modi"
};

const summary: UserSummary = {
    id: 55,
    name: "Ravi Sharma"
};

const newUser: CreateUserInput = {
    name: "Priyaka Chopra",
    email: "priya@example.com",
    role: "ADMIN"
};

console.log("Update:", update);
console.log("Summary:", summary);
console.log("New User:", newUser);
