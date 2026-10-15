import {getEmployeeNames,getEmployeesByDepartment,getAverageSalary,getTopThreeEarners,searchEmployeesByName,findEmployeeById,
        groupByDepartment,getTotalEmployees,getEmployeesAboveSalary,allSalariesArePositive} from "./empAnalytics.js";
import { employees } from "./emp.js";
import { InMemoryRepository } from "./InMemoryRepository.js";
import type { Employee } from "./type.js";

console.log("Employee Names:",getEmployeeNames());

console.log("IT Employees:",getEmployeesByDepartment("IT"));

console.log("Average Salary:",getAverageSalary());

console.log("Top 3 Earners:",getTopThreeEarners());

console.log("Search 'Ravi':",searchEmployeesByName("Ravi"));

console.log("Employee ID 1001:",findEmployeeById(1001));

console.log("Employees by Department:");

groupByDepartment().forEach((departmentEmployees, department) => {
    console.log(`\nDepartment: ${department}`);
    console.log(departmentEmployees);
});

console.log("Total Employees:", getTotalEmployees());
console.log("Employees earning above 70000:", getEmployeesAboveSalary(70000));
console.log("All salaries positive:", allSalariesArePositive());

const repository = new InMemoryRepository<Employee>(employees);

console.log("\n--- Repository Tests ---");

//READ ALL
console.log("Initial count:", repository.count);

//READ BY ID
console.log("Find employee:", repository.getById(1001));

//CREATE
repository.create({
    id: 1051,
    name: "Anand",
    department: "IT",
    salary: 55000
});

console.log("After create:", repository.count);

//UPDATE
const updated = repository.update(1051, {
    salary: 60000
});
console.log("After update:", updated);

//DELETE
const deleted = repository.delete(1051);

console.log("Deleted:", deleted);
console.log("Final count:", repository.count);

//CHECK DUPLICATE ID
try {
    repository.create({
        id: 1025,
        name: "Duplicate",
        department: "HR",
        salary: 40000
    });
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log("Duplicate check:", error.message);
    }
}